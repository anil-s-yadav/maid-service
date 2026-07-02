import { useState, useEffect } from "react";
import { TRANSLATIONS } from "../utils/translations";
import { submitLead } from "../utils/leadCapture";
import { initPartialLeadCapture, updatePartialLeadData, markFormSubmitted, resetPartialLead } from "../utils/partialLead";
import { CheckCircle2, Globe, Send } from "lucide-react";
import { AREAS_SERVED, SERVICES } from "../utils/constants";

export const MaidForm = () => {
  const [lang, setLang] = useState('en');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const t = TRANSLATIONS[lang];

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    age: '',
    location: '',
    jobType: '',
    workingHours: '',
    education: ''
  });

  useEffect(() => {
    initPartialLeadCapture();
    return () => resetPartialLead();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => {
      const newData = { ...prev, [name]: value };
      updatePartialLeadData({
        name: newData.name,
        phone: newData.phone,
        service: `Maid Job App - ${newData.jobType}`,
        location: newData.location
      });
      return newData;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Format message
    const message = `
      Age: ${formData.age}
      Edu: ${formData.education}
      Working Hours: ${formData.workingHours}
    `.trim();

    await submitLead({
      name: formData.name,
      phone: formData.phone,
      service: `JOB APPLICATION: ${formData.jobType}`,
      location: formData.location,
      message,
      type: 'full'
    });

    markFormSubmitted();
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="max-w-2xl mx-auto mt-12 dark:bg-[#1e293b] bg-white rounded-3xl p-8 shadow-xl text-center border dark:border-white/10 border-slate-100 transition-colors">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-green-600" />
        </div>
        <h2 className="text-3xl font-bold dark:text-white text-brand-navy mb-4 font-heading transition-colors">{t.successTitle}</h2>
        <p className="text-lg dark:text-slate-300 text-slate-600 mb-8 transition-colors">{t.successMessage}</p>
        <button 
          onClick={() => window.location.href = '/'}
          className="bg-brand-gold text-white px-8 py-3 rounded-full font-bold hover:bg-amber-500 transition-colors"
        >
          {t.homeButton}
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto mt-12 mb-10 dark:bg-[#1e293b] bg-white rounded-3xl shadow-xl border dark:border-white/10 border-slate-100 overflow-hidden transition-colors">
      
      {/* Header & Language Selection */}
      <div className="bg-brand-navy px-5 pt-5 pb-4 md:px-8 md:pt-6 md:pb-5 text-white">
        <div className="flex justify-end mb-3">
          <div className="flex items-center gap-2 bg-white/10 rounded-full py-1.5 px-3 backdrop-blur-sm border border-white/10 shadow-sm">
            <Globe className="w-4 h-4 text-slate-300 shrink-0" />
            <select 
              value={lang} 
              onChange={(e) => setLang(e.target.value)}
              className="bg-transparent text-sm font-medium text-white border-none focus:ring-0 cursor-pointer outline-none appearance-none pr-2"
            >
              <option value="en" className="text-slate-800">English</option>
              <option value="hi" className="text-slate-800">हिंदी</option>
              <option value="mr" className="text-slate-800">मराठी</option>
            </select>
          </div>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold font-heading mb-2 mt-6">{t.title}</h1>
        <p className="text-slate-300 text-sm">{t.subtitle}</p>
      </div>

      <div className="px-5 pb-5 pt-4 md:px-8 md:pb-6 md:pt-5">
        <form onSubmit={handleSubmit} className="space-y-4">
          
          <div className="grid md:grid-cols-2 gap-4 md:gap-5">
            <div className="space-y-1.5">
              <label className="text-xs md:text-sm font-semibold dark:text-slate-300 text-slate-700 transition-colors">{t.fullName} *</label>
              <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder={t.fullNamePlaceholder} className="w-full text-sm dark:bg-white/5 dark:border-white/10 dark:text-white bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-brand-gold transition-colors" />
            </div>
            
            <div className="space-y-1.5">
              <label className="text-xs md:text-sm font-semibold dark:text-slate-300 text-slate-700 transition-colors">{t.phone} *</label>
              <input type="tel" name="phone" required minLength="10" maxLength="10" value={formData.phone} onChange={(e) => handleChange({ target: { name: 'phone', value: e.target.value.replace(/\D/g, '') }})} placeholder={t.phonePlaceholder} className="w-full text-sm dark:bg-white/5 dark:border-white/10 dark:text-white bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-brand-gold transition-colors" />
            </div>
            
            <div className="space-y-1.5">
              <label className="text-xs md:text-sm font-semibold dark:text-slate-300 text-slate-700 transition-colors">{t.age} *</label>
              <input type="number" name="age" required min="18" max="65" value={formData.age} onChange={handleChange} placeholder={t.agePlaceholder} className="w-full text-sm dark:bg-white/5 dark:border-white/10 dark:text-white bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-brand-gold transition-colors" />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs md:text-sm font-semibold dark:text-slate-300 text-slate-700 transition-colors">Location (Mumbai) *</label>
              <select name="location" required value={formData.location} onChange={handleChange} className="w-full text-sm dark:bg-[#1e293b] dark:border-white/10 dark:text-white bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-brand-gold appearance-none text-slate-700 transition-colors">
                <option value="" disabled>Select your nearest area</option>
                {AREAS_SERVED.map(area => (
                  <option key={area} value={area}>{area}</option>
                ))}
                <option value="Other">Other Area in Mumbai</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs md:text-sm font-semibold dark:text-slate-300 text-slate-700 transition-colors">{t.jobType} *</label>
              <select name="jobType" required value={formData.jobType} onChange={handleChange} className="w-full text-sm dark:bg-[#1e293b] dark:border-white/10 dark:text-white bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-brand-gold appearance-none text-slate-700 transition-colors">
                <option value="" disabled>Select Job</option>
                {SERVICES.map(s => (
                  <option key={s.id} value={s.id}>{s.name}</option>
                ))}
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs md:text-sm font-semibold dark:text-slate-300 text-slate-700 transition-colors">Working Hours *</label>
              <select name="workingHours" required value={formData.workingHours} onChange={handleChange} className="w-full text-sm dark:bg-[#1e293b] dark:border-white/10 dark:text-white bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-brand-gold appearance-none text-slate-700 transition-colors">
                <option value="" disabled>Select Hours</option>
                <option value="4">4 Hours</option>
                <option value="6">6 Hours</option>
                <option value="8">8 Hours</option>
                <option value="10">10 Hours</option>
                <option value="12">12 Hours (Full Day)</option>
                <option value="24">24 Hours (Live-in)</option>
              </select>
            </div>

            <div className="space-y-1.5 md:col-span-2">
              <label className="text-xs md:text-sm font-semibold dark:text-slate-300 text-slate-700 transition-colors">{t.education} *</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { id: 'below-10th', label: t.eduBelow10 },
                  { id: '10th', label: t.edu10th },
                  { id: '12th', label: t.edu12th },
                  { id: 'graduate', label: t.eduGraduate }
                ].map(edu => (
                  <label key={edu.id} className={`flex items-center justify-center text-center py-2 px-3 rounded-xl border cursor-pointer transition-colors ${formData.education === edu.id ? 'bg-brand-gold/10 border-brand-gold text-brand-gold font-bold' : 'dark:bg-white/5 dark:border-white/10 dark:text-slate-300 bg-slate-50 border-slate-200 text-slate-600 hover:border-brand-gold/50'}`}>
                    <input type="radio" name="education" value={edu.id} required checked={formData.education === edu.id} onChange={handleChange} className="hidden" />
                    <span className="text-xs sm:text-sm">{edu.label}</span>
                  </label>
                ))}
              </div>
            </div>
            
          </div>

          <div className="mt-6 pt-5 border-t dark:border-white/10 border-slate-100 text-center transition-colors">
            <button 
              type="submit" 
              disabled={isSubmitting} 
              className="inline-flex items-center gap-2 bg-brand-gold hover:bg-amber-500 text-white px-10 py-3.5 rounded-full font-bold transition-all shadow-lg active:scale-95 disabled:opacity-70 text-base md:text-lg w-full md:w-auto"
            >
              {isSubmitting ? t.submitting : t.submit} <Send className="w-5 h-5 ml-2" />
            </button>
            <p className="text-xs md:text-sm dark:text-slate-400 text-slate-500 mt-3 transition-colors">
              By submitting, you agree to our terms and background check process.
            </p>
          </div>

        </form>
      </div>
    </div>
  );
};
