import { Star, Quote, Heart } from "lucide-react";
import { useInView, animations } from "../hooks/useInView";

export const Testimonials = () => {
  const [ref, inView] = useInView({ threshold: 0.1 });

  const reviews = [
    {
      name: "Priya Sharma",
      location: "Andheri West, Mumbai",
      text: "Getting a reliable maid in Mumbai was a nightmare until I found Verified Maids. The maid they sent is professional, punctual, and very good at her job.",
      rating: 5,
      service: "Full-time Maid",
      image: "https://i.pravatar.cc/150?img=47"
    },
    {
      name: "Rahul Desai",
      location: "Powai, Mumbai",
      text: "The cook we hired through them makes excellent Maharashtrian food. The best part is the background verification which gives us complete peace of mind.",
      rating: 5,
      service: "Cook",
      image: "https://i.pravatar.cc/150?img=11"
    },
    {
      name: "Sneha Patel",
      location: "Bandra, Mumbai",
      text: "We needed a Japa Maid urgently after my delivery. They arranged one within 24 hours and she was incredibly well-trained and helpful with the newborn.",
      rating: 5,
      service: "Japa Maid",
      image: "https://i.pravatar.cc/150?img=32"
    }
  ];

  return (
    <section className="pt-24 pb-28 md:pt-28 md:pb-32 bg-[#0a1128] relative overflow-hidden">
      {/* Top wave transition (from white) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-0">
        <svg className="relative block w-full h-[40px] md:h-[60px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118,130.98,131.2,201.2,122.9,243.43,117.92,283.47,100,321.39,56.44Z" fill="#ffffff"></path>
        </svg>
      </div>

      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-teal/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-gold/5 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white font-semibold text-xs mb-4 border border-white/20">
            <Heart className="w-4 h-4 text-brand-gold" />
            <span>Customer Love</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Trusted by Mumbai Families
          </h2>
          <p className="text-slate-300 text-sm md:text-base">
            Don't just take our word for it. Here's what families across Mumbai have to say about our services.
          </p>
        </div>

        <div 
          ref={ref}
          className={`grid md:grid-cols-3 gap-6 max-w-6xl mx-auto transition-all duration-1000 ${inView ? animations.fadeUp.in : animations.fadeUp.out}`}
        >
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-white/10 relative flex flex-col group hover:bg-white/10 transition-colors">
              <div className="absolute -top-4 right-6 w-10 h-10 bg-brand-teal rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                <Quote className="w-4 h-4 text-white fill-white" />
              </div>
              
              <div className="flex gap-1 mb-5">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-brand-gold fill-brand-gold" />
                ))}
              </div>
              
              <p className="text-slate-300 mb-6 leading-relaxed text-sm md:text-base flex-grow">
                "{review.text}"
              </p>
              
              <div className="flex items-center gap-4 pt-5 border-t border-white/10">
                <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full border-2 border-brand-teal/50 object-cover" />
                <div>
                  <h4 className="font-bold text-white font-heading text-sm md:text-base">{review.name}</h4>
                  <p className="text-xs text-slate-400">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom wave transition (to slate-50) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0 rotate-180">
        <svg className="relative block w-full h-[40px] md:h-[60px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118,130.98,131.2,201.2,122.9,243.43,117.92,283.47,100,321.39,56.44Z" fill="#f8fafc"></path>
        </svg>
      </div>
    </section>
  );
};
