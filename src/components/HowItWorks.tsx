
import { Search, Users, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "1",
    title: "Search",
    description: "Use our simple search and tell us what you require. See list of all the available maids in your area."
  },
  {
    icon: Users,
    number: "2", 
    title: "Shortlist",
    description: "View the complete profile of the hundreds of available maids and shortlist as per your preference."
  },
  {
    icon: CheckCircle,
    number: "3",
    title: "Meet, Select & Relax",
    description: "Talk to the maid on the phone or meet her personally. Select the maid and pay only after the maid joins."
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            How It <span className="text-orange-500">Works?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              {/* Dotted line connector */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-20 left-1/2 w-full h-0.5 border-t-2 border-dotted border-purple-300 z-0"></div>
              )}
              
              <div className="relative z-10">
                <div className="bg-white w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg relative border-4 border-purple-100">
                  <step.icon className="h-10 w-10 text-purple-600" />
                  <div className="absolute -top-2 -right-2 bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                    {step.number}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-purple-800 mb-4">{step.title}</h3>
                <p className="text-gray-600 max-w-sm mx-auto leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
