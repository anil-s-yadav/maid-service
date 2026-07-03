import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Features } from "@/components/Features";
import { ComparisonTable } from "@/components/ComparisonTable";
import { AvailableStaff } from "@/components/AvailableStaff";
import { VerificationProcess } from "@/components/VerificationProcess";
import { FAQ } from "@/components/FAQ";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import SEOHead from "@/components/SEOHead";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500">
      <SEOHead
        title="Home"
        description="Verified Maids provides trusted, background-checked house maids, cooks, babysitters, nannies, and caregivers in Mumbai. 24-hour placement with free replacement."
      />
      <Header />
      <Hero />
      <Features />
      <Services />
      <AvailableStaff />
      <VerificationProcess />
      <ComparisonTable />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
