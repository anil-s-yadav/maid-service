import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Shield, Star, Sparkles, MapPin, CheckCircle, UserCircle, Phone } from "lucide-react";
import { BRAND, SERVICES, AREAS_SERVED } from "../utils/constants";
import { useInView, animations } from "../hooks/useInView";
import { submitLead } from '../utils/leadCapture';
import { BadgeCheck } from "lucide-react";
import { initPartialLeadCapture, updatePartialLeadData, markFormSubmitted, resetPartialLead } from '../utils/partialLead';
import { LocationSearch } from "./LocationSearch";

export const Hero = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", service: "", location: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [titleRef, titleInView] = useInView();
  const [formRef, formInView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    initPartialLeadCapture();
    return () => resetPartialLead();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    updatePartialLeadData({ [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.phone.length < 10) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }
    
    if (isSubmitting) return;

    setIsSubmitting(true);
    try {
      await submitLead({
        name: formData.name,
        phone: formData.phone,
        service: formData.service || 'Not specified',
        location: formData.location || 'Not specified',
        type: 'full',
        source: 'Hero Form'
      });

      markFormSubmitted();
      setSubmitted(true);
    } catch (error) {
      console.error("Form submission failed", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative pt-24 pb-10 md:pt-28 md:pb-14 flex items-center overflow-hidden dark:bg-[#0f172a] bg-slate-50 transition-colors duration-500">
      {/* Background Glows */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/15 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-gold/15 rounded-full blur-[90px] translate-y-1/3 -translate-x-1/4"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center max-w-7xl mx-auto">
          
          {/* Left Content */}
          <div className="text-center lg:text-left pt-4 lg:pt-0">
            {/* Top Badge */}
            <div 
              ref={titleRef}
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full dark:bg-[#1e293b]/80 bg-white/80 backdrop-blur-sm border dark:border-white/10 border-slate-200 mb-6 shadow-sm transition-all duration-700 ${titleInView ? animations.fadeUp : 'opacity-0 translate-y-4'}`}
            >
              <BadgeCheck className="w-4 h-4 text-brand-gold" />
              <span className="text-xs md:text-sm font-bold dark:text-slate-200 text-slate-800 tracking-wide uppercase transition-colors">
                #1 Trusted Agency in Mumbai
              </span>
            </div>
            
            {/* Main Headline */}
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold dark:text-white text-slate-900 leading-[1.15] mb-6 font-heading transition-all duration-700 delay-100 ${titleInView ? animations.fadeUp : 'opacity-0 translate-y-4'}`}>
              Find Your Perfect <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-amber-200 relative inline-block">
                Domestic Help
                <div className="absolute -bottom-2 left-0 right-0 h-3 bg-brand-gold/20 -rotate-1 blur-sm rounded-full"></div>
              </span>
            </h1>
            
            <p className={`text-lg md:text-xl dark:text-slate-300 text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed transition-all duration-700 delay-200 ${titleInView ? animations.fadeUp : 'opacity-0 translate-y-4'}`}>
              Get verified, trained, and reliable maids, cooks, and nannies in Mumbai. 24-hour placement with a free replacement guarantee.
            </p>

            {/* Trust Indicators */}
            <div className={`flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-6 transition-all duration-700 delay-300 ${titleInView ? animations.fadeUp : 'opacity-0 translate-y-4'}`}>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className={`w-8 h-8 rounded-full border-2 dark:border-[#0f172a] border-slate-50 overflow-hidden bg-slate-200 transition-colors`}>
                      <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                    </div>
                  ))}
                </div>
                <div className="text-left ml-2">
                  <div className="flex text-brand-gold">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <div className="text-xs font-bold dark:text-white text-slate-900 transition-colors">10,000+ Families</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="w-full max-w-md mx-auto lg:ml-auto perspective-1000">
            <div 
              ref={formRef}
              className={`relative dark:bg-[#1e293b]/90 bg-white/90 backdrop-blur-xl border dark:border-white/10 border-slate-200 rounded-3xl p-6 shadow-2xl dark:shadow-[0_10px_40px_rgba(0,0,0,0.5)] transition-all duration-1000 ${formInView ? 'opacity-100 rotate-y-0 translate-x-0' : 'opacity-0 rotate-y-12 translate-x-12'}`}
            >
              <div className="mb-5 text-center">
                <h2 className="text-xl md:text-2xl font-bold dark:text-white text-slate-900 mb-1 font-heading transition-colors">Book Free Consultation</h2>
                <p className="text-brand-gold text-[10px] md:text-[11px] font-bold uppercase tracking-widest">Profiles on WhatsApp in 30 Min</p>
              </div>

              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-14 h-14 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/30">
                    <CheckCircle className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold dark:text-white text-slate-900 mb-2 transition-colors">Request Received!</h4>
                  <p className="dark:text-slate-300 text-slate-600 text-sm transition-colors">Our team will call you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">

                  {/* Name */}
                  <div className="relative">
                    <UserCircle className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="w-full dark:bg-slate-900/50 bg-slate-50 border dark:border-white/5 border-slate-300 dark:text-white text-slate-900 text-sm rounded-xl pl-10 pr-4 py-2.5 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors placeholder:text-slate-500"
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="relative">
                    <span className="absolute left-3.5 top-3 text-slate-400 text-sm font-medium">+91</span>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => handleChange({ target: { name: 'phone', value: e.target.value.replace(/\D/g, '') } })}
                      placeholder="Mobile Number (10 digits)"
                      className="w-full dark:bg-slate-900/50 bg-slate-50 border dark:border-white/5 border-slate-300 dark:text-white text-slate-900 text-sm rounded-xl pl-11 pr-4 py-2.5 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors placeholder:text-slate-500"
                    />
                  </div>

                  {/* Location */}
                  <div className="relative">
                    <MapPin className="absolute left-3.5 top-3 w-4 h-4 text-slate-400 z-10 pointer-events-none" />
                    <LocationSearch 
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      required={true}
                      placeholder="Select Location (Mumbai)"
                      className="w-full dark:bg-slate-900/50 bg-slate-50 border dark:border-white/5 border-slate-300 dark:text-white text-slate-900 text-sm rounded-xl pl-10 pr-4 py-2.5 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors placeholder:text-slate-500"
                    />
                  </div>

                  {/* Service Selection */}
                  <div className="relative">
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full dark:bg-slate-900/50 bg-slate-50 border dark:border-white/5 border-slate-300 dark:text-white text-slate-900 text-sm rounded-xl px-4 py-2.5 appearance-none focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors dark:[&>option]:bg-slate-900 [&>option]:bg-white"
                    >
                      <option value="" disabled>Looking for...</option>
                      {SERVICES.map(s => (
                        <option key={s.id} value={s.id}>{s.name}</option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                      <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-yellow-400 to-brand-gold hover:from-yellow-300 hover:to-yellow-500 text-brand-navy font-bold py-3.5 rounded-xl shadow-[0_0_15px_rgba(217,119,6,0.4)] transition-all hover:shadow-[0_0_20px_rgba(217,119,6,0.6)] mt-2 active:scale-[0.98] disabled:opacity-70 text-sm"
                  >
                    {isSubmitting ? 'Sending...' : 'Get Free Call Back'}
                  </button>
                </form>
              )}

              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-400 font-medium">
                <CheckCircle className="w-4 h-4 text-brand-gold" />
                <span>No commitment required. 100% free consultation.</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
