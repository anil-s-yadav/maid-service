// ============================================
// Partial Lead Capture — Captures leads when user leaves the page
// If user has entered at least their phone number, sends a partial lead notification
// ============================================

import { submitLead } from './leadCapture';
import { LEAD_CONFIG } from './constants';

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

    // Mark as submitted to prevent duplicate partial leads on tab switch
    isFormDirty = false;
    hasSubmitted = true;

    const leadPayload = {
      ...formData,
      type: 'partial',
      timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      source: formData.source || window.location.pathname,
    };

    // Try full submitLead (handles all channels)
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
