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
  const enrichedData = { ...leadData, timestamp, source: leadData.source || window.location.pathname };

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
    from_name: data.name || 'NA',
    phone: data.phone || 'NA',
    email: data.email || 'NA',
    service: data.service || 'NA',
    location: data.location || 'NA',
    message: data.message || '',
    lead_type: data.type === 'partial' ? 'PARTIAL LEAD' : 'Full Lead',
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

  const isPartial = data.type === 'partial';
  const color = isPartial ? 16753920 : 10494192; // Orange for partial, Purple for full

  // Discord does not support tel: links in embeds (it returns 400 Bad Request). 
  // We use a regular bold string for the phone, and add a clickable WhatsApp link, 
  // as well as a Direct Call link that routes through our website to bypass Discord's restriction.
  const phoneRaw = data.phone ? data.phone.replace(/\D/g, '') : '';
  const formattedPhone = phoneRaw.length === 10 ? `+91 ${phoneRaw.slice(0, 5)} ${phoneRaw.slice(5)}` : data.phone;

  const callUrl = typeof window !== 'undefined' ? `${window.location.origin}/call/${phoneRaw}` : `https://verifiedmaid.in/call/${phoneRaw}`;
  
  const phoneStr = phoneRaw ? `[**${formattedPhone}**](${callUrl})  ·  [💬 WhatsApp](https://wa.me/91${phoneRaw})` : '**NA**';

  const emailStr = data.email ? `**${data.email}**` : '**NA**';
  const serviceStr = data.service ? `**${data.service}**` : '**NA**';
  const locationStr = data.location ? `**${data.location}**` : '**NA**';

  const embed = {
    title: isPartial ? `⚠️ Partial Lead — Source: ${data.source || '/'}` : `🎉 New Lead - Source: ${data.source || 'NA'}`,
    color,
    description: `👤 Name: **${data.name || 'NA'}**\n📱 Phone: ${phoneStr}\n📧 Email: ${emailStr}\n🏠 Service: ${serviceStr}\n📍 Location: ${locationStr}`,
    footer: { text: `Verified Maids Lead • ${data.timestamp}` },
  };

  if (data.message) {
    embed.description += `\n💬 Message: **${data.message}**`;
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
