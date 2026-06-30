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
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-2' : 'bg-white py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 z-50">
            <img src={BRAND.logo} alt={BRAND.name} className="h-10 w-auto" />
            <span className="text-xl md:text-2xl font-bold font-heading text-brand-navy tracking-tight hidden sm:block">
              {BRAND.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-brand-teal ${
                  location.pathname === link.path ? 'text-brand-teal' : 'text-slate-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <a href={`tel:${BRAND.phoneClean}`} className="flex items-center gap-2 text-brand-navy hover:text-brand-teal transition-colors text-sm font-medium">
              <Phone className="w-4 h-4" />
              <span>{BRAND.phone}</span>
            </a>
            <div className="h-6 w-px bg-slate-200"></div>
            <Link to="/login" className="flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-brand-teal transition-colors">
              <UserCircle className="w-5 h-5" />
              <span>Login</span>
            </Link>
            <Link to="/maid-form" className="bg-brand-gold hover:bg-yellow-600 text-white px-5 py-2 rounded-full text-sm font-semibold transition-colors shadow-sm">
              Apply as Maid
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden z-50 p-2 text-brand-navy"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden pt-24 px-6 flex flex-col`}>
        <nav className="flex flex-col gap-6 text-lg font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`border-b border-slate-100 pb-4 ${location.pathname === link.path ? 'text-brand-teal' : 'text-brand-navy'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/login"
            className="border-b border-slate-100 pb-4 text-brand-navy flex items-center gap-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <UserCircle className="w-5 h-5" /> Login to Portal
          </Link>
          <Link
            to="/maid-form"
            className="bg-brand-navy text-white text-center py-4 rounded-xl mt-4"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Apply as Maid / नौकरी के लिए आवेदन करें
          </Link>
          
          <div className="mt-8 text-center">
            <p className="text-sm text-slate-500 mb-2">Need Help?</p>
            <a href={`tel:${BRAND.phoneClean}`} className="flex items-center justify-center gap-2 text-xl font-bold text-brand-teal">
              <Phone className="w-5 h-5" />
              {BRAND.phone}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};


