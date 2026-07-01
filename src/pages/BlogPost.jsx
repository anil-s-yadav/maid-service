import { useParams, Link, Navigate } from 'react-router-dom';
import { BLOG_POSTS } from '../utils/constants';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import SEOHead from '../components/SEOHead';
import { Calendar, Clock, ChevronLeft } from 'lucide-react';
import { LeadPopup } from '../components/LeadPopup';

const BlogPost = () => {
  const { slug } = useParams();
  const post = BLOG_POSTS.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <SEOHead
        title={post.title}
        description={post.excerpt}
      />
      <Header />
      <LeadPopup />

      <main className="flex-grow pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">

            <Link to="/blog" className="inline-flex items-center gap-2 text-slate-500 hover:text-brand-teal font-medium mb-8 transition-colors">
              <ChevronLeft className="w-4 h-4" /> Back to all articles
            </Link>

            <header className="mb-10">
              <div className="flex items-center gap-4 text-sm font-semibold text-slate-500 mb-6">
                <span className="text-brand-teal bg-brand-teal/10 px-3 py-1 rounded-full">{post.category}</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {post.readTime}</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-brand-navy font-heading leading-tight mb-8">
                {post.title}
              </h1>

              <div className="w-full h-64 md:h-96 rounded-3xl overflow-hidden shadow-lg mb-10">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
              </div>
            </header>

            <article
              className="prose prose-slate max-w-none prose-headings:font-heading prose-headings:text-brand-navy prose-h2:text-2xl prose-h3:text-xl prose-a:text-brand-teal prose-a:font-semibold hover:prose-a:text-teal-600 prose-img:rounded-3xl prose-img:shadow-lg bg-white p-6 md:p-10 lg:p-12 rounded-3xl shadow-sm border border-slate-200"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* In-article CTA */}
            <div className="mt-12 bg-gradient-to-r from-brand-navy to-slate-800 rounded-3xl p-8 text-center text-white relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-teal/20 rounded-full blur-3xl -translate-y-1/2"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold font-heading mb-3">Ready to hire a trusted & Verified professional?</h3>
                <p className="text-slate-300 mb-6 max-w-lg mx-auto">Get verified profiles sent directly to your WhatsApp in 30 minutes. Free replacement guarantee.</p>
                <Link to="/contact" className="inline-block bg-brand-teal text-white font-bold px-8 py-3.5 rounded-full hover:bg-teal-500 transition-colors shadow-lg">
                  Get Free Call Back
                </Link>
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
