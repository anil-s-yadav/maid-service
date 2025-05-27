
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Clock, Calendar, CheckCircle } from "lucide-react";
import { useState } from "react";

export const Hero = () => {
  const [urgencyType, setUrgencyType] = useState("");

  return (
    <section className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-purple-800 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-white">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Why Choose<br />
              <span className="text-yellow-300">Professional</span><br />
              Maid Services?
            </h1>
            
            <div className="flex items-center space-x-4 mb-8">
              <div className="bg-white p-4 rounded-lg">
                <CheckCircle className="h-12 w-12 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Documents And Background Verified</h3>
                <p className="text-purple-100">Candidates</p>
              </div>
            </div>

            <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg">
              Post Your Requirement
            </Button>
          </div>

          {/* Right - Booking form */}
          <Card className="bg-white shadow-2xl">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-purple-600 mb-6">
                What Do You Want Your Maid To Do?
              </h2>

              <div className="space-y-6">
                <div>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Maid" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="maid">Maid</SelectItem>
                      <SelectItem value="cook">Cook</SelectItem>
                      <SelectItem value="babysitter">Baby Sitter</SelectItem>
                      <SelectItem value="elder-care">Elder Care</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-4">
                  <div 
                    className={`flex items-center space-x-3 p-4 border rounded-lg cursor-pointer transition-all ${urgencyType === 'urgent' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-purple-300'}`}
                    onClick={() => setUrgencyType('urgent')}
                  >
                    <Clock className="h-6 w-6 text-blue-500" />
                    <span className="font-medium">Urgent Need</span>
                    <div className="ml-auto">
                      <div className={`w-4 h-4 rounded-full border-2 ${urgencyType === 'urgent' ? 'bg-blue-500 border-blue-500' : 'border-gray-300'}`}></div>
                    </div>
                  </div>

                  <div 
                    className={`flex items-center space-x-3 p-4 border rounded-lg cursor-pointer transition-all ${urgencyType === 'later' ? 'border-purple-500 bg-purple-50' : 'border-gray-200 hover:border-purple-300'}`}
                    onClick={() => setUrgencyType('later')}
                  >
                    <Calendar className="h-6 w-6 text-purple-500" />
                    <span className="font-medium">Needed Later</span>
                    <div className="ml-auto">
                      <div className={`w-4 h-4 rounded-full border-2 ${urgencyType === 'later' ? 'bg-purple-500 border-purple-500' : 'border-gray-300'}`}></div>
                    </div>
                  </div>

                  <div 
                    className={`flex items-center space-x-3 p-4 border rounded-lg cursor-pointer transition-all ${urgencyType === 'planning' ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:border-purple-300'}`}
                    onClick={() => setUrgencyType('planning')}
                  >
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    <span className="font-medium">I'm Just Planning</span>
                    <div className="ml-auto">
                      <div className={`w-4 h-4 rounded-full border-2 ${urgencyType === 'planning' ? 'bg-green-500 border-green-500' : 'border-gray-300'}`}></div>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg">
                  Next
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
