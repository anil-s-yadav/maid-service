import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../utils/constants';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import SEOHead from '../components/SEOHead';
import { Calendar, Clock, ChevronRight } from 'lucide-react';

const Blog = () => {
  return (
    <div className="min-h-screen dark:bg-background bg-slate-50 flex flex-col transition-colors duration-500">
      <SEOHead 
        title="Blog - Domestic Help Insights" 
        description="Read the latest tips, guides, and insights on hiring and managing maids, cooks, and nannies in Mumbai." 
      />
      <Header />
      
      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-3xl md:text-4xl font-bold dark:text-white text-brand-navy mb-4 font-heading transition-colors">
              Insights & Guides
            </h1>
            <p className="text-base dark:text-slate-400 text-slate-600 transition-colors">
              Expert advice on hiring, managing, and maintaining a great relationship with your domestic help.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {BLOG_POSTS.map(post => (
              <Link key={post.id} to={`/blog/${post.slug}`} className="dark:bg-[#1e293b] bg-white rounded-2xl overflow-hidden shadow-lg border dark:border-white/10 border-slate-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col group cursor-pointer block">
                <div className="block relative overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-brand-navy/90 backdrop-blur-sm text-brand-gold px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider shadow-md">{post.category}</span>
                  </div>
                </div>

                <div className="p-4 md:p-5 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-[10px] font-semibold dark:text-slate-400 text-slate-500 mb-2.5 transition-colors">
                    <Calendar className="w-3.5 h-3.5" /> 
                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>

                  <h2 className="text-base font-bold dark:text-white text-brand-navy mb-2 font-heading group-hover:text-brand-gold dark:group-hover:text-brand-gold transition-colors line-clamp-2 leading-snug">
                    {post.title}
                  </h2>
                  
                  <p className="dark:text-slate-400 text-slate-600 mb-4 text-xs line-clamp-3 transition-colors">
                    {post.excerpt}
                  </p>
                  
                  <div className="mt-auto pt-3 border-t dark:border-white/10 border-slate-100 flex items-center justify-between transition-colors">
                    <span className="text-[10px] font-medium dark:text-slate-400 text-slate-500 flex items-center gap-1 transition-colors">
                      <Clock className="w-3 h-3" /> {post.readTime}
                    </span>
                    <span className="text-brand-gold font-bold text-xs flex items-center gap-1 group-hover:text-amber-500 transition-colors">
                      Read More <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
