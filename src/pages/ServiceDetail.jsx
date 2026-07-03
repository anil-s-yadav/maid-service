import { useState, useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { SERVICES, BRAND, AREAS_SERVED } from '../utils/constants';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import SEOHead from '../components/SEOHead';
import { CheckCircle2, Phone } from 'lucide-react';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { getWhatsAppLink } from '../utils/constants';
import { submitLead } from '../utils/leadCapture';
import { initPartialLeadCapture, updatePartialLeadData, markFormSubmitted } from '../utils/partialLead';

const ServiceDetail = () => {
  const { id } = useParams();
  const service = SERVICES.find(s => s.id === id);

  const [formData, setFormData] = useState({ name: '', phone: '', location: '', hours: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    initPartialLeadCapture();
  }, [id]);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const handleChange = (field, value) => {
    setFormData(prev => ({...prev, [field]: value}));
    updatePartialLeadData({ [field]: value, service: service.name, source: 'Service Detail Form' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.phone.length < 10 || isSubmitting) return;

    setIsSubmitting(true);
    await submitLead({
      name: formData.name,
      phone: formData.phone,
      service: `${service.name} (${formData.hours} hrs)`,
      location: formData.location,
      type: 'full',
      source: 'Service Detail Form'
    });

    markFormSubmitted();
    setSubmitted(true);
    setIsSubmitting(false);
  };

  // Fallback image based on service id
  const serviceImages = {
    'house-maid': 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80',
    'cook': 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80',
    'babysitter': 'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=800&q=80',
    'nanny': 'https://images.unsplash.com/photo-1544098485-2a2ed6da40ba?w=800&q=80',
    'japa-maid': 'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=800&q=80',
    'patient-care': 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    'elderly-care': 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    'driver': 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80',
  };

  const image = serviceImages[service.id] || serviceImages['house-maid'];
  
  // SEO Keywords specifically for this service in Mumbai
  const seoKeywords = `${service.name} in Mumbai, hire ${service.name.toLowerCase()}, best ${service.name.toLowerCase()} agency, reliable ${service.name.toLowerCase()} Mumbai, 24 hour ${service.name.toLowerCase()}`;

  return (
    <div className="min-h-screen dark:bg-[#0f172a] bg-slate-50 flex flex-col transition-colors duration-500 overflow-x-hidden">
      <SEOHead 
        title={`${service.name} Services in Mumbai`} 
        description={`Hire background-verified, experienced ${service.name.toLowerCase()}s in Mumbai. ${service.description}`} 
        keywords={seoKeywords}
      />
      <Header />
      
      <main className="flex-grow pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-10 md:mb-16">
              <div>
                <Link to="/services" className="text-brand-gold font-medium mb-6 inline-block hover:underline">&larr; Back to Services</Link>
                <h1 className="text-3xl md:text-5xl font-bold dark:text-white text-brand-navy font-heading leading-tight mb-4 transition-colors">
                  Trusted <span className="text-brand-gold">{service.name}</span> Services
                </h1>
                <p className="text-lg dark:text-slate-300 text-slate-600 mb-8 leading-relaxed transition-colors">
                  {service.description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <a href={`tel:${BRAND.phoneClean}`} className="flex items-center justify-center gap-2 bg-brand-navy hover:bg-slate-800 text-white px-4 md:px-6 py-3.5 md:py-3 rounded-xl font-bold transition-all shadow-md">
                    <Phone className="w-5 h-5" /> Call Now
                  </a>
                  <a href={getWhatsAppLink(`Hi, I need a ${service.name} in Mumbai.`)} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 md:px-6 py-3.5 md:py-3 rounded-xl font-bold transition-all shadow-md">
                    <WhatsAppIcon className="w-5 h-5" /> WhatsApp
                  </a>
                </div>
              </div>

              <div className="relative mt-8 md:mt-0 w-[90%] md:w-[85%] mx-auto">
                <div className="absolute inset-0 bg-brand-gold/10 rounded-3xl transform rotate-2 translate-x-2 translate-y-2 md:rotate-3 md:translate-x-4 md:translate-y-4"></div>
                <img 
                  src={image} 
                  alt={`${service.name} in Mumbai`} 
                  className="rounded-3xl shadow-xl w-full h-[320px] md:h-[380px] object-cover relative z-10"
                />
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mt-10 md:mt-16">
              <div className="dark:bg-card bg-white p-6 md:p-8 rounded-3xl shadow-sm border dark:border-white/10 border-slate-100 transition-colors">
                <h3 className="text-2xl font-bold dark:text-white text-brand-navy font-heading mb-6 transition-colors">What is included?</h3>
                <ul className="space-y-4">
                  {service.includes && service.includes.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-brand-gold shrink-0" />
                      <span className="dark:text-slate-300 text-slate-700 transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-brand-navy to-slate-800 p-6 md:p-8 rounded-3xl shadow-xl text-white">
                <h3 className="text-2xl font-bold font-heading mb-2">Book Your {service.name}</h3>
                <p className="text-slate-300 text-sm mb-6">Fill out this quick form and we will send verified profiles to your WhatsApp within 30 minutes.</p>
                
                {submitted ? (
                  <div className="text-center py-10">
                    <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/30">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">Request Received!</h4>
                    <p className="text-slate-300 text-sm">Our team will contact you shortly.</p>
                  </div>
                ) : (
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                      <input 
                        type="text" 
                        required 
                        placeholder="Your Name" 
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-brand-gold" 
                      />
                    </div>
                    <div>
                      <input 
                        type="tel" 
                        required 
                        minLength="10" 
                        maxLength="10" 
                        placeholder="Mobile Number" 
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value.replace(/\D/g, ''))}
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-brand-gold" 
                      />
                    </div>
                    <div>
                      <select 
                        required 
                        value={formData.location}
                        onChange={(e) => handleChange('location', e.target.value)}
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-gold appearance-none"
                      >
                        <option value="" disabled className="text-slate-800">Select Location</option>
                        {AREAS_SERVED.map(area => (
                          <option key={area} value={area} className="text-slate-800">{area}</option>
                        ))}
                        <option value="Other" className="text-slate-800">Other Mumbai Area</option>
                      </select>
                    </div>
                    <div>
                      <select 
                        required 
                        value={formData.hours}
                        onChange={(e) => handleChange('hours', e.target.value)}
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-gold appearance-none"
                      >
                        <option value="" disabled className="text-slate-800">Select Work Hours</option>
                        <option value="4" className="text-slate-800">4 Hours</option>
                        <option value="6" className="text-slate-800">6 Hours</option>
                        <option value="8" className="text-slate-800">8 Hours</option>
                        <option value="10" className="text-slate-800">10 Hours</option>
                        <option value="12" className="text-slate-800">12 Hours (Full Day)</option>
                        <option value="24" className="text-slate-800">24 Hours (Live-in)</option>
                      </select>
                    </div>
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-brand-gold hover:bg-amber-500 text-white font-bold py-3.5 rounded-xl shadow-[0_0_15px_rgba(13,148,136,0.3)] transition-all disabled:opacity-70"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Me Profiles'}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Hidden SEO Keywords paragraph for better ranking */}
            <div className="mt-16 text-sm dark:text-slate-400 text-slate-600 text-center max-w-4xl mx-auto dark:bg-card bg-white p-6 rounded-2xl border dark:border-white/10 border-slate-200 shadow-sm transition-colors">
              <p><span className="font-semibold dark:text-white text-brand-navy transition-colors">Popular Searches:</span> {seoKeywords}, {service.name.toLowerCase()} cost in mumbai, verified {service.name.toLowerCase()} near me, {service.name.toLowerCase()} agency in Andheri, Bandra, Powai.</p>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
