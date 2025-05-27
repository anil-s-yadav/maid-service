
import { Button } from "@/components/ui/button";
import { Phone, Mail, Menu } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
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
            <Button size="sm" className="bg-red-600 hover:bg-red-700">
              मुझे नौकरी चाहिए
            </Button>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold">
              <span className="text-purple-600">BOOK YOUR</span>
              <span className="text-blue-500"> MAID</span>
              <span className="text-orange-500">.IN</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Home</a>
            <a href="#services" className="text-gray-700 hover:text-purple-600 transition-colors">Services</a>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">About Us</a>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Our Price</a>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Why Choose Us</a>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Contact</a>
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
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors py-2">Home</a>
              <a href="#services" className="text-gray-700 hover:text-purple-600 transition-colors py-2">Services</a>
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors py-2">About Us</a>
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors py-2">Our Price</a>
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors py-2">Why Choose Us</a>
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors py-2">Contact</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
