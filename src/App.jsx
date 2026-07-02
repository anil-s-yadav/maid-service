import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { HelmetProvider } from 'react-helmet-async';
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <HelmetProvider>
        <TooltipProvider>
      <Toaster />
      <Sonner />
      <MobileCTA />
      <LeadPopup />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/price" element={<OurPrice />} />
          <Route path="/why-choose-us" element={<WhyChooseUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/maid-form" element={<MaidForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/call/:phone" element={<CallRedirect />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      </TooltipProvider>
      </HelmetProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;