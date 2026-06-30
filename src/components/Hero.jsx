import { useState } from "react";
import { Link } from "react-router-dom";
import { Shield, Star, Clock, Sparkles, MapPin, CheckCircle } from "lucide-react";
import { BRAND, SERVICES } from "../utils/constants";
import { useInView, animations } from "../hooks/useInView";

export const Hero = () => {
  const [service, setService] = useState("");
  const [phone, setPhone] = useState("");
  
  const [titleRef, titleInView] = useInView();
  const [formRef, formInView] = useInView({ threshold: 0.2 });

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden bg-brand-navy">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-teal/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-gold/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left: Text Content */}
          <div ref={titleRef} className={`transition-all duration-1000 ${titleInView ? animations.fadeUp.in : animations.fadeUp.out}`}>
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8">
              <Sparkles className="w-4 h-4 text-brand-gold" />
              <span className="text-sm font-medium text-white tracking-wide">Mumbai's #1 Trusted Maid Agency</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
              Hire <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-blue-400">Verified</span><br />
              Domestic Help
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-lg leading-relaxed">
              Get reliable, background-checked maids, cooks, and babysitters in Mumbai. Fast placement, free replacements, and 100% peace of mind.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="bg-brand-teal/20 p-3 rounded-2xl">
                  <Shield className="w-6 h-6 text-brand-teal" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">Aadhaar Verified</h3>
                  <p className="text-slate-400 text-sm mt-1">Strict background checks</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-brand-gold/20 p-3 rounded-2xl">
                  <Star className="w-6 h-6 text-brand-gold" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">Trained Staff</h3>
                  <p className="text-slate-400 text-sm mt-1">Professional & experienced</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right: Booking Form (Glassmorphism) */}
          <div ref={formRef} className={`relative lg:ml-auto w-full max-w-md transition-all duration-1000 delay-300 ${formInView ? animations.scaleUp.in : animations.scaleUp.out}`}>
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-teal to-blue-500 rounded-3xl blur opacity-30"></div>
            
            <div className="relative glass-dark rounded-3xl p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">Book Your Help</h2>
                <p className="text-slate-400 text-sm">Tell us what you need, we'll do the rest.</p>
              </div>

              <form className="space-y-5">
                
                {/* Service Selection */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">I am looking for a</label>
                  <div className="relative">
                    <select 
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full bg-slate-800/50 border border-slate-700 text-white rounded-xl px-4 py-3.5 appearance-none focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal transition-colors"
                    >
                      <option value="" disabled>Select a service...</option>
                      {SERVICES.map(s => (
                        <option key={s.id} value={s.id}>{s.name}</option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                      <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Location in Mumbai</label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                    <input 
                      type="text" 
                      placeholder="e.g. Andheri West, Powai" 
                      className="w-full bg-slate-800/50 border border-slate-700 text-white rounded-xl pl-12 pr-4 py-3.5 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal transition-colors placeholder:text-slate-500"
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Your Phone Number</label>
                  <div className="relative">
                    <span className="absolute left-4 top-3.5 text-slate-400 font-medium">+91</span>
                    <input 
                      type="tel" 
                      maxLength="10"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                      placeholder="98765 43210" 
                      className="w-full bg-slate-800/50 border border-slate-700 text-white rounded-xl pl-14 pr-4 py-3.5 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal transition-colors placeholder:text-slate-500"
                    />
                  </div>
                </div>

                <button 
                  type="button" 
                  className="w-full bg-brand-teal hover:bg-teal-500 text-white font-bold py-4 rounded-xl shadow-[0_0_20px_rgba(13,148,136,0.4)] transition-all hover:shadow-[0_0_25px_rgba(13,148,136,0.6)] mt-4 active:scale-[0.98]"
                >
                  Get Free Call Back
                </button>
              </form>

              <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-400">
                <CheckCircle className="w-4 h-4 text-brand-teal" />
                <span>No commitment required. 100% free consultation.</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
