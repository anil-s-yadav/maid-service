import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const testimonials = [
  {
    name: "Salim Shaikh",
    review: "Using Violet Web Haven was a game-changer! Finding a part-time maid who is punctual and great at cooking was effortless. Highly recommend their services!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Minal More", 
    review: "After disappointing experiences with local agencies, Violet Web Haven was a breath of fresh air. They connected me with an incredibly experienced full-time nanny from Mumbai who is from Assam. The lady was very experienced and handled the kids of young age. The response time from Violet Web Haven was very impressive. Thank you Violet Web Haven...",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Vishal Salve",
    review: "I had lost hope after losing money to several maid agencies. Violet Web Haven changed that. I hired an 8-hour maid in Mumbai for Elder care and cooking, and they waited for my satisfaction before payment. Trustworthy and reliable service!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Priya Sharma",
    review: "Finding reliable housekeeping was always a struggle until I found Violet Web Haven. The professional they sent is thorough, efficient, and respectful. My home has never been cleaner!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1542596737-24b556c40a75?w=150&h=150&fit=crop&crop=face"
  },
   {
    name: "Amit Patel",
    review: "Needed a driver urgently for a family trip. Violet Web Haven provided a professional and punctual driver on short notice. The booking process was smooth and the service was excellent.",
    rating: 4,
    avatar: "https://images.unsplash.com/photo-1539571696357-433388e79979?w=150&h=150&fit=crop&crop=face"
  }
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef(null);

  // Auto-slide functionality
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000); // Change slide every 6 seconds
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  // Stop auto-slide on manual click
  const handleDotClick = (index) => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    setCurrentIndex(index);
  };

  return (
    <section className="py-24 bg-white" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            What Our <span className="text-teal-600">Happy Clients Say</span>
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Hear directly from the families and individuals who have experienced the convenience and quality of our domestic help services.
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
           <div className="grid md:grid-cols-1 gap-8">
              {testimonials.map((testimonial, index) => (
                 <Card 
                    key={index} 
                    className={`border-0 shadow-xl rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 transition-all duration-500 p-8 ${index === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-95 absolute top-0 left-0 w-full'}`}
                    style={{ zIndex: testimonials.length - index }} // Ensure correct stacking
                 >
                    <CardContent className="p-0 text-center">
                       <Quote className="h-10 w-10 text-purple-400 mx-auto mb-6" />
                       
                       <p className="text-gray-700 mb-6 leading-relaxed italic text-lg">
                          "{testimonial.review}"
                       </p>
                       
                       <div className="flex justify-center mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                             <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                          ))}
                       </div>
                       
                       <div className="flex items-center justify-center space-x-4">
                          <img 
                             src={testimonial.avatar} 
                             alt={testimonial.name}
                             className="w-14 h-14 rounded-full object-cover border-2 border-teal-500 shadow-md"
                          />
                          <div>
                             <h4 className="font-semibold text-gray-800 text-lg">{testimonial.name}</h4>
                             {/* You can add designation or location here if available */}
                          </div>
                       </div>
                    </CardContent>
                 </Card>
              ))}
           </div>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center mt-12 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-teal-600 w-4 h-4' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
