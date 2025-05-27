
import { OurPrice } from "@/components/OurPrice";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const OurPricePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <Header />
      <div className="pt-20">
        <OurPrice />
      </div>
      <Footer />
    </div>
  );
};

export default OurPricePage;
