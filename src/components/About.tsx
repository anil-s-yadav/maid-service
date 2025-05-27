
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Clock, Shield } from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "10,000+",
    label: "Happy Customers",
    description: "Families trust us for their household needs"
  },
  {
    icon: Award,
    number: "5+",
    label: "Years Experience",
    description: "Serving Mumbai and surrounding areas"
  },
  {
    icon: Clock,
    number: "24/7",
    label: "Support Available",
    description: "We're here whenever you need us"
  },
  {
    icon: Shield,
    number: "100%",
    label: "Verified Staff",
    description: "All our maids are background checked"
  }
];

export const About = () => {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              About <span className="text-purple-600">Book Your Maid</span>
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We are Mumbai's most trusted household service provider, connecting families with verified, reliable, and experienced domestic help. Our mission is to make finding quality household staff simple, safe, and convenient.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Since our inception, we have helped thousands of families find the perfect match for their household needs. Whether you need a full-time maid, part-time help, or specialized services like baby care or elder care, we have the right person for you.
            </p>
            
            {/* Stats Grid */}
            <div className="grid md:grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardContent className="p-4 text-center">
                    <div className="bg-gradient-to-br from-purple-500 to-blue-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-purple-600 mb-1">{stat.number}</div>
                    <div className="text-sm font-semibold text-gray-800 mb-1">{stat.label}</div>
                    <div className="text-xs text-gray-600">{stat.description}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right - Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-3xl p-8 h-96 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop" 
                alt="Professional cleaning service"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">98%</div>
                <div className="text-sm text-gray-600">Customer Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
