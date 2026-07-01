import { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';

const CallRedirect = () => {
  const { phone } = useParams();

  useEffect(() => {
    if (phone) {
      // Try to auto-trigger the call
      const timer = setTimeout(() => {
        const link = document.createElement('a');
        link.href = `tel:+91${phone}`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }, 300);
      
      return () => clearTimeout(timer);
    }
  }, [phone]);

  if (!phone) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-900 p-6">
      <div className="text-center w-full max-w-md bg-white dark:bg-[#1e293b] p-8 rounded-3xl shadow-xl border border-slate-100 dark:border-white/10">
        <div className="w-20 h-20 bg-brand-gold/20 text-brand-gold rounded-full flex items-center justify-center mx-auto mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
        </div>
        <h2 className="text-2xl font-bold font-heading text-brand-navy dark:text-white mb-2">Call Initiated</h2>
        <p className="text-slate-500 dark:text-slate-400 mb-8">If your phone didn't automatically open the dialer, please tap the button below.</p>
        
        <a 
          href={`tel:+91${phone}`}
          className="block w-full bg-brand-gold hover:bg-amber-500 text-brand-navy font-bold py-4 px-8 rounded-xl shadow-lg transition-all active:scale-[0.98] text-lg"
        >
          Tap to Call +91 {phone}
        </a>
      </div>
    </div>
  );
};

export default CallRedirect;
