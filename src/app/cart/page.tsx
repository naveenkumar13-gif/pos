"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import useCartStore from "@/store/useCart";

import Button from "@/components/button/index";
import { useRouter } from "next/navigation";
import OrderItem from "@/components/orderItem";
import { Menu, Search, ShoppingCart } from "lucide-react";
import { Input } from "@/components/ui/input";

function CartAside() {
  const { cart, getTotalPrice } = useCartStore();
  const route = useRouter();
  return (
    <div className=" h-full !p-4 border-l border-stone-300   max-sm:w-full  ">
      <header className="flex items-center justify-between !p-4 !pt-12 bg-red-50 max-sm:!p-2">
        <div className="flex items-center gap-3">
          <Button className="text-foreground">
            <Menu className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-bold">
            Bill <span className="text-primary">Mate</span>
          </h1>
        </div>
         <Button className="text-foreground">
          <ShoppingCart className="h-5 w-5" />
        </Button>
      </header>

      <div className="!px-4 !my-6">
        <div className="relative">
          <Input
            placeholder="Search..."
            className="!pl-4 !pr-10 !py-3 bg-muted border-0 rounded-lg"
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        </div>
      </div>
      <div className="h-full">
        {cart.length === 0 ? (
          <div className=" h-full   !mb-6">
            <div className="flex flex-col items-center justify-center h-full">
              <span>
                <FontAwesomeIcon icon={faPlus} />
              </span>
              <h2 className="text-2xl font-bold mb-4 text-gray-400">
                Add Product{" "}
              </h2>
              <p className="!text-gray-400">From Special Menu</p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col justify-between gap-4 h-full  ">
            <OrderItem />
            {cart && (
              <div className=" flex flex-col gap-4 border border-gray-400 !p-2 rounded-md">
                <div className="flex justify-between">
                  <h2 className="text-xl sm:text-2xl font-bold ">Subtotal:</h2>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#ff0000]">
                    ₹{getTotalPrice()}
                  </h2>
                </div>
                <div className="flex justify-between">
                  <h2 className="text-xl sm:text-2xl font-bold">Tax:</h2>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#ff0000]">
                    ₹ 16
                  </h2>
                </div>
                <div className="flex justify-between border-t !pt-4 border-t-gray-400">
                  <h2 className="text-xl sm:text-2xl font-bold">Total:</h2>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#ff0000] max-sm:text-base">
                    ₹{getTotalPrice() + 16}
                  </h2>
                </div>
                <Button
                  className="!bg-red-500 !text-white !font-bold !text-base sm:!text-lg !py-6 !focus:outline-none !focus:border-none !border-none"
                  onClick={() => route.push("/checkout")}
                >
                  place the Order
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default CartAside;
