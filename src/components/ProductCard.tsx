import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingBag, Star } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  isNew?: boolean;
  isSale?: boolean;
  colors?: string[];
}

const ProductCard = ({
  name,
  brand,
  price,
  originalPrice,
  image,
  rating,
  reviews,
  isNew,
  isSale,
  colors = [],
}: ProductCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [selectedColor, setSelectedColor] = useState(colors[0] || "");

  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  return (
    <Card className="group cursor-pointer overflow-hidden border-0 shadow-card hover:shadow-luxury transition-all duration-300 transform hover:scale-105 bg-card">
      <div className="relative">
        {/* Product Image */}
        <div className="aspect-[3/4] overflow-hidden bg-muted/20">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Quick actions */}
          <div className="absolute top-4 right-4 space-y-2">
            <Button
              variant="ghost"
              size="icon"
              className={`bg-background/80 backdrop-blur-sm shadow-card hover:shadow-elegant ${
                isWishlisted ? "text-red-500" : "text-muted-foreground"
              }`}
              onClick={(e) => {
                e.stopPropagation();
                setIsWishlisted(!isWishlisted);
              }}
            >
              <Heart className={`h-4 w-4 ${isWishlisted ? "fill-current" : ""}`} />
            </Button>
          </div>

          {/* Badges */}
          <div className="absolute top-4 left-4 space-y-2">
            {isNew && (
              <Badge className="bg-success text-success-foreground">New</Badge>
            )}
            {isSale && discount > 0 && (
              <Badge className="bg-destructive text-destructive-foreground">
                -{discount}%
              </Badge>
            )}
          </div>

          {/* Quick add to cart - appears on hover */}
          <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button className="w-full bg-background/90 text-foreground hover:bg-background backdrop-blur-sm shadow-card">
              <ShoppingBag className="h-4 w-4 mr-2" />
              Quick Add
            </Button>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4 space-y-3">
          {/* Brand and Rating */}
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground font-medium">{brand}</span>
            <div className="flex items-center space-x-1">
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              <span className="text-xs text-muted-foreground">
                {rating} ({reviews})
              </span>
            </div>
          </div>

          {/* Product Name */}
          <h3 className="font-medium text-foreground group-hover:text-luxury transition-colors line-clamp-2">
            {name}
          </h3>

          {/* Colors */}
          {colors.length > 0 && (
            <div className="flex items-center space-x-2">
              <span className="text-xs text-muted-foreground">Colors:</span>
              <div className="flex space-x-1">
                {colors.slice(0, 4).map((color, index) => (
                  <button
                    key={index}
                    className={`w-4 h-4 rounded-full border-2 transition-all ${
                      selectedColor === color
                        ? "border-primary scale-110"
                        : "border-muted"
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedColor(color);
                    }}
                  />
                ))}
                {colors.length > 4 && (
                  <span className="text-xs text-muted-foreground">
                    +{colors.length - 4}
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Price */}
          <div className="flex items-center space-x-2">
            <span className="text-lg font-semibold text-foreground">
              ${price}
            </span>
            {originalPrice && originalPrice > price && (
              <span className="text-sm text-muted-foreground line-through">
                ${originalPrice}
              </span>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;