import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Clock, Heart, CheckCircle, Home, ChefHat, Baby, Stethoscope, Car, ArrowRight } from "lucide-react";
import { BRAND } from "../utils/constants";
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <section id="about" className="py-24 dark:bg-[#0f172a] bg-slate-50 relative overflow-hidden transition-colors duration-500">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl -translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold dark:text-white text-brand-navy mb-4 font-heading transition-colors">
            About <span className="text-brand-gold">{BRAND.name}</span>
          </h2>
          <p className="dark:text-slate-300 text-slate-600 text-lg transition-colors">
            We are dedicated to providing exceptional domestic help services, connecting you with trusted and background-verified professionals to manage your household needs with absolute peace of mind.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=600&fit=crop" 
              alt={`Our team of verified professionals at ${BRAND.name}`}
              className="rounded-3xl shadow-2xl w-full h-[450px] object-cover"
            />
            <div className="absolute -bottom-8 -right-4 md:-right-8 dark:bg-[#1e293b] bg-white p-6 md:p-8 rounded-3xl shadow-xl border dark:border-white/10 border-slate-100 transform rotate-2 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="bg-brand-gold/10 p-4 rounded-full">
                  <Users className="h-8 w-8 text-brand-gold" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold dark:text-white text-brand-navy font-heading transition-colors">10,000+</h3>
                  <p className="dark:text-slate-400 text-slate-500 font-medium text-sm transition-colors">Happy Families</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-3xl font-bold dark:text-white text-brand-navy font-heading transition-colors">Our Commitment to Excellence and Trust</h3>
            <p className="dark:text-slate-300 text-slate-600 leading-relaxed text-lg transition-colors">
              At {BRAND.name}, your family's safety is our highest priority. We meticulously vet every professional in our network through Aadhaar verification, address checks, and reference calls. Our goal is to build lasting relationships based on exceptional service and mutual respect.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-full shrink-0">
                  <Award className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-bold dark:text-white text-brand-navy mb-1 text-lg transition-colors">Uncompromising Quality</h4>
                  <p className="dark:text-slate-400 text-slate-600 transition-colors">Rigorous screening and continuous evaluation ensure the highest standards of service delivery.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-brand-gold/20 p-3 rounded-full shrink-0">
                  <Clock className="h-6 w-6 text-brand-gold" />
                </div>
                <div>
                  <h4 className="font-bold dark:text-white text-brand-navy mb-1 text-lg transition-colors">Dependability You Can Count On</h4>
                  <p className="dark:text-slate-400 text-slate-600 transition-colors">We prioritize punctuality and reliability, ensuring our professionals are there when you need them.</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-brand-gold hover:bg-amber-500 text-white font-bold py-4 px-8 rounded-full shadow-lg shadow-brand-gold/30 transition-all hover:-translate-y-1">
                Enquire Now <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
