import { useState, useEffect } from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { BRAND, getWhatsAppLink } from '../utils/constants';

export const MobileCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA only after scrolling down 300px (past hero)
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-slate-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] p-3 flex gap-3 animate-in slide-in-from-bottom-full duration-300">
      <a
        href={`tel:${BRAND.phoneClean}`}
        className="flex-1 flex items-center justify-center gap-2 bg-brand-navy text-white rounded-xl py-3 font-semibold text-sm shadow-sm"
      >
        <Phone className="w-4 h-4" />
        Call Now
      </a>
      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white rounded-xl py-3 font-semibold text-sm shadow-sm"
      >
        <MessageCircle className="w-4 h-4" />
        WhatsApp
      </a>
    </div>
  );
};


