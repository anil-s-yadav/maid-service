import { Shield, Clock, Award } from "lucide-react";

export const TrustBanner = () => {
  return (
    <section className="bg-[#0a1128] relative z-20 pb-12 pt-2">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.4)]">
          <div className="grid md:grid-cols-3 gap-6 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
            
            <div className="flex flex-col items-center text-center px-4 pt-4 md:pt-0">
              <div className="w-14 h-14 rounded-2xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center mb-4 text-brand-gold shadow-[0_0_20px_rgba(217,119,6,0.15)]">
                <Shield className="w-7 h-7" />
              </div>
              <h3 className="text-base md:text-lg font-bold text-white mb-2 font-heading tracking-wide">100% Background Verified</h3>
              <p className="text-slate-400 text-xs md:text-sm max-w-[250px]">Every maid undergoes Aadhaar and thorough reference checks.</p>
            </div>

            <div className="flex flex-col items-center text-center px-4 pt-6 md:pt-0">
              <div className="w-14 h-14 rounded-2xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center mb-4 text-brand-gold shadow-[0_0_20px_rgba(217,119,6,0.15)]">
                <Clock className="w-7 h-7" />
              </div>
              <h3 className="text-base md:text-lg font-bold text-white mb-2 font-heading tracking-wide">24-Hour Replacement</h3>
              <p className="text-slate-400 text-xs md:text-sm max-w-[250px]">Not happy? We provide quick free replacements within 24 hours.</p>
            </div>

            <div className="flex flex-col items-center text-center px-4 pt-6 md:pt-0">
              <div className="w-14 h-14 rounded-2xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center mb-4 text-brand-gold shadow-[0_0_20px_rgba(217,119,6,0.15)]">
                <Award className="w-7 h-7" />
              </div>
              <h3 className="text-base md:text-lg font-bold text-white mb-2 font-heading tracking-wide">Professionally Trained</h3>
              <p className="text-slate-400 text-xs md:text-sm max-w-[250px]">Our staff is trained in hygiene, etiquette, and premium care.</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
