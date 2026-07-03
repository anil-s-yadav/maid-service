import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Cookie, X } from 'lucide-react';

export const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasAccepted = localStorage.getItem('cookieConsent');
    if (!hasAccepted) {
      // Small delay so it doesn't pop up immediately on first render
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  const handleDecline = () => {
    // We'll store a 'false' state so it doesn't keep asking them if they explicitly declined
    localStorage.setItem('cookieConsent', 'false');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-24 md:bottom-6 left-4 md:left-6 z-[100] animate-in slide-in-from-bottom-10 duration-500 w-[calc(100vw-32px)] md:w-80 pointer-events-auto">
      <div className="bg-white dark:bg-[#1e293b] rounded-2xl shadow-2xl border border-slate-200 dark:border-white/10 p-4 relative overflow-hidden transition-colors">
        
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-white rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          aria-label="Close"
        >
          <X className="w-3.5 h-3.5" />
        </button>

        <div className="flex items-start gap-3">
          <Cookie className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
          <div className="pr-4">
            <h4 className="font-bold text-sm text-brand-navy dark:text-white mb-1 transition-colors">
              Cookie Consent
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-300 transition-colors leading-relaxed mb-3">
              We use cookies to improve your experience. <Link to="/privacy-policy" className="text-brand-gold hover:underline">Learn more</Link>.
            </p>
            <div className="flex items-center gap-2">
              <button 
                onClick={handleAccept} 
                className="flex-1 py-1.5 px-3 rounded-lg bg-brand-gold hover:bg-amber-500 text-white font-semibold text-xs shadow-sm transition-all"
              >
                Accept All
              </button>
              <button 
                onClick={handleDecline} 
                className="flex-1 py-1.5 px-3 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-xs"
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
