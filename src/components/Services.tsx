
import { Card, CardContent } from "@/components/ui/card";
import { 
  Home, 
  ChefHat, 
  Baby, 
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
  { 
    icon: Home, 
    title: "Maid", 
    description: "Professional house cleaning services",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop"
  },
  { 
    icon: ChefHat, 
    title: "Cook", 
    description: "Experienced cooking professionals",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop"
  },
  { 
    icon: Baby, 
    title: "Baby Sitter", 
    description: "Trusted childcare specialists",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop"
  },
  { 
    icon: Heart, 
    title: "Baby Massage", 
    description: "Gentle baby care services",
    image: "https://images.unsplash.com/photo-1559582930-2d0ec769ac04?w=400&h=300&fit=crop"
  },
  { 
    icon: Heart, 
    title: "Patient Care", 
    description: "Medical assistance at home",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop"
  },
  { 
    icon: Users, 
    title: "Elder Care", 
    description: "Compassionate senior care",
    image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&h=300&fit=crop"
  },
  { 
    icon: Car, 
    title: "Driver", 
    description: "Professional driving services",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400&h=300&fit=crop"
  },
  { 
    icon: Stethoscope, 
    title: "Nursing", 
    description: "Qualified nursing care",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop"
  },
  { 
    icon: User, 
    title: "Japa Maid", 
    description: "Postpartum care specialists",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop"
  },
  { 
    icon: Truck, 
    title: "Delivery Boy", 
    description: "Reliable delivery services",
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&h=300&fit=crop"
  },
  { 
    icon: Shield, 
    title: "Security Guard", 
    description: "Professional security services",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
  },
  { 
    icon: Building, 
    title: "Housekeeping", 
    description: "Complete home maintenance",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
  },
  { 
    icon: UserCheck, 
    title: "Office Support", 
    description: "Administrative assistance",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop"
  }
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
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-0 shadow-lg overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-4 text-center">
                  <div className="bg-gradient-to-br from-purple-100 to-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:from-purple-500 group-hover:to-blue-500 transition-all duration-300">
                    <service.icon className="h-6 w-6 text-purple-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors text-sm">
                    {service.title}
                  </h3>
                  <p className="text-xs text-gray-600 group-hover:text-gray-700">
                    {service.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
