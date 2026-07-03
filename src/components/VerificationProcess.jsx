import { 
  ShieldCheck, Fingerprint, Heart, Stethoscope, GraduationCap,
  BadgeCheck, FileCheck2, Clock, MapPin, UserCheck, Star,
  Award, Sparkles, ArrowRight, CheckCircle2
} from "lucide-react";
import { useInView, animations } from "../hooks/useInView";
import { Link } from "react-router-dom";
import { BRAND } from "../utils/constants";

const verificationSteps = [
  {
    step: "01",
    icon: Fingerprint,
    title: "Aadhaar & Identity Check",
    description: "Every maid's Aadhaar card, PAN, and government ID are verified against official databases to confirm their real identity.",
  },
  {
    step: "02",
    icon: ShieldCheck,
    title: "Police Background Verification",
    description: "We conduct thorough police background checks to ensure zero criminal history. Your family's safety is non-negotiable.",
  },
  {
    step: "03",
    icon: MapPin,
    title: "Address & Reference Verification",
    description: "Physical address verification and past employer reference calls confirm the maid's history and reliability.",
  },
  {
    step: "04",
    icon: Stethoscope,
    title: "Medical Health Screening",
    description: "Complete medical check-up including blood tests and general health assessment to ensure they are fit for duty.",
  },
  {
    step: "05",
    icon: GraduationCap,
    title: "3-Day Professional Training",
    description: "Every maid undergoes our intensive 3-day training covering hygiene, cooking, childcare, etiquette, and safety protocols.",
  },
  {
    step: "06",
    icon: Award,
    title: "Skill & Trust Certification",
    description: "After passing all checks and training, each maid receives our official Verified Maids™ Skill & Trust Certificate.",
  },
];

const verificationDetails = [
  { label: "Full Name & Age", icon: UserCheck },
  { label: "Aadhaar Card Number", icon: Fingerprint },
  { label: "Police Clearance", icon: ShieldCheck },
  { label: "Work Experience (Years)", icon: Clock },
  { label: "Cooking & Cleaning Skills", icon: Star },
  { label: "Language Proficiency", icon: FileCheck2 },
  { label: "Previous Employer Refs", icon: Heart },
  { label: "Medical Fitness Report", icon: Stethoscope },
];

