import { Heart, Target, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import empowermentImage from "@/assets/empowerment-illustration.jpg";

const AboutSection = () => {
  const values = [
    {
      icon: Heart,
      title: "Community First",
      description: "We believe in strengthening Filipino communities by empowering local entrepreneurs and preserving the sari sari store tradition."
    },
    {
      icon: Target,
      title: "Simple Solutions",
      description: "Our technology is designed to be intuitive and accessible, requiring minimal training while delivering maximum impact."
    },
    {
      icon: Zap,
      title: "Rapid Growth",
      description: "We help store owners increase their revenue and expand their reach through smart inventory management and customer insights."
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Revolutionizing
                <span className="text-primary block">Filipino Commerce</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                TINDA was born from a simple observation: Filipino sari sari stores are the heartbeat of every community, 
                yet they lack access to the digital tools that could help them thrive in today's economy.
              </p>
            </div>
            
            <div className="space-y-6">
              {values.map((value, index) => (
                <Card key={index} className="border-l-4 border-l-primary shadow-soft hover:shadow-primary transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="primary-gradient p-3 rounded-full flex-shrink-0">
                      <value.icon className="text-primary-foreground" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {value.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-primary">
              <img 
                src={empowermentImage} 
                alt="Filipino entrepreneurs using TINDA technology" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 primary-gradient opacity-10"></div>
            </div>
            
            {/* Floating stats */}
            <div className="absolute -top-6 -right-6 bg-white rounded-xl p-4 shadow-accent animate-float">
              <div className="text-2xl font-bold text-primary">₱2.5M</div>
              <div className="text-sm text-muted-foreground">Average Monthly Sales</div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-accent rounded-xl p-4 shadow-accent animate-float" style={{ animationDelay: "3s" }}>
              <div className="text-2xl font-bold text-accent-foreground">24/7</div>
              <div className="text-sm text-accent-foreground/80">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;