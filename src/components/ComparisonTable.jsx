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
    <section className="py-12 md:py-16 bg-[#f8fafc] border-t border-slate-200 relative overflow-hidden shadow-inner">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-teal/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-gold/5 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">

        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-teal/10 text-brand-teal font-semibold text-[11px] mb-3 border border-brand-teal/20 uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Unmatched Reliability</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-2 font-heading">
            Why We Are Different
          </h2>
          <p className="text-slate-600 text-[13px] md:text-sm">
            See how Verified Maids stacks up against traditional unorganized agencies and local brokers.
          </p>
        </div>

        <div
          ref={ref}
          className={`max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200 transition-all duration-1000 ${inView ? animations.fadeUp.in : animations.fadeUp.out}`}
        >
          {/* Header Row */}
          <div className="grid grid-cols-12 bg-gradient-to-r from-brand-navy to-slate-800 text-white px-4 py-3 md:px-5 md:py-3.5 items-center">
            <div className="col-span-6 font-bold text-[11px] md:text-xs uppercase tracking-wider text-slate-300">Feature Comparison</div>
            <div className="col-span-3 text-center font-bold text-xs md:text-sm text-brand-teal bg-white/10 rounded-md py-1">Verified Maids</div>
            <div className="col-span-3 text-center font-bold text-xs md:text-sm text-slate-400">Other Agencies</div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-slate-100">
            {features.map((feature, idx) => (
              <div key={idx} className="grid grid-cols-12 px-4 py-2.5 md:px-5 md:py-3 hover:bg-brand-teal/5 transition-colors items-center group">
                {/* Feature Name */}
                <div className="col-span-6 font-medium text-slate-700 text-[13px] md:text-sm flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-brand-teal transition-colors hidden sm:block shrink-0"></div>
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

          <div className="bg-slate-50 p-3 text-center border-t border-slate-100">
            <p className="text-[11px] text-slate-500">Don't compromise on your family's safety and comfort.</p>
          </div>
        </div>

      </div>
    </section>
  );
};
