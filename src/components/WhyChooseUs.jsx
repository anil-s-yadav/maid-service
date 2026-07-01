import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Shield, List, Star, Clock, HeadphonesIcon, Gem, Award } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Verified & Trusted Professionals",
    description: "Your safety and peace of mind are paramount. All our staff undergo rigorous background checks and verification."
  },
  {
    icon: Award,
    title: "Exceptional Quality Service", 
    description: "We are committed to the highest standards of service. Our professionals are skilled, trained, and dedicated to exceeding your expectations."
  },
  {
    icon: List,
    title: "Wide Range of Services",
    description: "Find the perfect match for any household need, from regular cleaning and cooking to specialized care for elders and children."
  },
  {
    icon: Clock,
    title: "Flexible & Timely Assistance",
    description: "We offer flexible scheduling options to fit your busy life and ensure punctual, reliable service every time."
  },
  {
    icon: CheckCircle,
    title: "Hassle-Free Matching Process",
    description: "Our streamlined process makes it easy to find and hire the right professional quickly and efficiently."
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Customer Support",
    description: "Our support team is always ready to assist you, ensuring a smooth and positive experience from start to finish."
  }
];

export const WhyChooseUs = () => {
  return (
    <section className="py-24 dark:bg-[#0f172a] bg-slate-50 transition-colors duration-500" id="why-choose-us">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold dark:text-white text-gray-800 mb-4 transition-colors">
            Why Choose <span className="text-amber-600">Verified Maids?</span>
          </h2>
          <p className="dark:text-slate-300 text-gray-700 text-lg max-w-3xl mx-auto transition-colors">
            Experience the difference with a service built on trust, quality, and reliability. Here are just a few reasons why families and businesses choose us.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Benefits */}
          <div className="space-y-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="flex items-start space-x-6 p-6 dark:from-[#1e293b] dark:to-[#0f172a] bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border dark:border-white/10 border-transparent"
              >
                <div className="flex-shrink-0 dark:bg-brand-navy bg-white p-4 rounded-full shadow-lg">
                  <benefit.icon className="h-8 w-8 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold dark:text-white text-gray-800 mb-2 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="dark:text-slate-400 text-gray-700 leading-relaxed transition-colors">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right - Illustration with Image */}
          <div className="relative hidden lg:flex justify-center items-center">
            <div className="relative w-full max-w-lg">
              <img 
                src="https://img.freepik.com/free-vector/cleaners-with-cleaning-products-housekeeping-service_18591-52068.jpg?semt=ais_hybrid&w=740"
                alt="Illustration representing trust and quality domestic service"
                className="rounded-xl shadow-2xl w-full h-auto"
              />
              <div className="absolute top-0.5 left-0.5 dark:bg-[#1e293b]/90 bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-xl transform -rotate-6 border dark:border-white/10">
                 <div className="flex items-center space-x-4">
                     <div className="bg-amber-100 p-3 rounded-full">
                        <Gem className="h-8 w-8 text-amber-600" />
                     </div>
                     <div>
                        <p className="text-2xl font-bold dark:text-white text-gray-800 transition-colors">Premium Quality</p>
                         <p className="dark:text-slate-400 text-gray-600 transition-colors">Guaranteed Service</p>
                     </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
