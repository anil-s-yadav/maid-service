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
      <section className="relative pt-32 pb-16 dark:bg-[#0f172a] bg-slate-50 overflow-hidden transition-colors duration-500">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-gold/15 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-gold/10 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-gold/10 backdrop-blur-md border border-brand-gold/20 mb-4 shadow-[0_0_15px_rgba(217,119,6,0.15)]">
            <MessageSquare className="w-3.5 h-3.5 text-brand-gold" />
            <span className="text-xs font-medium text-brand-gold tracking-wide">24/7 Support Available</span>
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold font-heading dark:text-white text-slate-900 mb-4 transition-colors">
            Let's Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-amber-200">Touch</span>
          </h1>
          <p className="text-sm md:text-base dark:text-slate-300 text-slate-600 max-w-2xl mx-auto leading-relaxed transition-colors">
            Whether you need a reliable premium maid, an experienced cook, or just have a question about our services, our expert team in Mumbai is ready to help you.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-8 md:py-10 flex-grow relative z-20 -mt-10">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-16">

            {/* Left: Contact Form */}
            <div className="lg:col-span-3 dark:bg-[#1e293b] bg-white rounded-2xl p-5 md:p-6 shadow-2xl border dark:border-white/10 border-slate-100 transition-colors">
              <div className="mb-4">
                <h2 className="text-lg font-bold dark:text-white text-brand-navy font-heading mb-1 transition-colors">Send us a Message</h2>
                <p className="dark:text-slate-400 text-slate-500 text-xs transition-colors">Fill out the form and our Relationship Manager will call you within 30 minutes.</p>
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
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-semibold dark:text-slate-300 text-slate-700 transition-colors">Full Name <span className="text-red-500">*</span></label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full dark:bg-white/5 dark:border-white/10 dark:text-white bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="text-xs font-semibold dark:text-slate-300 text-slate-700 transition-colors">Phone Number <span className="text-red-500">*</span></label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        minLength="10"
                        maxLength="10"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`w-full dark:bg-white/5 dark:text-white bg-slate-50 border ${phoneError ? 'border-red-500' : 'dark:border-white/10 border-slate-200'} rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all`}
                        placeholder="9876543210"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-semibold dark:text-slate-300 text-slate-700 transition-colors">Email Address</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full dark:bg-white/5 dark:border-white/10 dark:text-white bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="location" className="text-xs font-semibold dark:text-slate-300 text-slate-700 transition-colors">Location <span className="text-red-500">*</span></label>
                      <div className="relative">
                        <select
                          id="location"
                          name="location"
                          required
                          value={formData.location}
                          onChange={handleInputChange}
                          className="w-full appearance-none dark:bg-[#1e293b] dark:border-white/10 dark:text-white bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all text-slate-700"
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

                  <div className="space-y-1.5">
                    <label htmlFor="service" className="text-xs font-semibold dark:text-slate-300 text-slate-700 transition-colors">Service Required <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full appearance-none dark:bg-[#1e293b] dark:border-white/10 dark:text-white bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all text-slate-700"
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
                    <div className="space-y-1.5 animate-in fade-in slide-in-from-top-2 duration-300">
                      <label htmlFor="customService" className="text-xs font-semibold dark:text-slate-300 text-slate-700 transition-colors">Please specify the service <span className="text-red-500">*</span></label>
                      <input
                        id="customService"
                        name="customService"
                        type="text"
                        required
                        value={formData.customService}
                        onChange={handleInputChange}
                        className="w-full text-sm dark:bg-white/5 dark:border-white/10 dark:text-white bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all"
                        placeholder="e.g., Pet sitting, gardening..."
                      />
                    </div>
                  )}

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-semibold dark:text-slate-300 text-slate-700 transition-colors">Additional Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full dark:bg-white/5 dark:border-white/10 dark:text-white bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all resize-none"
                      placeholder="Tell us about your specific requirements, working hours, etc."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full text-sm bg-brand-gold hover:bg-amber-500 text-brand-navy font-bold py-2.5 rounded-lg shadow-lg hover:shadow-xl transition-all active:scale-[0.98] disabled:opacity-70 flex items-center justify-center gap-2 mt-4"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-brand-navy border-t-transparent rounded-full animate-spin"></span>
                        Sending...
                      </span>
                    ) : 'Request Free Consultation'}
                  </button>
                  <p className="text-center text-[10px] dark:text-slate-400 text-slate-500 flex items-center justify-center gap-1.5 mt-2 transition-colors">
                    <CheckCircle2 className="w-3 h-3 text-brand-gold" /> 100% Free Consultation. No Commitments.
                  </p>
                </form>
              )}
            </div>

            {/* Right: Premium Contact Details Card */}
            <div className="lg:col-span-2 flex flex-col gap-4">

              <div className="bg-gradient-to-br from-brand-navy to-slate-900 rounded-2xl p-4 md:p-5 shadow-2xl relative overflow-hidden">
                {/* Decorative background shapes */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-gold/20 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-28 h-28 bg-brand-gold/10 rounded-full blur-2xl"></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-2.5 mb-4">
                    <div className="bg-brand-gold/20 p-2 rounded-lg">
                      <Sparkles className="w-4 h-4 text-brand-gold" />
                    </div>
                    <h3 className="text-lg font-bold font-heading text-white">Contact Info</h3>
                  </div>

                  <div className="space-y-4">
                    {/* Phone */}
                    <div className="flex items-start gap-3 group">
                      <div className="bg-white/5 p-2 rounded-xl border border-white/10 group-hover:bg-brand-gold/20 group-hover:border-brand-gold/30 transition-colors shrink-0">
                        <Phone className="w-4 h-4 text-brand-gold" />
                      </div>
                      <div>
                        <p className="text-slate-400 text-xs font-medium mb-0.5">Call Us 24/7</p>
                        <p className="text-white font-semibold text-sm hover:text-brand-gold transition-colors cursor-pointer">(+91) 9819122200</p>
                        <p className="text-white font-semibold text-sm hover:text-brand-gold transition-colors cursor-pointer">(+91) 8652236055</p>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-3 group">
                      <div className="bg-white/5 p-2 rounded-xl border border-white/10 group-hover:bg-brand-gold/20 group-hover:border-brand-gold/30 transition-colors shrink-0">
                        <Mail className="w-4 h-4 text-brand-gold" />
                      </div>
                      <div>
                        <p className="text-slate-400 text-xs font-medium mb-0.5">Email Support</p>
                        <a href="mailto:anilyadav44x@gmail.com" className="text-white font-semibold text-sm hover:text-brand-gold transition-colors">contact@varifiedmaid.in</a>
                      </div>
                    </div>

                    {/* Office */}
                    <div className="flex items-start gap-3 group">
                      <div className="bg-white/5 p-2 rounded-xl border border-white/10 group-hover:bg-brand-gold/20 group-hover:border-brand-gold/30 transition-colors shrink-0">
                        <MapPin className="w-4 h-4 text-brand-gold" />
                      </div>
                      <div>
                        <p className="text-slate-400 text-xs font-medium mb-0.5">Head Office</p>
                        <p className="text-white font-semibold text-sm leading-snug">
                          Mumbai Infotech Park,<br />Thane West, Mumbai - 400705
                        </p>
                      </div>
                    </div>

                    {/* Hours */}
                    <div className="flex items-start gap-3 group">
                      <div className="bg-white/5 p-2 rounded-xl border border-white/10 group-hover:bg-brand-gold/20 group-hover:border-brand-gold/30 transition-colors shrink-0">
                        <Clock className="w-4 h-4 text-brand-gold" />
                      </div>
                      <div>
                        <p className="text-slate-400 text-xs font-medium mb-0.5">Working Hours</p>
                        <p className="text-white font-semibold text-sm">Mon - Sat: 9 AM - 7 PM</p>
                        <p className="text-slate-300 text-xs">Sun: 10 AM - 5 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="bg-brand-gold/10 border border-brand-gold/20 rounded-2xl p-4 text-center">
                <div className="flex justify-center mb-2">
                  <div className="bg-brand-gold p-1.5 rounded-full">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                </div>
                <h4 className="text-brand-navy dark:text-white font-bold font-heading text-sm mb-1 transition-colors">100% Verified Staff</h4>
                <p className="text-slate-600 dark:text-slate-400 text-xs transition-colors">All our professionals undergo strict background checks and police verification before deployment.</p>
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
