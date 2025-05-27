
import { Services } from "@/components/Services";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <Header />
      <div className="pt-20">
        <Services />
      </div>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default ServicesPage;
