import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Phone, Mail, MapPin, Clock, ChevronDown } from "lucide-react";
import { useState } from "react";

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    details: ["(+91) 9819122200", "(+91) 8652236055"],
    description: "Speak to our friendly team for immediate support."
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["sales@bookyourmaid.in"],
    description: "Send us your inquiries or requirements via email."
  },
  {
    icon: MapPin,
    title: "Visit Our Office",
    details: ["1904, Haware Infotech Park", "Opp. Four Points Hotel, Sector-30A", "Vashi, Navi Mumbai - 400705"],
    description: "Meet us in person for a detailed consultation."
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon - Sat: 9:00 AM - 7:00 PM", "Sunday: 10:00 AM - 5:00 PM"],
    description: "We are available during these hours to assist you."
  }
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Main Contact Section - Form and Info */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
           <div className="max-w-3xl mx-auto">
             {/* Contact Form */}
             <Card className="shadow-xl rounded-xl bg-white mb-12">
               <CardHeader className="text-center pb-8">
                 <CardTitle className="text-3xl font-bold text-gray-800">
                   Get In <span className="text-purple-700">Touch</span>
                 </CardTitle>
                 <p className="text-gray-600">Fill out the form below or use the contact details provided.</p>
               </CardHeader>
               <CardContent>
                 <form onSubmit={handleSubmit} className="space-y-6">
                   <div className="grid md:grid-cols-2 gap-6">
                     <div>
                       <Label htmlFor="name" className="text-gray-700 font-medium">Full Name <span className="text-red-500">*</span></Label>
                       <Input
                         id="name"
                         name="name"
                         type="text"
                         required
                         value={formData.name}
                         onChange={handleInputChange}
                         className="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                         placeholder="Enter your full name"
                       />
                     </div>
                     <div>
                       <Label htmlFor="phone" className="text-gray-700 font-medium">Phone Number <span className="text-red-500">*</span></Label>
                       <Input
                         id="phone"
                         name="phone"
                         type="tel"
                         required
                         value={formData.phone}
                         onChange={handleInputChange}
                         className="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                          placeholder="Enter your phone number"
                       />
                     </div>
                   </div>
                   
                   <div>
                     <Label htmlFor="email" className="text-gray-700 font-medium">Email Address <span className="text-red-500">*</span></Label>
                     <Input
                       id="email"
                       name="email"
                       type="email"
                       required
                       value={formData.email}
                       onChange={handleInputChange}
                       className="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                        placeholder="Enter your email address"
                     />
                   </div>
                   
                   <div>
                     <Label htmlFor="service" className="text-gray-700 font-medium">Service Required</Label>
                     <div className="relative">
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="appearance-none mt-1 w-full h-10 px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 text-sm pr-8 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                        >
                          <option value="">Select a service</option>
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
                        </select>
                         <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 mt-1">
                           <ChevronDown className="h-4 w-4"/>
                        </div>
                     </div>
                   </div>
                   
                   <div>
                     <Label htmlFor="message" className="text-gray-700 font-medium">Message</Label>
                     <Textarea
                       id="message"
                       name="message"
                       rows={4}
                       value={formData.message}
                       onChange={handleInputChange}
                       className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                       placeholder="Tell us about your specific requirements..."
                     />
                   </div>
                   
                   <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 rounded-md transition-colors duration-300 shadow-md">
                     Send Message
                   </Button>
                 </form>
               </CardContent>
             </Card>

             {/* Contact Info List */}
             <div className="bg-white p-8 rounded-xl shadow-xl space-y-6 text-gray-700">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Our Contact Details</h3>
                <div className="grid sm:grid-cols-2 gap-6">
                    <div className="flex items-start space-x-4">
                        <Phone className="h-6 w-6 text-purple-600 flex-shrink-0"/>
                        <div>
                            <p className="font-semibold text-gray-800">Call Us</p>
                            <p className="text-gray-600">(+91) 9819122200</p>
                            <p className="text-gray-600">(+91) 8652236055</p>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4">
                         <Mail className="h-6 w-6 text-purple-600 flex-shrink-0"/>
                         <div>
                            <p className="font-semibold text-gray-800">Email Us</p>
                             <p className="text-gray-600">sales@bookyourmaid.in</p>
                         </div>
                    </div>
                    <div className="flex items-start space-x-4 sm:col-span-2">
                         <MapPin className="h-6 w-6 text-purple-600 flex-shrink-0"/>
                         <div>
                             <p className="font-semibold text-gray-800">Visit Our Office</p>
                              <p className="text-gray-600">1904, Haware Infotech Park, Opp. Four Points Hotel, Sector-30A, Vashi, Navi Mumbai - 400705</p>
                         </div>
                    </div>
                    <div className="flex items-start space-x-4">
                         <Clock className="h-6 w-6 text-purple-600 flex-shrink-0"/>
                         <div>
                             <p className="font-semibold text-gray-800">Working Hours</p>
                             <p className="text-gray-600">Mon - Sat: 9:00 AM - 7:00 PM</p>
                             <p className="text-gray-600">Sunday: 10:00 AM - 5:00 PM</p>
                         </div>
                    </div>
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
