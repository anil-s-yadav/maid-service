import { Search, Users, CheckCircle, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Define Your Needs",
    description: "Use our intuitive platform to clearly specify the type of domestic help you require, your preferred schedule, and any special considerations."
  },
  {
    icon: Users,
    number: "02", 
    title: "Browse Verified Profiles",
    description: "Explore detailed profiles of our background-checked and skilled professionals. View their experience, skills, and reviews to find the perfect match."
  },
  {
    icon: CheckCircle,
    number: "03",
    title: "Connect & Hire",
    description: "Easily connect with shortlisted professionals, conduct interviews if needed, and hire the one who best fits your requirements. Pay only when you're satisfied."
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-24 bg-white" id="how-it-works">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Our Simple <span className="text-teal-600">Process</span>
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Getting the help you need is easy. Follow these simple steps to find and hire your ideal domestic professional.
          </p>
        </div>

        <div className="relative grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:flex absolute top-1/3 left-[calc(50%+6rem)] w-[10rem] h-1 bg-purple-200 items-center justify-center">
                    <ArrowRight className="h-6 w-6 text-purple-600"/>
                </div>
              )}
              
              <div className="relative z-10 bg-white rounded-full w-28 h-28 flex items-center justify-center mb-6 shadow-xl border-4 border-teal-100">
                <step.icon className="h-12 w-12 text-teal-600" />
                <div className="absolute -top-3 -right-3 bg-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-base font-bold shadow-lg">
                  {step.number}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-3">{step.title}</h3>
              <p className="text-gray-700 max-w-sm mx-auto leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
