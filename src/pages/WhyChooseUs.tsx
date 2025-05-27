
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const WhyChooseUsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <Header />
      <div className="pt-20">
        <WhyChooseUs />
      </div>
      <Footer />
    </div>
  );
};

export default WhyChooseUsPage;
