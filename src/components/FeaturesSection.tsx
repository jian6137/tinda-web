import { BarChart3, Smartphone, ShoppingCart, Users, CreditCard, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FeaturesSection = () => {
  const features = [
    {
      icon: BarChart3,
      title: "Smart Analytics",
      description: "Track sales, monitor inventory, and understand customer preferences with easy-to-read dashboards.",
      highlight: "85% increase in profit margins"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Manage your store from anywhere using our intuitive mobile app designed for Filipino entrepreneurs.",
      highlight: "Works on any smartphone"
    },
    {
      icon: ShoppingCart,
      title: "Inventory Management",
      description: "Never run out of popular items again. Get alerts when stock is low and suggestions for reorders.",
      highlight: "40% reduction in stockouts"
    },
    {
      icon: Users,
      title: "Customer Insights",
      description: "Build stronger relationships with your customers through purchase history and preference tracking.",
      highlight: "60% customer retention boost"
    },
    {
      icon: CreditCard,
      title: "Digital Payments",
      description: "Accept GCash, PayMaya, and other digital payments to serve more customers and increase sales.",
      highlight: "3x payment options"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Get help whenever you need it with our Filipino customer support team available around the clock.",
      highlight: "Tagalog & English support"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Everything You Need to
            <span className="text-primary block">Grow Your Store</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            TINDA provides all the tools and support you need to transform your sari sari store 
            into a modern, profitable business while keeping the personal touch your customers love.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-primary transition-all duration-300 hover:scale-105 hover:-translate-y-2 border-2 hover:border-primary/20"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 primary-gradient rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="text-primary-foreground" size={32} />
                </div>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <div className="accent-gradient text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold inline-block">
                  {feature.highlight}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="primary-gradient p-8 rounded-2xl shadow-primary max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-primary-foreground mb-4">
              Ready to Transform Your Store?
            </h3>
            <p className="text-primary-foreground/90 mb-6">
              Join thousands of Filipino entrepreneurs who have already upgraded their sari sari stores with TINDA.
            </p>
            <button className="bg-accent hover:bg-accent-light text-accent-foreground px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-accent">
              Start Your Free Trial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;