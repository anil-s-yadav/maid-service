
import { SalaryCalculator } from "@/components/SalaryCalculator";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

const OurPricePage = () => {
  return (
    <div className="min-h-screen dark:bg-background dark:bg-none bg-gradient-to-br from-purple-50 to-blue-50 transition-colors duration-500">
      <Header />
      <div className="pt-20">
        <SalaryCalculator />
      </div>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default OurPricePage;
