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
      {/* Section 1: How We Verify — Dark Premium */}
      <section className="pt-24 pb-16 md:pt-28 md:pb-24 bg-[#0a1128] relative overflow-hidden">
        {/* Wave transition from previous section (slate-50) */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-0">
          <svg className="relative block w-full h-[40px] md:h-[60px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118,130.98,131.2,201.2,122.9,243.43,117.92,283.47,100,321.39,56.44Z" fill="#f8fafc"></path>
          </svg>
        </div>
        {/* Decorative background */}
        <div className="absolute top-0 left-1/2 w-[800px] h-[800px] bg-brand-gold/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-teal/8 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-gold/15 border border-brand-gold/30 mb-5">
              <ShieldCheck className="w-4 h-4 text-brand-gold" />
              <span className="text-sm font-semibold text-brand-gold tracking-wide">Our 6-Step Verification Process</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-white mb-4 leading-tight">
              How We <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-yellow-300">Verify & Certify</span> Every Maid
            </h2>
            <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
              No shortcuts. No compromises. Every professional in our network passes through a rigorous 6-step screening and training process before reaching your home.
            </p>
          </div>

          {/* Steps Grid */}
          <div
            ref={stepsRef}
            className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto transition-all duration-1000 ${stepsInView ? animations.fadeUp.in : animations.fadeUp.out}`}
          >
            {verificationSteps.map((item, idx) => (
              <div
                key={idx}
                className="relative bg-white/[0.04] backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/[0.08] hover:border-brand-gold/30 transition-all group"
              >
                {/* Step Number */}
                <div className="absolute top-5 right-5 text-4xl font-black text-white/[0.06] font-heading leading-none select-none">
                  {item.step}
                </div>

                <div className="bg-gradient-to-br from-brand-gold/20 to-brand-gold/5 p-3 rounded-xl w-fit mb-4 border border-brand-gold/20 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 text-brand-gold" />
                </div>
                <h3 className="text-white font-bold font-heading text-lg mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: What We Verify + Certification — Light Premium */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-gold/5 rounded-full blur-[80px] -translate-y-1/3 translate-x-1/4 pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto items-start">

            {/* Left: What We Verify */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-teal/10 text-brand-teal font-semibold text-xs mb-4 border border-brand-teal/20">
                <FileCheck2 className="w-4 h-4" />
                <span>What We Verify</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-brand-navy font-heading mb-2 leading-tight">
                Every Detail is Checked & Documented
              </h2>
              <p className="text-slate-600 text-sm mb-5">
                Our team cross-checks every data point through official records, in-person visits, and employer references.
              </p>

              <div className="grid grid-cols-2 gap-2">
                {verificationDetails.map((detail, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 bg-white rounded-lg p-2.5 border border-slate-100 shadow-sm hover:shadow-md hover:border-brand-gold/30 transition-all group">
                    <div className="bg-brand-gold/10 p-1.5 rounded-md shrink-0 group-hover:bg-brand-gold/20 transition-colors">
                      <detail.icon className="w-3.5 h-3.5 text-brand-gold" />
                    </div>
                    <span className="text-xs font-medium text-slate-700">{detail.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Certification Card */}
            <div
              ref={certRef}
              className={`transition-all duration-1000 ${certInView ? animations.fadeUp.in : animations.fadeUp.out}`}
            >
              <div className="bg-gradient-to-br from-brand-navy via-slate-900 to-brand-navy rounded-2xl p-5 md:p-6 relative overflow-hidden shadow-2xl border border-white/10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/15 rounded-full blur-3xl pointer-events-none"></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-brand-gold/20 p-2 rounded-lg border border-brand-gold/30">
                      <Award className="w-5 h-5 text-brand-gold" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold font-heading text-white">Verified Maids™ Certificate</h3>
                      <p className="text-slate-400 text-[10px]">Official Skill & Trust Certification</p>
                    </div>
                  </div>

                  <div className="bg-white/[0.06] backdrop-blur-md rounded-xl p-4 border border-white/10 mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-1.5">
                        <BadgeCheck className="w-4 h-4 text-brand-gold" />
                        <span className="text-brand-gold font-bold text-[10px] uppercase tracking-wider">Certified Professional</span>
                      </div>
                      <Sparkles className="w-3.5 h-3.5 text-brand-gold/60" />
                    </div>

                    <div className="space-y-0">
                      {[
                        { label: "Full Name", value: "Sunita Yadav", color: "text-white" },
                        { label: "Aadhaar Verified", value: "✓ Yes", color: "text-green-400" },
                        { label: "Background Check", value: "✓ Clear", color: "text-green-400" },
                        { label: "Experience", value: "5 Years", color: "text-white" },
                        { label: "Skills", value: "Cooking, Cleaning, Childcare", color: "text-white" },
                        { label: "Training", value: "✓ 3-Day Completed", color: "text-brand-gold" },
                      ].map((row, i, arr) => (
                        <div key={i} className={`flex justify-between items-center py-1.5 ${i < arr.length - 1 ? 'border-b border-white/[0.06]' : ''}`}>
                          <span className="text-slate-400 text-[11px]">{row.label}</span>
                          <span className={`${row.color} font-semibold text-[11px]`}>{row.value}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-3 mt-2 border-t border-white/10">
                      <div className="flex items-center gap-1.5">
                        <div className="w-5 h-5 rounded-full bg-brand-gold/20 flex items-center justify-center">
                          <Award className="w-3 h-3 text-brand-gold" />
                        </div>
                        <span className="text-white text-[10px] font-medium">Verified Maids™</span>
                      </div>
                      <span className="text-slate-500 text-[9px]">#VM-2025-0847</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-x-4 gap-y-1.5">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3 h-3 text-brand-gold shrink-0" />
                      <span className="text-slate-300 text-[11px]">3-day professional training</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3 h-3 text-brand-gold shrink-0" />
                      <span className="text-slate-300 text-[11px]">6-step verification passed</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3 h-3 text-brand-gold shrink-0" />
                      <span className="text-slate-300 text-[11px]">Certificate shared before placement</span>
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
