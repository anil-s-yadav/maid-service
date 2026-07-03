import { useState, useEffect } from 'react';
import { Menu, X, Phone, UserCircle, Sun, Moon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { BRAND } from '../utils/constants';
import { useTheme } from '../contexts/ThemeProvider';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

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

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'dark:bg-[#0a1128]/95 bg-white/95 backdrop-blur-xl dark:shadow-[0_10px_40px_rgba(217,119,6,0.15)] shadow-[0_5px_20px_rgba(0,0,0,0.05)] py-2 border-b dark:border-brand-gold/30 border-slate-200' : 'dark:bg-[#0a1128] bg-white py-4'}`}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 md:gap-4 z-50">
              <div className="overflow-hidden flex items-center justify-center rounded-xl dark:bg-white/5 bg-brand-navy/5 p-1 backdrop-blur-sm">
                <img src={BRAND.logo} alt={BRAND.name} className="h-10 md:h-14 w-auto object-contain scale-[1.3] drop-shadow-md" />
              </div>
              <span className="text-lg md:text-2xl font-bold font-heading dark:text-white text-brand-navy tracking-tight block">
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
                    location.pathname === link.path ? 'text-brand-gold drop-shadow-[0_0_8px_rgba(217,119,6,0.5)]' : 'dark:text-slate-300 text-slate-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden md:flex items-center gap-5 z-50">
              {/* Theme Toggle Desktop */}
              <button onClick={toggleTheme} className="dark:text-white text-slate-600 hover:text-brand-gold transition-colors p-2 rounded-full dark:hover:bg-white/10 hover:bg-slate-100" aria-label="Toggle Theme">
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              
              <a href={`tel:${BRAND.phoneClean}`} className="flex items-center gap-2 dark:text-white text-brand-navy hover:text-brand-gold transition-colors text-sm font-medium">
                <Phone className="w-4 h-4" />
                <span>{BRAND.phone}</span>
              </a>
              <div className="h-6 w-px dark:bg-white/20 bg-slate-200"></div>
              <Link to="/login" className="flex items-center gap-1.5 text-sm font-medium dark:text-slate-300 text-slate-600 dark:hover:text-white hover:text-brand-navy transition-colors">
                <UserCircle className="w-5 h-5" />
                <span>Login</span>
              </Link>
              <Link to="/maid-form" className="bg-gradient-to-r from-brand-gold to-amber-400 hover:from-amber-400 hover:to-amber-500 text-[#0a1128] px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-[0_0_15px_rgba(217,119,6,0.3)] hover:-translate-y-0.5">
                Apply as Maid
              </Link>
            </div>

            {/* Mobile Controls */}
            <div className="md:hidden flex items-center gap-1 sm:gap-3 z-50">
              {/* Theme Toggle Mobile */}
              <button onClick={toggleTheme} className="dark:text-white text-brand-navy hover:text-brand-gold transition-colors p-1.5 sm:p-2" aria-label="Toggle Theme">
                {theme === 'dark' ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
              </button>
              
              {/* Mobile Menu Toggle */}
              <button 
                className="p-1.5 sm:p-2 dark:text-white text-brand-navy hover:text-brand-gold transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div className={`fixed inset-0 dark:bg-[#0a1128] bg-white z-40 transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden pt-28 px-6 pb-32 overflow-y-auto flex flex-col`}>
        <nav className="flex flex-col gap-6 text-lg font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`border-b dark:border-white/10 border-slate-200 pb-4 ${location.pathname === link.path ? 'text-brand-gold drop-shadow-[0_0_8px_rgba(217,119,6,0.5)]' : 'dark:text-slate-300 text-slate-700'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/login"
            className="border-b dark:border-white/10 border-slate-200 pb-4 dark:text-slate-300 text-slate-700 flex items-center gap-2"
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
          
          <div className="mt-8 text-center dark:bg-white/5 bg-slate-50 p-6 rounded-2xl border dark:border-white/10 border-slate-200">
            <p className="text-sm dark:text-slate-400 text-slate-500 mb-2">Need Help?</p>
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
