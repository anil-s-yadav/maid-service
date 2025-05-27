
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const pricingPlans = [
  {
    title: "Part-Time Maid",
    subtitle: "4-6 Hours Daily",
    price: "₹8,000",
    period: "per month",
    features: [
      "Cleaning & Sweeping",
      "Utensil Washing",
      "Laundry Support",
      "Flexible Timing",
      "Background Verified"
    ],
    popular: false
  },
  {
    title: "Full-Time Maid",
    subtitle: "8-10 Hours Daily",
    price: "₹15,000",
    period: "per month",
    features: [
      "Complete House Cleaning",
      "Cooking Support",
      "Laundry & Ironing",
      "Utensil Management",
      "Child Care Support",
      "Background Verified"
    ],
    popular: true
  },
  {
    title: "Live-In Maid",
    subtitle: "24/7 Availability",
    price: "₹20,000",
    period: "per month",
    features: [
      "Round-the-clock Service",
      "Complete Household Management",
      "Cooking & Cleaning",
      "Elder/Child Care",
      "Emergency Support",
      "Accommodation Provided"
    ],
    popular: false
  }
];

const specialServices = [
  { name: "Baby Care", price: "₹12,000/month" },
  { name: "Elder Care", price: "₹18,000/month" },
  { name: "Cooking Only", price: "₹10,000/month" },
  { name: "Deep Cleaning", price: "₹2,500/session" }
];

export const OurPrice = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50" id="price">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Our <span className="text-purple-600">Pricing Plans</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transparent pricing with no hidden costs. Choose the plan that best fits your household needs.
          </p>
        </div>

        {/* Main Pricing Plans */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative transform transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-purple-500 border-2 shadow-2xl' 
                  : 'border-gray-200 shadow-lg'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-current" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-gray-800">{plan.title}</CardTitle>
                <p className="text-purple-600 font-medium">{plan.subtitle}</p>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-purple-600">{plan.price}</span>
                  <span className="text-gray-600 ml-2">{plan.period}</span>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600' 
                      : 'bg-purple-600 hover:bg-purple-700'
                  }`}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Special Services */}
        <div className="bg-white rounded-3xl p-8 shadow-lg">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">
            <span className="text-purple-600">Special</span> Services
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {specialServices.map((service, index) => (
              <Card key={index} className="text-center border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">{service.name}</h4>
                  <p className="text-purple-600 font-bold text-xl">{service.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">Need a custom package? We can create a plan that fits your specific requirements.</p>
            <Button className="bg-orange-500 hover:bg-orange-600">
              Request Custom Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
