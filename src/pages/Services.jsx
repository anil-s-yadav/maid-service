import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import SEOHead from "@/components/SEOHead";
import { SERVICES, BRAND } from "@/utils/constants";
import { Link } from "react-router-dom";
import { 
  ArrowRight, Sparkles, CheckCircle2, Phone,
  Home, ChefHat, Baby, Heart, HeartPulse, Stethoscope, Users, Car
} from "lucide-react";
import { useInView, animations } from "@/hooks/useInView";

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
  'house-maid': { bg: 'bg-brand-teal/10', text: 'text-brand-teal', gradient: 'from-brand-teal/20 to-brand-teal/5' },
  'cook': { bg: 'bg-orange-50', text: 'text-orange-600', gradient: 'from-orange-100/60 to-orange-50/30' },
  'babysitter': { bg: 'bg-pink-50', text: 'text-pink-600', gradient: 'from-pink-100/60 to-pink-50/30' },
  'nanny': { bg: 'bg-purple-50', text: 'text-purple-600', gradient: 'from-purple-100/60 to-purple-50/30' },
  'japa-maid': { bg: 'bg-rose-50', text: 'text-rose-600', gradient: 'from-rose-100/60 to-rose-50/30' },
  'patient-care': { bg: 'bg-blue-50', text: 'text-blue-600', gradient: 'from-blue-100/60 to-blue-50/30' },
  'elderly-care': { bg: 'bg-green-50', text: 'text-green-600', gradient: 'from-green-100/60 to-green-50/30' },
  'driver': { bg: 'bg-amber-50', text: 'text-amber-600', gradient: 'from-amber-100/60 to-amber-50/30' },
};

const ServicesPage = () => {
  const [gridRef, gridInView] = useInView({ threshold: 0.05 });

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <SEOHead
        title="Our Services — Maid, Cook, Babysitter, Nanny, Driver & More"
        description={`${BRAND.name} offers 8+ professional domestic help services in Mumbai — house maids, cooks, babysitters, nannies, japa maids, patient care, elderly care, and drivers. All 100% Aadhaar verified.`}
      />
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#0a1128] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-gold/15 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-gold/10 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-gold/10 backdrop-blur-md border border-brand-gold/20 mb-6 shadow-[0_0_15px_rgba(217,119,6,0.15)]">
            <Sparkles className="w-4 h-4 text-brand-gold" />
            <span className="text-sm font-medium text-brand-gold tracking-wide">8+ Premium Services</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white mb-5 leading-tight max-w-4xl mx-auto">
            Domestic Help Services <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-amber-200">You Can Trust</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
            Every professional is Aadhaar-verified, background-checked, medically screened, and trained by our team before placement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-gold to-amber-400 hover:from-amber-400 hover:to-amber-500 text-[#0a1128] font-bold py-3.5 px-7 rounded-full shadow-[0_0_20px_rgba(217,119,6,0.3)] transition-all hover:-translate-y-0.5 text-sm">
              Get Free Consultation <ArrowRight className="w-4 h-4" />
            </Link>
            <a href={`tel:${BRAND.phoneClean}`} className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-bold py-3.5 px-7 rounded-full transition-all text-sm">
              <Phone className="w-4 h-4" /> {BRAND.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-20 relative z-20 -mt-10">
        <div className="container mx-auto px-4 md:px-6">
          <div
            ref={gridRef}
            className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto transition-all duration-1000 ${gridInView ? animations.fadeUp.in : animations.fadeUp.out}`}
          >
            {SERVICES.map((service) => {
              const Icon = iconMap[service.id] || Home;
              const colors = colorMap[service.id] || colorMap['house-maid'];
              return (
                <div
                  key={service.id}
                  className="bg-white rounded-2xl overflow-hidden border border-amber-200/60 shadow-[0_2px_12px_-2px_rgba(217,119,6,0.1)] hover:shadow-[0_8px_30px_-4px_rgba(217,119,6,0.25)] hover:border-amber-300/80 transition-all duration-300 group flex flex-col"
                >
                  {/* Gradient Top Strip */}
                  <div className={`bg-gradient-to-r ${colors.gradient} p-5 pb-4`}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`${colors.bg} p-2.5 rounded-xl border border-slate-100`}>
                        <Icon className={`w-5 h-5 ${colors.text}`} />
                      </div>
                      <h3 className="text-lg font-bold text-brand-navy font-heading">{service.name}</h3>
                    </div>
                    <p className="text-slate-600 text-xs leading-relaxed line-clamp-2">{service.description}</p>
                  </div>

                  {/* Includes */}
                  <div className="p-5 pt-4 flex-grow">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2.5">What's Included</p>
                    <ul className="space-y-1.5">
                      {service.includes.slice(0, 4).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-teal mt-0.5 shrink-0" />
                          <span className="text-xs text-slate-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Footer */}
                  <div className="px-5 pb-5 mt-auto">
                    <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                      <div>
                        <span className="text-lg font-bold text-brand-navy font-heading">₹{service.baseRate.toLocaleString()}</span>
                        <span className="text-xs text-slate-400">/month</span>
                      </div>
                      <Link
                        to={`/services/${service.id}`}
                        className="text-xs font-bold text-brand-teal hover:text-teal-600 flex items-center gap-1 transition-colors"
                      >
                        Details <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-16 md:pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-brand-navy to-slate-900 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-teal/20 rounded-full blur-3xl -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-gold/10 rounded-full blur-2xl translate-y-1/3"></div>
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white font-heading mb-3">
                Can't Find What You Need?
              </h2>
              <p className="text-slate-300 max-w-lg mx-auto mb-6 text-sm">
                We offer custom domestic help solutions tailored to your exact requirements. Tell us what you need and we'll find the perfect match.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-brand-teal hover:bg-teal-500 text-white font-bold py-3.5 px-8 rounded-full shadow-lg shadow-brand-teal/30 transition-all hover:-translate-y-0.5 text-sm">
                Request Custom Service <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default ServicesPage;
