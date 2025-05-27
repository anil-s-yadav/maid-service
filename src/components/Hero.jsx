import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Clock, Calendar, CheckCircle, Shield, Star, Users, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Hero = () => {
  const [urgencyType, setUrgencyType] = useState("");

  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 to-purple-900/95">
        {/* Original background image removed or commented out */}
        {/* <div className="absolute inset-0 opacity-20" style={{ \n          backgroundImage: "url('https://images.unsplash.com/photo-1560439514-ff6fd4aa9e75?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxlYW5pbmclMj小米homefDB8fDB8fHww')\", \n          backgroundSize: 'cover', \n          backgroundPosition: 'center',\n          filter: 'blur(2px)'\n        }}></div> */}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content - Image and select benefits */}
          <div className="text-white flex flex-col items-center lg:items-start">
            {/* Maid Image */}
            <img 
              src="https://img.freepik.com/free-vector/cleaners-with-cleaning-products-housekeeping-service_18591-52068.jpg?semt=ais_hybrid&w=740" 
              alt="Professional maid with cleaning supplies"
              className="rounded-xl shadow-2xl mb-10 w-full max-w-sm lg:max-w-md"
            />

            {/* Text and two benefits */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-center lg:text-left">
              Find Your Perfect
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-blue-300 mt-2">
                Domestic Professional
              </span>
            </h1>
            
            <p className="text-lg text-blue-100 mb-8 max-w-lg leading-relaxed text-center lg:text-left">
              Connect with verified, skilled, and reliable domestic help services. From expert housekeepers to dedicated caregivers, we provide professionals you can trust.
            </p>

            <div className="space-y-6 mb-10 w-full max-w-lg">
              <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                <div className="bg-teal-500/20 p-3 rounded-full">
                  <Shield className="h-6 w-6 text-teal-300" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Background Verified</h3>
                  <p className="text-blue-100">Rigorous screening for your safety</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                <div className="bg-teal-500/20 p-3 rounded-full">
                  <Star className="h-6 w-6 text-teal-300" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Professional Training</h3>
                  <p className="text-blue-100">Skilled and experienced staff</p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 w-full max-w-lg">
              <Link to="/maid-form" className="w-full sm:w-auto">
                <Button className="w-full bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl group">
                  Post Your Requirement
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full text-white border-white hover:bg-white hover:text-blue-800 px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>

          {/* Right - Booking form */}
          <Card className="bg-white/95 backdrop-blur-md shadow-2xl rounded-2xl border-0">
            <CardContent className="p-8 space-y-6">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                  Book Your Service
                </h2>
                <p className="text-gray-600">
                  Tell us about your needs to get started.
                </p>
              </div>

              <div className="space-y-5">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Service Type
                  </label>
                  <Select>
                    <SelectTrigger className="w-full bg-white border-gray-200 focus:border-purple-500 focus:ring-purple-500">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="maid">Maid Services</SelectItem>
                      <SelectItem value="cook">Professional Cook</SelectItem>
                      <SelectItem value="babysitter">Baby Care Specialist</SelectItem>
                      <SelectItem value="elder-care">Elder Care Services</SelectItem>
                      <SelectItem value="nursing">Nursing Care</SelectItem>
                      <SelectItem value="driver">Professional Driver</SelectItem>
                      <SelectItem value="security">Security Guard</SelectItem>
                      <SelectItem value="housekeeping">Housekeeping</SelectItem>
                      <SelectItem value="office">Office Support Staff</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-4">
                  <label className="block text-gray-700 font-medium mb-2">
                    When do you need the service?
                  </label>
                  
                  <div 
                    className={`flex items-center space-x-4 p-4 border rounded-xl cursor-pointer transition-all duration-200 ${
                      urgencyType === 'urgent' 
                        ? 'border-blue-500 bg-blue-50 shadow-md' 
                        : 'border-gray-200 hover:border-gray-300 hover:shadow-sm'
                    }`}
                    onClick={() => setUrgencyType('urgent')}
                  >
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Clock className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <span className="font-medium block text-gray-800">Urgent Need</span>
                      <span className="text-sm text-gray-600">Need service within 24-48 hours</span>
                    </div>
                    <div className="ml-auto">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        urgencyType === 'urgent' ? 'bg-blue-500 border-blue-500' : 'border-gray-300'
                      }`}>
                        {urgencyType === 'urgent' && <CheckCircle className="h-3 w-3 text-white" />}
                      </div>
                    </div>
                  </div>

                  <div 
                    className={`flex items-center space-x-4 p-4 border rounded-xl cursor-pointer transition-all duration-200 ${
                      urgencyType === 'later' 
                        ? 'border-purple-500 bg-purple-50 shadow-md' 
                        : 'border-gray-200 hover:border-gray-300 hover:shadow-sm'
                    }`}
                    onClick={() => setUrgencyType('later')}
                  >
                    <div className="bg-purple-100 p-3 rounded-full">
                      <Calendar className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <span className="font-medium block text-gray-800">Needed Later</span>
                      <span className="text-sm text-gray-600">Planning for the upcoming week or month</span>
                    </div>
                    <div className="ml-auto">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        urgencyType === 'later' ? 'bg-purple-500 border-purple-500' : 'border-gray-300'
                      }`}>
                        {urgencyType === 'later' && <CheckCircle className="h-3 w-3 text-white" />}
                      </div>
                    </div>
                  </div>

                  <div 
                    className={`flex items-center space-x-4 p-4 border rounded-xl cursor-pointer transition-all duration-200 ${
                      urgencyType === 'planning' 
                        ? 'border-green-500 bg-green-50 shadow-md' 
                        : 'border-gray-200 hover:border-gray-300 hover:shadow-sm'
                    }`}
                    onClick={() => setUrgencyType('planning')}
                  >
                    <div className="bg-green-100 p-3 rounded-full">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <span className="font-medium block text-gray-800">Just Planning</span>
                      <span className="text-sm text-gray-600">Exploring options for future needs</span>
                    </div>
                    <div className="ml-auto">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        urgencyType === 'planning' ? 'bg-green-500 border-green-500' : 'border-gray-300'
                      }`}>
                        {urgencyType === 'planning' && <CheckCircle className="h-3 w-3 text-white" />}
                      </div>
                    </div>
                  </div>
                </div>

                <Link to="/maid-form">
                  <Button className="w-full bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white py-4 text-lg font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl group">
                    Continue to Requirements
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
