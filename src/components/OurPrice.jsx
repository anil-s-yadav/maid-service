import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const pricingPlans = [
  {
    title: "Part-Time Maid",
    subtitle: "Ideal for regular upkeep",
    price: "₹8,000",
    period: "per month",
    features: [
      "Regular Cleaning & Sweeping",
      "Daily Utensil Washing",
      "Essential Laundry Support",
      "Flexible Scheduling",
      "Background Verified Professional"
    ],
    popular: false
  },
  {
    title: "Full-Time Maid",
    subtitle: "Comprehensive household management",
    price: "₹15,000",
    period: "per month",
    features: [
      "Complete House Cleaning",
      "Expert Cooking Assistance",
      "Full Laundry & Ironing",
      "Efficient Utensil Management",
      "Dedicated Child Care Support",
      "Background Verified Professional"
    ],
    popular: true
  },
  {
    title: "Live-In Maid",
    subtitle: "Round-the-clock support",
    price: "₹20,000",
    period: "per month",
    features: [
      "24/7 Availability & Support",
      "Full Household Management",
      "All Cooking & Cleaning Needs",
      "Comprehensive Elder/Child Care",
      "Emergency Assistance Ready",
      "Includes Accommodation & Food"
    ],
    popular: false
  }
];

const specialServices = [
  { name: "Professional Baby Care", price: "₹12,000/month" },
  { name: "Compassionate Elder Care", price: "₹18,000/month" },
  { name: "Skilled Cooking Services", price: "₹10,000/month" },
  { name: "Deep Cleaning Session", price: "₹2,500/session" }
];

export const OurPrice = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 to-purple-50" id="price">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Our Flexible <span className="text-amber-600">Pricing Plans</span>
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Choose from our transparent pricing options designed to fit your needs and budget. Get premium domestic help without any hidden costs.
          </p>
        </div>

        {/* Main Pricing Plans */}
        <div className="grid md:grid-cols-3 gap-10 mb-20">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative transform transition-all duration-300 hover:scale-105 border-0 rounded-xl shadow-xl ${
                plan.popular 
                  ? 'border-amber-500 border-2' 
                  : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-amber-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center space-x-1 shadow-lg">
                    <Star className="h-4 w-4 fill-current text-white" />
                    <span>Most Popular Choice</span>
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-6 pt-8">
                <CardTitle className="text-3xl font-bold text-gray-800">{plan.title}</CardTitle>
                <p className="text-purple-700 font-medium mt-1">{plan.subtitle}</p>
                <div className="mt-6">
                  <span className="text-5xl font-bold text-amber-600">{plan.price}</span>
                  <span className="text-gray-700 ml-2 font-medium">{plan.period}</span>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full text-lg font-semibold py-7 rounded-md transition-colors duration-300 shadow-lg ${ plan.popular ? 'bg-amber-600 hover:bg-amber-700' : 'bg-purple-600 hover:bg-purple-700'}`}
                >
                  Select This Plan
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Special Services */}
        <div className="bg-white rounded-xl p-10 shadow-xl">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-10">
            <span className="text-purple-700">Explore Our</span> Special Services
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialServices.map((service, index) => (
              <Card key={index} className="text-center border-0 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg">
                <CardContent className="p-6 space-y-3">
                  <h4 className="text-xl font-semibold text-gray-800">{service.name}</h4>
                  <p className="text-amber-600 font-bold text-2xl">{service.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Need a Tailored Solution?</h3>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">We understand that your needs may be unique. Contact us to discuss a custom service package designed specifically for you.</p>
            <a href="/contact" className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-10 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl">
              Get a Custom Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
