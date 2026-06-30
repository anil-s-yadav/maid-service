// ============================================
// Partial Lead Capture — Captures leads when user leaves the page
// If user has entered at least their phone number, sends a partial lead notification
// ============================================

import { submitLead } from './leadCapture';

let formData = {};
let isFormDirty = false;
let hasSubmitted = false;
let listenerAttached = false;

/**
 * Update the tracked form data (call this on every input change)
 * @param {Object} data - Current form data { name, phone, email, service, location }
 */
export function updatePartialLeadData(data) {
  formData = { ...formData, ...data };
  if (data.phone && data.phone.length >= 10) {
    isFormDirty = true;
  }
}

/**
 * Mark form as successfully submitted (prevents partial lead on navigation)
 */
export function markFormSubmitted() {
  hasSubmitted = true;
  isFormDirty = false;
}

/**
 * Reset the partial lead tracker
 */
export function resetPartialLead() {
  formData = {};
  isFormDirty = false;
  hasSubmitted = false;
}

/**
 * Initialize the partial lead capture listener
 * Attaches to beforeunload and visibilitychange events
 * Call once on page/component mount
 */
export function initPartialLeadCapture() {
  if (listenerAttached) return;

  // Use sendBeacon for reliability when page is closing
  const handlePageLeave = () => {
    if (!isFormDirty || hasSubmitted) return;
    if (!formData.phone || formData.phone.length < 10) return;

    // Use navigator.sendBeacon for reliable delivery during page unload
    const leadPayload = {
      ...formData,
      type: 'partial',
      timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      source: window.location.pathname,
    };

    // Try sendBeacon to Discord (most reliable for unload)
    try {
      const discordUrl = import.meta.env.VITE_DISCORD_WEBHOOK_URL || '';
      if (discordUrl && !discordUrl.startsWith('YOUR_')) {
        const embed = {
          title: '⚠️ Partial Lead — User Left Without Submitting',
          color: 16776960,
          fields: [
            { name: '👤 Name', value: leadPayload.name || 'Unknown', inline: true },
            { name: '📱 Phone', value: leadPayload.phone, inline: true },
            { name: '📧 Email', value: leadPayload.email || 'Not provided', inline: true },
            { name: '📄 Source', value: leadPayload.source, inline: true },
          ],
          footer: { text: `Partial Lead • ${leadPayload.timestamp}` },
        };
        navigator.sendBeacon(
          discordUrl,
          new Blob([JSON.stringify({ embeds: [embed] })], { type: 'application/json' })
        );
      }
    } catch (e) {
      // Silent fail — page is closing
    }

    // Also try Google Sheets via sendBeacon
    try {
      const sheetsUrl = import.meta.env.VITE_GOOGLE_SHEETS_URL || '';
      if (sheetsUrl && !sheetsUrl.startsWith('YOUR_')) {
        navigator.sendBeacon(
          sheetsUrl,
          new Blob([JSON.stringify(leadPayload)], { type: 'application/json' })
        );
      }
    } catch (e) {
      // Silent fail
    }

    // Also try full submitLead (may not complete during unload)
    submitLead(leadPayload).catch(() => {});
  };

  // Listen for page unload
  window.addEventListener('beforeunload', handlePageLeave);

  // Also capture tab switches / minimize (mobile users)
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
      handlePageLeave();
    }
  });

  listenerAttached = true;
}
