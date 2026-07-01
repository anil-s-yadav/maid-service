import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Phone, Mail, MapPin, Clock, ChevronDown, CheckCircle2, MessageSquare, Sparkles } from "lucide-react";
import { AREAS_SERVED } from "@/utils/constants";
import { submitLead } from "@/utils/leadCapture";
import { initPartialLeadCapture, updatePartialLeadData, markFormSubmitted } from "@/utils/partialLead";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    customService: '',
    location: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const phoneError = formData.phone.length > 0 && formData.phone.length < 10;

  useEffect(() => {
    initPartialLeadCapture();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const finalValue = name === 'phone' ? value.replace(/\D/g, '') : value;

    setFormData(prev => {
      const nextData = { ...prev, [name]: finalValue };

      updatePartialLeadData({
        name: nextData.name,
        phone: nextData.phone,
        email: nextData.email,
        service: nextData.service === 'Other' ? nextData.customService : nextData.service,
        location: nextData.location,
        source: 'Custom Lead'
      });

      return nextData;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.phone.length < 10 || isSubmitting) return;

    setIsSubmitting(true);

    const finalService = formData.service === 'Other' ? formData.customService : formData.service;

    await submitLead({
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      service: finalService,
      location: formData.location,
      message: formData.message,
      type: 'full',
      source: 'Custom Lead'
    });

    markFormSubmitted();
    setSubmitted(true);
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen dark:bg-background bg-white flex flex-col transition-colors duration-500">
      <Header />

      {/* Hero Header */}
      <section className="relative pt-32 pb-20 dark:bg-[#0f172a] bg-slate-50 overflow-hidden transition-colors duration-500">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-gold/15 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-gold/10 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-gold/10 backdrop-blur-md border border-brand-gold/20 mb-6 shadow-[0_0_15px_rgba(217,119,6,0.15)]">
            <MessageSquare className="w-4 h-4 text-brand-gold" />
            <span className="text-sm font-medium text-brand-gold tracking-wide">24/7 Support Available</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading dark:text-white text-slate-900 mb-6 transition-colors">
            Let's Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-amber-200">Touch</span>
          </h1>
          <p className="text-lg dark:text-slate-300 text-slate-600 max-w-2xl mx-auto leading-relaxed transition-colors">
            Whether you need a reliable premium maid, an experienced cook, or just have a question about our services, our expert team in Mumbai is ready to help you.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 md:py-24 flex-grow relative z-20 -mt-10">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">

            {/* Left: Contact Form */}
            <div className="lg:col-span-3 dark:bg-[#1e293b] bg-white rounded-3xl p-6 md:p-8 shadow-2xl border dark:border-white/10 border-slate-100 transition-colors">
              <div className="mb-8">
                <h2 className="text-3xl font-bold dark:text-white text-brand-navy font-heading mb-2 transition-colors">Send us a Message</h2>
                <p className="dark:text-slate-400 text-slate-500 transition-colors">Fill out the form below and our Relationship Manager will call you within 30 minutes.</p>
              </div>

              {submitted ? (
                <div className="text-center py-16 animate-in zoom-in-95 duration-500">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold dark:text-white text-brand-navy mb-3 font-heading transition-colors">Message Sent Successfully!</h3>
                  <p className="dark:text-slate-300 text-slate-600 text-lg transition-colors">Thank you for reaching out. We will contact you shortly to discuss your requirements.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-semibold dark:text-slate-300 text-slate-700 transition-colors">Full Name <span className="text-red-500">*</span></label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full dark:bg-white/5 dark:border-white/10 dark:text-white bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-semibold dark:text-slate-300 text-slate-700 transition-colors">Phone Number <span className="text-red-500">*</span></label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        minLength="10"
                        maxLength="10"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`w-full dark:bg-white/5 dark:text-white bg-slate-50 border ${phoneError ? 'border-red-500' : 'dark:border-white/10 border-slate-200'} rounded-xl px-4 py-2.5 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all`}
                        placeholder="9876543210"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-semibold dark:text-slate-300 text-slate-700 transition-colors">Email Address</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full dark:bg-white/5 dark:border-white/10 dark:text-white bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="location" className="text-sm font-semibold dark:text-slate-300 text-slate-700 transition-colors">Location <span className="text-red-500">*</span></label>
                      <div className="relative">
                        <select
                          id="location"
                          name="location"
                          required
                          value={formData.location}
                          onChange={handleInputChange}
                          className="w-full appearance-none dark:bg-[#1e293b] dark:border-white/10 dark:text-white bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all text-slate-700"
                        >
                          <option value="" disabled>Select Location (Mumbai)</option>
                          {AREAS_SERVED.map(area => (
                            <option key={area} value={area}>{area}</option>
                          ))}
                          <option value="Other">Other Mumbai Area</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                          <ChevronDown className="h-5 w-5 text-slate-400" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-semibold dark:text-slate-300 text-slate-700 transition-colors">Service Required <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full appearance-none dark:bg-[#1e293b] dark:border-white/10 dark:text-white bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all text-slate-700"
                      >
                        <option value="" disabled>Select a service</option>
                        <option value="part-time-maid">Part-Time Maid</option>
                        <option value="full-time-maid">Full-Time Maid</option>
                        <option value="live-in-maid">Live-In Maid</option>
                        <option value="baby-care">Baby Care</option>
                        <option value="elder-care">Elder Care</option>
                        <option value="cooking-only">Cooking Only</option>
                        <option value="deep-cleaning">Deep Cleaning</option>
                        <option value="driver">Driver</option>
                        <option value="security">Security Guard</option>
                        <option value="housekeeping">Housekeeping</option>
                        <option value="office">Office Support Staff</option>
                        <option value="Other">Other (Custom Service)</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                        <ChevronDown className="h-5 w-5 text-slate-400" />
                      </div>
                    </div>
                  </div>

                  {formData.service === 'Other' && (
                    <div className="space-y-2 animate-in fade-in slide-in-from-top-2 duration-300">
                      <label htmlFor="customService" className="text-sm font-semibold dark:text-slate-300 text-slate-700 transition-colors">Please specify the service <span className="text-red-500">*</span></label>
                      <input
                        id="customService"
                        name="customService"
                        type="text"
                        required
                        value={formData.customService}
                        onChange={handleInputChange}
                        className="w-full dark:bg-white/5 dark:border-white/10 dark:text-white bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all"
                        placeholder="e.g., Pet sitting, gardening..."
                      />
                    </div>
                  )}

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold dark:text-slate-300 text-slate-700 transition-colors">Additional Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full dark:bg-white/5 dark:border-white/10 dark:text-white bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all resize-none"
                      placeholder="Tell us about your specific requirements, working hours, etc."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-brand-gold hover:bg-amber-500 text-white font-bold text-base py-3 rounded-xl shadow-[0_0_20px_rgba(13,148,136,0.3)] transition-all active:scale-[0.98] disabled:opacity-70 mt-2"
                  >
                    {isSubmitting ? 'Sending Message...' : 'Request Free Consultation'}
                  </button>
                  <p className="text-center text-sm dark:text-slate-400 text-slate-500 flex items-center justify-center gap-2 mt-4 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-brand-gold" /> 100% Free Consultation. No Commitments.
                  </p>
                </form>
              )}
            </div>

            {/* Right: Premium Contact Details Card */}
            <div className="lg:col-span-2 flex flex-col gap-6">

              <div className="bg-gradient-to-br from-brand-navy to-slate-900 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden h-full">
                {/* Decorative background shapes */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/20 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-brand-gold/10 rounded-full blur-2xl"></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="bg-brand-gold/20 p-2.5 rounded-xl">
                      <Sparkles className="w-6 h-6 text-brand-gold" />
                    </div>
                    <h3 className="text-2xl font-bold font-heading text-white">Contact Info</h3>
                  </div>

                  <div className="space-y-8">
                    {/* Phone */}
                    <div className="flex items-start gap-5 group">
                      <div className="bg-white/5 p-3 rounded-2xl border border-white/10 group-hover:bg-brand-gold/20 group-hover:border-brand-gold/30 transition-colors">
                        <Phone className="w-5 h-5 text-brand-gold" />
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm font-medium mb-1">Call Us 24/7</p>
                        <p className="text-white font-semibold text-base hover:text-brand-gold transition-colors cursor-pointer">(+91) 9819122200</p>
                        <p className="text-white font-semibold text-base hover:text-brand-gold transition-colors cursor-pointer">(+91) 8652236055</p>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-5 group">
                      <div className="bg-white/5 p-3 rounded-2xl border border-white/10 group-hover:bg-brand-gold/20 group-hover:border-brand-gold/30 transition-colors">
                        <Mail className="w-5 h-5 text-brand-gold" />
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm font-medium mb-1">Email Support</p>
                        <a href="mailto:anilyadav44x@gmail.com" className="text-white font-semibold text-base hover:text-brand-gold transition-colors">contact@varifiedmaid.in</a>
                      </div>
                    </div>

                    {/* Office */}
                    <div className="flex items-start gap-5 group">
                      <div className="bg-white/5 p-3 rounded-2xl border border-white/10 group-hover:bg-brand-gold/20 group-hover:border-brand-gold/30 transition-colors">
                        <MapPin className="w-5 h-5 text-brand-gold" />
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm font-medium mb-1">Head Office</p>
                        <p className="text-white font-semibold text-base leading-relaxed">
                          Mumbai Infotech Park,<br />
                          Thane West, Numbai - 400705
                        </p>
                      </div>
                    </div>

                    {/* Hours */}
                    <div className="flex items-start gap-5 group">
                      <div className="bg-white/5 p-3 rounded-2xl border border-white/10 group-hover:bg-brand-gold/20 group-hover:border-brand-gold/30 transition-colors">
                        <Clock className="w-5 h-5 text-brand-gold" />
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm font-medium mb-1">Working Hours</p>
                        <p className="text-white font-semibold text-base">Mon - Sat: 9:00 AM - 7:00 PM</p>
                        <p className="text-slate-300 text-sm mt-1">Sun: 10:00 AM - 5:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="bg-brand-gold/10 border border-brand-gold/20 rounded-3xl p-6 text-center">
                <div className="flex justify-center mb-3">
                  <div className="bg-brand-gold p-2 rounded-full">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                </div>
                <h4 className="dark:text-white text-brand-navy font-bold mb-1 transition-colors">100% Aadhaar Verified Profiles</h4>
                <p className="dark:text-slate-300 text-slate-600 text-sm transition-colors">Every maid undergoes strict background and police verification before placement.</p>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Contact;
