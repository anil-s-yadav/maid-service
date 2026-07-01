import { useState, useEffect } from 'react';
import { Calculator, IndianRupee, Clock, Briefcase, GraduationCap, Languages, Info, CheckCircle2 } from 'lucide-react';
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
    languages: ['hindi'],
    name: '',
    phone: '',
    location: ''
  });

  const [estimate, setEstimate] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const [phoneError, setPhoneError] = useState('');

  // Update estimate on any change
  useEffect(() => {
    initPartialLeadCapture();
    const result = calculateSalaryEstimate(formData);
    setEstimate(result);
  }, [formData.serviceId, formData.hours, formData.experience, formData.education, formData.languages]);

  const updateLeadData = (field, value) => {
    setFormData(prev => ({...prev, [field]: value}));
    if (['name', 'phone', 'location', 'serviceId'].includes(field)) {
      updatePartialLeadData({ [field]: value });
    }
  };

  const handleLanguageToggle = (lang) => {
    setFormData(prev => {
      const langs = [...prev.languages];
      if (langs.includes(lang)) {
        if (langs.length > 1) { // Keep at least one language
          return { ...prev, languages: langs.filter(l => l !== lang) };
        }
        return prev;
      }
      return { ...prev, languages: [...langs, lang] };
    });
  };

  const handleLeadSubmit = async (e) => {
    e.preventDefault();
    if (formData.phone.length < 10) {
      setPhoneError('Please enter a valid 10-digit number');
      return;
    }
    
    setPhoneError('');
    setIsCalculating(true);
    
    // Simulate slight delay for effect
    await new Promise(resolve => setTimeout(resolve, 800));
    
    await submitLead({
      name: formData.name,
      phone: formData.phone,
      service: formData.serviceId,
      location: formData.location,
      message: `Salary Calculator Lead - Est: ${formatRupees(estimate.min)} - ${formatRupees(estimate.max)}`,
      type: 'full'
    });
    
    markFormSubmitted();
    setLeadSubmitted(true);
    setIsCalculating(false);
  };

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden" id="calculator">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-[100px] -translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-gold/10 text-brand-gold font-semibold text-sm mb-6 border border-brand-gold/20">
            <Calculator className="w-4 h-4" />
            <span>Smart Salary Estimator</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6 font-heading">
            Calculate Estimated Maid Salary in Mumbai
          </h2>
          <p className="text-lg text-slate-600">
            Get an instant estimate based on current Mumbai market rates, considering experience, hours, and specialized skills.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          
          {/* Left: Calculator Form */}
          <div className="lg:col-span-3 bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-slate-100">
            <h3 className="text-xl font-bold text-brand-navy mb-6 font-heading border-b pb-4">Customize Requirements</h3>
            
            <div className="space-y-8">
              
              {/* Service Type */}
              <div className="space-y-3">
                <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-brand-teal" />
                  Service Type
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {SERVICES.map(s => (
                    <button
                      key={s.id}
                      onClick={() => setFormData({...formData, serviceId: s.id})}
                      className={`px-4 py-3 rounded-xl border text-sm font-medium transition-all ${
                        formData.serviceId === s.id 
                          ? 'bg-brand-teal text-white border-brand-teal shadow-md shadow-brand-teal/20' 
                          : 'bg-white text-slate-600 border-slate-200 hover:border-brand-teal/50'
                      }`}
                    >
                      {s.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Working Hours */}
              <div className="space-y-3">
                <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-brand-teal" />
                  Working Hours
                </label>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
                  {['4', '6', '8', '10', '12', '24'].map(h => (
                    <button
                      key={h}
                      onClick={() => setFormData({...formData, hours: h})}
                      className={`py-2 rounded-lg border text-sm font-medium transition-all ${
                        formData.hours === h 
                          ? 'bg-brand-teal text-white border-brand-teal' 
                          : 'bg-slate-50 text-slate-600 border-slate-200 hover:border-brand-teal/50'
                      }`}
                    >
                      {h} hrs
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Experience */}
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                    <IndianRupee className="w-4 h-4 text-brand-teal" />
                    Experience Required
                  </label>
                  <div className="flex flex-col gap-2">
                    {EXPERIENCE_LEVELS.map(e => (
                      <button
                        key={e.value}
                        onClick={() => setFormData({...formData, experience: e.value})}
                        className={`px-4 py-2.5 rounded-lg border text-sm font-medium text-left transition-all ${
                          formData.experience === e.value 
                            ? 'bg-brand-teal/10 text-brand-teal border-brand-teal' 
                            : 'bg-white text-slate-600 border-slate-200 hover:border-brand-teal/50'
                        }`}
                      >
                        {e.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Education */}
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-brand-teal" />
                    Education Level
                  </label>
                  <div className="flex flex-col gap-2">
                    {EDUCATION_LEVELS.map(e => (
                      <button
                        key={e.value}
                        onClick={() => setFormData({...formData, education: e.value})}
                        className={`px-4 py-2.5 rounded-lg border text-sm font-medium text-left transition-all ${
                          formData.education === e.value 
                            ? 'bg-brand-teal/10 text-brand-teal border-brand-teal' 
                            : 'bg-white text-slate-600 border-slate-200 hover:border-brand-teal/50'
                        }`}
                      >
                        {e.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Languages */}
              <div className="space-y-3">
                <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                  <Languages className="w-4 h-4 text-brand-teal" />
                  Languages Known (Select multiple)
                </label>
                <div className="flex flex-wrap gap-2">
                  {LANGUAGES.map(lang => (
                    <button
                      key={lang.value}
                      onClick={() => handleLanguageToggle(lang.value)}
                      className={`px-4 py-2 rounded-full border text-sm font-medium transition-all ${
                        formData.languages.includes(lang.value)
                          ? 'bg-brand-navy text-white border-brand-navy shadow-md' 
                          : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
                {formData.languages.includes('english') && (
                  <p className="text-xs text-brand-gold flex items-center gap-1 mt-2">
                    <Info className="w-3 h-3" /> English-speaking staff commands a premium in Mumbai.
                  </p>
                )}
              </div>

            </div>
          </div>

          {/* Right: Results & Lead Capture */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Estimate Card */}
            <div className="bg-brand-navy rounded-3xl p-6 shadow-xl text-white">
              <h3 className="text-lg font-medium text-slate-300 mb-2 font-heading">Estimated Monthly Salary</h3>
              
              <div className="mt-4 mb-6">
                <div className="text-4xl lg:text-5xl font-bold text-brand-gold mb-2 tracking-tight">
                  {estimate ? formatRupees(estimate.min).replace('.00','') : '---'}
                  <span className="text-2xl text-slate-400 font-normal mx-2">to</span> 
                  {estimate ? formatRupees(estimate.max).replace('.00','') : '---'}
                </div>
                <p className="text-slate-400 text-sm">per month</p>
              </div>

              {estimate && (
                <div className="space-y-3 pt-6 border-t border-slate-700/50 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Base Rate ({formData.hours} hrs)</span>
                    <span>{formatRupees(estimate.breakdown.base).replace('.00','')}</span>
                  </div>
                  {estimate.breakdown.experiencePremium > 0 && (
                    <div className="flex justify-between text-brand-teal">
                      <span>Experience Premium</span>
                      <span>+{formatRupees(estimate.breakdown.experiencePremium).replace('.00','')}</span>
                    </div>
                  )}
                  {estimate.breakdown.educationPremium > 0 && (
                    <div className="flex justify-between text-brand-teal">
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
                  
                  <div className="mt-4 p-3 bg-white/5 rounded-xl text-xs text-slate-300 leading-relaxed border border-white/10">
                    <span className="text-white font-medium">Market Average via Agency: </span>
                    {formatRupees(estimate.marketAverage).replace('.00','')} 
                    <br/><br/>
                    Our direct placement model saves you up to 18% in monthly margins compared to traditional agencies.
                  </div>
                </div>
              )}
            </div>

            {/* Lead Capture Form */}
            <div className="bg-white rounded-3xl p-6 shadow-xl border border-slate-100">
              {leadSubmitted ? (
                <div className="text-center py-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy mb-2">Request Received!</h3>
                  <p className="text-slate-600 text-sm">
                    We've saved your estimate. One of our experts will call you shortly to discuss available profiles in your budget.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="text-lg font-bold text-brand-navy mb-4">Get Profiles in this Budget</h3>
                  <form onSubmit={handleLeadSubmit} className="space-y-4">
                    <div>
                      <input 
                        type="text" 
                        required
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => updateLeadData('name', e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 text-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal transition-colors"
                      />
                    </div>
                    <div>
                      <input 
                        type="tel" 
                        required
                        maxLength="10"
                        placeholder="Mobile Number"
                        value={formData.phone}
                        onChange={(e) => updateLeadData('phone', e.target.value.replace(/\D/g, ''))}
                        className={`w-full bg-slate-50 border ${phoneError ? 'border-red-500' : 'border-slate-200'} text-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal transition-colors`}
                      />
                      {phoneError && <p className="text-red-500 text-xs mt-1">{phoneError}</p>}
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <select
                        required
                        value={formData.location}
                        onChange={e => updateLeadData('location', e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 text-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal transition-colors appearance-none"
                      >
                        <option value="" disabled>Location (Mumbai)</option>
                        {AREAS_SERVED.map(area => (
                          <option key={area} value={area}>{area}</option>
                        ))}
                        <option value="Other">Other Mumbai Area</option>
                      </select>

                      <select
                        required
                        value={formData.serviceId}
                        onChange={e => updateLeadData('serviceId', e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 text-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal transition-colors appearance-none"
                      >
                        <option value="" disabled>Select Service</option>
                        {SERVICES.map(s => (
                          <option key={s.id} value={s.id}>{s.name}</option>
                        ))}
                      </select>
                    </div>

                    <button 
                      type="submit"
                      disabled={isCalculating}
                      className="w-full bg-brand-teal hover:bg-teal-500 text-white font-bold py-3.5 rounded-xl shadow-[0_0_15px_rgba(13,148,136,0.3)] transition-all active:scale-[0.98] flex justify-center items-center"
                    >
                      {isCalculating ? 'Sending...' : 'Find Maids Now'}
                    </button>
                    <p className="text-xs text-center text-slate-500">100% Free Consultation. No commitments.</p>
                  </form>
                </>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
