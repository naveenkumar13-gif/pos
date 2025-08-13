import { ShoppingCart, Menu, Search, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { product } from "../../../public/images";
import Image from "next/image";

const Cart = () => {
  return (
    <div className="min-h-screen bg-background max-w-md mx-auto">
      <header className="flex items-center justify-between !p-4 !pt-12">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="text-foreground">
            <Menu className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-bold">
            Bill <span className="text-primary">Mate</span>
          </h1>
        </div>
        <Button variant="ghost" size="icon" className="text-foreground">
          <ShoppingCart className="h-5 w-5" />
        </Button>
      </header>

      <div className="!px-4 !mb-6">
        <div className="relative">
          <Input
            placeholder="Search..."
            className="!pl-4 !pr-10 !py-3 bg-muted border-0 rounded-lg"
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        </div>
      </div>

      <div className="!px-4 !mb-4">
        <h2 className="text-lg font-semibold text-foreground">Order #2456</h2>
      </div>
      <div className="!px-4 1mb-6">
        <Card className="!p-4 border border-border rounded-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Image
                src={product}
                alt="Burger"
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div>
                <h3 className="font-medium text-foreground">Burger</h3>
                <p className="text-primary font-semibold">₹199</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded-md border-border"
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="font-medium text-foreground w-8 text-center">
                1
              </span>
              <Button
                size="icon"
                className="h-8 w-8 rounded-md bg-primary hover:bg-primary/90"
              >
                <Plus className="h-4 w-4 text-primary-foreground" />
              </Button>
            </div>
          </div>
        </Card>
      </div>

      {/* Order Summary */}
      <div className="!px-4 !my-8">
        <Card className="!p-4 border border-border rounded-lg">
          <h3 className="font-semibold text-foreground !mb-4">Order Summary</h3>

          <div className="!space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-foreground">Subtotal</span>
              <span className="text-primary font-semibold">₹199</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-foreground">Tax</span>
              <span className="text-primary font-semibold">₹16</span>
            </div>
            <hr className="border-border" />
            <div className="flex justify-between items-center font-semibold">
              <span className="text-foreground">Total</span>
              <span className="text-primary">₹215</span>
            </div>
          </div>

          <Button className="w-full mt-6 bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 rounded-lg">
            Place the Order
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default Cart;
