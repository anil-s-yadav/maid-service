import { ShieldCheck, UserCheck, RefreshCw, BadgeCheck } from "lucide-react";
import { useInView, animations } from "../hooks/useInView";

export const Features = () => {
  const [ref, inView] = useInView();

  const features = [
    {
      icon: <BadgeCheck className="w-8 h-8 text-brand-teal" />,
      title: "100% Verified Maids",
      description: "Every maid undergoes a strict 5-step background check including Aadhaar and police verification before deployment."
    },
    {
      icon: <UserCheck className="w-8 h-8 text-brand-gold" />,
      title: "Professionally Trained",
      description: "Our staff is trained in hygiene, etiquette, and modern household equipment handling."
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-brand-teal" />,
      title: "Free Replacements",
      description: "Not satisfied? We provide up to 3 free replacements within your contract period, no questions asked."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-brand-gold" />,
      title: "Secure Contracts",
      description: "Transparent pricing and digital contracts ensure safety for both the household and the maid."
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="absolute inset-0 bg-brand-teal/20 rounded-[2rem] transform rotate-3 scale-105 transition-transform"></div>
            <img 
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&auto=format&fit=crop&q=80" 
              alt="Professional cleaning" 
              className="relative rounded-[2rem] w-full h-[600px] object-cover shadow-2xl z-10"
            />
            
            {/* Floating Badge */}
            <div className="absolute bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl z-20 hidden md:flex items-center gap-4 animate-float">
              <div className="bg-green-100 p-3 rounded-full">
                <ShieldCheck className="w-8 h-8 text-green-600" />
              </div>
              <div>
                <p className="font-bold text-xl text-brand-navy">5,000+</p>
                <p className="text-slate-500 font-medium">Happy Families</p>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div ref={ref} className={`transition-all duration-1000 ${inView ? animations.slideLeft.in : animations.slideLeft.out}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6 font-heading">
              Why Mumbai Chooses Verified Maids
            </h2>
            <p className="text-lg text-slate-600 mb-12">
              We take the stress out of hiring domestic help. Our rigorous selection process ensures you only get the most reliable and skilled professionals in the city.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((feature, idx) => (
                <div key={idx} className="space-y-4">
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100 shadow-sm">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy font-heading">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
