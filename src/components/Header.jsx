import { useState, useEffect } from 'react';
import { Menu, X, Phone, UserCircle } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { BRAND } from '../utils/constants';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/price' },
    { name: 'Compare', path: '/why-choose-us' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const darkPages = ['/', '/about', '/services'];
  const isDarkHero = darkPages.includes(location.pathname);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0a1128]/95 backdrop-blur-xl shadow-[0_10px_40px_rgba(217,119,6,0.15)] py-2 border-b border-brand-gold/30' : isDarkHero ? 'bg-transparent py-4' : 'bg-[#0a1128] py-4'}`}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <Link to="/" className="flex items-center gap-4 z-50">
              <div className="overflow-hidden flex items-center justify-center rounded-xl bg-white/5 p-1 backdrop-blur-sm">
                <img src={BRAND.logo} alt={BRAND.name} className="h-12 md:h-14 w-auto object-contain scale-[1.3] drop-shadow-md" />
              </div>
              <span className="text-xl md:text-2xl font-bold font-heading text-white tracking-tight hidden sm:block">
                {BRAND.name}
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-7">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-brand-gold ${
                    location.pathname === link.path ? 'text-brand-gold drop-shadow-[0_0_8px_rgba(217,119,6,0.5)]' : 'text-slate-300'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden md:flex items-center gap-5">
              <a href={`tel:${BRAND.phoneClean}`} className="flex items-center gap-2 text-white hover:text-brand-gold transition-colors text-sm font-medium">
                <Phone className="w-4 h-4" />
                <span>{BRAND.phone}</span>
              </a>
              <div className="h-6 w-px bg-white/20"></div>
              <Link to="/login" className="flex items-center gap-1.5 text-sm font-medium text-slate-300 hover:text-white transition-colors">
                <UserCircle className="w-5 h-5" />
                <span>Login</span>
              </Link>
              <Link to="/maid-form" className="bg-gradient-to-r from-brand-gold to-amber-400 hover:from-amber-400 hover:to-amber-500 text-[#0a1128] px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-[0_0_15px_rgba(217,119,6,0.3)] hover:-translate-y-0.5">
                Apply as Maid
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden z-50 p-2 text-white hover:text-brand-gold transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div className={`fixed inset-0 bg-[#0a1128] z-40 transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden pt-28 px-6 flex flex-col`}>
        <nav className="flex flex-col gap-6 text-lg font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`border-b border-white/10 pb-4 ${location.pathname === link.path ? 'text-brand-gold drop-shadow-[0_0_8px_rgba(217,119,6,0.5)]' : 'text-slate-300'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/login"
            className="border-b border-white/10 pb-4 text-slate-300 flex items-center gap-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <UserCircle className="w-5 h-5" /> Login to Portal
          </Link>
          <Link
            to="/maid-form"
            className="bg-gradient-to-r from-brand-gold to-amber-400 text-[#0a1128] font-bold text-center py-4 rounded-xl mt-4 shadow-[0_0_20px_rgba(217,119,6,0.2)]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Apply as Maid / नौकरी के लिए आवेदन करें
          </Link>
          
          <div className="mt-8 text-center bg-white/5 p-6 rounded-2xl border border-white/10">
            <p className="text-sm text-slate-400 mb-2">Need Help?</p>
            <a href={`tel:${BRAND.phoneClean}`} className="flex items-center justify-center gap-2 text-xl font-bold text-brand-gold">
              <Phone className="w-5 h-5" />
              {BRAND.phone}
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};
