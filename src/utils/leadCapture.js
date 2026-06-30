// ============================================
// Lead Capture — Multi-channel notification
// Sends leads to: EmailJS (email) + Discord (webhook) + Google Sheets
// ============================================

import emailjs from '@emailjs/browser';
import { LEAD_CONFIG, BRAND } from './constants';

/**
 * Send lead to all configured channels
 * @param {Object} leadData - { name, phone, email, service, location, message, type }
 * @param {string} leadData.type - 'full' | 'partial' (partial = user left without submitting)
 * @returns {Promise<{success: boolean, errors: string[]}>}
 */
export async function submitLead(leadData) {
  const errors = [];
  const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
  const enrichedData = { ...leadData, timestamp, source: window.location.pathname };

  // Channel 1: EmailJS — Send email notification to owner
  try {
    await sendEmailNotification(enrichedData);
  } catch (err) {
    console.error('EmailJS Error:', err);
    errors.push('Email notification failed');
  }

  // Channel 2: Discord Webhook — Instant notification
  try {
    await sendDiscordNotification(enrichedData);
  } catch (err) {
    console.error('Discord Error:', err);
    errors.push('Discord notification failed');
  }

  // Channel 3: Google Sheets — Store lead data
  try {
    await saveToGoogleSheets(enrichedData);
  } catch (err) {
    console.error('Google Sheets Error:', err);
    errors.push('Google Sheets save failed');
  }

  return {
    success: errors.length < 3, // At least one channel worked
    errors,
  };
}

/**
 * Send email notification via EmailJS
 */
async function sendEmailNotification(data) {
  const { serviceId, templateId, publicKey } = LEAD_CONFIG.emailjs;

  // Skip if not configured
  if (serviceId.startsWith('YOUR_')) {
    console.warn('EmailJS not configured — skipping email notification');
    return;
  }

  const templateParams = {
    to_email: BRAND.email,
    from_name: data.name || 'Unknown',
    phone: data.phone || 'Not provided',
    email: data.email || 'Not provided',
    service: data.service || 'Not specified',
    location: data.location || 'Not specified',
    message: data.message || '',
    lead_type: data.type === 'partial' ? '⚠️ PARTIAL LEAD (User left the page)' : '✅ Full Lead Submission',
    timestamp: data.timestamp,
    source_page: data.source,
  };

  await emailjs.send(serviceId, templateId, templateParams, publicKey);
}

/**
 * Send instant notification to Discord channel
 */
async function sendDiscordNotification(data) {
  const webhookUrl = LEAD_CONFIG.discordWebhookUrl;

  // Skip if not configured
  if (webhookUrl.startsWith('YOUR_')) {
    console.warn('Discord webhook not configured — skipping Discord notification');
    return;
  }

  const isPartial = data.type === 'partial';
  const color = isPartial ? 16776960 : 65280; // Yellow for partial, Green for full

  const embed = {
    title: isPartial ? '⚠️ Partial Lead — User Left Page' : '🎉 New Lead from Verified Maids!',
    color,
    fields: [
      { name: '👤 Name', value: data.name || 'Unknown', inline: true },
      { name: '📱 Phone', value: data.phone || 'Not provided', inline: true },
      { name: '📧 Email', value: data.email || 'Not provided', inline: true },
      { name: '🏠 Service', value: data.service || 'Not specified', inline: true },
      { name: '📍 Location', value: data.location || 'Not specified', inline: true },
      { name: '📄 Source Page', value: data.source || '/', inline: true },
    ],
    footer: { text: `Verified Maids Lead • ${data.timestamp}` },
  };

  if (data.message) {
    embed.fields.push({ name: '💬 Message', value: data.message, inline: false });
  }

  await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ embeds: [embed] }),
  });
}

/**
 * Save lead data to Google Sheets via Apps Script
 */
async function saveToGoogleSheets(data) {
  const sheetsUrl = LEAD_CONFIG.googleSheetsUrl;

  // Skip if not configured
  if (sheetsUrl.startsWith('YOUR_')) {
    console.warn('Google Sheets not configured — skipping sheet save');
    return;
  }

  await fetch(sheetsUrl, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: data.name || '',
      phone: data.phone || '',
      email: data.email || '',
      service: data.service || '',
      location: data.location || '',
      message: data.message || '',
      type: data.type || 'full',
      source: data.source || '/',
      timestamp: data.timestamp,
    }),
  });
}

/**
 * Generate WhatsApp follow-up link with pre-filled lead details
 */
export function getWhatsAppLink(data = {}) {
  const message = data.name
    ? `Hi, I am ${data.name}. I am interested in ${data.service || 'maid'} services from Verified Maids. Please share details.`
    : BRAND.whatsappMessage;

  return `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(message)}`;
}
