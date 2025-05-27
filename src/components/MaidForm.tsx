
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

export const MaidForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    serviceType: '',
    workingHours: '',
    salary: '',
    urgency: '',
    experience: '',
    requirements: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Your requirement has been submitted successfully! We will contact you soon.');
  };

  return (
    <Card className="max-w-2xl mx-auto shadow-xl">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold text-gray-800">
          Maid <span className="text-purple-600">Requirement</span> Form
        </CardTitle>
        <p className="text-gray-600">Fill out your details and requirements below</p>
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
                placeholder="Enter your full name"
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
                placeholder="+91 9876543210"
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
              placeholder="your@email.com"
            />
          </div>

          <div>
            <Label htmlFor="address">Address *</Label>
            <Textarea
              id="address"
              name="address"
              required
              value={formData.address}
              onChange={handleInputChange}
              className="mt-1"
              placeholder="Enter your complete address"
              rows={3}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="serviceType">Service Type *</Label>
              <Select value={formData.serviceType} onValueChange={(value) => handleSelectChange('serviceType', value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select service type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="part-time-maid">Part-Time Maid</SelectItem>
                  <SelectItem value="full-time-maid">Full-Time Maid</SelectItem>
                  <SelectItem value="live-in-maid">Live-In Maid</SelectItem>
                  <SelectItem value="baby-care">Baby Care</SelectItem>
                  <SelectItem value="elder-care">Elder Care</SelectItem>
                  <SelectItem value="cooking-only">Cooking Only</SelectItem>
                  <SelectItem value="cleaning-only">Cleaning Only</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="workingHours">Working Hours *</Label>
              <Select value={formData.workingHours} onValueChange={(value) => handleSelectChange('workingHours', value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select working hours" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2-4-hours">2-4 Hours</SelectItem>
                  <SelectItem value="4-6-hours">4-6 Hours</SelectItem>
                  <SelectItem value="6-8-hours">6-8 Hours</SelectItem>
                  <SelectItem value="8-12-hours">8-12 Hours</SelectItem>
                  <SelectItem value="24-hours">24 Hours (Live-in)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="salary">Expected Salary (₹/month)</Label>
              <Input
                id="salary"
                name="salary"
                type="number"
                value={formData.salary}
                onChange={handleInputChange}
                className="mt-1"
                placeholder="e.g., 15000"
              />
            </div>
            <div>
              <Label htmlFor="urgency">Urgency *</Label>
              <Select value={formData.urgency} onValueChange={(value) => handleSelectChange('urgency', value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="When do you need?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="urgent">Urgent (Within 2-3 days)</SelectItem>
                  <SelectItem value="this-week">This Week</SelectItem>
                  <SelectItem value="this-month">This Month</SelectItem>
                  <SelectItem value="planning">Just Planning</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label htmlFor="experience">Preferred Experience</Label>
            <Select value={formData.experience} onValueChange={(value) => handleSelectChange('experience', value)}>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select experience preference" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="fresher">Fresher (0-1 years)</SelectItem>
                <SelectItem value="experienced">Experienced (2-5 years)</SelectItem>
                <SelectItem value="highly-experienced">Highly Experienced (5+ years)</SelectItem>
                <SelectItem value="no-preference">No Preference</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="requirements">Additional Requirements</Label>
            <Textarea
              id="requirements"
              name="requirements"
              value={formData.requirements}
              onChange={handleInputChange}
              className="mt-1"
              placeholder="Please specify any additional requirements like language preference, specific tasks, etc."
              rows={4}
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-lg py-3"
          >
            Submit Requirement
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
