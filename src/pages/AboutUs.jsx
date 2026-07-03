
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { VerificationProcess } from "@/components/VerificationProcess";
import SEOHead from "@/components/SEOHead";
import { BRAND } from "@/utils/constants";
import { Link } from "react-router-dom";
import {
  Users, Award, Clock, ShieldCheck, ArrowRight,
  CheckCircle2, Heart, Target, Sparkles, Phone,
  MapPin, Building2, BadgeCheck
} from "lucide-react";
import { useInView, animations } from "@/hooks/useInView";

const stats = [
  { number: "10,000+", label: "Happy Families Served", icon: Heart },
  { number: "15,000+", label: "Verified Professionals", icon: BadgeCheck },
  { number: "24 Hrs", label: "Average Placement Time", icon: Clock },
  { number: "98%", label: "Client Satisfaction Rate", icon: Target },
];

const values = [
  {
    icon: ShieldCheck,
    title: "Uncompromising Safety",
    description: "Every professional undergoes Aadhaar verification, police background checks, medical screening, and reference verification before placement.",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description: "Rigorous training in hygiene, etiquette, cooking, childcare, and elderly care ensures consistent, premium-quality service delivery.",
    color: "bg-pink-50 text-pink-600",
  },
  {
    icon: Clock,
    title: "Rapid Placement",
    description: "Our large network across Mumbai means we can match you with the right professional within 24 hours — no long waiting periods.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Users,
    title: "Free Replacements",
    description: "Not satisfied? We provide free replacements to ensure you always have a reliable, trustworthy professional in your home.",
    color: "bg-green-50 text-green-600",
  },
];

const timeline = [
  { year: "2024", title: "Founded in Mumbai", description: "Started with a mission to bring trust and transparency to Mumbai's domestic help industry." },
  { year: "2024", title: "1,000 Families Served", description: "Reached our first milestone of placing verified professionals in 1,000 homes across Mumbai." },
  { year: "2025", title: "Expanded Services", description: "Launched specialized services including elderly care, baby care, driver placement, and office support staff." },
  { year: "2025", title: "10,000+ Happy Clients", description: "Became one of Mumbai's most trusted agencies with a 98% client satisfaction rate and growing." },
];

