import { Star, Plus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import useCartStore, { MenuItem } from "@/store/useCart";
import {} from "@/store/useCart";
import { toast } from "sonner";
import Image from "next/image";
import Button from "../button";

interface MenuCardProps {
  item: MenuItem;
}

export default function MenuCard({ item }: MenuCardProps) {
  const { addToCart } = useCartStore();

  const handleAddToCart = () => {
    addToCart(item);
    toast.success(`${item.name} added to cart!`);
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-gray-50">
      <CardContent className="!p-4">
        <div className="relative !mb-4">
          <Image
            src={item.image}
            alt={item.name}
            className="w-full h-auto object-cover rounded-lg"
          />
          <Badge className="absolute top-2 left-2 bg-food-success text-white">
            {item.category}
          </Badge>
        </div>

        <div className="!space-y-3">
          <div className="flex items-start justify-between">
            <h3 className="font-semibold text-lg text-gray-900">{item.name}</h3>
            <span className="text-xl font-bold text-primary">
              ₹{item.price}
            </span>
          </div>

          <p className="text-sm text-muted-foreground line-clamp-2">
            {item.description}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">{item.rating}</span>
            </div>

            <Button
              className="!bg-red-500 !text-white  !rounded-full hover:bg-red-600 transition "
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
