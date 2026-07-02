import { SERVICES } from "../utils/constants";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
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

const styleMap = {
  'house-maid': { gradient: 'from-amber-500 to-yellow-500', iconBg: 'bg-amber-500', accent: 'text-amber-500', darkAccent: 'dark:text-amber-400', glow: 'dark:shadow-amber-500/10' },
  'cook': { gradient: 'from-orange-500 to-red-400', iconBg: 'bg-orange-500', accent: 'text-orange-500', darkAccent: 'dark:text-orange-400', glow: 'dark:shadow-orange-500/10' },
  'babysitter': { gradient: 'from-pink-500 to-rose-400', iconBg: 'bg-pink-500', accent: 'text-pink-500', darkAccent: 'dark:text-pink-400', glow: 'dark:shadow-pink-500/10' },
  'nanny': { gradient: 'from-purple-500 to-violet-400', iconBg: 'bg-purple-500', accent: 'text-purple-500', darkAccent: 'dark:text-purple-400', glow: 'dark:shadow-purple-500/10' },
  'japa-maid': { gradient: 'from-rose-500 to-pink-400', iconBg: 'bg-rose-500', accent: 'text-rose-500', darkAccent: 'dark:text-rose-400', glow: 'dark:shadow-rose-500/10' },
  'patient-care': { gradient: 'from-blue-500 to-cyan-400', iconBg: 'bg-blue-500', accent: 'text-blue-500', darkAccent: 'dark:text-blue-400', glow: 'dark:shadow-blue-500/10' },
  'elderly-care': { gradient: 'from-emerald-500 to-teal-400', iconBg: 'bg-emerald-500', accent: 'text-emerald-500', darkAccent: 'dark:text-emerald-400', glow: 'dark:shadow-emerald-500/10' },
  'driver': { gradient: 'from-indigo-500 to-blue-400', iconBg: 'bg-indigo-500', accent: 'text-indigo-500', darkAccent: 'dark:text-indigo-400', glow: 'dark:shadow-indigo-500/10' },
};

export const Services = () => {
  const [ref, inView] = useInView({ threshold: 0.05 });

  return (
    <section className="py-16 md:py-20 dark:bg-[#0a0f1e] bg-slate-50 relative overflow-hidden transition-colors duration-500">
      {/* Decorative background blobs — visible in dark mode for ambient glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] dark:bg-brand-gold/[0.06] bg-brand-gold/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] dark:bg-purple-500/[0.04] bg-brand-gold/5 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] dark:bg-blue-500/[0.03] bg-transparent rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-gold/10 text-brand-gold font-bold text-xs mb-4 border border-brand-gold/20 shadow-[0_0_15px_rgba(217,119,6,0.1)]">
            <Sparkles className="w-4 h-4" />
            <span className="uppercase tracking-widest">Our Services</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold dark:text-white text-brand-navy mb-4 font-heading transition-colors">
            Our Services For <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-amber-500">Your Home</span>
          </h2>
          <p className="dark:text-slate-300 text-slate-600 text-sm md:text-base transition-colors max-w-xl mx-auto">
            From daily chores to specialized newborn care, our verified professionals are trained to provide the highest standard of service.
          </p>
        </div>

        {/* Services Grid */}
        <div
          ref={ref}
          className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5 max-w-6xl mx-auto transition-all duration-1000 ${inView ? animations.fadeUp.in : animations.fadeUp.out}`}
        >
          {SERVICES.map((service) => {
            const Icon = iconMap[service.id] || Home;
            const style = styleMap[service.id] || styleMap['house-maid'];
            return (
              <Link
                key={service.id}
                to={`/services/${service.id}`}
                className={`group dark:bg-white/[0.04] dark:backdrop-blur-xl bg-white rounded-2xl overflow-hidden border dark:border-white/[0.08] border-slate-200/80 shadow-md hover:shadow-xl ${style.glow} dark:hover:border-white/20 hover:border-brand-gold/30 transition-all duration-300 hover:-translate-y-1 flex flex-col`}
              >
                {/* Colored Top Bar */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${style.gradient} dark:opacity-80`}></div>

                <div className="p-4 md:p-5 flex flex-col flex-grow">
                  {/* Icon + Name Row */}
                  <div className="flex items-start gap-3 mb-3">
                    <div className={`${style.iconBg} dark:bg-opacity-80 w-10 h-10 md:w-11 md:h-11 rounded-xl flex items-center justify-center shrink-0 shadow-lg dark:shadow-lg`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-sm md:text-base font-bold dark:text-white text-brand-navy font-heading leading-tight transition-colors">
                        {service.name}
                      </h3>
                      <div className="flex items-baseline gap-1 mt-0.5">
                        <span className="text-[9px] md:text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-wide">Starts</span>
                        <p className={`text-[11px] md:text-xs font-bold ${style.accent} ${style.darkAccent}`}>
                          ₹{service.baseRate.toLocaleString()}*/mo
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="dark:text-slate-400 text-slate-500 text-[11px] md:text-xs leading-relaxed line-clamp-2 mb-4 flex-grow transition-colors">
                    {service.description}
                  </p>

                  {/* Key highlights */}
                  <div className="space-y-1.5 mb-4 hidden md:block">
                    {service.includes && service.includes.slice(0, 2).map((item, idx) => (
                      <div key={idx} className="flex items-center gap-1.5">
                        <CheckCircle2 className={`w-3 h-3 ${style.accent} ${style.darkAccent} shrink-0`} />
                        <span className="dark:text-slate-400 text-slate-500 text-[11px] truncate transition-colors">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Footer */}
                  <div className="flex items-center justify-between pt-3 border-t dark:border-white/[0.06] border-slate-100 mt-auto">
                    <span className="dark:text-slate-300 text-brand-navy text-[11px] md:text-xs font-semibold transition-colors">
                      View Details
                    </span>
                    <div className={`w-6 h-6 md:w-7 md:h-7 rounded-full ${style.iconBg} dark:bg-opacity-80 flex items-center justify-center shadow-sm`}>
                      <ArrowRight className="w-3 h-3 md:w-3.5 md:h-3.5 text-white" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA & Disclaimer */}
        <div className="mt-12 text-center flex flex-col items-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 dark:bg-brand-gold dark:text-[#0a1128] dark:hover:bg-amber-400 bg-brand-navy hover:bg-slate-800 text-white px-7 py-3.5 rounded-full font-semibold text-sm transition-colors shadow-lg mb-8"
          >
            Request Custom Service
            <ArrowRight className="w-4 h-4" />
          </Link>

          <div className="max-w-4xl mx-auto text-center px-4">
            <p className="text-[10px] md:text-[11px] text-slate-400 dark:text-slate-500 italic">
              *Prices shown are estimated starting base rates for standard 8-hour shifts. Actual salaries vary based on exact location in Mumbai, candidate's experience, skill level, and exact scope of work. Final pricing is mutually agreed upon during the interview.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
