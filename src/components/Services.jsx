import { SERVICES } from "../utils/constants";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useInView, animations } from "../hooks/useInView";

// Note: Using dynamic icon lookup from lucide-react would require mapping, 
// for simplicity we use predefined icons in constant or default ones.
import { Home, ChefHat, Baby, Users, HeartPulse, Sparkle } from "lucide-react";

const iconMap = {
  'house-maid': Home,
  'cook': ChefHat,
  'babysitter': Baby,
  'japa-maid': HeartPulse,
  'patient-care': Users,
  'all-rounder': Sparkle,
};

export const Services = () => {
  const [headerRef, headerInView] = useInView();

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative BG element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-teal/5 rounded-full blur-3xl -translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Header */}
        <div 
          ref={headerRef} 
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${headerInView ? animations.fadeUp.in : animations.fadeUp.out}`}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-teal/10 text-brand-teal font-semibold text-sm mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6 font-heading">
            Specialized Care For Your Home
          </h2>
          <p className="text-lg text-slate-600">
            From daily chores to specialized newborn care, our verified professionals are trained to provide the highest standard of service.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.id] || Home;
            return (
              <div 
                key={service.id}
                className="group bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-xl hover:border-brand-teal/30 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-teal group-hover:text-white transition-colors duration-300">
                  <Icon className="w-7 h-7 text-brand-teal group-hover:text-white transition-colors duration-300" />
                </div>
                
                <h3 className="text-2xl font-bold text-brand-navy mb-3 font-heading">
                  {service.name}
                </h3>
                
                <p className="text-slate-600 mb-8 line-clamp-3">
                  {service.description}
                </p>

                <div className="flex items-center justify-between mt-auto">
                  <span className="text-sm font-semibold text-brand-navy bg-slate-50 px-3 py-1.5 rounded-lg">
                    Starts ₹{service.baseRate.toLocaleString()}/mo
                  </span>
                  
                  <Link 
                    to={`/services/${service.id}`} 
                    className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-brand-teal group-hover:text-white transition-colors duration-300"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 bg-brand-navy hover:bg-slate-800 text-white px-8 py-4 rounded-full font-semibold transition-colors shadow-lg"
          >
            Request Custom Service
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </section>
  );
};