const AboutUsPage = () => {
  const [valuesRef, valuesInView] = useInView({ threshold: 0.1 });
  const [timelineRef, timelineInView] = useInView({ threshold: 0.1 });

  return (
    <div className="min-h-screen dark:bg-background bg-white flex flex-col transition-colors duration-500">
      <SEOHead
        title="About Us — Mumbai's Most Trusted Domestic Help Agency"
        description={`Learn about ${BRAND.name}, Mumbai's leading verified maid and domestic help placement agency. 100% Aadhaar-verified, background-checked house maids, cooks, babysitters, nannies, drivers, and elder care professionals. Serving 10,000+ families across Mumbai since ${BRAND.foundedYear}.`}
      />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pb-28 dark:bg-[#0f172a] bg-slate-50 overflow-hidden transition-colors duration-500">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-gold/15 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-gold/10 backdrop-blur-md border border-brand-gold/20 mb-6 shadow-[0_0_15px_rgba(217,119,6,0.15)]">
              <Sparkles className="w-4 h-4 text-brand-gold" />
              <span className="text-sm font-medium text-brand-gold tracking-wide">Trusted Since {BRAND.foundedYear}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading dark:text-white text-slate-900 mb-6 leading-tight transition-colors">
              We Are <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-amber-200">Verified Maids</span>
            </h1>
            <p className="text-lg md:text-xl dark:text-slate-300 text-slate-600 max-w-2xl mx-auto leading-relaxed mb-10 transition-colors">
              Mumbai's most trusted premium domestic help agency. We connect families with rigorously background-verified professionals — placing your safety and comfort above everything.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-gold to-amber-400 hover:from-amber-400 hover:to-amber-500 text-[#0a1128] font-bold py-4 px-8 rounded-full shadow-[0_0_20px_rgba(217,119,6,0.3)] transition-all hover:-translate-y-0.5">
                Get Free Consultation <ArrowRight className="w-5 h-5" />
              </Link>
              <a href={`tel:${BRAND.phoneClean}`} className="inline-flex items-center justify-center gap-2 dark:bg-white/10 bg-slate-200 hover:bg-slate-300 backdrop-blur-md border dark:border-white/20 border-slate-300 dark:text-white text-slate-900 font-bold py-4 px-8 rounded-full transition-all">
                <Phone className="w-5 h-5" /> Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Row */}
      <section className="relative z-20 -mt-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="dark:bg-[#1e293b] bg-white rounded-2xl shadow-xl border dark:border-white/10 border-slate-100 grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 divide-x-0 lg:divide-x dark:divide-white/10 divide-slate-100 transition-colors">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex items-center gap-4 p-6 md:p-8 justify-center">
                <div className="bg-brand-gold/10 p-3 rounded-xl shrink-0">
                  <stat.icon className="w-6 h-6 text-brand-gold" />
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold dark:text-white text-[#0a1128] font-heading transition-colors">{stat.number}</p>
                  <p className="text-xs md:text-sm dark:text-slate-400 text-slate-500 font-medium transition-colors">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            {/* Image Side */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl relative">
                <img
                  src="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=600&fit=crop"
                  alt={`Professional team of verified domestic help at ${BRAND.name}, Mumbai`}
                  className="w-full h-[400px] md:h-[480px] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="dark:bg-white/10 bg-white/90 backdrop-blur-lg rounded-2xl p-4 border dark:border-white/20 border-white/50">
                    <div className="flex items-center gap-3">
                      <div className="flex -space-x-2">
                        <div className="w-8 h-8 rounded-full bg-brand-gold flex items-center justify-center text-white text-xs font-bold border-2 dark:border-[#0a1128] border-white">R</div>
                        <div className="w-8 h-8 rounded-full bg-brand-gold flex items-center justify-center text-white text-xs font-bold border-2 dark:border-[#0a1128] border-white">P</div>
                        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold border-2 dark:border-[#0a1128] border-white">S</div>
                      </div>
                      <p className="dark:text-white text-slate-900 text-sm font-bold transition-colors">Join 10,000+ families who trust us</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 md:-right-6 dark:bg-[#1e293b] bg-white p-4 rounded-2xl shadow-xl border dark:border-white/10 border-slate-100 hidden md:flex items-center gap-3">
                <div className="bg-green-100 p-2.5 rounded-xl">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-lg font-bold dark:text-white text-brand-navy font-heading transition-colors">100%</p>
                  <p className="text-xs dark:text-slate-400 text-slate-500 font-medium transition-colors">Verified Staff</p>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-gold/10 text-brand-gold font-semibold text-xs mb-5 border border-brand-gold/20">
                <Building2 className="w-4 h-4" />
                <span>Our Story</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold dark:text-white text-brand-navy font-heading mb-6 leading-tight transition-colors">
                Built on Trust, Driven by Excellence
              </h2>
              <div className="space-y-4 dark:text-slate-300 text-slate-600 leading-relaxed transition-colors">
                <p>
                  {BRAND.name} was founded with a simple belief: every family in Mumbai deserves access to trustworthy, professionally trained domestic help — without the uncertainty and risk that comes with hiring through local brokers.
                </p>
                <p>
                  Our founder experienced first-hand the challenges of finding reliable household staff in a city as busy as Mumbai. After multiple bad experiences with unverified agencies that provided untrained, unscreened staff, the idea for {BRAND.name} was born.
                </p>
                <p>
                  Today, we have successfully placed over <strong className="dark:text-brand-gold text-brand-navy">15,000 verified professionals</strong> across <strong className="dark:text-brand-gold text-brand-navy">10,000+ households</strong> in Mumbai — from Andheri to Borivali, Bandra to Thane, and Navi Mumbai to South Mumbai.
                </p>
              </div>
              <div className="flex items-center gap-4 mt-8 pt-6 border-t dark:border-white/10 border-slate-100 transition-colors">
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <MapPin className="w-4 h-4 text-brand-gold" />
                  <span>Serving all of Mumbai & Navi Mumbai</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-20 dark:bg-background bg-white transition-colors duration-500">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-gold/10 text-brand-gold font-semibold text-xs mb-4 border border-brand-gold/20">
              <Award className="w-4 h-4" />
              <span>Our Core Values</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold dark:text-white text-brand-navy font-heading mb-3 transition-colors">
              What Makes Us Different
            </h2>
            <p className="dark:text-slate-300 text-slate-600 text-sm md:text-base transition-colors">
              We don't just place staff — we build long-term trust with every family we serve.
            </p>
          </div>

          <div
            ref={valuesRef}
            className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto transition-all duration-1000 ${valuesInView ? animations.fadeUp.in : animations.fadeUp.out}`}
          >
            {values.map((value, idx) => (
              <div key={idx} className="dark:bg-[#1e293b] bg-slate-50 rounded-2xl p-6 border dark:border-white/10 border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all group">
                <div className={`${value.color} p-3 rounded-xl w-fit mb-5 group-hover:scale-110 transition-transform`}>
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold dark:text-white text-brand-navy font-heading mb-2 transition-colors">{value.title}</h3>
                <p className="dark:text-slate-300 text-slate-600 text-sm leading-relaxed transition-colors">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <VerificationProcess />

      {/* Our Journey Timeline */}
      <section className="py-16 md:py-20 bg-brand-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-gold/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-gold/5 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white font-semibold text-xs mb-4 border border-white/20">
              <Sparkles className="w-4 h-4 text-brand-gold" />
              <span>Our Journey</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-heading mb-3">
              From Idea to Mumbai's Trusted Agency
            </h2>
            <p className="text-slate-400 text-sm md:text-base">
              A quick look at how we grew from a small idea to serving thousands of families across Mumbai.
            </p>
          </div>

          <div
            ref={timelineRef}
            className={`max-w-3xl mx-auto transition-all duration-1000 ${timelineInView ? animations.fadeUp.in : animations.fadeUp.out}`}
          >
            {timeline.map((item, idx) => (
              <div key={idx} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-brand-gold/20 border-2 border-brand-gold flex items-center justify-center shrink-0">
                    <span className="text-xs font-bold text-brand-gold">{item.year}</span>
                  </div>
                  {idx < timeline.length - 1 && (
                    <div className="w-px h-full bg-white/10 mt-2"></div>
                  )}
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10 flex-1 hover:bg-white/10 transition-colors">
                  <h3 className="text-white font-bold font-heading mb-1">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 dark:bg-[#1e293b] bg-white transition-colors duration-500">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto dark:bg-gradient-to-br dark:from-[#0a1128] dark:to-brand-gold/10 dark:border-white/10 bg-gradient-to-br from-slate-50 to-brand-gold/5 rounded-3xl p-8 md:p-12 border border-slate-200 text-center relative overflow-hidden transition-colors">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold dark:text-white text-brand-navy font-heading mb-4 transition-colors">
                Ready to Hire a Trusted Professional?
              </h2>
              <p className="dark:text-slate-300 text-slate-600 max-w-xl mx-auto mb-8 transition-colors">
                Get verified profiles sent directly to your WhatsApp within 30 minutes. 100% background-checked. Free replacement guarantee.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-brand-gold hover:bg-amber-500 text-white font-bold py-4 px-8 rounded-full shadow-lg shadow-brand-gold/30 transition-all hover:-translate-y-0.5">
                  Get Free Consultation <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/services" className="inline-flex items-center justify-center gap-2 dark:bg-[#0f172a] dark:hover:bg-[#1e293b] dark:text-white dark:border-white/20 bg-white hover:bg-slate-50 text-brand-navy font-bold py-4 px-8 rounded-full border border-slate-200 shadow-sm transition-all">
                  Explore Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUsPage;
