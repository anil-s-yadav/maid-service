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
  'house-maid': { bg: 'bg-amber-50', text: 'text-amber-600', gradient: 'from-amber-100/60 to-amber-50/30' },
  'cook': { bg: 'bg-orange-50', text: 'text-orange-600', gradient: 'from-orange-100/60 to-orange-50/30' },
  'babysitter': { bg: 'bg-pink-50', text: 'text-pink-600', gradient: 'from-pink-100/60 to-pink-50/30' },
  'nanny': { bg: 'bg-purple-50', text: 'text-purple-600', gradient: 'from-purple-100/60 to-purple-50/30' },
  'japa-maid': { bg: 'bg-rose-50', text: 'text-rose-600', gradient: 'from-rose-100/60 to-rose-50/30' },
  'patient-care': { bg: 'bg-blue-50', text: 'text-blue-600', gradient: 'from-blue-100/60 to-blue-50/30' },
  'elderly-care': { bg: 'bg-green-50', text: 'text-green-600', gradient: 'from-green-100/60 to-green-50/30' },
  'driver': { bg: 'bg-indigo-50', text: 'text-indigo-600', gradient: 'from-indigo-100/60 to-indigo-50/30' },
};

const topProfiles = [
  { name: "Priya Kadam", role: "House Maid", image: "https://plus.unsplash.com/premium_photo-1661964243697-734d7bd664ff?q=80&w=400&h=500&auto=format&fit=crop" },
  { name: "Sujata Gupta", role: "Expert Cook", image: "https://plus.unsplash.com/premium_photo-1681483534373-2d9250d3e1e9?w=400&h=500&fit=crop" },
  { name: "Anjali Jadhav", role: "Babysitter", image: "https://images.unsplash.com/photo-1780329944297-b83645a87dd4?q=80&w=400&h=500&auto=format&fit=crop" },
  { name: "Meera Solanki", role: "Nanny", image: "https://images.unsplash.com/photo-1606961339352-e9897cea6b92?q=80&w=400&h=500&auto=format&fit=crop" },
  { name: "Neha Kewat", role: "Japa Maid", image: "https://images.unsplash.com/photo-1714595747121-7067706bc557?q=80&w=400&h=500&auto=format&fit=crop" },
  { name: "Kavita Nehe", role: "Patient Care", image: "https://plus.unsplash.com/premium_photo-1682089874677-3eee554feb19?q=80&w=400&h=500&auto=format&fit=crop" },
  { name: "Sunita Kamble", role: "Elderly Care", image: "https://plus.unsplash.com/premium_photo-1682089949039-131eca5d7285?q=80&w=400&h=500&auto=format&fit=crop" },
  { name: "Ramesh Kori", role: "Professional Driver", image: "https://plus.unsplash.com/premium_photo-1691032016317-639a11f71b85?q=80&w=400&h=500&auto=format&fit=crop" },
];

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
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold mt-0.5 shrink-0" />
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
                        className="text-xs font-bold text-brand-gold hover:text-amber-600 flex items-center gap-1 transition-colors"
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

      {/* Featured Profiles Carousel */}
      <section className="py-16 bg-slate-50 border-y border-slate-200 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>

        <div className="container mx-auto px-4 text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold font-heading text-brand-navy mb-3">Meet Our Verified Professionals</h2>
          <p className="text-slate-500 text-sm max-w-2xl mx-auto">Real profiles of our thoroughly vetted, trained, and highly experienced domestic staff ready to serve your home.</p>
        </div>

        <div className="flex w-fit animate-marquee hover:[animation-play-state:paused] gap-6 px-4 py-4">
          {/* We duplicate the array to create a seamless infinite loop */}
          {[...topProfiles, ...topProfiles, ...topProfiles].map((profile, i) => (
            <div
              key={i}
              className="group relative flex flex-col w-[260px] h-[340px] rounded-2xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-xl hover:border-brand-gold/30 transition-all duration-300 hover:-translate-y-2 shrink-0 cursor-default"
            >
              {/* Colored Top Bar */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brand-gold to-amber-500 z-20"></div>

              {/* Full-card Image */}
              <img
                src={profile.image}
                alt={profile.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 z-0"
              />

              {/* Gradient Overlay for contrast behind the glass */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent z-10 pointer-events-none"></div>

              {/* Light Glassmorphic Info Box */}
              <div className="absolute bottom-3 inset-x-3 z-20 p-2.5 rounded-xl bg-white/70 backdrop-blur-md border border-white/50 shadow-lg flex flex-col items-center text-center group-hover:bg-white/90 transition-colors">
                <h3 className="text-base font-bold text-brand-navy font-heading leading-tight mb-0.5 group-hover:text-brand-gold transition-colors">
                  {profile.name}
                </h3>
                <p className="text-xs font-semibold text-brand-gold mb-2">
                  {profile.role}
                </p>

                {/* Verified Badge */}
                <div className="flex items-center gap-1 bg-green-50/80 border border-green-200/60 px-2 py-1 rounded-full w-full justify-center">
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-600" />
                  <span className="text-[10px] font-bold text-green-700 uppercase tracking-widest">Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-16 md:pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-brand-navy to-slate-900 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/20 rounded-full blur-3xl -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-gold/10 rounded-full blur-2xl translate-y-1/3"></div>
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white font-heading mb-3">
                Can't Find What You Need?
              </h2>
              <p className="text-slate-300 max-w-lg mx-auto mb-6 text-sm">
                We offer custom domestic help solutions tailored to your exact requirements. Tell us what you need and we'll find the perfect match.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-brand-gold hover:bg-amber-500 text-white font-bold py-3.5 px-8 rounded-full shadow-lg shadow-brand-gold/30 transition-all hover:-translate-y-0.5 text-sm">
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
