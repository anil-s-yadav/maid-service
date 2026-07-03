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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

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
  'house-maid': { bg: 'dark:bg-amber-900/30 bg-amber-50', text: 'dark:text-amber-400 text-amber-600', gradient: 'dark:from-amber-900/20 dark:to-amber-900/5 from-amber-100/60 to-amber-50/30' },
  'cook': { bg: 'dark:bg-orange-900/30 bg-orange-50', text: 'dark:text-orange-400 text-orange-600', gradient: 'dark:from-orange-900/20 dark:to-orange-900/5 from-orange-100/60 to-orange-50/30' },
  'babysitter': { bg: 'dark:bg-pink-900/30 bg-pink-50', text: 'dark:text-pink-400 text-pink-600', gradient: 'dark:from-pink-900/20 dark:to-pink-900/5 from-pink-100/60 to-pink-50/30' },
  'nanny': { bg: 'dark:bg-purple-900/30 bg-purple-50', text: 'dark:text-purple-400 text-purple-600', gradient: 'dark:from-purple-900/20 dark:to-purple-900/5 from-purple-100/60 to-purple-50/30' },
  'japa-maid': { bg: 'dark:bg-rose-900/30 bg-rose-50', text: 'dark:text-rose-400 text-rose-600', gradient: 'dark:from-rose-900/20 dark:to-rose-900/5 from-rose-100/60 to-rose-50/30' },
  'patient-care': { bg: 'dark:bg-blue-900/30 bg-blue-50', text: 'dark:text-blue-400 text-blue-600', gradient: 'dark:from-blue-900/20 dark:to-blue-900/5 from-blue-100/60 to-blue-50/30' },
  'elderly-care': { bg: 'dark:bg-green-900/30 bg-green-50', text: 'dark:text-green-400 text-green-600', gradient: 'dark:from-green-900/20 dark:to-green-900/5 from-green-100/60 to-green-50/30' },
  'driver': { bg: 'dark:bg-indigo-900/30 bg-indigo-50', text: 'dark:text-indigo-400 text-indigo-600', gradient: 'dark:from-indigo-900/20 dark:to-indigo-900/5 from-indigo-100/60 to-indigo-50/30' },
};

const topProfiles = [
  { name: "Priya Kadam", role: "House Maid", image: "https://plus.unsplash.com/premium_photo-1661964243697-734d7bd664ff?q=70&w=400&h=500&auto=format&fit=crop" },
  { name: "Sujata Gupta", role: "Expert Cook", image: "https://plus.unsplash.com/premium_photo-1681483534373-2d9250d3e1e9?q=70&w=400&h=500&auto=format&fit=crop" },
  { name: "Anjali Jadhav", role: "Babysitter", image: "https://images.unsplash.com/photo-1780329944297-b83645a87dd4?q=70&w=400&h=500&auto=format&fit=crop" },
  { name: "Meera Solanki", role: "Nanny", image: "https://images.unsplash.com/photo-1606961339352-e9897cea6b92?q=70&w=400&h=500&auto=format&fit=crop" },
  { name: "Neha Kewat", role: "Japa Maid", image: "https://images.unsplash.com/photo-1714595747121-7067706bc557?q=70&w=400&h=500&auto=format&fit=crop" },
  { name: "Kavita Nehe", role: "Patient Care", image: "https://plus.unsplash.com/premium_photo-1682089874677-3eee554feb19?q=70&w=400&h=500&auto=format&fit=crop" },
  { name: "Sunita Kamble", role: "Elderly Care", image: "https://images.unsplash.com/photo-1720471563315-0f3cdd396f7d?q=70&w=400&h=500&auto=format&fit=crop" },
  { name: "Ramesh Kori", role: "Professional Driver", image: "https://plus.unsplash.com/premium_photo-1691032016317-639a11f71b85?q=70&w=400&h=500&auto=format&fit=crop" },
];

