import { CheckCircle2, XCircle } from "lucide-react";
import { useInView, animations } from "../hooks/useInView";

export const ComparisonTable = () => {
  const [ref, inView] = useInView({ threshold: 0.1 });

  const features = [
    { name: "Aadhaar & Police Verification", us: true, others: false },
    { name: "Free Replacements", us: true, others: false },
    { name: "Transparent Salary Breakdown", us: true, others: false },
    { name: "Medically Screened Staff", us: true, others: false },
    { name: "Professional Training", us: true, others: "Sometimes" },
    { name: "Dedicated Relationship Manager", us: true, others: false },
    { name: "Hidden Agency Fees", us: false, others: true },
  ];

  return (
    <section className="py-24 bg-slate-50 relative">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-brand-navy mb-4 font-heading">
            Why We Are Different
          </h2>
          <p className="text-lg text-slate-600">
            See how Verified Maids stacks up against traditional unorganized agencies and local brokers.
          </p>
        </div>

        <div 
          ref={ref}
          className={`max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 transition-all duration-1000 ${inView ? animations.fadeUp.in : animations.fadeUp.out}`}
        >
          {/* Header Row */}
          <div className="grid grid-cols-3 bg-brand-navy text-white p-6 md:p-8">
            <div className="font-bold text-lg">Feature</div>
            <div className="text-center font-bold text-lg text-brand-teal">Verified Maids</div>
            <div className="text-center font-bold text-lg text-slate-400">Other Agencies</div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-slate-100">
            {features.map((feature, idx) => (
              <div key={idx} className="grid grid-cols-3 p-6 md:p-8 hover:bg-slate-50 transition-colors items-center">
                <div className="font-medium text-slate-700">{feature.name}</div>
                
                <div className="flex justify-center">
                  {feature.us === true ? (
                    <div className="flex flex-col items-center">
                      <CheckCircle2 className="w-8 h-8 text-brand-teal mb-1" />
                      <span className="text-brand-teal text-xs font-bold uppercase tracking-wider">Guaranteed</span>
                    </div>
                  ) : feature.us === false ? (
                    <XCircle className="w-8 h-8 text-red-500" />
                  ) : (
                    <span className="text-brand-navy font-semibold">{feature.us}</span>
                  )}
                </div>

                <div className="flex justify-center opacity-80">
                  {feature.others === true ? (
                    <CheckCircle2 className="w-8 h-8 text-slate-400" />
                  ) : feature.others === false ? (
                    <div className="flex flex-col items-center">
                      <XCircle className="w-8 h-8 text-red-400 mb-1" />
                      <span className="text-slate-500 text-xs font-bold uppercase tracking-wider">Sometimes</span>
                    </div>
                  ) : (
                    <span className="text-slate-500 font-medium">{feature.others}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-slate-50 p-6 text-center border-t border-slate-100">
            <p className="text-sm text-slate-500">Don't compromise on your family's safety and comfort.</p>
          </div>
        </div>

      </div>
    </section>
  );
};
