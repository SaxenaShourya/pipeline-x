import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Star } from "lucide-react";

const topProducts = [
  {
    id: 1,
    name: "Smart Watch",
    subheadline: "Track your fitness goals",
    image:
      "https://images.unsplash.com/photo-1544117519-31a4b719223d?w=200&h=200&fit=crop",
    price: "$149.99",
    rating: 4.7,
    inStock: false,
  },
  {
    id: 2,
    name: "Portable Bluetooth Speaker",
    subheadline: "Perfect for outdoor parties",
    image:
      "https://images.unsplash.com/photo-1615199669541-7c1b0f8a06d1?w=400&h=400&fit=crop",
    price: "$79.99",
    rating: 4.4,
    inStock: false,
  },
  {
    id: 3,
    name: "Noise Cancelling Earbuds",
    subheadline: "Block out distractions",
    image:
      "https://images.unsplash.com/photo-1632200004922-bc18602c79fc?w=200&h=200&fit=crop",
    price: "$129.99",
    rating: 4.6,
    inStock: true,
  },
  {
    id: 4,
    name: "Mechanical Keyboard",
    subheadline: "Designed for smooth typing",
    image:
      "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=400&h=400&fit=crop",
    price: "$89.99",
    rating: 4.2,
    inStock: true,
  },
];

const TopSellingProducts = () => {
  return (
    <Card className="w-full bg-white rounded-md p-2 shadow-none border-2">
      <CardHeader className="p-2">
        <CardTitle className="text-sm font-semibold text-gray-800">
          Top Selling Products
        </CardTitle>
        <p className="text-xs text-gray-500">Most popular items this month</p>
      </CardHeader>
      <CardContent className="space-y-3 p-2">
        {topProducts.map((product, index) => (
          <div key={product.id}>
            <div className="flex items-center justify-between">
              {/* Image & Product Name */}
              <div className="flex items-center space-x-3">
                <Avatar className="w-12 h-12 border">
                  <AvatarImage src={product.image} alt={product.name} className="scale-150" />
                </Avatar>
                <div>
                  <p className="text-xs font-medium text-gray-800">
                    {product.name}
                  </p>
                  <p className="text-[10px] text-gray-500">
                    {product.subheadline}
                  </p>
                  <div className="flex items-center text-xs text-gray-600">
                    <Star size={12} className="text-neutral-500" />
                    <span className="ml-1">{product.rating}</span>
                  </div>
                </div>
              </div>

              {/* Price & Stock Badge */}
              <div className="flex flex-col items-end">
                <p className="text-sm font-semibold">{product.price}</p>
                {product.inStock ? (
                  <Badge className="text-[10px] bg-primary/10 text-primary">
                    In Stock
                  </Badge>
                ) : (
                  <Badge className="text-[10px] bg-gray-300 text-gray-600">
                    Out of Stock
                  </Badge>
                )}
              </div>
            </div>

            {/* Separator */}
            {index !== topProducts.length - 1 && <Separator className="my-2" />}
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default TopSellingProducts;
