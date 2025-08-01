import { ArrowRight, Store, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-sari-sari.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Modern Filipino Sari Sari Store" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient opacity-90"></div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 animate-float opacity-20">
        <Store size={60} className="text-accent" />
      </div>
      <div className="absolute bottom-32 right-16 animate-float opacity-20" style={{ animationDelay: "2s" }}>
        <TrendingUp size={80} className="text-accent" />
      </div>
      <div className="absolute top-1/3 right-20 animate-float opacity-20" style={{ animationDelay: "4s" }}>
        <Users size={50} className="text-accent" />
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            Empowering
            <span className="block text-accent">Sari Sari Stores</span>
            Across the Philippines
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-balance opacity-90 leading-relaxed">
            TINDA transforms traditional neighborhood stores with modern technology, 
            helping Filipino entrepreneurs grow their businesses and serve their communities better.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent-light text-accent-foreground shadow-accent text-lg px-8 py-4 group transition-all duration-300 hover:scale-105"
            >
              Get Started Today
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 bg-blue-600 text-white hover:bg-white backdrop-blur-sm text-lg px-8 py-4 transition-all duration-300 hover:scale-105"
            >
              Learn More
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="text-3xl font-bold text-accent">10,000+</div>
              <div className="text-sm opacity-80">Stores Powered</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="text-3xl font-bold text-accent">85%</div>
              <div className="text-sm opacity-80">Revenue Increase</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <div className="text-3xl font-bold text-accent">7,112</div>
              <div className="text-sm opacity-80">Islands Covered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;