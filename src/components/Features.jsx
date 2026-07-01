import { ShieldCheck, UserCheck, RefreshCw, BadgeCheck, Sparkles } from "lucide-react";
import { useInView, animations } from "../hooks/useInView";

export const Features = () => {
  const [ref, inView] = useInView({ threshold: 0.1 });

  const features = [
    {
      icon: <BadgeCheck className="w-5 h-5 text-brand-gold" />,
      title: "100% Verified Maids",
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
      description: "Up to 3 free replacements within your contract period, no questions asked."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-brand-gold" />,
      title: "Secure Contracts",
      description: "Transparent pricing and digital contracts ensure safety for both parties."
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-[#0a1128] relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          
          {/* Text Side */}
          <div ref={ref} className={`transition-all duration-1000 ${inView ? animations.slideRight.in : animations.slideRight.out}`}>
            
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.05] backdrop-blur-md border border-brand-gold/20 mb-5">
              <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
              <span className="text-xs font-bold text-brand-gold tracking-widest uppercase">Why Choose Us</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 font-heading leading-tight">
              Why Mumbai Chooses <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-amber-200">Verified Maids</span>
            </h2>
            <p className="text-slate-300 text-sm md:text-base mb-8 max-w-lg leading-relaxed">
              We take the stress out of hiring domestic help. Our rigorous selection process ensures you only get the most reliable and skilled professionals in the city.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, idx) => (
                <div key={idx} className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl p-5 hover:bg-white/[0.05] hover:border-brand-gold/30 transition-all duration-300 group shadow-lg">
                  <div className="w-10 h-10 bg-brand-gold/10 rounded-xl flex items-center justify-center border border-brand-gold/20 mb-4 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(217,119,6,0.1)]">
                    {feature.icon}
                  </div>
                  <h3 className="text-base font-bold text-white font-heading mb-2">{feature.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image Side */}
          <div className={`relative transition-all duration-1000 delay-300 ${inView ? animations.slideLeft.in : animations.slideLeft.out} lg:pl-10 mt-10 lg:mt-0`}>
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-gold/20 to-brand-teal/20 rounded-3xl transform rotate-3 scale-105 transition-transform ml-10"></div>
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
              <div className="absolute inset-0 bg-[#0a1128]/20 mix-blend-overlay z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&auto=format&fit=crop&q=80" 
                alt="Professional cleaning" 
                className="w-full h-[400px] md:h-[500px] object-cover relative z-0"
              />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 left-0 md:-left-6 bg-[#0a1128]/80 backdrop-blur-xl border border-white/20 p-4 md:p-5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.6)] z-20 flex items-center gap-3 md:gap-4">
              <div className="bg-brand-gold/20 p-2 md:p-2.5 rounded-xl border border-brand-gold/30">
                <ShieldCheck className="w-5 h-5 md:w-6 md:h-6 text-brand-gold" />
              </div>
              <div>
                <p className="font-bold text-base md:text-lg text-white">10,000+</p>
                <p className="text-brand-gold text-[9px] md:text-[10px] font-bold tracking-wider uppercase">Happy Families</p>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Wave transition to next section */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0 rotate-180">
        <svg className="relative block w-full h-[40px] md:h-[60px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118,130.98,131.2,201.2,122.9,243.43,117.92,283.47,100,321.39,56.44Z" fill="#ffffff"></path>
        </svg>
      </div>
    </section>
  );
};
