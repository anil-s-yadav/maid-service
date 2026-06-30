import { Shield, Clock, Award } from "lucide-react";
import { BRAND } from "../utils/constants";

export const TrustBanner = () => {
  return (
    <section className="bg-brand-navy py-12 border-y border-brand-teal/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-slate-700/50">
          
          <div className="flex flex-col items-center text-center px-4 pt-4 md:pt-0">
            <div className="w-16 h-16 rounded-full bg-brand-teal/20 flex items-center justify-center mb-4 text-brand-teal">
              <Shield className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2 font-heading">100% Background Verified</h3>
            <p className="text-slate-400 text-sm">Every maid undergoes Aadhaar and thorough reference checks.</p>
          </div>

          <div className="flex flex-col items-center text-center px-4 pt-8 md:pt-0">
            <div className="w-16 h-16 rounded-full bg-brand-gold/20 flex items-center justify-center mb-4 text-brand-gold">
              <Clock className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2 font-heading">24-Hour Replacement</h3>
            <p className="text-slate-400 text-sm">Not happy? We provide quick replacements within 24 hours.</p>
          </div>

          <div className="flex flex-col items-center text-center px-4 pt-8 md:pt-0">
            <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mb-4 text-blue-400">
              <Award className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2 font-heading">Professionally Trained</h3>
            <p className="text-slate-400 text-sm">Our staff is trained in hygiene, etiquette, and proper care.</p>
          </div>

        </div>
      </div>
    </section>
  );
};
