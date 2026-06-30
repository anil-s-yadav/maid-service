import { BRAND, FAQ_DATA } from "../utils/constants";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import { useInView, animations } from "../hooks/useInView";

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-navy mb-4 font-heading">Frequently Asked Questions</h2>
          <p className="text-slate-600 text-lg">Got questions about hiring a maid through {BRAND.name}? We've got answers.</p>
        </div>

        <div 
          ref={ref}
          className={`max-w-3xl mx-auto space-y-4 transition-all duration-1000 ${inView ? animations.fadeUp.in : animations.fadeUp.out}`}
        >
          {FAQ_DATA.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'border-brand-teal shadow-md' : 'border-slate-200 hover:border-brand-teal/50'}`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className={`font-semibold text-lg font-heading ${openIndex === index ? 'text-brand-teal' : 'text-brand-navy'}`}>
                  {faq.question}
                </span>
                <div className={`shrink-0 ml-4 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === index ? 'bg-brand-teal text-white' : 'bg-slate-100 text-slate-500'}`}>
                  {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-slate-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
