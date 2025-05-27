import { MaidForm } from "@/components/MaidForm";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

const MaidFormPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <Header />
      <section className="py-24 bg-black-700">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-black mb-6 tracking-wide">
            नौकारी पाने के लिए ये फॉर्म भरे
          </h1>
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
