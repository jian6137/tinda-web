import { ArrowRight, CheckCircle, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const CTASection = () => {
  const benefits = [
    "Free 30-day trial",
    "No setup fees",
    "24/7 support in Tagalog & English",
    "Works on any smartphone"
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-72 h-72 primary-gradient rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 accent-gradient rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Ready to Join the
            <span className="text-primary block">TINDA Revolution?</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Transform your sari sari store today and join thousands of Filipino entrepreneurs 
            who have already discovered the power of TINDA.
          </p>
          
          {/* Benefits list */}
          <div className="grid md:grid-cols-2 gap-4 mb-8 max-w-2xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 text-left">
                <CheckCircle className="text-success flex-shrink-0" size={20} />
                <span className="text-muted-foreground">{benefit}</span>
              </div>
            ))}
          </div>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="primary-gradient text-primary-foreground shadow-primary text-lg px-8 py-4 group transition-all duration-300 hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-4 transition-all duration-300 hover:scale-105"
            >
              Schedule Demo
            </Button>
          </div>
          
          {/* Contact cards */}
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <Card className="hover:shadow-primary transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <Phone className="text-primary mx-auto mb-4" size={32} />
                <h3 className="font-semibold text-foreground mb-2">Call Us</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Speak with our Filipino support team
                </p>
                <a href="tel:+639123456789" className="text-primary font-semibold hover:underline">
                  +63 912 345 6789
                </a>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-primary transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <Mail className="text-primary mx-auto mb-4" size={32} />
                <h3 className="font-semibold text-foreground mb-2">Email Us</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Get detailed information about TINDA
                </p>
                <a href="mailto:hello@tinda.ph" className="text-primary font-semibold hover:underline">
                  hello@tinda.ph
                </a>
              </CardContent>
            </Card>
          </div>
          
          {/* Final trust message */}
          <div className="mt-12 p-6 bg-secondary/50 rounded-xl">
            <p className="text-muted-foreground">
              <strong className="text-foreground">Trusted by 10,000+ Filipino entrepreneurs</strong> • 
              No contracts • Cancel anytime • Your success is our mission
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;