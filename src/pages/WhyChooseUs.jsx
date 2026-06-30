
import { ComparisonTable } from "@/components/ComparisonTable";
import { Features } from "@/components/Features";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

const WhyChooseUsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <Header />
      <div className="pt-20">
        <Features />
        <ComparisonTable />
      </div>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default WhyChooseUsPage;
