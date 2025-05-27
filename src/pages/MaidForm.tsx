
import { MaidForm } from "@/components/MaidForm";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

const MaidFormPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Find Your Perfect <span className="text-yellow-300">Maid</span>
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Tell us your requirements and we'll help you find the right domestic help for your needs.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <MaidForm />
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default MaidFormPage;