export const VerificationProcess = () => {
  const [stepsRef, stepsInView] = useInView({ threshold: 0.05 });
  const [certRef, certInView] = useInView({ threshold: 0.1 });

  return (
    <>
      {/* Section 1: How We Verify */}
      <section className="py-10 md:py-16 dark:bg-[#0f172a] bg-white relative overflow-hidden border-t dark:border-brand-gold/20 border-slate-100 transition-colors duration-500">
        {/* Decorative background */}
        <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-brand-gold/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/30 mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-gold" />
              <span className="text-[10px] md:text-xs font-bold text-brand-gold tracking-widest uppercase">Our 6-Step Verification</span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-heading dark:text-white text-slate-900 mb-3 leading-tight transition-colors">
              How We <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-amber-500">Verify & Certify</span> Every Maid
            </h2>
            <p className="dark:text-slate-400 text-slate-600 text-xs md:text-sm max-w-xl mx-auto transition-colors">
              No shortcuts. No compromises. Every professional passes through our rigorous 6-step screening process.
            </p>
          </div>

          {/* Steps Grid */}
          <div
            ref={stepsRef}
            className={`grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 max-w-5xl mx-auto transition-all duration-1000 ${stepsInView ? animations.fadeUp.in : animations.fadeUp.out}`}
          >
            {verificationSteps.map((item, idx) => (
              <div
                key={idx}
                className="group relative dark:bg-[#1e293b] bg-white rounded-xl md:rounded-2xl p-3.5 md:p-5 border dark:border-white/10 border-slate-200/80 hover:border-brand-gold/40 transition-all duration-300 shadow-sm hover:shadow-md overflow-hidden"
              >
                {/* Colored top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-gold to-amber-400 opacity-60"></div>

                {/* Step number watermark */}
                <div className="absolute -bottom-2 -right-1 text-4xl md:text-5xl font-black dark:text-white/[0.03] text-brand-navy/[0.04] font-heading leading-none select-none">
                  {item.step}
                </div>

                <div className="relative z-10 flex gap-3 items-start">
                  {/* Step badge */}
                  <div className="bg-gradient-to-br from-brand-gold to-amber-500 w-9 h-9 md:w-10 md:h-10 rounded-lg md:rounded-xl flex items-center justify-center shrink-0 shadow-md">
                    <item.icon className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>

                  <div className="min-w-0">
                    <h3 className="dark:text-white text-brand-navy font-bold font-heading text-[13px] md:text-[15px] leading-snug mb-1 transition-colors">{item.title}</h3>
                    <p className="dark:text-slate-400 text-slate-500 text-[11px] md:text-xs leading-relaxed transition-colors line-clamp-3">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: What We Verify + Certification */}
      <section className="py-12 md:py-16 dark:bg-[#0f172a] bg-slate-50 border-t dark:border-white/10 border-slate-200 relative overflow-hidden transition-colors duration-500">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-gold/5 rounded-full blur-[80px] -translate-y-1/3 translate-x-1/4 pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 max-w-6xl mx-auto items-start">

            {/* Left: What We Verify */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-gold/10 text-brand-gold font-semibold text-xs uppercase tracking-wider mb-4 border border-brand-gold/20">
                <FileCheck2 className="w-4 h-4" />
                <span>What We Verify</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold dark:text-white text-slate-900 font-heading mb-3 leading-tight transition-colors">
                Every Detail is Checked & Documented
              </h2>
              <p className="dark:text-slate-300 text-slate-600 text-sm md:text-base mb-6 transition-colors">
                Our team cross-checks every data point through official records, in-person visits, and employer references.
              </p>

              <div className="grid grid-cols-2 gap-3">
                {verificationDetails.map((detail, idx) => (
                  <div key={idx} className="flex items-center gap-3 dark:bg-slate-800/80 bg-white backdrop-blur-md rounded-xl p-3 border dark:border-white/10 border-slate-200 shadow-sm hover:shadow-md dark:hover:border-brand-gold/30 hover:border-brand-gold/50 dark:hover:bg-slate-800 hover:bg-slate-50 transition-all group dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
                    <div className="bg-brand-gold/10 p-2 rounded-lg shrink-0 group-hover:bg-brand-gold/20 transition-colors">
                      <detail.icon className="w-4 h-4 text-brand-gold" />
                    </div>
                    <span className="text-[13px] font-medium dark:text-slate-200 text-slate-700 transition-colors">{detail.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Certification Card */}
            <div
              ref={certRef}
              className={`transition-all duration-1000 ${certInView ? animations.fadeUp.in : animations.fadeUp.out}`}
            >
              <div className="bg-[#fdfbf7] p-2 md:p-3 rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.4)] max-w-[460px] mx-auto lg:ml-auto transform md:rotate-2 hover:rotate-0 transition-transform duration-500 relative">
                
                {/* Ribbon decoration */}
                <div className="absolute -top-3 -right-3 w-16 h-16 overflow-hidden hidden md:block">
                  <div className="bg-brand-gold text-white text-[8px] font-bold uppercase tracking-widest text-center py-1 w-24 absolute top-4 -right-6 rotate-45 shadow-sm">
                    Verified
                  </div>
                </div>

                <div className="border-4 border-double border-brand-gold/40 p-6 md:p-8 text-center relative overflow-hidden h-full flex flex-col justify-center bg-white/50">
                  
                  {/* Subtle Background Watermark */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
                    <Award className="w-64 h-64 text-brand-navy" />
                  </div>

                  {/* Brand Logo Top Left */}
                  <div className="absolute top-3 left-3 md:top-7 md:left-7 z-20">
                    <img src={BRAND.logo} alt={BRAND.name} className="h-8 md:h-16 w-auto object-contain rounded-xl drop-shadow-md" />
                  </div>

                  <div className="relative z-10">
                    <h4 className="text-brand-gold font-bold tracking-widest text-[10px] md:text-xs uppercase mb-4 mt-2 md:mt-0">Verified Maids™</h4>
                    
                    <h3 className="text-2xl md:text-3xl font-bold text-brand-navy mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                      Certificate of Verification
                    </h3>
                    
                    <p className="text-slate-500 text-[9px] md:text-[10px] uppercase tracking-widest mb-6">
                      Official Skill & Trust Certification
                    </p>

                    <p className="text-xs md:text-sm text-slate-600 mb-2 italic" style={{ fontFamily: 'Georgia, serif' }}>
                      This is to proudly certify that
                    </p>

                    <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-4 italic border-b border-slate-300 pb-2 inline-block px-8" style={{ fontFamily: 'Georgia, serif' }}>
                      Sunita Yadav
                    </h2>

                    <p className="text-[11px] md:text-xs text-slate-600 mb-8 leading-relaxed max-w-[90%] mx-auto">
                      has successfully passed the comprehensive 6-step background verification, including Aadhaar & Police checks, and has completed the official professional training program.
                    </p>

                    <div className="flex justify-between items-end mt-4 pt-4 border-t border-slate-200">
                      <div className="text-left">
                        <div className="w-16 md:w-20 border-b border-slate-400 mb-1"></div>
                        <p className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">Date of Issue</p>
                        <p className="text-[10px] text-brand-navy font-bold">{new Date().getFullYear()}</p>
                      </div>
                      
                      {/* Gold Seal */}
                      <div className="relative mx-2">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-brand-gold to-amber-600 rounded-full flex items-center justify-center shadow-lg border-2 border-white relative z-10">
                          <BadgeCheck className="w-6 h-6 md:w-8 md:h-8 text-white" />
                        </div>
                        <div className="absolute inset-0 bg-brand-gold animate-ping rounded-full opacity-20"></div>
                      </div>

                      <div className="text-right">
                        <div className="font-['Brush_Script_MT',cursive,serif] text-xl md:text-2xl text-brand-navy leading-none mb-1 -mt-2">A. Yadav</div>
                        <div className="w-16 md:w-20 border-b border-slate-400 mb-1 ml-auto"></div>
                        <p className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">Authorized Sign</p>
                      </div>
                    </div>

                    <div className="mt-6 text-[8px] md:text-[9px] text-slate-400 font-mono tracking-widest">
                      CERT ID: VM-{new Date().getFullYear()}-0847
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
