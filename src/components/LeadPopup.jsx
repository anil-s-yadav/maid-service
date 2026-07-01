import { useState, useEffect } from 'react';
import { X, Sparkles, CheckCircle2 } from 'lucide-react';
import { submitLead } from '../utils/leadCapture';
import { initPartialLeadCapture, updatePartialLeadData, markFormSubmitted } from '../utils/partialLead';
import { SERVICES, AREAS_SERVED } from '../utils/constants';

export const LeadPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', location: '', service: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    initPartialLeadCapture();
    // Show popup after 15 seconds of scrolling, but only once per session
    const timer = setTimeout(() => {
      if (!hasShown && !sessionStorage.getItem('popupShown')) {
        setIsOpen(true);
        setHasShown(true);
        sessionStorage.setItem('popupShown', 'true');
      }
    }, 15000);

    const handleOpenPopup = (e) => {
      setIsOpen(true);
      if (e.detail?.location) {
        setFormData(prev => ({ ...prev, location: e.detail.location }));
      }
    };

    window.addEventListener('openLeadPopup', handleOpenPopup);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('openLeadPopup', handleOpenPopup);
    };
  }, [hasShown]);

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    updatePartialLeadData({ [field]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.phone.length < 10 || isSubmitting) return;

    setIsSubmitting(true);
    await submitLead({
      name: formData.name,
      phone: formData.phone,
      service: formData.service || 'Not specified',
      location: formData.location,
      type: 'full',
      source: 'Popup Lead'
    });

    markFormSubmitted();
    setSubmitted(true);
    setIsSubmitting(false);
    setTimeout(() => setIsOpen(false), 3000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-brand-navy/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative w-full max-w-md dark:bg-[#1e293b] bg-white rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-500 transition-colors">

        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full dark:bg-[#1e293b] dark:hover:bg-slate-700 dark:text-slate-400 bg-slate-100 hover:bg-slate-200 text-slate-500 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header Graphic */}
        <div className="bg-brand-navy p-6 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/20 rounded-full blur-2xl"></div>

          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-gold/20 text-brand-gold mb-3">
            <Sparkles className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold font-heading text-white mb-1">Need a Service Urgently?</h3>
          <p className="text-slate-300 text-xs">Get verified profiles sent to your WhatsApp in 30 minutes.</p>
        </div>

        {/* Form Area */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-4">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold dark:text-white text-brand-navy mb-2 transition-colors">Request Received!</h4>
              <p className="dark:text-slate-300 text-slate-600 text-sm transition-colors">Our team will contact you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={e => handleChange('name', e.target.value)}
                  className="w-full dark:bg-white/5 dark:border-white/10 dark:text-white bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                />
              </div>
              <div>
                <input
                  type="tel"
                  required
                  minLength="10"
                  maxLength="10"
                  placeholder="Mobile Number"
                  value={formData.phone}
                  onChange={e => handleChange('phone', e.target.value.replace(/\D/g, ''))}
                  className="w-full dark:bg-white/5 dark:border-white/10 dark:text-white bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <select
                  required
                  value={formData.location}
                  onChange={e => handleChange('location', e.target.value)}
                  className="w-full dark:bg-[#1e293b] dark:border-white/10 dark:text-white bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold appearance-none text-slate-700 transition-colors"
                >
                  <option value="" disabled>Location (Mumbai)</option>
                  {AREAS_SERVED.map(area => (
                    <option key={area} value={area}>{area}</option>
                  ))}
                  <option value="Other">Other Mumbai Area</option>
                </select>

                <select
                  required
                  value={formData.service}
                  onChange={e => handleChange('service', e.target.value)}
                  className="w-full dark:bg-[#1e293b] dark:border-white/10 dark:text-white bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold appearance-none text-slate-700 transition-colors"
                >
                  <option value="" disabled>Select Service</option>
                  {SERVICES.map(s => (
                    <option key={s.id} value={s.id}>{s.name}</option>
                  ))}
                </select>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand-gold hover:bg-amber-500 text-white font-bold py-3 mt-2 rounded-xl shadow-[0_0_15px_rgba(13,148,136,0.3)] transition-all active:scale-[0.98] disabled:opacity-70"
              >
                {isSubmitting ? 'Sending...' : 'Send Me Profiles'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
