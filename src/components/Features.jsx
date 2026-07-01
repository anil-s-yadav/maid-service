import { ShieldCheck, UserCheck, RefreshCw, BadgeCheck, Sparkles } from "lucide-react";
import { useInView, animations } from "../hooks/useInView";

export const Features = () => {
  const [ref, inView] = useInView({ threshold: 0.1 });

  const features = [
    {
      icon: <BadgeCheck className="w-5 h-5 text-brand-gold" />,
      title: "100% Background Verified",
      description: "Strict 5-step background check including Aadhaar and police verification."
    },
    {
      icon: <UserCheck className="w-5 h-5 text-brand-gold" />,
      title: "Professionally Trained",
      description: "Trained in hygiene, etiquette, and modern household equipment handling."
    },
    {
      icon: <RefreshCw className="w-5 h-5 text-brand-gold" />,
      title: "Free Replacements",
      description: "Not happy? We provide quick free replacements within 24 hours."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-brand-gold" />,
      title: "Secure Contracts",
      description: "Transparent pricing and digital contracts ensure safety for both parties."
    }
  ];

  return (
    <section className="py-16 md:py-24 dark:bg-[#0f172a] bg-white relative overflow-hidden transition-colors duration-500">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-gold/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">

          {/* Text Side */}
          <div ref={ref} className={`transition-all duration-1000 ${inView ? animations.slideRight.in : animations.slideRight.out}`}>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full dark:bg-white/[0.05] bg-brand-gold/10 border dark:border-white/10 border-brand-gold/20 mb-6 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
              <span className="text-[11px] font-bold dark:text-slate-300 text-slate-700 tracking-wider uppercase transition-colors">Why Choose Us</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold dark:text-white text-slate-900 mb-6 font-heading leading-[1.2] transition-colors">
              Why Mumbai Chooses <br/><span className="text-brand-gold">Verified Maids</span>
            </h2>
            <p className="dark:text-slate-400 text-slate-600 text-[15px] mb-10 max-w-lg leading-relaxed transition-colors">
              We take the stress out of hiring domestic help. Our rigorous selection process ensures you only get the most reliable and skilled professionals in the city.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((feature, idx) => (
                <div key={idx} className="flex gap-4 items-start group">
                  <div className="w-12 h-12 rounded-2xl dark:bg-white/[0.03] bg-slate-50 border dark:border-white/10 border-slate-200 flex items-center justify-center shrink-0 group-hover:bg-brand-gold/10 group-hover:border-brand-gold/30 transition-all duration-300 shadow-sm">
                    {feature.icon}
                  </div>
                  <div className="pt-1">
                    <h3 className="text-[15px] font-bold dark:text-white text-slate-800 font-heading mb-1.5 group-hover:text-brand-gold transition-colors">{feature.title}</h3>
                    <p className="dark:text-slate-400 text-slate-500 text-[13px] leading-relaxed transition-colors">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Side */}
          <div className={`relative transition-all duration-1000 delay-300 ${inView ? animations.slideLeft.in : animations.slideLeft.out} lg:pl-10 mt-12 lg:mt-0 flex justify-center`}>
            <div className="relative w-full max-w-[400px]">
              {/* Radial glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-gold/10 rounded-full blur-[60px]"></div>
              
              <div className="relative rounded-[2.5rem] overflow-hidden border-4 border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
                <img
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&auto=format&fit=crop&q=80"
                  alt="Professional cleaning"
                  className="w-full h-[450px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-4 md:-left-8 dark:bg-[#1e293b] bg-white border dark:border-white/10 border-slate-200 p-4 rounded-2xl shadow-2xl z-20 flex items-center gap-4 hover:-translate-y-1 transition-transform">
                <div className="bg-brand-gold/10 p-3 rounded-xl border border-brand-gold/20">
                  <ShieldCheck className="w-6 h-6 text-brand-gold" />
                </div>
                <div className="pr-2">
                  <p className="font-bold text-xl dark:text-white text-slate-900 font-heading leading-tight transition-colors">10,000+</p>
                  <p className="text-brand-gold text-[10px] font-bold tracking-wider uppercase mt-0.5">Happy Families</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
