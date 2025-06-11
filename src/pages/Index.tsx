
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900">
              Your Project
              <span className="block text-blue-600">Starts Here</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Build something amazing with this clean, modern foundation.
            </p>
            
            <div className="pt-8">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 rounded-full bg-blue-200/30 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 rounded-full bg-purple-200/30 blur-3xl"></div>
      </div>
    </div>
  );
};

export default Index;
