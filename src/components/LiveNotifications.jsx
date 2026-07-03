import { useState, useEffect } from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import { AREAS_SERVED, SERVICES } from '../utils/constants';

const NAMES = ['Priya', 'Rahul', 'Sneha', 'Amit', 'Neha', 'Vikram', 'Pooja', 'Karan', 'Anjali', 'Rohit', 'Shruti', 'Sanjay'];

export const LiveNotifications = () => {
  const [notification, setNotification] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timeoutId;
    let count = 0;
    const MAX_NOTIFICATIONS = 3;
    
    const triggerNotification = () => {
      if (count >= MAX_NOTIFICATIONS) return;
      count++;

      // Generate random notification
      const randomName = NAMES[Math.floor(Math.random() * NAMES.length)];
      const randomArea = AREAS_SERVED[Math.floor(Math.random() * AREAS_SERVED.length)];
      const randomService = SERVICES[Math.floor(Math.random() * SERVICES.length)].name;
      const timeAgo = Math.floor(Math.random() * 59) + 1; // 1 to 59 mins ago
      
      setNotification({
        name: randomName,
        area: randomArea,
        service: randomService,
        time: timeAgo
      });
      
      setIsVisible(true);

      // Hide after 8 seconds to give users enough time to read
      setTimeout(() => {
        setIsVisible(false);
        
        // Only schedule the next one if we haven't hit the cap
        if (count < MAX_NOTIFICATIONS) {
          // Delay: 15s for the 2nd popup, 25s for the 3rd popup
          const nextDelay = count === 1 ? 15000 : 25000;
          timeoutId = setTimeout(triggerNotification, nextDelay);
        }
      }, 8000);
    };

    // Wait an initial 10 seconds before showing the very first popup
    timeoutId = setTimeout(() => {
      triggerNotification();
    }, 10000);

    return () => clearTimeout(timeoutId);
  }, []);

  if (!notification) return null;

  return (
    <div 
      className={`fixed bottom-24 md:bottom-8 left-4 md:left-8 z-[60] transition-all duration-500 transform ${
        isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95 pointer-events-none'
      }`}
    >
      <div className="bg-white dark:bg-[#1e293b] border border-slate-200 dark:border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.15)] rounded-2xl p-4 pr-10 md:pr-12 w-[320px] max-w-[calc(100vw-32px)] flex items-start gap-4 relative overflow-hidden transition-colors">
        {/* Decorative highlight */}
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-brand-gold"></div>
        
        <div className="w-10 h-10 rounded-full bg-green-50 dark:bg-green-500/10 flex flex-shrink-0 items-center justify-center">
          <CheckCircle2 className="w-5 h-5 text-green-500" />
        </div>
        
        <div>
          <p className="text-sm font-semibold text-brand-navy dark:text-white mb-1 transition-colors">
            New Booking! <span className="text-xs font-normal text-slate-500 dark:text-slate-400 ml-2 transition-colors">{notification.time}m ago</span>
          </p>
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-snug transition-colors">
            Someone from <span className="font-semibold">{notification.area}</span> just booked a <span className="font-semibold text-brand-gold">{notification.service}</span>.
          </p>
        </div>

        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-3 right-3 text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors"
          aria-label="Close notification"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
