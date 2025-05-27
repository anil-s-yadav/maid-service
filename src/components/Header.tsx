
import { Button } from "@/components/ui/button";
import { Phone, Mail, Menu } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActiveRoute = (path: string) => {
    return location.pathname === path;
  };

  const getLinkClass = (path: string) => {
    return `transition-colors ${
      isActiveRoute(path) 
        ? "text-purple-600 font-semibold border-b-2 border-purple-600 pb-1" 
        : "text-gray-700 hover:text-purple-600"
    }`;
  };

  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-40">
      {/* Top contact bar */}
      <div className="bg-purple-600 text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>Call: (+91) 9819122200 | 8652236055</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>Mail us: sales@bookyourmaid.in</span>
            </div>
          </div>
          <div className="flex space-x-2">
            <Link to="/maid-form">
              <Button size="sm" className="bg-red-600 hover:bg-red-700">
                मुझे नौकरी चाहिए
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold">
              <span className="text-purple-600">BOOK YOUR</span>
              <span className="text-blue-500"> MAID</span>
              <span className="text-orange-500">.IN</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={getLinkClass("/")}>Home</Link>
            <Link to="/services" className={getLinkClass("/services")}>Services</Link>
            <Link to="/about" className={getLinkClass("/about")}>About Us</Link>
            <Link to="/price" className={getLinkClass("/price")}>Our Price</Link>
            <Link to="/why-choose-us" className={getLinkClass("/why-choose-us")}>Why Choose Us</Link>
            <Link to="/contact" className={getLinkClass("/contact")}>Contact</Link>
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
          <div className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-2">
              <Link to="/" className={`py-2 ${getLinkClass("/")}`}>Home</Link>
              <Link to="/services" className={`py-2 ${getLinkClass("/services")}`}>Services</Link>
              <Link to="/about" className={`py-2 ${getLinkClass("/about")}`}>About Us</Link>
              <Link to="/price" className={`py-2 ${getLinkClass("/price")}`}>Our Price</Link>
              <Link to="/why-choose-us" className={`py-2 ${getLinkClass("/why-choose-us")}`}>Why Choose Us</Link>
              <Link to="/contact" className={`py-2 ${getLinkClass("/contact")}`}>Contact</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
