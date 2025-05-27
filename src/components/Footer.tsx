
import { Button } from "@/components/ui/button";

const quickLinks = [
  "About Us", "Privacy Policy", "Terms & Conditions", "Contact Us", "Our Services"
];

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-800 via-blue-800 to-purple-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="md:col-span-1">
            <div className="text-2xl font-bold mb-4">
              <span className="text-white">BOOK YOUR</span><br />
              <span className="text-blue-300">MAID</span>
              <span className="text-orange-400">.COM</span>
            </div>
            <p className="text-purple-200 mb-6">
              Professional household services with verified and trusted staff members.
            </p>
            <Button className="bg-red-600 hover:bg-red-700">
              Post Your Requirement
            </Button>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-yellow-300">QUICK LINKS</h3>
            <ul className="space-y-3">
              {quickLinks.slice(0, 3).map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-purple-200 hover:text-white transition-colors">
                    • {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* More Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-yellow-300">QUICK LINKS</h3>
            <ul className="space-y-3">
              {quickLinks.slice(3).map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-purple-200 hover:text-white transition-colors">
                    • {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Official Address */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-yellow-300">Official Address</h3>
            <div className="text-purple-200 space-y-2">
              <p>1904, Haware Infotech Park, Opp. Four Points Hotel, Sector-30A, Vashi, Navi Mumbai - 400705</p>
              <p className="mt-4">
                <strong>Phone:</strong> (+91) 9819122200<br />
                <strong>Email:</strong> sales@bookyourmaid.in
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-purple-600 mt-12 pt-8 text-center">
          <p className="text-purple-200">
            © 2024 Book Your Maid. All rights reserved. | Designed with ❤️ for better home services
          </p>
        </div>
      </div>
    </footer>
  );
};
