import { 
  ShieldCheck, Fingerprint, Heart, Stethoscope, GraduationCap,
  BadgeCheck, FileCheck2, Clock, MapPin, UserCheck, Star,
  Award, Sparkles, ArrowRight, CheckCircle2
} from "lucide-react";
import { useInView, animations } from "../hooks/useInView";
import { Link } from "react-router-dom";

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
      <section className="py-10 md:py-16 dark:bg-[#0f172a] bg-white relative overflow-hidden border-t dark:border-brand-gold/20 border-slate-100 shadow-[inset_0_10px_30px_rgba(0,0,0,0.5)] dark:shadow-[inset_0_10px_30px_rgba(0,0,0,0.5)] transition-colors duration-500">
        {/* Decorative background */}
        <div className="absolute top-0 left-1/2 w-[800px] h-[800px] bg-brand-gold/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-gold/8 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-gold/15 border border-brand-gold/30 mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-gold" />
              <span className="text-[11px] font-semibold text-brand-gold tracking-wide uppercase">Our 6-Step Verification Process</span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-heading dark:text-white text-slate-900 mb-3 leading-tight transition-colors">
              How We <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-brand-gold">Verify & Certify</span> Every Maid
            </h2>
            <p className="dark:text-slate-400 text-slate-600 text-[13px] md:text-sm max-w-2xl mx-auto transition-colors">
              No shortcuts. No compromises. Every professional in our network passes through a rigorous 6-step screening and training process before reaching your home.
            </p>
          </div>

          {/* Steps Grid */}
          <div
            ref={stepsRef}
            className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto transition-all duration-1000 ${stepsInView ? animations.fadeUp.in : animations.fadeUp.out}`}
          >
            {verificationSteps.map((item, idx) => (
              <div
                key={idx}
                className="relative dark:bg-slate-800/80 bg-slate-50 backdrop-blur-md rounded-xl p-4 md:p-5 border dark:border-white/10 border-slate-200 dark:hover:bg-slate-800 hover:bg-white dark:hover:border-brand-gold/30 hover:border-brand-gold/50 transition-all group shadow-sm hover:shadow-md dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
              >
                {/* Step Number */}
                <div className="absolute top-4 right-4 text-3xl font-black dark:text-white/[0.04] text-slate-900/[0.04] font-heading leading-none select-none transition-colors">
                  {item.step}
                </div>

                <div className="bg-gradient-to-br from-brand-gold/20 to-brand-gold/5 p-2.5 rounded-xl w-fit mb-3 border border-brand-gold/20 group-hover:scale-110 transition-transform">
                  <item.icon className="w-5 h-5 text-brand-gold" />
                </div>
                <h3 className="dark:text-white text-slate-900 font-bold font-heading text-[15px] mb-1.5 transition-colors">{item.title}</h3>
                <p className="dark:text-slate-400 text-slate-600 text-[13px] leading-relaxed transition-colors">{item.description}</p>
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
              <div className="bg-gradient-to-br from-[#121c3a] to-[#0a1128] rounded-[24px] p-6 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-brand-gold/20 max-w-[460px] mx-auto lg:ml-auto">
                <div className="absolute top-0 right-0 w-40 h-40 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none"></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-brand-gold/20 p-2.5 rounded-xl border border-brand-gold/30">
                      <Award className="w-6 h-6 text-brand-gold" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold font-heading text-white tracking-wide">Verified Maids™ Certificate</h3>
                      <p className="text-slate-400 text-[11px] font-semibold uppercase tracking-widest mt-1">Official Skill & Trust Certification</p>
                    </div>
                  </div>

                  <div className="bg-white/[0.04] backdrop-blur-xl rounded-2xl p-5 border border-white/10 mb-6">
                    <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/10">
                      <div className="flex items-center gap-2">
                        <BadgeCheck className="w-5 h-5 text-brand-gold" />
                        <span className="text-brand-gold font-bold text-[12px] uppercase tracking-wider">Certified Professional</span>
                      </div>
                      <Sparkles className="w-4 h-4 text-brand-gold/60" />
                    </div>

                    <div className="space-y-3">
                      {[
                        { label: "Full Name", value: "Sunita Yadav", color: "text-white" },
                        { label: "Aadhaar Verified", value: "✓ Yes", color: "text-[#25D366]" },
                        { label: "Background Check", value: "✓ Clear", color: "text-[#25D366]" },
                        { label: "Experience", value: "5 Years", color: "text-white" },
                        { label: "Skills", value: "Cooking, Cleaning", color: "text-white" },
                        { label: "Training", value: "✓ 3-Day Completed", color: "text-brand-gold" },
                      ].map((row, i) => (
                        <div key={i} className="flex justify-between items-center">
                          <span className="text-slate-400 text-[13px]">{row.label}</span>
                          <span className={`${row.color} font-bold text-[13px]`}>{row.value}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-5 mt-5 border-t border-white/10">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-brand-gold/20 flex items-center justify-center">
                          <Award className="w-3.5 h-3.5 text-brand-gold" />
                        </div>
                        <span className="text-white text-[11px] font-bold tracking-wide">Verified Maids™</span>
                      </div>
                      <span className="text-slate-500 text-[10px] font-mono tracking-wider">#VM-2025-0847</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-x-5 gap-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
                      <span className="text-slate-300 text-[12px] font-medium">3-day training</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
                      <span className="text-slate-300 text-[12px] font-medium">6-step verified</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
                      <span className="text-slate-300 text-[12px] font-medium">Certificate shared</span>
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
