import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone Numbers",
    details: ["(+91) 9819122200", "(+91) 8652236055"],
    description: "Call us anytime for immediate assistance"
  },
  {
    icon: Mail,
    title: "Email Address",
    details: ["sales@bookyourmaid.in"],
    description: "Send us your requirements via email"
  },
  {
    icon: MapPin,
    title: "Office Address",
    details: ["1904, Haware Infotech Park", "Opp. Four Points Hotel, Sector-30A", "Vashi, Navi Mumbai - 400705"],
    description: "Visit our office for detailed consultation"
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Monday - Saturday: 9:00 AM - 7:00 PM", "Sunday: 10:00 AM - 5:00 PM"],
    description: "We're available to help during these hours"
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Contact <span className="text-yellow-300">Us</span>
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Ready to find your perfect household help? Get in touch with us today and let us assist you in finding the right domestic staff for your needs.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-gradient-to-br from-purple-500 to-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{info.title}</h3>
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-purple-600 font-medium mb-1">{detail}</p>
                  ))}
                  <p className="text-gray-600 text-sm mt-2">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-gray-800 text-center">
                  Send Us a <span className="text-purple-600">Message</span>
                </CardTitle>
                <p className="text-gray-600 text-center">Fill out the form below and we'll get back to you within 24 hours</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="service">Service Required</Label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="mt-1 w-full h-10 px-3 py-2 border border-gray-300 rounded-md bg-white text-sm"
                    >
                      <option value="">Select a service</option>
                      <option value="part-time-maid">Part-Time Maid</option>
                      <option value="full-time-maid">Full-Time Maid</option>
                      <option value="live-in-maid">Live-In Maid</option>
                      <option value="baby-care">Baby Care</option>
                      <option value="elder-care">Elder Care</option>
                      <option value="cooking-only">Cooking Only</option>
                      <option value="deep-cleaning">Deep Cleaning</option>
                    </select>
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                      placeholder="Tell us about your specific requirements..."
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-800">Visit Our Office</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-200 h-64 rounded-lg mb-4 flex items-center justify-center">
                    <div className="text-center text-gray-600">
                      <MapPin className="h-12 w-12 mx-auto mb-2" />
                      <p>Interactive Map</p>
                      <p className="text-sm">1904, Haware Infotech Park, Vashi</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-purple-600 mt-1" />
                      <div>
                        <p className="font-medium text-gray-800">Address</p>
                        <p className="text-gray-600 text-sm">1904, Haware Infotech Park, Opp. Four Points Hotel, Sector-30A, Vashi, Navi Mumbai - 400705</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Clock className="h-5 w-5 text-purple-600 mt-1" />
                      <div>
                        <p className="font-medium text-gray-800">Business Hours</p>
                        <p className="text-gray-600 text-sm">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                        <p className="text-gray-600 text-sm">Sunday: 10:00 AM - 5:00 PM</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-xl bg-gradient-to-r from-purple-500 to-blue-500">
                <CardContent className="p-8 text-white text-center">
                  <h3 className="text-2xl font-bold mb-4">Need Immediate Help?</h3>
                  <p className="mb-6">Call us directly for urgent requirements or immediate assistance</p>
                  <div className="space-y-2">
                    <Button className="w-full bg-white text-purple-600 hover:bg-gray-100">
                      <Phone className="h-4 w-4 mr-2" />
                      Call: (+91) 9819122200
                    </Button>
                    <Button className="w-full bg-white text-purple-600 hover:bg-gray-100">
                      <Mail className="h-4 w-4 mr-2" />
                      Email: sales@bookyourmaid.in
                    </Button>
                  </div>
                </CardContent>
              </Card>
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
