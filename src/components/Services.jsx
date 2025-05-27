import { Card, CardContent } from "@/components/ui/card";
import { 
  Home, 
  ChefHat, 
  Baby, 
  Users, 
  Stethoscope,
  Syringe,
} from "lucide-react";

const services = [
  { 
    icon: Home, 
    title: "Maid Services", 
    description: "Professional house cleaning and maintenance services",
    longDescription: "Our professional maids are trained in all aspects of housekeeping including deep cleaning, dusting, mopping, laundry, and maintaining a hygienic living environment. All our maids are background verified and professionally trained.",
  },
  { 
    icon: ChefHat, 
    title: "Cooks", 
    description: "Expert culinary professionals for your home",
    longDescription: "Find experienced cooks who specialize in various cuisines. Our cooks are trained in food safety, nutrition, and can prepare meals according to your dietary preferences and requirements.",
  },
  { 
    icon: Baby, 
    title: "Baby Care", 
    description: "Qualified and experienced childcare professionals",
    longDescription: "Our baby care specialists are trained in child development, first aid, and early education. They provide attentive care, engage in developmental activities, and ensure your child's safety and well-being.",
  },
 
  { 
    icon: Stethoscope, 
    title: "Patient Care", 
    description: "Comprehensive medical assistance at home",
    longDescription: "Our patient care professionals provide medical assistance, medication management, wound care, and daily living support. They work closely with healthcare providers to ensure the best care for your loved ones.",
  },
  { 
    icon: Users, 
    title: "Elder Care", 
    description: "Compassionate and professional senior care",
    longDescription: "Our elder care specialists provide companionship, assistance with daily activities, medication reminders, and emotional support. They are trained to handle various age-related conditions with patience and understanding.",
  },
  
  { 
    icon: Syringe, 
    title: "Nursing Care", 
    description: "Qualified nursing professionals for home care",
    longDescription: "Our registered nurses provide professional medical care at home, including wound care, medication administration, health monitoring, and coordination with healthcare providers.",
  },
 
];

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Explore Our <span className="text-teal-600">Premium Services</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Discover a wide array of professional domestic services designed to simplify your life and maintain your home or office to the highest standards.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-0 rounded-lg overflow-hidden flex flex-col items-center justify-center p-6 text-center bg-white"
            >
              <CardContent className="p-0 flex flex-col items-center justify-center">
                <div className="bg-blue-100 rounded-full p-4 mb-4">
                  <service.icon className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                   {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Can't Find What You Need?</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10">
            Our services are flexible. If you have unique requirements or need a specialized professional, please reach out to us.
          </p>
          <a href="/contact" className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 px-10 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl">
            Request a Custom Service
          </a>
        </div>
      </div>
    </section>
  );
};
