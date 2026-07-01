import { BRAND, FAQ_DATA } from "../utils/constants";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import { useInView, animations } from "../hooks/useInView";

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section className="py-12 md:py-16 dark:bg-[#0f172a] bg-slate-50 relative overflow-hidden transition-colors duration-500">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold dark:text-white text-[#0a1128] mb-3 font-heading transition-colors">Frequently Asked Questions</h2>
          <p className="dark:text-slate-300 text-slate-500 text-sm transition-colors">Got questions about hiring a maid through {BRAND.name}? We've got answers.</p>
        </div>

        <div 
          ref={ref}
          className={`max-w-3xl mx-auto space-y-3 transition-all duration-1000 ${inView ? animations.fadeUp.in : animations.fadeUp.out}`}
        >
          {FAQ_DATA.map((faq, index) => (
            <div 
              key={index} 
              className={`dark:bg-[#1e293b] bg-white border rounded-xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'border-brand-gold shadow-[0_4px_15px_rgba(217,119,6,0.1)]' : 'dark:border-white/10 border-slate-200 hover:border-brand-gold/50 shadow-sm'}`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full px-5 py-3.5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className={`font-semibold text-sm font-heading transition-colors ${openIndex === index ? 'text-brand-gold' : 'dark:text-white text-[#0a1128]'}`}>
                  {faq.question}
                </span>
                <div className={`shrink-0 ml-4 w-6 h-6 rounded-full flex items-center justify-center transition-colors ${openIndex === index ? 'bg-brand-gold text-white shadow-sm' : 'dark:bg-white/10 dark:text-slate-300 dark:hover:bg-white/20 bg-slate-100 text-slate-500 hover:bg-slate-200'}`}>
                  {openIndex === index ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                </div>
              </button>
              
              <div 
                className={`px-5 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 pb-4 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-[13px] dark:text-slate-400 text-slate-600 leading-relaxed transition-colors">
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
