import { CheckCircle2, XCircle, ShieldCheck } from "lucide-react";
import { useInView, animations } from "../hooks/useInView";

export const ComparisonTable = () => {
  const [ref, inView] = useInView({ threshold: 0.1 });

  const features = [
    { name: "Aadhaar & Police Verification", us: true, others: "Sometimes", positive: true },
    { name: "Free Replacements", us: true, others: "Sometimes", positive: true },
    { name: "Transparent Salary Breakdown", us: true, others: "Sometimes", positive: true },
    { name: "Medically Screened Staff", us: true, others: "Sometimes", positive: true },
    { name: "Professional Training", us: true, others: "Sometimes", positive: true },
    { name: "Dedicated Relationship Manager", us: true, others: "Sometimes", positive: true },
    { name: "Hidden Agency Fees", us: false, others: true, positive: false },
  ];

  const renderBadge = (value, isPositive) => {
    if (value === true) {
      return isPositive ? (
        <div className="flex items-center gap-1.5 bg-green-50 text-green-700 px-3 py-1 rounded-full border border-green-100 shadow-sm">
          <CheckCircle2 className="w-4 h-4" />
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider hidden sm:inline-block">Yes</span>
        </div>
      ) : (
        <div className="flex items-center gap-1.5 bg-red-50 text-red-400 px-3 py-1 rounded-full border border-red-100 shadow-sm">
          <CheckCircle2 className="w-4 h-4" />
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider hidden sm:inline-block">Yes</span>
        </div>
      );
    }

    if (value === false) {
      return isPositive ? (
        <div className="flex items-center gap-1.5 bg-red-50 text-red-700 px-3 py-1 rounded-full border border-red-100 shadow-sm">
          <XCircle className="w-4 h-4" />
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider hidden sm:inline-block">No</span>
        </div>
      ) : (
        <div className="flex items-center gap-1.5 bg-green-50 text-green-700 px-3 py-1 rounded-full border border-green-100 shadow-sm">
          <XCircle className="w-4 h-4" />
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider hidden sm:inline-block">No</span>
        </div>
      );
    }

    if (value === "Sometimes") {
      return (
        <div className="flex items-center gap-1.5 bg-orange-50 text-orange-400 px-3 py-1 rounded-full border border-orange-100 shadow-sm">
          <XCircle className="w-4 h-4" />
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider hidden sm:inline-block">Sometimes</span>
        </div>
      );
    }

    return null;
  };

  return (
    <section className="pt-24 pb-16 md:pt-28 md:pb-20 bg-slate-50 relative overflow-hidden">
      {/* Wave transition from previous section */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-0">
        <svg className="relative block w-full h-[40px] md:h-[60px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118,130.98,131.2,201.2,122.9,243.43,117.92,283.47,100,321.39,56.44Z" fill="#ffffff"></path>
        </svg>
      </div>

      {/* Subtle Background Glows */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-teal/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-gold/5 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">

        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-teal/10 text-brand-teal font-semibold text-xs mb-4 border border-brand-teal/20">
            <ShieldCheck className="w-4 h-4" />
            <span>Unmatched Reliability</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-3 font-heading">
            Why We Are Different
          </h2>
          <p className="text-slate-600 text-sm md:text-base">
            See how Verified Maids stacks up against traditional unorganized agencies and local brokers.
          </p>
        </div>

        <div
          ref={ref}
          className={`max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200 transition-all duration-1000 ${inView ? animations.fadeUp.in : animations.fadeUp.out}`}
        >
          {/* Header Row */}
          <div className="grid grid-cols-12 bg-gradient-to-r from-brand-navy to-slate-800 text-white p-4 md:p-5 items-center">
            <div className="col-span-6 font-bold text-sm md:text-base uppercase tracking-wider text-slate-300">Feature Comparison</div>
            <div className="col-span-3 text-center font-bold text-sm md:text-base text-brand-teal bg-white/10 rounded-lg py-1.5">Verified Maids</div>
            <div className="col-span-3 text-center font-bold text-sm md:text-base text-slate-400">Other Agencies</div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-slate-100">
            {features.map((feature, idx) => (
              <div key={idx} className="grid grid-cols-12 px-4 py-3.5 md:px-5 hover:bg-brand-teal/5 transition-colors items-center group">
                {/* Feature Name */}
                <div className="col-span-6 font-medium text-slate-700 text-sm md:text-base flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-brand-teal transition-colors hidden sm:block"></div>
                  {feature.name}
                </div>

                {/* Verified Maids Column */}
                <div className="col-span-3 flex justify-center">
                  {renderBadge(feature.us, feature.positive)}
                </div>

                {/* Other Agencies Column */}
                <div className="col-span-3 flex justify-center">
                  {renderBadge(feature.others, feature.positive)}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-slate-50 p-4 text-center border-t border-slate-100">
            <p className="text-xs text-slate-500">Don't compromise on your family's safety and comfort.</p>
          </div>
        </div>

      </div>
    </section>
  );
};
