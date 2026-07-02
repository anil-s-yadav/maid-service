import { useRef } from "react";
import { Star, Quote, Heart, CheckCircle2 } from "lucide-react";
import { useInView, animations } from "../hooks/useInView";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const colorThemes = [
  { bg: 'dark:bg-teal-950/40 bg-[#f0fdf9]', border: 'dark:border-teal-900/50 border-[#ccfbf1]', iconBg: 'dark:bg-teal-900/50 bg-[#ccfbf1]', text: 'dark:text-teal-400 text-[#0f766e]' }, // Teal
  { bg: 'dark:bg-orange-950/40 bg-[#fffbeb]', border: 'dark:border-orange-900/50 border-[#fef3c7]', iconBg: 'dark:bg-orange-900/50 bg-[#fef3c7]', text: 'dark:text-orange-400 text-[#b45309]' }, // Orange
  { bg: 'dark:bg-pink-950/40 bg-[#fdf2f8]', border: 'dark:border-pink-900/50 border-[#fce7f3]', iconBg: 'dark:bg-pink-900/50 bg-[#fce7f3]', text: 'dark:text-pink-400 text-[#be185d]' }, // Pink
  { bg: 'dark:bg-purple-950/40 bg-[#faf5ff]', border: 'dark:border-purple-900/50 border-[#f3e8ff]', iconBg: 'dark:bg-purple-900/50 bg-[#f3e8ff]', text: 'dark:text-purple-400 text-[#7e22ce]' }, // Purple
];

export const Testimonials = () => {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  const reviews = [
    {
      name: "Priya Sharma",
      location: "Andheri West, Mumbai",
      text: "Getting a reliable maid in Mumbai was a nightmare until I found Verified Maids. The maid they sent is professional, punctual, and very good at her job.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80"
    },
    {
      name: "Rahul Desai",
      location: "Powai, Mumbai",
      text: "The cook we hired through them makes excellent Maharashtrian food. The best part is the background verification which gives us complete peace of mind.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&auto=format&fit=crop&q=80"
    },
    {
      name: "Sneha Patel",
      location: "Bandra, Mumbai",
      text: "We needed a Japa Maid urgently after my delivery. They arranged one within 24 hours and she was incredibly well-trained and helpful with the newborn.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?w=150&auto=format&fit=crop&q=80"
    },
    {
      name: "Karan Mehta",
      location: "Juhu, Mumbai",
      text: "Their driver service is top-notch. The driver is polite, knows all the routes well, and drives very safely. Highly recommend for anyone in Mumbai.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80"
    },
    {
      name: "Anjali Gupta",
      location: "Thane, Mumbai",
      text: "I hired an elderly care professional for my mother. She is extremely caring, patient, and handles everything wonderfully. Truly grateful for this service.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=150&auto=format&fit=crop&q=80"
    },
    {
      name: "Vikram Singh",
      location: "Navi Mumbai",
      text: "A very professional agency. Replacements are hassle-free as promised. The cleaning staff is meticulous and entirely trustworthy.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1557862921-37829c790f19?w=150&auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section className="py-12 md:py-16 dark:bg-[#0f172a] bg-white border-t dark:border-white/5 border-slate-100 relative overflow-hidden transition-colors duration-500">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-gold/5 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-gold/10 text-brand-gold font-semibold text-xs mb-3 border border-brand-gold/20 shadow-[0_0_15px_rgba(217,119,6,0.15)]">
            <Heart className="w-4 h-4 text-brand-gold" />
            <span className="tracking-widest uppercase">Customer Love</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold dark:text-white text-[#0a1128] mb-3 font-heading transition-colors">
            Trusted by Mumbai Families
          </h2>
          <p className="dark:text-slate-300 text-slate-500 text-sm transition-colors">
            Don't just take our word for it. Here's what families across Mumbai have to say.
          </p>
        </div>

        <div 
          ref={ref}
          className={`relative w-full max-w-[1400px] mx-auto transition-all duration-1000 ${inView ? animations.fadeUp.in : animations.fadeUp.out} py-4 px-0 md:px-8`}
        >
          {/* Edge Fades for scroll illusion */}
          <div className="absolute left-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-r from-white dark:from-[#0f172a] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-l from-white dark:from-[#0f172a] to-transparent z-10 pointer-events-none"></div>

          <Carousel
            opts={{
              align: "center",
              loop: true,
              breakpoints: {
                '(min-width: 768px)': { align: 'start' }
              }
            }}
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {reviews.map((review, idx) => {
                const theme = colorThemes[idx % colorThemes.length];
                return (
                <CarouselItem key={idx} className="pl-4 basis-[80%] md:basis-1/2 lg:basis-1/4 pt-4 pb-8">
                  <div className={`dark:bg-[#1e293b] bg-white rounded-[24px] border ${theme.border} overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_-5px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300 h-full flex flex-col`}>
                    
                    {/* Top Section */}
                    <div className={`${theme.bg} p-5 md:p-6 flex items-center gap-4`}>
                      <div className={`w-12 h-12 rounded-2xl ${theme.iconBg} flex items-center justify-center shrink-0 p-[2px]`}>
                        <img src={review.image} alt={review.name} className="w-full h-full rounded-[14px] object-cover" />
                      </div>
                      <div>
                        <h4 className="font-bold dark:text-white text-brand-navy font-heading text-[16px] tracking-tight transition-colors">{review.name}</h4>
                        <p className="dark:text-slate-400 text-slate-500 text-[12px] mt-0.5 font-medium transition-colors">{review.location}</p>
                      </div>
                    </div>
                    
                    {/* Bottom Section */}
                    <div className="p-5 md:p-6 dark:bg-[#1e293b] bg-white flex-grow flex flex-col transition-colors">
                      <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">What They Said</h5>
                      
                      <div className="space-y-3 mb-6 flex-grow">
                        <p className="dark:text-slate-300 text-slate-600 text-[13px] md:text-[14px] leading-relaxed transition-colors">
                          "{review.text}"
                        </p>
                      </div>
                      
                      <div className="mt-auto flex items-center justify-between pt-4 border-t dark:border-white/10 border-slate-100/80 transition-colors">
                        <div className="flex items-center gap-1">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                        <span className={`text-[12px] font-bold ${theme.text} flex items-center gap-1`}>
                          Verified <CheckCircle2 className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>

                  </div>
                </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-2 md:-left-6 dark:bg-[#1e293b] dark:border-white/20 dark:text-white dark:hover:bg-white/10 bg-white hover:bg-slate-50 border-slate-200 shadow-md text-[#0a1128] transition-colors" />
            <CarouselNext className="hidden md:flex -right-2 md:-right-6 dark:bg-[#1e293b] dark:border-white/20 dark:text-white dark:hover:bg-white/10 bg-white hover:bg-slate-50 border-slate-200 shadow-md text-[#0a1128] transition-colors" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};
