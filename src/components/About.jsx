import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Clock, Heart, CheckCircle, Home, ChefHat, Baby, Stethoscope, Car } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            About <span className="text-teal-600">Violet Web Haven</span>
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            We are dedicated to providing exceptional domestic help services, connecting you with trusted and skilled professionals to manage your household needs with ease and confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=600&fit=crop" 
              alt="Our team of verified and trained domestic professionals at Violet Web Haven"
              className="rounded-xl shadow-2xl w-full h-[450px] object-cover"
            />
            <div className="absolute -bottom-8 -right-8 bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg transform rotate-3">
              <div className="flex items-center space-x-4">
                <div className="bg-teal-100 p-4 rounded-full shadow-md">
                  <Users className="h-10 w-10 text-teal-700" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-800">500+</h3>
                  <p className="text-gray-600 text-lg">Verified Professionals</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-gray-800">Our Commitment to Excellence and Trust</h3>
            <p className="text-gray-700 leading-relaxed">
              At Violet Web Haven, your peace of mind is our top priority. We meticulously vet every professional in our network, ensuring they meet our stringent standards for reliability, skill, and trustworthiness. Our commitment extends beyond just matching; we aim to build lasting relationships based on exceptional service and mutual respect.
            </p>
            <div className="space-y-5">
              <div className="flex items-start space-x-4">
                <div className="bg-teal-100 p-3 rounded-full shadow-sm">
                  <Award className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1 text-lg">Uncompromising Quality Assurance</h4>
                  <p className="text-gray-600">Rigorous screening and continuous evaluation ensure the highest standards of service delivery.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-teal-100 p-3 rounded-full shadow-sm">
                  <Clock className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1 text-lg">Dependability You Can Count On</h4>
                  <p className="text-gray-600">We prioritize punctuality and reliability, ensuring our professionals are there when you need them.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-teal-100 p-3 rounded-full shadow-sm">
                  <Heart className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1 text-lg">Client-Centric Approach</h4>
                  <p className="text-gray-600">Your satisfaction drives us. We tailor our services and support to meet your unique needs and exceed expectations.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <Card className="border-0 shadow-xl rounded-xl bg-white">
            <CardContent className="p-8 space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Our Simple Process</h3>
              <ul className="space-y-5">
                <li className="flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-purple-200 text-purple-800 rounded-full w-8 h-8 flex items-center justify-center text-base font-bold shadow-sm">
                    1
                  </div>
                  <p className="text-gray-700"><span className="font-semibold">Submit Your Needs:</span> Easily post your requirements through our secure online form.</p>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-purple-200 text-purple-800 rounded-full w-8 h-8 flex items-center justify-center text-base font-bold shadow-sm">
                    2
                  </div>
                  <p className="text-gray-700"><span className="font-semibold">Get Matched:</span> We find the best-matched, verified professionals based on your criteria.</p>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-purple-200 text-purple-800 rounded-full w-8 h-8 flex items-center justify-center text-base font-bold shadow-sm">
                    3
                  </div>
                  <p className="text-gray-700"><span className="font-semibold">Review & Select:</span> Choose your preferred professional after reviewing their profiles.</p>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-purple-200 text-purple-800 rounded-full w-8 h-8 flex items-center justify-center text-base font-bold shadow-sm">
                    4
                  </div>
                  <p className="text-gray-700"><span className="font-semibold">Begin Service:</span> Connect with your chosen professional and experience reliable domestic help.</p>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl rounded-xl bg-white">
            <CardContent className="p-8 space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Why Trust Violet Web Haven?</h3>
              <ul className="space-y-5">
                <li className="flex items-start space-x-4">
                  <div className="flex-shrink-0 text-teal-600 mt-1">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <p className="text-gray-700"><span className="font-semibold">Verified Backgrounds:</span> All professionals undergo stringent background checks.</p>
                </li>
                <li className="flex items-start space-x-4">
                   <div className="flex-shrink-0 text-teal-600 mt-1">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <p className="text-gray-700"><span className="font-semibold">Skilled Professionals:</span> Access a network of experienced and well-trained individuals.</p>
                </li>
                <li className="flex items-start space-x-4">
                   <div className="flex-shrink-0 text-teal-600 mt-1">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <p className="text-gray-700"><span className="font-semibold">Reliable & Punctual:</span> We ensure dependable service and timely arrivals.</p>
                </li>
                <li className="flex items-start space-x-4">
                   <div className="flex-shrink-0 text-teal-600 mt-1">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <p className="text-gray-700"><span className="font-semibold">Dedicated Support:</span> Our team is available to assist you throughout the process.</p>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl rounded-xl bg-white">
            <CardContent className="p-8 space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Our Service Categories</h3>
              <ul className="space-y-5">
                <li className="flex items-start space-x-4">
                  <div className="flex-shrink-0 text-purple-600 mt-1">
                    <Home className="h-6 w-6" />
                  </div>
                  <p className="text-gray-700"><span className="font-semibold">Housekeeping & Cleaning:</span> Keep your home spotless with our expert cleaners.</p>
                </li>
                <li className="flex items-start space-x-4">
                   <div className="flex-shrink-0 text-purple-600 mt-1">
                    <ChefHat className="h-6 w-6" />
                  </div>
                  <p className="text-gray-700"><span className="font-semibold">Cooking Services:</span> Enjoy delicious and healthy meals prepared by skilled cooks.</p>
                </li>
                <li className="flex items-start space-x-4">
                   <div className="flex-shrink-0 text-purple-600 mt-1">
                    <Baby className="h-6 w-6" />
                  </div>
                  <p className="text-gray-700"><span className="font-semibold">Child & Elder Care:</span> Compassionate and professional care for your loved ones.</p>
                </li>
                <li className="flex items-start space-x-4">
                   <div className="flex-shrink-0 text-purple-600 mt-1">
                    <Stethoscope className="h-6 w-6" />
                  </div>
                  <p className="text-gray-700"><span className="font-semibold">Patient Care & Nursing:</span> Qualified medical assistance and support at home.</p>
                </li>
                 <li className="flex items-start space-x-4">
                   <div className="flex-shrink-0 text-purple-600 mt-1">
                    <Car className="h-6 w-6" />
                  </div>
                  <p className="text-gray-700"><span className="font-semibold">Drivers & Security:</span> Reliable transportation and professional security services.</p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
