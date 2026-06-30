
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Features } from "@/components/Features";
import { TrustBanner } from "@/components/TrustBanner";
import { ComparisonTable } from "@/components/ComparisonTable";
import { FAQ } from "@/components/FAQ";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import SEOHead from "@/components/SEOHead";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title="Home" 
        description="Verified Maids provides trusted, background-checked house maids, cooks, babysitters, nannies, and caregivers in Mumbai. 24-hour placement with free replacement." 
      />
      <Header />
      <Hero />
      <TrustBanner />
      <Features />
      <Services />
      <ComparisonTable />
      <Testimonials />
      <FAQ />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
