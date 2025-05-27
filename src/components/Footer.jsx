import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const quickLinks = [
  { name: "About Us", path: "/about" }, 
  { name: "Privacy Policy", path: "/privacy" }, 
  { name: "Terms & Conditions", path: "/terms" }, 
  { name: "Contact Us", path: "/contact" }, 
  { name: "Our Services", path: "/services" }
];

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-4 md:py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Logo and description */}
          <div className="md:col-span-1 space-y-4">
            <div className="text-3xl font-bold">
              <span className="text-white">VIOLET</span>
              <span className="text-teal-400"> WEB</span>
              <span className="text-purple-400"> HAVEN</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Connecting you with verified, skilled, and reliable domestic professionals for a spotless home and peace of mind.
            </p>
            <Link to="/maid-form">
              <Button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-3 rounded-md transition-colors duration-300 shadow-md">
                Post Your Requirement
              </Button>
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="text-gray-400 hover:text-white transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold mb-6 text-white">Get in Touch</h3>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-teal-400 flex-shrink-0 mt-1" />
                <p>1904, Haware Infotech Park, Opp. Four Points Hotel, Sector-30A, Vashi, Navi Mumbai - 400705</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-teal-400 flex-shrink-0" />
                <p>Call: (+91) 9819122200 | 8652236055</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-teal-400 flex-shrink-0" />
                <p>Email: sales@bookyourmaid.in</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-500">
          <p>
            © {new Date().getFullYear()} Violet Web Haven. All rights reserved. | Designed with a premium touch
          </p>
        </div>
      </div>
    </footer>
  );
};
