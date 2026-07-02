import { useState, useEffect, useRef } from 'react';
import { Calculator, IndianRupee, Clock, Briefcase, GraduationCap, Languages, Info, CheckCircle2, User, Phone, MapPin } from 'lucide-react';
import { SERVICES, EXPERIENCE_LEVELS, EDUCATION_LEVELS, LANGUAGES, AREAS_SERVED } from '../utils/constants';
import { calculateSalaryEstimate, formatRupees } from '../utils/salaryData';
import { submitLead } from '../utils/leadCapture';
import { initPartialLeadCapture, updatePartialLeadData, markFormSubmitted } from '../utils/partialLead';

export const SalaryCalculator = () => {
  const [formData, setFormData] = useState({
    serviceId: 'house-maid',
    hours: '12',
    experience: '0-2',
    education: 'below-10th',
    languages: ['hindi'], // We'll map single select to array for calculation compatibility
    name: '',
    phone: '',
    location: ''
  });

  const [estimate, setEstimate] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [phoneError, setPhoneError] = useState('');
  const timeoutRef = useRef(null);

  useEffect(() => {
    initPartialLeadCapture();
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'phone') {
      const numericValue = value.replace(/\D/g, '');
      setFormData(prev => ({ ...prev, phone: numericValue }));
      updatePartialLeadData({ phone: numericValue });
    } else if (name === 'language') {
      setFormData(prev => ({ ...prev, languages: [value] }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
      if (['name', 'serviceId', 'location'].includes(name)) {
        updatePartialLeadData({ [name]: value });
      }
    }
  };

  const handleCalculate = async (e) => {
    e.preventDefault();
    if (formData.phone.length < 10) {
      setPhoneError('Please enter a valid 10-digit number');
      return;
    }
    
    setPhoneError('');
    setIsCalculating(true);
    
    // Calculate estimate immediately to show in UI
    const result = calculateSalaryEstimate(formData);
    setEstimate(result);
    
    // Simulate slight delay for effect
    await new Promise(resolve => setTimeout(resolve, 800));
    setIsCalculating(false);
    
    // Clear previous timeout if user is "playing with prices"
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    
    // Update partial lead so if they leave immediately, it captures the latest state
    updatePartialLeadData({
      message: `Salary Calculator Lead - Est: ${formatRupees(result.min)} - ${formatRupees(result.max)}`,
      type: 'full'
    });
    
    // Debounce the actual lead submission by 15 seconds
    timeoutRef.current = setTimeout(async () => {
      await submitLead({
        name: formData.name,
        phone: formData.phone,
        service: formData.serviceId,
        location: formData.location || 'Mumbai (Not specified)',
        message: `Salary Calculator Lead - Est: ${formatRupees(result.min)} - ${formatRupees(result.max)}`,
        type: 'full',
        source: 'Salary Calculator'
      });
      markFormSubmitted();
    }, 15000); // Wait 15s to ensure they are done changing options
  };

  return (
    <section className="py-10 md:py-16 dark:bg-background bg-slate-50 relative overflow-hidden transition-colors duration-500" id="calculator">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-gold/10 text-brand-gold font-semibold text-xs mb-3 border border-brand-gold/20">
            <Calculator className="w-3.5 h-3.5" />
            <span>Smart Salary Estimator</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold dark:text-white text-brand-navy mb-3 font-heading transition-colors">
            Calculate Estimated Maid Salary in Mumbai
          </h2>
          <p className="text-sm dark:text-slate-400 text-slate-500 transition-colors">
            Get an instant estimate based on current Mumbai market rates, considering experience, hours, and specialized skills.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          
          {/* Left: Calculator Form */}
          <div className="lg:col-span-3 dark:bg-[#1e293b] bg-white rounded-3xl p-5 md:p-6 shadow-xl border dark:border-white/10 border-slate-100 transition-colors">
            <h3 className="text-lg font-bold dark:text-white text-brand-navy mb-4 font-heading border-b dark:border-white/10 pb-3 transition-colors">Customize Requirements</h3>
            
            <form onSubmit={handleCalculate} className="space-y-4">
              
              <div className="grid md:grid-cols-2 gap-4">
                {/* Service Type */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold dark:text-slate-300 text-slate-700 flex items-center gap-1.5 transition-colors">
                    <Briefcase className="w-3.5 h-3.5 text-brand-gold" />
                    Service Type
                  </label>
                  <select 
                    name="serviceId" 
                    value={formData.serviceId} 
                    onChange={handleChange}
                    className="w-full text-sm appearance-none dark:bg-white/5 dark:border-white/10 dark:text-white bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:border-brand-gold transition-colors text-slate-700"
                  >
                    {SERVICES.map(s => (
                      <option key={s.id} value={s.id} className="dark:bg-slate-800 dark:text-white">{s.name}</option>
                    ))}
                  </select>
                </div>

                {/* Working Hours */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold dark:text-slate-300 text-slate-700 flex items-center gap-1.5 transition-colors">
                    <Clock className="w-3.5 h-3.5 text-brand-gold" />
                    Working Hours
                  </label>
                  <select 
                    name="hours" 
                    value={formData.hours} 
                    onChange={handleChange}
                    className="w-full text-sm appearance-none dark:bg-white/5 dark:border-white/10 dark:text-white bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:border-brand-gold transition-colors text-slate-700"
                  >
                    {['4', '6', '8', '10', '12', '24'].map(h => (
                      <option key={h} value={h} className="dark:bg-slate-800 dark:text-white">{h} hours</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {/* Experience */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold dark:text-slate-300 text-slate-700 flex items-center gap-1.5 transition-colors">
                    <IndianRupee className="w-3.5 h-3.5 text-brand-gold" />
                    Experience Required
                  </label>
                  <select 
                    name="experience" 
                    value={formData.experience} 
                    onChange={handleChange}
                    className="w-full text-sm appearance-none dark:bg-white/5 dark:border-white/10 dark:text-white bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:border-brand-gold transition-colors text-slate-700"
                  >
                    {EXPERIENCE_LEVELS.map(e => (
                      <option key={e.value} value={e.value} className="dark:bg-slate-800 dark:text-white">{e.label}</option>
                    ))}
                  </select>
                </div>

                {/* Education */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold dark:text-slate-300 text-slate-700 flex items-center gap-1.5 transition-colors">
                    <GraduationCap className="w-3.5 h-3.5 text-brand-gold" />
                    Education Level
                  </label>
                  <select 
                    name="education" 
                    value={formData.education} 
                    onChange={handleChange}
                    className="w-full text-sm appearance-none dark:bg-white/5 dark:border-white/10 dark:text-white bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:border-brand-gold transition-colors text-slate-700"
                  >
                    {EDUCATION_LEVELS.map(e => (
                      <option key={e.value} value={e.value} className="dark:bg-slate-800 dark:text-white">{e.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {/* Languages */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold dark:text-slate-300 text-slate-700 flex items-center gap-1.5 transition-colors">
                    <Languages className="w-3.5 h-3.5 text-brand-gold" />
                    Primary Language
                  </label>
                  <select 
                    name="language" 
                    value={formData.languages[0]} 
                    onChange={handleChange}
                    className="w-full text-sm appearance-none dark:bg-white/5 dark:border-white/10 dark:text-white bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:border-brand-gold transition-colors text-slate-700"
                  >
                    {LANGUAGES.map(lang => (
                      <option key={lang.value} value={lang.value} className="dark:bg-slate-800 dark:text-white">{lang.label}</option>
                    ))}
                  </select>
                  {formData.languages.includes('english') && (
                    <p className="text-[10px] text-brand-gold flex items-center gap-1 mt-1">
                      <Info className="w-3 h-3 shrink-0" /> English speakers command a premium.
                    </p>
                  )}
                </div>

                {/* Location */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold dark:text-slate-300 text-slate-700 flex items-center gap-1.5 transition-colors">
                    <MapPin className="w-3.5 h-3.5 text-brand-gold" />
                    Location in Mumbai
                  </label>
                  <select 
                    name="location" 
                    required
                    value={formData.location} 
                    onChange={handleChange}
                    className="w-full text-sm appearance-none dark:bg-white/5 dark:border-white/10 dark:text-white bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:border-brand-gold transition-colors text-slate-700"
                  >
                    <option value="" disabled className="dark:bg-slate-800 dark:text-white">Select area</option>
                    {AREAS_SERVED.map(area => (
                      <option key={area} value={area} className="dark:bg-slate-800 dark:text-white">{area}</option>
                    ))}
                    <option value="Other" className="dark:bg-slate-800 dark:text-white">Other</option>
                  </select>
                </div>
              </div>

              <div className="border-t dark:border-white/10 border-slate-200 pt-4 mt-4">
                <h4 className="text-xs font-bold dark:text-white text-brand-navy mb-3 transition-colors uppercase tracking-wider">Your Details to Receive Estimate</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold dark:text-slate-300 text-slate-700 flex items-center gap-1.5 transition-colors">
                      <User className="w-3.5 h-3.5 text-brand-gold" />
                      Full Name *
                    </label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full text-sm dark:bg-white/5 dark:border-white/10 dark:text-white bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:border-brand-gold transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold dark:text-slate-300 text-slate-700 flex items-center gap-1.5 transition-colors">
                      <Phone className="w-3.5 h-3.5 text-brand-gold" />
                      Phone Number *
                    </label>
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      minLength="10"
                      maxLength="10"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="9876543210"
                      className={`w-full text-sm dark:bg-white/5 dark:text-white bg-slate-50 border ${phoneError ? 'border-red-500' : 'dark:border-white/10 border-slate-200'} rounded-lg px-3 py-2 focus:outline-none focus:border-brand-gold transition-colors`}
                    />
                    {phoneError && <p className="text-xs text-red-500 mt-1">{phoneError}</p>}
                  </div>
                </div>
              </div>

              <button 
                type="submit" 
                disabled={isCalculating}
                className="w-full text-sm bg-brand-gold hover:bg-amber-500 text-brand-navy font-bold py-3 rounded-lg shadow-md transition-all active:scale-[0.98] disabled:opacity-70 mt-5"
              >
                {isCalculating ? 'Calculating...' : 'Calculate Estimated Salary'}
              </button>
            </form>
          </div>

          {/* Right: Results */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Estimate Card */}
            <div className="bg-brand-navy rounded-3xl p-6 shadow-xl text-white h-full flex flex-col justify-center">
              <h3 className="text-lg font-medium text-slate-300 mb-2 font-heading">Estimated Monthly Salary</h3>
              
              {!estimate ? (
                <div className="text-center py-10 opacity-70">
                  <Calculator className="w-16 h-16 text-brand-gold mx-auto mb-4 opacity-50" />
                  <p className="text-slate-400">Fill in the requirements and your details to calculate the estimated salary.</p>
                </div>
              ) : (
                <div className="animate-in fade-in zoom-in-95 duration-500">
                  <div className="mt-4 mb-6">
                    <div className="text-4xl lg:text-5xl font-bold text-brand-gold mb-2 tracking-tight">
                      {formatRupees(estimate.min).replace('.00','')}
                      <span className="text-2xl text-slate-400 font-normal mx-2">to</span> 
                      {formatRupees(estimate.max).replace('.00','')}
                    </div>
                    <p className="text-slate-400 text-sm">per month</p>
                  </div>

                  <div className="space-y-3 pt-6 border-t border-slate-700/50 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Base Rate ({formData.hours} hrs)</span>
                      <span>{formatRupees(estimate.breakdown.base).replace('.00','')}</span>
                    </div>
                    {estimate.breakdown.experiencePremium > 0 && (
                      <div className="flex justify-between text-brand-gold">
                        <span>Experience Premium</span>
                        <span>+{formatRupees(estimate.breakdown.experiencePremium).replace('.00','')}</span>
                      </div>
                    )}
                    {estimate.breakdown.educationPremium > 0 && (
                      <div className="flex justify-between text-brand-gold">
                        <span>Education Premium</span>
                        <span>+{formatRupees(estimate.breakdown.educationPremium).replace('.00','')}</span>
                      </div>
                    )}
                    {estimate.breakdown.languagePremium > 0 && (
                      <div className="flex justify-between text-brand-gold">
                        <span>Language (English)</span>
                        <span>+{formatRupees(estimate.breakdown.languagePremium).replace('.00','')}</span>
                      </div>
                    )}
                    
                    <div className="mt-6 p-4 bg-white/5 rounded-xl text-xs text-slate-300 leading-relaxed border border-white/10">
                      <CheckCircle2 className="w-5 h-5 text-green-400 mb-2" />
                      <span className="text-white font-medium block mb-1">Your Request is Sent!</span>
                      We have captured your requirements. One of our experts will call you shortly to discuss available profiles matching this budget.
                    </div>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
