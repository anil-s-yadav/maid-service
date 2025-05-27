
import { Card, CardContent } from "@/components/ui/card";
import { 
  Home, 
  ChefHat, 
  Baby, 
  Massage, 
  Heart, 
  Users, 
  Car, 
  Stethoscope, 
  User, 
  Truck, 
  Shield, 
  Building,
  UserCheck
} from "lucide-react";

const services = [
  { icon: Home, title: "Maid", description: "Professional house cleaning services" },
  { icon: ChefHat, title: "Cook", description: "Experienced cooking professionals" },
  { icon: Baby, title: "Baby Sitter", description: "Trusted childcare specialists" },
  { icon: Massage, title: "Baby Massage", description: "Gentle baby care services" },
  { icon: Heart, title: "Patient Care", description: "Medical assistance at home" },
  { icon: Users, title: "Elder Care", description: "Compassionate senior care" },
  { icon: Car, title: "Driver", description: "Professional driving services" },
  { icon: Stethoscope, title: "Nursing", description: "Qualified nursing care" },
  { icon: User, title: "Japa Maid", description: "Postpartum care specialists" },
  { icon: Truck, title: "Delivery Boy", description: "Reliable delivery services" },
  { icon: Shield, title: "Security Guard", description: "Professional security services" },
  { icon: Building, title: "Housekeeping", description: "Complete home maintenance" },
  { icon: UserCheck, title: "Office Support", description: "Administrative assistance" }
];

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Our <span className="text-orange-500">Services</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We provide comprehensive household and care services to make your life easier
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-0 shadow-lg"
            >
              <CardContent className="p-6 text-center">
                <div className="bg-gradient-to-br from-purple-100 to-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-purple-500 group-hover:to-blue-500 transition-all duration-300">
                  <service.icon className="h-8 w-8 text-purple-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 group-hover:text-gray-700">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
