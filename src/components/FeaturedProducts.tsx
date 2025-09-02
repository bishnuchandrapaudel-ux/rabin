import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";

const featuredProducts = [
  {
    id: "1",
    name: "Premium Wool Blazer",
    brand: "Luxury Brand",
    price: 299,
    originalPrice: 399,
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=500&fit=crop&crop=center",
    rating: 4.8,
    reviews: 124,
    isNew: false,
    isSale: true,
    colors: ["#8B4513", "#2F4F4F", "#000000"],
  },
  {
    id: "2",
    name: "Silk Midi Dress",
    brand: "Elegant Co",
    price: 189,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop&crop=center",
    rating: 4.9,
    reviews: 89,
    isNew: true,
    isSale: false,
    colors: ["#FFB6C1", "#E6E6FA", "#F0E68C"],
  },
  {
    id: "3",
    name: "Designer Sneakers",
    brand: "Urban Style",
    price: 149,
    originalPrice: 199,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=500&fit=crop&crop=center",
    rating: 4.6,
    reviews: 203,
    isNew: false,
    isSale: true,
    colors: ["#FFFFFF", "#000000", "#FF6347"],
  },
  {
    id: "4",
    name: "Cashmere Sweater",
    brand: "Comfort Co",
    price: 229,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=500&fit=crop&crop=center",
    rating: 4.7,
    reviews: 156,
    isNew: true,
    isSale: false,
    colors: ["#F5F5DC", "#D2B48C", "#A0522D"],
  },
  {
    id: "5",
    name: "Leather Handbag",
    brand: "Luxury Craft",
    price: 349,
    originalPrice: 449,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=500&fit=crop&crop=center",
    rating: 4.9,
    reviews: 78,
    isNew: false,
    isSale: true,
    colors: ["#8B4513", "#000000", "#696969"],
  },
  {
    id: "6",
    name: "Denim Jacket",
    brand: "Classic Wear",
    price: 129,
    image: "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=400&h=500&fit=crop&crop=center",
    rating: 4.5,
    reviews: 267,
    isNew: false,
    isSale: false,
    colors: ["#4169E1", "#2F4F4F", "#000000"],
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Handpicked selections from our premium collection. Each piece combines 
            exceptional quality with contemporary design.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="luxury" size="lg" className="px-8">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;