
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Salim Shaikh",
    review: "Thank you bookyourmaid for helping me with a part time maid. She is very good at cooking and comes on time. Thank you for the helps",
    rating: 5
  },
  {
    name: "Minal More", 
    review: "I never trusted the local maid agencies. Bookyourmaid arranged a full time nanny from Mumbai who is from Assam. The lady was very experienced and handled the kids of young age. The response time from BookYourMaid was very impressive. Thank you Bookyourmaid...",
    rating: 5
  },
  {
    name: "Vishal Salve",
    review: "I have paid a lot of money to a lot of maid agencies but all of them have taken my money and ran away. I hired a 8 hour maid in Mumbai for Elder care and cooking and bookyourmaid took payment from me after I was satisfied. All the best.",
    rating: 5
  }
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Star className="h-6 w-6 text-orange-500" />
            <span className="text-purple-600 font-medium">Testimonial</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            We Are Very Happy For
          </h2>
          <p className="text-2xl text-purple-600 font-semibold">Client's Review</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className={`transform transition-all duration-500 ${
                  index === currentIndex 
                    ? 'scale-105 shadow-2xl border-purple-200' 
                    : 'scale-95 opacity-75 hover:opacity-90'
                }`}
              >
                <CardContent className="p-8 text-center">
                  <Quote className="h-12 w-12 text-purple-300 mx-auto mb-6" />
                  
                  <p className="text-gray-600 mb-6 leading-relaxed italic">
                    "{testimonial.review}"
                  </p>
                  
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full flex items-center justify-center text-white font-semibold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-purple-600' : 'bg-purple-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
