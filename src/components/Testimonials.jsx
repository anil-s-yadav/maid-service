import { Star, Quote } from "lucide-react";
import { useInView, animations } from "../hooks/useInView";

export const Testimonials = () => {
  const [ref, inView] = useInView({ threshold: 0.1 });

  const reviews = [
    {
      name: "Priya Sharma",
      location: "Andheri West, Mumbai",
      text: "Getting a reliable maid in Mumbai was a nightmare until I found Verified Maids. The maid they sent is professional, punctual, and very good at her job.",
      rating: 5,
      service: "Full-time Maid"
    },
    {
      name: "Rahul Desai",
      location: "Powai, Mumbai",
      text: "The cook we hired through them makes excellent Maharashtrian food. The best part is the background verification which gives us peace of mind.",
      rating: 5,
      service: "Cook"
    },
    {
      name: "Sneha Patel",
      location: "Bandra, Mumbai",
      text: "We needed a Japa Maid urgently after my delivery. They arranged one within 24 hours and she was incredibly well-trained and helpful.",
      rating: 5,
      service: "Japa Maid"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[400px] bg-brand-navy -skew-y-3 origin-top-left -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 pt-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
            Trusted by Mumbai Families
          </h2>
          <p className="text-lg text-slate-300">
            Don't just take our word for it. Here's what families across Mumbai have to say about our services.
          </p>
        </div>

        <div 
          ref={ref}
          className={`grid md:grid-cols-3 gap-8 max-w-6xl mx-auto transition-all duration-1000 ${inView ? animations.fadeUp.in : animations.fadeUp.out}`}
        >
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 relative mt-8 md:mt-0">
              <div className="absolute -top-6 right-8 w-12 h-12 bg-brand-teal rounded-full flex items-center justify-center shadow-lg">
                <Quote className="w-5 h-5 text-white fill-white" />
              </div>
              
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-brand-gold fill-brand-gold" />
                ))}
              </div>
              
              <p className="text-slate-600 mb-8 leading-relaxed italic">
                "{review.text}"
              </p>
              
              <div className="border-t border-slate-100 pt-6">
                <h4 className="font-bold text-brand-navy font-heading">{review.name}</h4>
                <p className="text-sm text-slate-500">{review.location}</p>
                <span className="inline-block mt-2 text-xs font-semibold text-brand-teal bg-brand-teal/10 px-2 py-1 rounded">
                  {review.service}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
