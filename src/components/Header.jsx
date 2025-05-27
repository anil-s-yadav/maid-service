import { Button } from "@/components/ui/button";
import { Phone, Mail, Menu, User } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActiveRoute = (path) => location.pathname === path;

  const getLinkClass = (path) => {
    return `transition-colors ${
      isActiveRoute(path) 
        ? "text-purple-600 font-semibold" 
        : "text-gray-700 hover:text-purple-600"
    }`;
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white shadow-sm"
    }`}>
      {/* Top contact bar */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>Call: (+91) 9819122200 | 8652236055</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>Mail us: sales@bookyourmaid.in</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/maid-form" className="flex items-center space-x-1 hover:text-purple-200 transition-colors">
                <User className="h-4 w-4" />
                <span>Post Requirement</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              BOOK YOUR MAID.IN
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`${getLinkClass("/")} font-medium`}>Home</Link>
            <Link to="/services" className={`${getLinkClass("/services")} font-medium`}>Services</Link>
            <Link to="/about" className={`${getLinkClass("/about")} font-medium`}>About Us</Link>
            <Link to="/price" className={`${getLinkClass("/price")} font-medium`}>Our Price</Link>
            <Link to="/why-choose-us" className={`${getLinkClass("/why-choose-us")} font-medium`}>Why Choose Us</Link>
            <Link to="/contact" className={`${getLinkClass("/contact")} font-medium`}>Contact</Link>
            <Link to="/maid-form">
              <Button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-medium px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                मुझे नौकरी चाहिए
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t pt-4 bg-white rounded-lg shadow-lg">
            <div className="flex flex-col space-y-2 px-4">
              <Link to="/" className={`py-2 ${getLinkClass("/")} font-medium`}>Home</Link>
              <Link to="/services" className={`py-2 ${getLinkClass("/services")} font-medium`}>Services</Link>
              <Link to="/about" className={`py-2 ${getLinkClass("/about")} font-medium`}>About Us</Link>
              <Link to="/price" className={`py-2 ${getLinkClass("/price")} font-medium`}>Our Price</Link>
              <Link to="/why-choose-us" className={`py-2 ${getLinkClass("/why-choose-us")} font-medium`}>Why Choose Us</Link>
              <Link to="/contact" className={`py-2 ${getLinkClass("/contact")} font-medium`}>Contact</Link>
              <Link to="/maid-form" className="py-2">
                <Button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-medium w-full py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                  मुझे नौकरी चाहिए
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
