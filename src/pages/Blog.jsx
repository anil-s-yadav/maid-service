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
      
      <main className="flex-grow pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold dark:text-white text-brand-navy mb-4 font-heading transition-colors">
              Insights & Guides
            </h1>
            <p className="text-lg dark:text-slate-400 text-slate-600 transition-colors">
              Expert advice on hiring, managing, and maintaining a great relationship with your domestic help.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {BLOG_POSTS.map(post => (
              <article key={post.id} className="dark:bg-card bg-white rounded-3xl overflow-hidden shadow-sm border dark:border-white/10 border-slate-200 dark:hover:border-brand-gold/50 hover:shadow-xl hover:border-brand-gold/30 transition-all duration-300 flex flex-col">
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs font-semibold dark:text-slate-400 text-slate-500 mb-4 transition-colors">
                    <span className="dark:text-brand-gold dark:bg-brand-gold/20 text-brand-gold bg-brand-gold/10 px-3 py-1 rounded-full transition-colors">{post.category}</span>
                    <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  
                  <Link to={`/blog/${post.slug}`} className="block mb-4 overflow-hidden rounded-xl">
                    <img src={post.image} alt={post.title} className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-500" />
                  </Link>

                  <Link to={`/blog/${post.slug}`}>
                    <h2 className="text-2xl font-bold dark:text-white text-brand-navy mb-3 font-heading dark:hover:text-brand-gold hover:text-brand-gold transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                  </Link>
                  
                  <p className="dark:text-slate-300 text-slate-600 mb-6 line-clamp-3 transition-colors">
                    {post.excerpt}
                  </p>
                  
                  <div className="mt-auto pt-6 border-t dark:border-white/10 border-slate-100 flex items-center justify-between transition-colors">
                    <span className="text-sm dark:text-slate-400 text-slate-500 flex items-center gap-1 transition-colors">
                      <Clock className="w-4 h-4" /> {post.readTime}
                    </span>
                    <Link to={`/blog/${post.slug}`} className="text-brand-gold font-bold text-sm flex items-center gap-1 hover:text-amber-600">
                      Read More <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
