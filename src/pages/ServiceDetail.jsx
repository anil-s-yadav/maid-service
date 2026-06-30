import { useParams, Navigate, Link } from 'react-router-dom';
import { SERVICES, BRAND, AREAS_SERVED } from '../utils/constants';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import SEOHead from '../components/SEOHead';
import { CheckCircle2, Phone, MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../utils/constants';

const ServiceDetail = () => {
  const { id } = useParams();
  const service = SERVICES.find(s => s.id === id);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

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
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <SEOHead 
        title={`${service.name} Services in Mumbai`} 
        description={`Hire background-verified, experienced ${service.name.toLowerCase()}s in Mumbai. ${service.description}`} 
        keywords={seoKeywords}
      />
      <Header />
      
      <main className="flex-grow pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <Link to="/" className="text-brand-teal font-medium mb-6 inline-block hover:underline">&larr; Back to Home</Link>
                <h1 className="text-4xl md:text-5xl font-bold text-brand-navy font-heading leading-tight mb-4">
                  Trusted <span className="text-brand-teal">{service.name}</span> Services
                </h1>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="flex gap-4">
                  <a href={`tel:${BRAND.phoneClean}`} className="flex items-center gap-2 bg-brand-navy hover:bg-slate-800 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-md">
                    <Phone className="w-5 h-5" /> Call Now
                  </a>
                  <a href={getWhatsAppLink(`Hi, I need a ${service.name} in Mumbai.`)} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-3 rounded-xl font-bold transition-all shadow-md">
                    <MessageCircle className="w-5 h-5" /> WhatsApp
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-brand-teal/10 rounded-3xl transform rotate-3 translate-x-4 translate-y-4"></div>
                <img 
                  src={image} 
                  alt={`${service.name} in Mumbai`} 
                  className="rounded-3xl shadow-xl w-full h-[400px] object-cover relative z-10"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mt-16">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                <h3 className="text-2xl font-bold text-brand-navy font-heading mb-6">What is included?</h3>
                <ul className="space-y-4">
                  {service.includes && service.includes.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-brand-teal shrink-0" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-brand-navy to-slate-800 p-8 rounded-3xl shadow-xl text-white">
                <h3 className="text-2xl font-bold font-heading mb-2">Book Your {service.name}</h3>
                <p className="text-slate-300 text-sm mb-6">Fill out this quick form and we will send verified profiles to your WhatsApp within 30 minutes.</p>
                
                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Request submitted! Our RM will contact you shortly.'); }}>
                  <div>
                    <input type="text" required placeholder="Your Name" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-brand-teal" />
                  </div>
                  <div>
                    <input type="tel" required minLength="10" maxLength="10" placeholder="Mobile Number" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-brand-teal" />
                  </div>
                  <div>
                    <select required className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-teal appearance-none">
                      <option value="" disabled selected className="text-slate-800">Select Location</option>
                      {AREAS_SERVED.map(area => (
                        <option key={area} value={area} className="text-slate-800">{area}</option>
                      ))}
                      <option value="Other" className="text-slate-800">Other Mumbai Area</option>
                    </select>
                  </div>
                  <div>
                    <select required className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-teal appearance-none">
                      <option value="" disabled selected className="text-slate-800">Select Work Hours</option>
                      <option value="4" className="text-slate-800">4 Hours</option>
                      <option value="6" className="text-slate-800">6 Hours</option>
                      <option value="8" className="text-slate-800">8 Hours</option>
                      <option value="10" className="text-slate-800">10 Hours</option>
                      <option value="12" className="text-slate-800">12 Hours (Full Day)</option>
                      <option value="24" className="text-slate-800">24 Hours (Live-in)</option>
                    </select>
                  </div>
                  <button type="submit" className="w-full bg-brand-teal hover:bg-teal-500 text-white font-bold py-3.5 rounded-xl shadow-[0_0_15px_rgba(13,148,136,0.3)] transition-all">
                    Send Me Profiles
                  </button>
                </form>
              </div>
            </div>

            {/* Hidden SEO Keywords paragraph for better ranking */}
            <div className="mt-16 text-sm text-slate-600 text-center max-w-4xl mx-auto bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <p><span className="font-semibold text-brand-navy">Popular Searches:</span> {seoKeywords}, {service.name.toLowerCase()} cost in mumbai, verified {service.name.toLowerCase()} near me, {service.name.toLowerCase()} agency in Andheri, Bandra, Powai.</p>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
