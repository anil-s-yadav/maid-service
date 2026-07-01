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
  'house-maid': { bg: 'bg-brand-teal/10', text: 'text-brand-teal', border: 'border-brand-teal/20', hoverBg: 'group-hover:bg-brand-teal' },
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
    <section className="py-16 md:py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-teal/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-teal/10 text-brand-teal font-semibold text-xs mb-4 border border-brand-teal/20">
            <Sparkles className="w-4 h-4" />
            <span>Our Services</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-3 font-heading">
            Specialized Care For Your Home
          </h2>
          <p className="text-slate-600 text-sm md:text-base">
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
                className="group bg-white rounded-2xl p-5 md:p-6 border border-amber-200/60 shadow-[0_2px_12px_-2px_rgba(217,119,6,0.1)] hover:shadow-[0_8px_30px_-4px_rgba(217,119,6,0.25)] hover:border-amber-300/80 transition-all duration-300 flex flex-col"
              >
                <div className={`w-11 h-11 ${colors.bg} ${colors.border} border rounded-xl flex items-center justify-center mb-4 ${colors.hoverBg} transition-colors duration-300`}>
                  <Icon className={`w-5 h-5 ${colors.text} group-hover:text-white transition-colors duration-300`} />
                </div>

                <h3 className="text-base md:text-lg font-bold text-brand-navy font-heading mb-1.5">
                  {service.name}
                </h3>

                <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-4 line-clamp-2 flex-grow">
                  {service.description}
                </p>

                <div className="flex items-center justify-between mt-auto pt-3 border-t border-slate-50">
                  <span className="text-xs font-bold text-brand-navy">
                    ₹{service.baseRate.toLocaleString()}<span className="text-slate-400 font-normal">/mo</span>
                  </span>
                  <div className="w-7 h-7 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-brand-navy transition-colors">
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-colors" />
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
            className="inline-flex items-center gap-2 bg-brand-navy hover:bg-slate-800 text-white px-7 py-3.5 rounded-full font-semibold text-sm transition-colors shadow-lg"
          >
            Request Custom Service
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};