const ServicesPage = () => {
  const [gridRef, gridInView] = useInView({ threshold: 0.05 });
  const plugin = useRef(
    Autoplay({ delay: 2500, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <div className="min-h-screen dark:bg-[#0a0f1e] bg-white flex flex-col transition-colors duration-500">
      <SEOHead
        title="Our Services — Maid, Cook, Babysitter, Nanny, Driver & More"
        description={`${BRAND.name} offers 8+ professional domestic help services in Mumbai — house maids, cooks, babysitters, nannies, japa maids, patient care, elderly care, and drivers. All 100% Aadhaar verified.`}
      />
      <Header />

      {/* Hero */}
      <section className="relative pt-24 pb-16 bg-[#0a1128] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-gold/15 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-gold/10 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-gold/10 backdrop-blur-md border border-brand-gold/20 mb-4 shadow-[0_0_15px_rgba(217,119,6,0.15)]">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
            <span className="text-xs font-medium text-brand-gold tracking-wide">8+ Premium Services</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-white mb-4 leading-tight max-w-4xl mx-auto">
            Domestic Help Services <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-amber-200">You Can Trust</span>
          </h1>
          <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto mb-6">
            Every professional is Aadhaar-verified, background-checked, medically screened, and trained by our team before placement.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-gold to-amber-400 hover:from-amber-400 hover:to-amber-500 text-[#0a1128] font-bold py-2.5 px-6 rounded-full shadow-[0_0_20px_rgba(217,119,6,0.3)] transition-all hover:-translate-y-0.5 text-sm">
              Get Free Consultation <ArrowRight className="w-4 h-4" />
            </Link>
            <a href={`tel:${BRAND.phoneClean}`} className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-bold py-2.5 px-6 rounded-full transition-all text-sm">
              <Phone className="w-4 h-4" /> {BRAND.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-10 md:py-16 relative z-20 -mt-8">
        <div className="container mx-auto px-4 md:px-6">
          <div
            ref={gridRef}
            className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto transition-all duration-1000 ${gridInView ? animations.fadeUp.in : animations.fadeUp.out}`}
          >
            {SERVICES.map((service) => {
              const Icon = iconMap[service.id] || Home;
              const colors = colorMap[service.id] || colorMap['house-maid'];
              return (
                <Link
                  key={service.id}
                  to={`/services/${service.id}`}
                  className="dark:bg-[#1e293b] bg-white rounded-2xl overflow-hidden border dark:border-white/10 border-amber-200/60 shadow-[0_2px_12px_-2px_rgba(217,119,6,0.1)] hover:shadow-[0_8px_30px_-4px_rgba(217,119,6,0.25)] hover:border-amber-300/80 dark:hover:border-amber-500/50 transition-all duration-300 group flex flex-col cursor-pointer"
                >
                  {/* Gradient Top Strip */}
                  <div className={`bg-gradient-to-r ${colors.gradient} p-5 pb-4`}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`${colors.bg} p-2.5 rounded-xl border dark:border-white/10 border-slate-100 transition-colors`}>
                        <Icon className={`w-5 h-5 ${colors.text}`} />
                      </div>
                      <h3 className="text-lg font-bold dark:text-white text-brand-navy font-heading transition-colors">{service.name}</h3>
                    </div>
                    <p className="dark:text-white/80 text-slate-600 text-xs leading-relaxed line-clamp-2 transition-colors">{service.description}</p>
                  </div>

                  {/* Includes */}
                  <div className="p-5 pt-4 flex-grow">
                    <p className="text-[10px] font-bold dark:text-slate-400 text-slate-400 uppercase tracking-wider mb-2.5 transition-colors">What's Included</p>
                    <ul className="space-y-1.5">
                      {service.includes.slice(0, 4).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                          <span className="text-xs dark:text-slate-300 text-slate-600 transition-colors">{item}</span>
                        </li>
                      ))}
                      {service.includes.length > 4 && (
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                          <span className="text-xs dark:text-slate-300 text-slate-600 transition-colors capitalize">{service.includes[service.includes.length - 1]}</span>
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Footer */}
                  <div className="px-5 pb-5 mt-auto">
                    <div className="flex items-center justify-between pt-3 border-t dark:border-white/10 border-slate-100 transition-colors">
                      <div className="flex flex-col">
                        <span className="text-[10px] dark:text-slate-400 text-slate-400 font-medium uppercase tracking-wider mb-0.5 transition-colors">Starting from</span>
                        <div className="flex items-baseline">
                          <span className="text-lg font-bold dark:text-white text-brand-navy font-heading transition-colors">₹{service.baseRate.toLocaleString()}*</span>
                          <span className="text-xs dark:text-slate-400 text-slate-400 ml-1 transition-colors">/mo</span>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-brand-gold flex items-center gap-1 transition-colors group-hover:text-amber-600">
                        Details <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-8 max-w-4xl mx-auto text-center px-4">
            <p className="text-[11px] text-slate-400 italic">
              *Prices shown are estimated starting base rates for standard 8-hour shifts. Actual salaries may vary significantly based on your exact location within Mumbai, the candidate's years of experience, specific skillset, working hours, and scope of work. Final pricing is agreed upon mutually between the employer and the candidate during the interview process.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Profiles Carousel */}
      <section className="py-16 dark:bg-[#0a1128] bg-slate-50 border-y dark:border-white/10 border-slate-200 overflow-hidden relative transition-colors duration-500">
        <div className="absolute top-0 left-0 w-8 md:w-16 h-full bg-gradient-to-r dark:from-[#0a1128] from-slate-50 to-transparent z-10 pointer-events-none transition-colors"></div>
        <div className="absolute top-0 right-0 w-8 md:w-16 h-full bg-gradient-to-l dark:from-[#0a1128] from-slate-50 to-transparent z-10 pointer-events-none transition-colors"></div>

        <div className="container mx-auto px-4 text-center mb-10 relative z-20">
          <h2 className="text-2xl md:text-3xl font-bold font-heading dark:text-white text-brand-navy mb-3 transition-colors">Meet Our Verified Professionals</h2>
          <p className="dark:text-slate-400 text-slate-500 text-sm max-w-2xl mx-auto transition-colors">Real profiles of our thoroughly vetted, trained, and highly experienced domestic staff ready to serve your home.</p>
        </div>

        <div className="px-0 md:px-4">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent className="-ml-4 py-4">
              {[...topProfiles, ...topProfiles].map((profile, i) => (
                <CarouselItem key={i} className="pl-4 basis-[280px] shrink-0">
                  <div className="group relative flex flex-col w-full h-[340px] rounded-2xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-xl hover:border-brand-gold/30 transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                    {/* Colored Top Bar */}
                    <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brand-gold to-amber-500 z-20"></div>

                    {/* Full-card Image */}
                    <img
                      src={profile.image}
                      alt={profile.name}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 z-0 pointer-events-none"
                    />

                    {/* Gradient Overlay for contrast behind the glass */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent z-10 pointer-events-none"></div>

                    {/* Light Glassmorphic Info Box */}
                    <div className="absolute bottom-3 inset-x-3 z-20 p-2.5 rounded-xl dark:bg-[#1e293b]/70 bg-white/30 backdrop-blur-md border dark:border-white/10 border-white/50 shadow-lg flex flex-col items-center text-center dark:group-hover:bg-[#1e293b]/90 group-hover:bg-white/90 transition-colors pointer-events-none">
                      <h3 className="text-base font-bold dark:text-white text-brand-navy font-heading leading-tight mb-0.5 group-hover:text-brand-gold dark:group-hover:text-brand-gold transition-colors">
                        {profile.name}
                      </h3>
                      <p className="text-xs font-bold dark:text-slate-300 text-brand-navy mb-2 transition-colors">
                        {profile.role}
                      </p>

                      {/* Verified Badge */}
                      <div className="flex items-center gap-1 bg-green-50/80 border border-green-200/60 px-2 py-1 rounded-full w-full justify-center">
                        <CheckCircle2 className="w-3.5 h-3.5 text-green-600" />
                        <span className="text-[10px] font-bold text-green-700 uppercase tracking-widest">Verified</span>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
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
    </div>
  );
};

export default ServicesPage;
