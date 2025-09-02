import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const categories = [
  {
    name: "Women's Fashion",
    description: "Elegant styles for every occasion",
    items: "500+ items",
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=500&fit=crop&crop=center",
    featured: true,
  },
  {
    name: "Men's Collection",
    description: "Contemporary and classic designs",
    items: "350+ items",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=center",
    featured: false,
  },
  {
    name: "Kids & Baby",
    description: "Comfortable and playful outfits",
    items: "200+ items",
    image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400&h=500&fit=crop&crop=center",
    featured: false,
  },
  {
    name: "Accessories",
    description: "Complete your perfect look",
    items: "150+ items",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=500&fit=crop&crop=center",
    featured: false,
  },
];

const CategoryGrid = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully curated collections designed to elevate your 
            wardrobe with timeless pieces and contemporary trends.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Card
              key={category.name}
              className={`group cursor-pointer overflow-hidden border-0 shadow-card hover:shadow-luxury transition-all duration-300 transform hover:scale-105 ${
                category.featured ? "lg:col-span-2 lg:row-span-1" : ""
              }`}
            >
              <div className="relative">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">{category.name}</h3>
                    <p className="text-sm opacity-90">{category.description}</p>
                    <p className="text-xs opacity-75">{category.items}</p>
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-4 bg-white/20 border-white/30 text-white hover:bg-white hover:text-primary backdrop-blur-sm"
                  >
                    Explore
                  </Button>
                </div>

                {category.featured && (
                  <div className="absolute top-4 right-4 bg-luxury text-luxury-foreground px-3 py-1 rounded-full text-xs font-medium">
                    Featured
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="premium" size="lg">
            View All Categories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;