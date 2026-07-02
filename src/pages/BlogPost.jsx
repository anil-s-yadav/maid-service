import { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { BLOG_POSTS, AREAS_SERVED } from '../utils/constants';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import SEOHead from '../components/SEOHead';
import { Calendar, Clock, ChevronLeft, CheckCircle2 } from 'lucide-react';
import { LeadPopup } from '../components/LeadPopup';
import { submitLead } from '../utils/leadCapture';
import { initPartialLeadCapture, updatePartialLeadData, markFormSubmitted } from '../utils/partialLead';

const BlogPost = () => {
  const { slug } = useParams();
  const post = BLOG_POSTS.find(p => p.slug === slug);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    location: '',
    source: 'Blog Post Sidebar'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const cleanup = initPartialLeadCapture();
    return cleanup;
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => {
      const newData = { ...prev, [name]: value };
      updatePartialLeadData(newData);
      return newData;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await submitLead(formData);
      markFormSubmitted();
      setIsSuccess(true);
    } catch (error) {
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="min-h-screen dark:bg-background bg-slate-50 flex flex-col transition-colors duration-500">
      <SEOHead
        title={post.title}
        description={post.excerpt}
      />
      <Header />
      <LeadPopup />

      <main className="flex-grow pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          
          <Link to="/blog" className="inline-flex items-center gap-2 dark:text-slate-400 dark:hover:text-brand-gold text-slate-500 hover:text-brand-gold font-medium mb-8 transition-colors">
            <ChevronLeft className="w-4 h-4" /> Back to all articles
          </Link>

          <header className="mb-10 max-w-5xl">
            <div className="flex items-center gap-4 text-sm font-semibold dark:text-slate-400 text-slate-500 mb-5 transition-colors">
              <span className="dark:text-brand-gold dark:bg-brand-gold/20 text-brand-gold bg-brand-gold/10 px-3 py-1 rounded-full transition-colors">{post.category}</span>
              <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {post.readTime}</span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold dark:text-white text-brand-navy font-heading leading-tight transition-colors">
              {post.title}
            </h1>
          </header>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-0 max-w-7xl mx-auto">
            
            {/* Left: Main Content */}
            <div className="lg:col-span-8 lg:pr-12 xl:pr-16">
              <div className="w-full rounded-3xl overflow-hidden shadow-lg mb-10 dark:bg-[#1e293b] bg-slate-200 flex justify-center">
                <img src={post.image} alt={post.title} className="w-full max-h-[400px] md:max-h-[500px] object-contain" />
              </div>

              <article
                className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-heading dark:prose-headings:text-white prose-headings:text-brand-navy prose-h2:text-2xl prose-h3:text-xl prose-a:text-brand-gold prose-a:font-semibold hover:prose-a:text-amber-600 prose-img:rounded-3xl prose-img:shadow-lg dark:bg-card bg-white p-6 md:p-10 rounded-3xl shadow-sm border dark:border-white/10 border-slate-200 transition-colors"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* In-article CTA */}
              <div className="mt-12 bg-gradient-to-r from-brand-navy to-slate-800 rounded-3xl p-8 text-center text-white relative overflow-hidden shadow-xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/20 rounded-full blur-3xl -translate-y-1/2"></div>
                <div className="relative z-10">
                  <h3 className="text-xl md:text-2xl font-bold font-heading mb-3">Ready to hire a trusted & Verified professional?</h3>
                  <p className="text-slate-300 mb-6 max-w-lg mx-auto text-sm md:text-base">Get verified profiles sent directly to your WhatsApp in 30 minutes. Free replacement guarantee.</p>
                  <Link to="/contact" className="inline-block bg-brand-gold text-brand-navy font-bold px-8 py-3 rounded-full hover:bg-amber-500 transition-colors shadow-lg">
                    Get Free Call Back
                  </Link>
                </div>
              </div>
            </div>

            {/* Right: Sidebar with separation */}
            <aside className="lg:col-span-4 lg:border-l dark:border-white/10 border-slate-200 lg:pl-12 xl:pl-16 space-y-8">
              
              {/* Related Suggestions */}
              <div className="bg-white dark:bg-card rounded-3xl p-6 md:p-8 shadow-sm border dark:border-white/10 border-slate-200 transition-colors">
                <h3 className="text-xl font-bold font-heading mb-6 text-brand-navy dark:text-white">Related Articles</h3>
                <div className="space-y-6">
                  {BLOG_POSTS.filter(p => p.slug !== slug).slice(0, 5).map(p => (
                    <Link key={p.id} to={`/blog/${p.slug}`} className="group flex gap-4 items-center">
                      <img src={p.image} alt={p.title} className="w-20 h-20 rounded-2xl object-cover shrink-0 shadow-sm" />
                      <div>
                        <h4 className="text-base font-bold text-brand-navy dark:text-white group-hover:text-brand-gold dark:group-hover:text-brand-gold transition-colors line-clamp-2 leading-snug mb-1.5">{p.title}</h4>
                        <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider">{p.category}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Quick Enquiry Form */}
              <div className="bg-gradient-to-br from-brand-navy to-slate-900 dark:from-slate-800 dark:to-[#0f172a] rounded-3xl p-6 md:p-8 shadow-xl text-white relative overflow-hidden border border-brand-gold/20 flex flex-col justify-center min-h-[400px]">
                <div className="absolute top-0 right-0 w-40 h-40 bg-brand-gold/10 rounded-full blur-3xl"></div>
                <div className="relative z-10">
                  {isSuccess ? (
                    <div className="text-center py-4">
                      <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="w-8 h-8 text-green-400" />
                      </div>
                      <h3 className="text-xl font-bold font-heading mb-2 text-white">Enquiry Sent!</h3>
                      <p className="text-sm text-slate-300 mb-8 leading-relaxed">Our team will call you back within 30 minutes to discuss your requirements.</p>
                      <button 
                        onClick={() => { setIsSuccess(false); setFormData({ name: '', phone: '', service: '', location: '', source: 'Blog Post Sidebar' }); }}
                        className="w-full bg-white/10 hover:bg-white/20 text-white text-sm font-bold py-3.5 rounded-xl transition-colors"
                      >
                        Submit Another
                      </button>
                    </div>
                  ) : (
                    <>
                      <h3 className="text-xl font-bold font-heading mb-2 text-brand-gold">Quick Enquiry</h3>
                      <p className="text-sm text-slate-300 mb-6 leading-relaxed">Drop your details below and our team will call you back within 30 minutes.</p>
                      
                      <form className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required className="w-full text-sm px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/50 transition-all shadow-inner" />
                        </div>
                        <div>
                          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" required minLength="10" maxLength="10" className="w-full text-sm px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/50 transition-all shadow-inner" />
                        </div>
                        <div>
                          <select name="service" value={formData.service} onChange={handleChange} required className="w-full text-sm px-4 py-3 rounded-xl bg-[#1e293b] border border-white/10 text-white focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/50 transition-all appearance-none shadow-inner">
                            <option value="" disabled>Select Service</option>
                            <option value="House Maid">House Maid</option>
                            <option value="Cook">Cook</option>
                            <option value="Nanny">Nanny / Babysitter</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                        <div>
                          <select name="location" value={formData.location} onChange={handleChange} required className="w-full text-sm px-4 py-3 rounded-xl bg-[#1e293b] border border-white/10 text-white focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/50 transition-all appearance-none shadow-inner">
                            <option value="" disabled>Location (Mumbai) *</option>
                            {AREAS_SERVED.map(area => (
                              <option key={area} value={area}>{area}</option>
                            ))}
                            <option value="Other">Other Area in Mumbai</option>
                          </select>
                        </div>
                        <button type="submit" disabled={isSubmitting} className="w-full bg-brand-gold text-brand-navy text-sm font-extrabold py-3.5 rounded-xl hover:bg-amber-500 transition-colors shadow-[0_0_15px_rgba(252,191,73,0.3)] hover:shadow-[0_0_25px_rgba(252,191,73,0.5)] mt-2 disabled:opacity-70 disabled:cursor-not-allowed">
                          {isSubmitting ? 'Sending...' : 'Request Call Back'}
                        </button>
                      </form>
                    </>
                  )}
                </div>
              </div>
            </aside>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
