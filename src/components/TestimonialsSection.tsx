import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Maria Santos",
      location: "Quezon City",
      store: "Tindahan ni Maria",
      content: "TINDA transformed my small store! My sales increased by 70% in just 3 months. The inventory tracking helps me know exactly what my customers want.",
      rating: 5,
      initials: "MS"
    },
    {
      name: "Juan Dela Cruz",
      location: "Cebu City",
      store: "Juan's Mini Mart",
      content: "Hindi ako marunong sa teknolohiya, pero TINDA ay napakadaling gamitin. The support team even taught me in Tagalog!",
      rating: 5,
      initials: "JC"
    },
    {
      name: "Rosa Valdez",
      location: "Davao City", 
      store: "Sari-Sari ni Rosa",
      content: "My customers love that they can pay with GCash now. I serve more people and my business is growing every day. Salamat TINDA!",
      rating: 5,
      initials: "RV"
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Stories from Our
            <span className="text-primary block">TINDA Family</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from real sari sari store owners who have transformed their businesses with TINDA.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="relative overflow-hidden hover:shadow-primary transition-all duration-300 hover:scale-105 hover:-translate-y-2"
            >
              <CardContent className="p-8">
                {/* Quote icon */}
                <Quote className="text-primary/20 absolute top-4 right-4" size={40} />
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-accent fill-accent" size={16} />
                  ))}
                </div>
                
                {/* Content */}
                <p className="text-muted-foreground italic leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>
                
                {/* Author info */}
                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12">
                    <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.store}</div>
                    <div className="text-xs text-primary">{testimonial.location}</div>
                  </div>
                </div>
              </CardContent>
              
              {/* Decorative gradient border */}
              <div className="absolute bottom-0 left-0 right-0 h-1 primary-gradient"></div>
            </Card>
          ))}
        </div>
        
        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <div className="bg-white/50 backdrop-blur-sm rounded-xl p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-bold text-primary">4.9/5</div>
                <div className="text-sm text-muted-foreground">Customer Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">10,000+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;