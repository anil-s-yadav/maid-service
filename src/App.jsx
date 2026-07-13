import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { HelmetProvider } from 'react-helmet-async';
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";
import OurPrice from "./pages/OurPrice";
import WhyChooseUs from "./pages/WhyChooseUs";
import MaidForm from "./pages/MaidForm";
import NotFound from "./pages/NotFound";
import { MobileCTA } from "./components/MobileCTA";
import { LeadPopup } from "./components/LeadPopup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import ServiceDetail from "./pages/ServiceDetail";
import CallRedirect from "./pages/CallRedirect";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import { ThemeProvider } from "./contexts/ThemeProvider";
import { LiveNotifications } from "./components/LiveNotifications";
import { CookieConsent } from "./components/CookieConsent";

import { FloatingWhatsApp } from "./components/FloatingWhatsApp";

const queryClient = new QueryClient();

const GlobalOverlays = () => {
  const location = useLocation();
  const isCustomerPortal = location.pathname.startsWith('/dashboard') || location.pathname.startsWith('/login');

  if (isCustomerPortal) {
    return (
      <>
        <FloatingWhatsApp />
        <CookieConsent />
      </>
    );
  }

  return (
    <>
      <MobileCTA />
      <LeadPopup />
      <FloatingWhatsApp />
      <LiveNotifications />
      <CookieConsent />
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <HelmetProvider>
        <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <GlobalOverlays />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/our-price" element={<OurPrice />} />
          <Route path="/why-choose-us" element={<WhyChooseUs />} />
          <Route path="/maid-form" element={<MaidForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/tel:*" element={<CallRedirect />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      </TooltipProvider>
      </HelmetProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;