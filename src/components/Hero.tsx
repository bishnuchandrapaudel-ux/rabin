import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-fashion.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-subtle">
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Discover Your{" "}
                <span className="bg-gradient-luxury bg-clip-text text-transparent">
                  Perfect Style
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Curated fashion from premium brands. Express yourself with our 
                carefully selected collection of contemporary clothing and accessories.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                Shop Collection
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Explore Brands
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-primary">1000+</div>
                <div className="text-sm text-muted-foreground">Premium Items</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Top Brands</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-luxury">
              <img
                src={heroImage}
                alt="Premium fashion collection"
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-luxury text-luxury-foreground px-4 py-2 rounded-full text-sm font-medium shadow-luxury">
              Free Shipping
            </div>
            <div className="absolute bottom-8 -left-4 bg-background/90 backdrop-blur px-6 py-3 rounded-full shadow-card">
              <div className="text-sm font-medium">New Arrivals</div>
              <div className="text-xs text-muted-foreground">Updated Daily</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;