import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ShieldCheck } from "lucide-react";
import { BRAND } from "@/utils/constants";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  const lastUpdated = "July 2, 2026";

  return (
    <div className="min-h-screen dark:bg-[#0f172a] bg-slate-50 flex flex-col transition-colors duration-500">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 dark:bg-[#0a0f1e] bg-white overflow-hidden border-b dark:border-white/10 border-slate-200 transition-colors duration-500">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-gold/10 rounded-full blur-[100px] -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-[80px] translate-y-1/2"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-gold/10 text-brand-gold mb-6 border border-brand-gold/20 shadow-lg shadow-brand-gold/5">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading dark:text-white text-slate-900 mb-6 transition-colors">
              Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-amber-400">Policy</span>
            </h1>
            <p className="text-lg md:text-xl dark:text-slate-400 text-slate-600 mb-4 transition-colors">
              How we collect, use, and protect your personal information.
            </p>
            <div className="inline-block dark:bg-white/5 bg-slate-100 rounded-full px-4 py-1.5 dark:text-slate-400 text-slate-500 text-sm font-medium border dark:border-white/10 border-slate-200 transition-colors">
              Last Updated: {lastUpdated}
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 flex-grow relative z-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="dark:bg-[#1e293b] bg-white rounded-3xl p-8 md:p-12 lg:p-16 shadow-xl border dark:border-white/10 border-slate-200 transition-colors duration-500 prose prose-slate dark:prose-invert max-w-none prose-headings:font-heading prose-headings:font-bold prose-a:text-brand-gold hover:prose-a:text-amber-500 prose-img:rounded-xl">
            
            <p className="lead text-lg md:text-xl text-slate-600 dark:text-slate-300">
              At {BRAND.name}, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services in Mumbai.
            </p>

            <hr className="my-8 border-slate-200 dark:border-white/10" />

            <h2>1. Information We Collect</h2>
            <p>We collect information that you voluntarily provide to us when you express an interest in obtaining information about us or our services. The personal information that we collect depends on the context of your interactions with us and the website.</p>
            <ul>
              <li><strong>Personal details:</strong> Name, phone number, email address, and residential address.</li>
              <li><strong>Requirement details:</strong> Service preferences, family size, specific requirements (like pet care or language preferences).</li>
              <li><strong>Identification:</strong> For our maids, we collect Aadhaar cards, PAN cards, and other government-issued IDs for strict background verification.</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>We use personal information collected via our website for a variety of business purposes described below:</p>
            <ul>
              <li>To facilitate the matchmaking process between clients and maids.</li>
              <li>To send administrative information to you, such as service updates, security alerts, and changes to our terms, conditions, and policies.</li>
              <li>To fulfill and manage your service requests, payments, returns, and exchanges.</li>
              <li>To enforce our terms, conditions, and policies for business purposes, legal reasons, and contractual obligations.</li>
            </ul>

            <h2>3. Information Sharing and Disclosure</h2>
            <p>We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. Specifically:</p>
            <ul>
              <li><strong>Service Providers:</strong> We may share your requirements (excluding exact contact details initially) with potential candidates to find the best match.</li>
              <li><strong>Legal Obligations:</strong> We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process.</li>
            </ul>

            <h2>4. Data Security</h2>
            <p>We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure.</p>
            
            <div className="bg-brand-gold/10 border border-brand-gold/30 rounded-2xl p-6 my-8">
              <h3 className="text-brand-gold mt-0 mb-3 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5" /> 
                Our Security Commitment
              </h3>
              <p className="text-sm dark:text-slate-300 text-slate-700 m-0">
                Your data is stored on secure servers. We never sell your personal data or contact information to third-party marketing agencies. Your trust is our highest priority.
              </p>
            </div>

            <h2>5. Disclaimer Regarding Website Content</h2>
            <p>
              Please note that certain elements on this website—including but not limited to images of staff and clients, user reviews, medical screening claims, projected service statistics (e.g., "10000+ happy families"), and specific time guarantees (e.g., "30-minute profiles")—are currently used for illustrative and reference purposes. For full legal details on our service limitations and representative content, please refer to the Disclaimers section in our <Link to="/terms" className="text-brand-gold hover:underline">Terms of Service</Link>.
            </p>

            <h2>6. Contact Us</h2>
            <p>If you have questions or comments about this policy, you may email us at <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a> or contact us by post at:</p>
            <p>
              <strong>{BRAND.name}</strong><br />
              Mumbai Infotech Park<br />
              Thane West, Mumbai - 400705<br />
              Phone: {BRAND.phone}
            </p>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
