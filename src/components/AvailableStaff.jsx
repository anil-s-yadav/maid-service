import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Star, ShieldCheck, MapPin, Languages, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const STAFF_PROFILES = [
  {
    id: '#1042',
    role: 'House Maid',
    experience: '5 Yrs Exp',
    languages: 'Marathi, Hindi',
    availability: 'Available Tomorrow',
    location: 'Powai & Andheri',
    image: 'https://plus.unsplash.com/premium_photo-1661964243697-734d7bd664ff?q=70&w=400&h=400&auto=format&fit=crop'
  },
  {
    id: '#2018',
    role: 'Cook',
    experience: '8 Yrs Exp',
    languages: 'Hindi, Gujarati',
    availability: 'Immediate',
    location: 'Bandra & Khar',
    image: 'https://plus.unsplash.com/premium_photo-1681483534373-2d9250d3e1e9?q=70&w=400&h=400&auto=format&fit=crop'
  },
  {
    id: '#3192',
    role: 'Babysitter',
    experience: '3 Yrs Exp',
    languages: 'English, Hindi',
    availability: 'Available Tomorrow',
    location: 'Juhu & Vile Parle',
    image: 'https://images.unsplash.com/photo-1780329944297-b83645a87dd4?q=70&w=400&h=400&auto=format&fit=crop'
  },
  {
    id: '#4105',
    role: 'Japa Maid',
    experience: '12 Yrs Exp',
    languages: 'Marathi, Hindi',
    availability: 'Next Week',
    location: 'Dadar & Worli',
    image: 'https://images.unsplash.com/photo-1714595747121-7067706bc557?q=70&w=400&h=400&auto=format&fit=crop'
  },
  {
    id: '#5022',
    role: 'Patient Care',
    experience: '7 Yrs Exp',
    languages: 'Hindi, English',
    availability: 'Immediate',
    location: 'Navi Mumbai',
    image: 'https://plus.unsplash.com/premium_photo-1682089874677-3eee554feb19?q=70&w=400&h=400&auto=format&fit=crop'
  }
];

export const AvailableStaff = () => {
  const [emblaRef] = useEmblaCarousel({ 
    loop: true, 
    align: 'start',
    dragFree: true
  }, [Autoplay({ delay: 4000, stopOnInteraction: false })]);

  return (
    <section className="pt-6 pb-12 md:pt-8 md:pb-16 bg-slate-50 dark:bg-[#0a0f1e] overflow-hidden transition-colors duration-500">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-500/10 text-green-700 dark:text-green-400 px-3 py-1.5 rounded-full text-xs font-bold mb-3 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
            Staff Available Right Now
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-brand-navy dark:text-white font-heading mb-3 transition-colors">
            Hire <span className="text-brand-gold">Pre-Verified</span> Professionals Today
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base">
            Skip the waiting. We have fully screened, experienced staff ready to start working in your area immediately.
          </p>
        </div>

        <div className="relative">

          <div className="embla overflow-hidden" ref={emblaRef}>
            <div className="embla__container flex touch-pan-y -ml-3 md:-ml-4">
              {STAFF_PROFILES.map((staff, idx) => (
                <div key={idx} className="embla__slide flex-none pl-3 md:pl-4 w-[85vw] sm:w-[280px] md:w-[320px] lg:w-[350px]">
                  <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-4 md:p-5 shadow-lg border border-slate-100 dark:border-white/5 transition-colors h-full flex flex-col group relative overflow-hidden">

                    <div className="flex gap-3 mb-4 relative z-10">
                      <div className="relative">
                        <img 
                          src={staff.image} 
                          alt="Verified Staff" 
                          className="w-16 h-16 rounded-xl object-cover shadow-sm transition-all duration-300"
                        />
                        <div className="absolute -bottom-1.5 -right-1.5 bg-blue-500 text-white rounded-full p-1 shadow-sm border-2 border-white dark:border-[#1e293b]">
                          <ShieldCheck className="w-2.5 h-2.5" />
                        </div>
                      </div>
                      <div className="flex flex-col justify-center">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-bold text-lg text-brand-navy dark:text-white transition-colors">{staff.role}</h3>
                          <span className="text-[10px] bg-slate-100 dark:bg-white/10 text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded font-mono font-medium">
                            {staff.id}
                          </span>
                        </div>
                        <div className="flex items-center text-brand-gold text-sm font-bold">
                          <Star className="w-3.5 h-3.5 fill-brand-gold mr-1" />
                          <span>4.8/5 Rating</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3 mb-6 flex-grow relative z-10">
                      <div className="flex items-center gap-2.5 text-sm">
                        <Briefcase className="w-4 h-4 text-slate-400 shrink-0" />
                        <span className="text-slate-700 dark:text-slate-300 transition-colors"><strong className="text-brand-navy dark:text-white font-medium">Exp:</strong> {staff.experience}</span>
                      </div>
                      <div className="flex items-center gap-2.5 text-sm">
                        <Languages className="w-4 h-4 text-slate-400 shrink-0" />
                        <span className="text-slate-700 dark:text-slate-300 transition-colors"><strong className="text-brand-navy dark:text-white font-medium">Speaks:</strong> {staff.languages}</span>
                      </div>
                      <div className="flex items-center gap-2.5 text-sm">
                        <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                        <span className="text-slate-700 dark:text-slate-300 transition-colors"><strong className="text-brand-navy dark:text-white font-medium">Prefers:</strong> {staff.location}</span>
                      </div>
                    </div>

                    <div className="mt-auto relative z-10">
                      <div className="w-full text-center bg-green-50 dark:bg-green-500/10 text-green-700 dark:text-green-400 py-2 rounded-xl text-sm font-bold mb-3 transition-colors border border-green-100 dark:border-green-500/20">
                        {staff.availability}
                      </div>
                      <Link 
                        to="/contact" 
                        className="block w-full text-center bg-slate-900 dark:bg-brand-gold dark:text-brand-navy hover:bg-brand-gold hover:text-brand-navy text-white font-bold py-3 rounded-xl transition-colors shadow-md"
                      >
                        Request This Profile
                      </Link>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
