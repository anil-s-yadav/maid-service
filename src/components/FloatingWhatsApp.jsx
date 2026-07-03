import { useState } from 'react';
import { X, Calculator } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { Link } from 'react-router-dom';
import { BRAND, getWhatsAppLink } from '../utils/constants';

export const FloatingWhatsApp = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [closed, setClosed] = useState(false);

  if (closed) return null;

  return (
    <div className="fixed bottom-6 md:bottom-16 right-6 z-50 flex flex-col items-end gap-4 hidden md:flex">

      {/* Tooltip Card (shows on hover) */}
      <div
        className={`bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-100 p-4 w-64 transform transition-all duration-300 origin-bottom-right ${showTooltip ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 pointer-events-none translate-y-4'} absolute bottom-[140px] right-0`}
      >
        <button
          onClick={() => setClosed(true)}
          className="absolute top-2 right-2 text-slate-400 hover:text-slate-600 bg-slate-50 hover:bg-slate-100 rounded-full p-1 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 bg-[#25D366]/10 rounded-full flex items-center justify-center shrink-0 border border-[#25D366]/20">
            <img src={BRAND.logo} alt="Logo" className="w-6 h-6 object-contain" />
          </div>
          <div>
            <h4 className="font-bold text-sm text-brand-navy leading-tight">{BRAND.name}</h4>
            <p className="text-xs text-slate-500">Typically replies instantly</p>
          </div>
        </div>
        <p className="text-sm bg-slate-50 p-3 rounded-xl rounded-tl-sm border border-slate-100 text-slate-600 leading-relaxed shadow-sm">
          Hi! Looking for a verified maid? How can we help you today? 👋
        </p>
      </div>

      {/* WhatsApp Button (Top) */}
      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="group relative flex items-center gap-2 bg-[#25D366]/90 hover:bg-[#25D366] backdrop-blur-md text-white rounded-full pr-4 pl-1.5 py-1.5 shadow-lg shadow-[#25D366]/20 transition-all hover:scale-105 active:scale-95 z-10 border border-white/50"
        aria-label="Chat on WhatsApp"
      >
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20 -z-10"></div>
        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center shrink-0 backdrop-blur-sm">
          <WhatsAppIcon className="w-[18px] h-[18px] text-white drop-shadow-sm" fill="currentColor" />
        </div>
        <span className="font-bold text-xs whitespace-nowrap drop-shadow-sm">Chat with us</span>
      </a>

      {/* Salary Calculator Button (Bottom) */}
      <Link
        to="/our-price"
        className="group relative flex items-center gap-2 bg-[#0a1128]/80 hover:bg-[#0a1128] backdrop-blur-md text-white rounded-full pr-4 pl-1.5 py-1.5 shadow-lg shadow-black/20 transition-all hover:scale-105 active:scale-95 z-10 border border-white/20"
        aria-label="Calculate Salary"
      >
        <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center shrink-0 backdrop-blur-sm">
          <Calculator size={16} className="text-white drop-shadow-sm" />
        </div>
        <span className="font-bold text-xs whitespace-nowrap text-brand-gold drop-shadow-sm">Calculate Salary</span>
      </Link>

    </div>
  );
};
