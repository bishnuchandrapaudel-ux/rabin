import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Shop",
      links: [
        { label: "Women's Fashion", href: "#" },
        { label: "Men's Collection", href: "#" },
        { label: "Kids & Baby", href: "#" },
        { label: "Accessories", href: "#" },
        { label: "Sale Items", href: "#" },
      ],
    },
    {
      title: "Customer Service",
      links: [
        { label: "Contact Us", href: "#" },
        { label: "Size Guide", href: "#" },
        { label: "Shipping Info", href: "#" },
        { label: "Returns & Exchanges", href: "#" },
        { label: "FAQ", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Sustainability", href: "#" },
        { label: "Press", href: "#" },
        { label: "Investors", href: "#" },
      ],
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-premium text-premium-foreground">
      <div className="container mx-auto px-4">
        {/* Newsletter Section */}
        <div className="py-12 border-b border-premium-foreground/20">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">Stay in Style</h3>
              <p className="text-premium-foreground/80">
                Subscribe to our newsletter for exclusive offers, style tips, and the latest fashion trends.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                placeholder="Enter your email"
                className="bg-premium-foreground/10 border-premium-foreground/20 text-premium-foreground placeholder:text-premium-foreground/60"
              />
              <Button variant="luxury" className="sm:w-auto">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold bg-gradient-luxury bg-clip-text text-transparent mb-4">
                StyleHub
              </h2>
              <p className="text-premium-foreground/80 mb-6 max-w-md">
                Your destination for premium fashion. We curate the finest collections 
                from renowned designers and emerging brands worldwide.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4" />
                  <span className="text-sm">hello@stylehub.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">123 Fashion Ave, New York, NY 10001</span>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section) => (
              <div key={section.title}>
                <h4 className="font-semibold mb-4">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-premium-foreground/80 hover:text-premium-foreground transition-colors text-sm"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <Separator className="bg-premium-foreground/20" />

        {/* Bottom Footer */}
        <div className="py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-premium-foreground/80">
              © 2024 StyleHub. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Button
                    key={social.label}
                    variant="ghost"
                    size="icon"
                    className="text-premium-foreground/80 hover:text-premium-foreground hover:bg-premium-foreground/10"
                    asChild
                  >
                    <a href={social.href} aria-label={social.label}>
                      <Icon className="h-4 w-4" />
                    </a>
                  </Button>
                );
              })}
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm">
              <a
                href="#"
                className="text-premium-foreground/80 hover:text-premium-foreground transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-premium-foreground/80 hover:text-premium-foreground transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-premium-foreground/80 hover:text-premium-foreground transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;