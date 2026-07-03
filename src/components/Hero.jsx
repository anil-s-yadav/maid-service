import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Shield, Star, Sparkles, MapPin, CheckCircle, UserCircle, Phone } from "lucide-react";
import { BRAND, SERVICES, AREAS_SERVED } from "../utils/constants";
import { useInView, animations } from "../hooks/useInView";
import { submitLead } from '../utils/leadCapture';
import { BadgeCheck } from "lucide-react";
import { initPartialLeadCapture, updatePartialLeadData, markFormSubmitted, resetPartialLead } from '../utils/partialLead';

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
    if (formData.phone.length < 10 || isSubmitting) return;

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
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">

          {/* Left: Text Content */}
          <div ref={titleRef} className={`lg:col-span-6 xl:col-span-6 transition-all duration-1000 ${titleInView ? animations.fadeUp.in : animations.fadeUp.out}`}>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full dark:bg-white/[0.08] bg-brand-gold/10 backdrop-blur-md border border-brand-gold/30 mb-5 shadow-[0_0_15px_rgba(217,119,6,0.15)]">
              <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
              <span className="text-[11px] font-bold text-brand-gold tracking-widest uppercase">Mumbai's Premium Agency</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold dark:text-white text-slate-900 leading-[1.15] mb-5 tracking-tight font-heading transition-colors">
              Hire <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-amber-400 to-brand-gold">Trusted & Verified</span><br />
              Domestic Help
            </h1>

            <p className="text-base md:text-lg dark:text-slate-300 text-slate-600 mb-8 max-w-xl leading-relaxed transition-colors">
              Experience peace of mind with our 100% Aadhaar-verified, medically screened, and professionally trained maids, cooks, and nannies.
            </p>

            <div className="flex flex-wrap gap-3">  <div className="flex items-center gap-2 dark:bg-white/[0.06] bg-slate-200 backdrop-blur-md dark:border-white/10 border-slate-300 px-4 py-2 rounded-xl shadow-lg dark:hover:bg-white/[0.1] hover:bg-slate-300 transition-colors">
              <BadgeCheck className="w-4 h-4 text-brand-gold" />
              <span className="dark:text-white text-slate-800 text-[11px] font-bold uppercase tracking-wider">Police & Aadhaar Verified</span>
            </div>
              <div className="flex items-center gap-2 dark:bg-white/[0.06] bg-slate-200 backdrop-blur-md dark:border-white/10 border-slate-300 px-4 py-2 rounded-xl shadow-lg dark:hover:bg-white/[0.1] hover:bg-slate-300 transition-colors">
                <Star className="w-4 h-4 text-brand-gold" />
                <span className="dark:text-white text-slate-800 text-[11px] font-bold uppercase tracking-wider">Fully Trained</span>
              </div>

            </div>

          </div>

          {/* Right: Booking Form (Glassmorphism) */}
          <div ref={formRef} className={`lg:col-span-6 xl:col-span-6 relative w-full max-w-[460px] mx-auto lg:ml-0 lg:mr-auto transition-all duration-1000 delay-300 ${formInView ? animations.scaleUp.in : animations.scaleUp.out}`}>
            <div className="absolute -inset-0.5 bg-gradient-to-b from-brand-gold/50 to-brand-gold/30 rounded-3xl blur-md opacity-40"></div>

            <div className="relative dark:bg-[#1e293b]/90 bg-white/90 backdrop-blur-xl border dark:border-white/10 border-slate-200 rounded-3xl p-6 shadow-2xl dark:shadow-[0_10px_40px_rgba(0,0,0,0.5)] transition-colors">
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
                      minLength="10"
                      maxLength="10"
                      value={formData.phone}
                      onChange={(e) => handleChange({ target: { name: 'phone', value: e.target.value.replace(/\D/g, '') } })}
                      placeholder="Mobile Number"
                      className="w-full dark:bg-slate-900/50 bg-slate-50 border dark:border-white/5 border-slate-300 dark:text-white text-slate-900 text-sm rounded-xl pl-11 pr-4 py-2.5 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors placeholder:text-slate-500"
                    />
                  </div>

                  {/* Location */}
                  <div className="relative">
                    <MapPin className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                    <select
                      name="location"
                      required
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full dark:bg-slate-900/50 bg-slate-50 border dark:border-white/5 border-slate-300 dark:text-white text-slate-900 text-sm rounded-xl pl-10 pr-4 py-2.5 appearance-none focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors dark:[&>option]:bg-slate-900 [&>option]:bg-white"
                    >
                      <option value="" disabled>Select Location (Mumbai)</option>
                      {AREAS_SERVED.map(area => (
                        <option key={area} value={area}>{area}</option>
                      ))}
                      <option value="Other">Other Mumbai Area</option>
                    </select>
                    <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                      <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div className="relative">
                    <select
                      name="service"
                      required
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
