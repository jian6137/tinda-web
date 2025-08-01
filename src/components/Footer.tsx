import { Store, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "#features" },
        { name: "Pricing", href: "#pricing" },
        { name: "Demo", href: "#demo" },
        { name: "Support", href: "#support" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Careers", href: "#careers" },
        { name: "Blog", href: "#blog" },
        { name: "News", href: "#news" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Help Center", href: "#help" },
        { name: "Training", href: "#training" },
        { name: "Community", href: "#community" },
        { name: "Success Stories", href: "#stories" }
      ]
    }
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="primary-gradient p-2 rounded-lg">
                <Store className="text-primary-foreground" size={24} />
              </div>
              <span className="text-2xl font-bold text-background">TINDA</span>
            </div>
            <p className="text-background/80 mb-6 leading-relaxed">
              Empowering Filipino sari sari stores with modern technology. 
              Building stronger communities, one store at a time.
            </p>
            
            {/* Contact info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <Mail className="text-primary" size={16} />
                <span className="text-background/80">hello@tinda.ph</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-primary" size={16} />
                <span className="text-background/80">+63 912 345 6789</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-primary" size={16} />
                <span className="text-background/80">Makati City, Philippines</span>
              </div>
            </div>
          </div>

          {/* Footer sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold text-background mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-background/80 hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm">
              © 2024 TINDA. All rights reserved. Proudly Filipino.
            </p>
            
            {/* Social links */}
            <div className="flex gap-4">
              <a href="#" className="text-background/60 hover:text-primary transition-colors duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors duration-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors duration-200">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;