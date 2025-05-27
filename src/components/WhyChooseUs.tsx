
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Shield, List, Star, Clock, HeadphonesIcon } from "lucide-react";

const benefits = [
  {
    icon: CheckCircle,
    title: "Quick & Easy",
    description: "No need to wait for maid to come for interview. Search - View profile - Select."
  },
  {
    icon: Shield,
    title: "Safe & Reliable", 
    description: "Your safety is our first priority. We do a thorough background check of every maid"
  },
  {
    icon: List,
    title: "Multiple Options",
    description: "Watch as many profiles as you want. Select only the one you find best."
  },
  {
    icon: Star,
    title: "High Quality",
    description: "As a app web crawler expert a significant of internet."
  },
  {
    icon: Clock,
    title: "Free Replacement",
    description: "If the maid leaves for any reason within 6 months of joining, we will replace the maid. No questions asked."
  },
  {
    icon: HeadphonesIcon,
    title: "Service",
    description: "We are not just another maid agency. We have strong ethics and customers comes first!"
  }
];

export const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Benefits */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-8">
              Why Use <span className="text-orange-500">Book Your Maid?</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="bg-gradient-to-br from-purple-500 to-blue-500 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                      <benefit.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-purple-800 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right - Illustration */}
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-3xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="bg-white w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <CheckCircle className="h-16 w-16 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-purple-800 mb-4">
                  We're big on trust & safety
                </h3>
                <p className="text-gray-600">
                  All our professionals are verified and background checked
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
