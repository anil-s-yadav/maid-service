import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BRAND, AREAS_SERVED, SERVICES } from '../utils/constants';

export const Footer = () => {
  return (
    <footer className="bg-[#0a1128] text-slate-400 pt-10 pb-6 border-t border-white/5 relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">

          {/* Brand Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="overflow-hidden flex items-center justify-center rounded-xl bg-white/5 p-0.5 backdrop-blur-sm">
                <img src={BRAND.logo} alt={BRAND.name} className="h-10 md:h-12 w-auto object-contain scale-[1.3] drop-shadow-md" />
              </div>
              <span className="text-xl font-bold font-heading text-white tracking-tight">
                {BRAND.name}
              </span>
            </Link>
            <p className="mb-5 text-[13px] leading-relaxed">
              Mumbai's most trusted domestic help agency. We provide 100% background-verified house maids, cooks, babysitters, and caregivers for your home.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-gold hover:text-white transition-colors border border-white/10">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-gold hover:text-white transition-colors border border-white/10">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-gold hover:text-white transition-colors border border-white/10">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-xs">Quick Links</h3>
            <ul className="space-y-2 text-[13px]">
              <li><Link to="/about" className="hover:text-brand-gold transition-colors">About Us</Link></li>
              <li><Link to="/price" className="hover:text-brand-gold transition-colors">Salary Calculator</Link></li>
              <li><Link to="/why-choose-us" className="hover:text-brand-gold transition-colors">Compare Agencies</Link></li>
              <li><Link to="/blog" className="hover:text-brand-gold transition-colors">Blog & Guides</Link></li>
              <li><Link to="/contact" className="hover:text-brand-gold transition-colors">Contact Us</Link></li>
              <li><Link to="/maid-form" className="text-brand-gold font-medium hover:text-amber-400 transition-colors">Apply for Maid Job</Link></li>
              <li><Link to="/login" className="hover:text-brand-gold transition-colors">Customer Login</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-xs">Our Services</h3>
            <ul className="space-y-2 text-[13px]">
              {SERVICES.slice(0, 6).map(service => (
                <li key={service.id}>
                  <Link to={`/services/${service.id}`} className="hover:text-brand-gold transition-colors">
                    {service.name} in Mumbai
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Areas */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-xs">Contact Us</h3>
            <ul className="space-y-2.5 mb-6 text-[13px]">
              <li className="flex gap-2.5 items-start">
                <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <span className="leading-relaxed">{BRAND.address}</span>
              </li>
              <li className="flex gap-2.5 items-center">
                <Phone className="w-4 h-4 text-brand-gold shrink-0" />
                <a href={`tel:${BRAND.phoneClean}`} className="hover:text-white transition-colors">{BRAND.phone}</a>
              </li>
              <li className="flex gap-2.5 items-center">
                <Mail className="w-4 h-4 text-brand-gold shrink-0" />
                <a href={`mailto:${BRAND.email}`} className="hover:text-white transition-colors break-all">{BRAND.email}</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Areas Served Tags */}
        <div className="border-t border-white/5 pt-5 mb-5">
          <h4 className="text-[11px] text-slate-500 mb-3 font-semibold uppercase tracking-wider">Top Areas We Serve in Mumbai</h4>
          <div className="flex flex-wrap gap-2">
            {AREAS_SERVED.slice(0, 15).map(area => (
              <span
                key={area}
                onClick={() => window.dispatchEvent(new CustomEvent('openLeadPopup', { detail: { location: area } }))}
                className="text-[11px] border border-white/10 bg-white/5 rounded-full px-2.5 py-1 text-slate-400 hover:text-[#0a1128] hover:border-brand-gold hover:bg-brand-gold cursor-pointer transition-all"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/5 pt-5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {BRAND.foundedYear} {BRAND.name}. All rights reserved.</p>
          <div className="flex gap-5">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};


