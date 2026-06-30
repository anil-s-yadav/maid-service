import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BRAND, AREAS_SERVED, SERVICES } from '../utils/constants';

export const Footer = () => {
  return (
    <footer className="bg-brand-navy text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Info */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <img src={BRAND.logo} alt={BRAND.name} className="h-10 w-auto filter brightness-0 invert" />
              <span className="text-2xl font-bold font-heading text-white tracking-tight">
                {BRAND.name}
              </span>
            </Link>
            <p className="mb-6 text-sm leading-relaxed">
              Mumbai's most trusted domestic help agency. We provide 100% background-verified house maids, cooks, babysitters, and caregivers for your home.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-teal hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-teal hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-teal hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="hover:text-brand-teal transition-colors">About Us</Link></li>
              <li><Link to="/price" className="hover:text-brand-teal transition-colors">Salary Calculator</Link></li>
              <li><Link to="/why-choose-us" className="hover:text-brand-teal transition-colors">Compare Agencies</Link></li>
              <li><Link to="/blog" className="hover:text-brand-teal transition-colors">Blog & Guides</Link></li>
              <li><Link to="/contact" className="hover:text-brand-teal transition-colors">Contact Us</Link></li>
              <li><Link to="/maid-form" className="text-brand-gold hover:text-yellow-400 transition-colors">Apply for Maid Job</Link></li>
              <li><Link to="/login" className="hover:text-brand-teal transition-colors">Customer Login</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Our Services</h3>
            <ul className="space-y-3">
              {SERVICES.slice(0, 6).map(service => (
                <li key={service.id}>
                  <Link to={`/services/${service.id}`} className="hover:text-brand-teal transition-colors">
                    {service.name} in Mumbai
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Areas */}
          <div>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Contact Us</h3>
            <ul className="space-y-4 mb-8">
              <li className="flex gap-3 items-start">
                <MapPin className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
                <span className="text-sm leading-relaxed">{BRAND.address}</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="w-5 h-5 text-brand-teal shrink-0" />
                <a href={`tel:${BRAND.phoneClean}`} className="hover:text-white transition-colors">{BRAND.phone}</a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="w-5 h-5 text-brand-teal shrink-0" />
                <a href={`mailto:${BRAND.email}`} className="hover:text-white transition-colors break-all">{BRAND.email}</a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Areas Served Tags */}
        <div className="border-t border-slate-800 pt-8 mb-8">
          <h4 className="text-sm text-slate-500 mb-4 font-medium uppercase tracking-wider">Top Areas We Serve in Mumbai</h4>
          <div className="flex flex-wrap gap-2">
            {AREAS_SERVED.slice(0, 15).map(area => (
              <span 
                key={area} 
                onClick={() => window.dispatchEvent(new CustomEvent('openLeadPopup', { detail: { location: area } }))}
                className="text-xs border border-slate-700 bg-slate-800/50 rounded-full px-3 py-1 text-slate-400 hover:text-white hover:border-brand-teal hover:bg-brand-teal/20 cursor-pointer transition-all"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {BRAND.foundedYear} {BRAND.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};


