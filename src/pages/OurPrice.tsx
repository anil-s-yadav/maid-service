
import { OurPrice } from "@/components/OurPrice";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

const OurPricePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <Header />
      <div className="pt-20">
        <OurPrice />
      </div>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default OurPricePage;
