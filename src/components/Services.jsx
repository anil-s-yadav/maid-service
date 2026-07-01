import { SERVICES } from "../utils/constants";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useInView, animations } from "../hooks/useInView";
import { Home, ChefHat, Baby, Heart, HeartPulse, Stethoscope, Users, Car } from "lucide-react";

const iconMap = {
  'house-maid': Home,
  'cook': ChefHat,
  'babysitter': Baby,
  'nanny': Heart,
  'japa-maid': HeartPulse,
  'patient-care': Stethoscope,
  'elderly-care': Users,
  'driver': Car,
};

const colorMap = {
  'house-maid': { bg: 'bg-brand-gold/10', text: 'text-brand-gold', border: 'border-brand-gold/20', hoverBg: 'group-hover:bg-brand-gold' },
  'cook': { bg: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-100', hoverBg: 'group-hover:bg-orange-500' },
  'babysitter': { bg: 'bg-pink-50', text: 'text-pink-600', border: 'border-pink-100', hoverBg: 'group-hover:bg-pink-500' },
  'nanny': { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-100', hoverBg: 'group-hover:bg-purple-500' },
  'japa-maid': { bg: 'bg-rose-50', text: 'text-rose-600', border: 'border-rose-100', hoverBg: 'group-hover:bg-rose-500' },
  'patient-care': { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-100', hoverBg: 'group-hover:bg-blue-500' },
  'elderly-care': { bg: 'bg-green-50', text: 'text-green-600', border: 'border-green-100', hoverBg: 'group-hover:bg-green-500' },
  'driver': { bg: 'bg-amber-50', text: 'text-amber-600', border: 'border-amber-100', hoverBg: 'group-hover:bg-amber-500' },
};

export const Services = () => {
  const [ref, inView] = useInView({ threshold: 0.05 });

  return (
    <section className="py-16 md:py-20 dark:bg-[#0f172a] bg-white relative overflow-hidden transition-colors duration-500">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-gold/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-gold/10 text-brand-gold font-semibold text-xs mb-4 border border-brand-gold/20">
            <Sparkles className="w-4 h-4" />
            <span>Our Services</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold dark:text-white text-brand-navy mb-3 font-heading transition-colors">
            Specialized Care For Your Home
          </h2>
          <p className="dark:text-slate-300 text-slate-600 text-sm md:text-base transition-colors">
            From daily chores to specialized newborn care, our verified professionals are trained to provide the highest standard of service.
          </p>
        </div>

        {/* Services Grid */}
        <div
          ref={ref}
          className={`grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 max-w-6xl mx-auto transition-all duration-1000 ${inView ? animations.fadeUp.in : animations.fadeUp.out}`}
        >
          {SERVICES.map((service) => {
            const Icon = iconMap[service.id] || Home;
            const colors = colorMap[service.id] || colorMap['house-maid'];
            return (
              <Link
                key={service.id}
                to={`/services/${service.id}`}
                className="group dark:bg-[#1e293b] bg-white rounded-2xl p-5 md:p-6 border dark:border-white/10 border-amber-200/60 shadow-[0_2px_12px_-2px_rgba(217,119,6,0.1)] hover:shadow-[0_8px_30px_-4px_rgba(217,119,6,0.25)] dark:hover:border-brand-gold/50 hover:border-amber-300/80 transition-all duration-300 flex flex-col"
              >
                <div className={`w-11 h-11 ${colors.bg} ${colors.border} border rounded-xl flex items-center justify-center mb-4 ${colors.hoverBg} transition-colors duration-300`}>
                  <Icon className={`w-5 h-5 ${colors.text} group-hover:text-white transition-colors duration-300`} />
                </div>

                <h3 className="text-base md:text-lg font-bold dark:text-white text-brand-navy font-heading mb-1.5 transition-colors">
                  {service.name}
                </h3>

                <p className="dark:text-slate-400 text-slate-500 text-xs md:text-sm leading-relaxed mb-4 line-clamp-2 flex-grow transition-colors">
                  {service.description}
                </p>

                <div className="flex items-center justify-between mt-auto pt-3 border-t dark:border-white/10 border-slate-50 transition-colors">
                  <span className="text-xs font-bold dark:text-brand-gold text-brand-navy transition-colors">
                    ₹{service.baseRate.toLocaleString()}<span className="dark:text-slate-400 text-slate-400 font-normal">/mo</span>
                  </span>
                  <div className="w-7 h-7 rounded-full dark:bg-white/5 bg-slate-50 flex items-center justify-center dark:group-hover:bg-brand-gold group-hover:bg-brand-navy transition-colors">
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 dark:group-hover:text-[#0a1128] group-hover:text-white transition-colors" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 dark:bg-brand-gold dark:text-[#0a1128] dark:hover:bg-amber-400 bg-brand-navy hover:bg-slate-800 text-white px-7 py-3.5 rounded-full font-semibold text-sm transition-colors shadow-lg"
          >
            Request Custom Service
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};
