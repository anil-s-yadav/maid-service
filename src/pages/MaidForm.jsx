import { MaidForm } from "@/components/MaidForm";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

const MaidFormPage = () => {
  return (
    <div className="min-h-screen dark:bg-background bg-slate-50 transition-colors duration-500">
      <Header />
      
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4 text-center mb-2">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold dark:text-white text-brand-navy tracking-tight font-heading transition-colors">
            नौकारी पाने के लिए ये फॉर्म भरे
          </h1>
        </div>
        
        <div className="container mx-auto px-4">
          <MaidForm />
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default MaidFormPage;
