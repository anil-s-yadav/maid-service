
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { HowItWorks } from "@/components/HowItWorks";
import { About } from "@/components/About";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { OurPrice } from "@/components/OurPrice";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <Header />
      <Hero />
      <Services />
      <HowItWorks />
      <About />
      <WhyChooseUs />
      <OurPrice />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
