"use client";
import React from "react";
import useCartStore from "@/store/useCart";

import Button from "@/components/button/index";
import { useRouter } from "next/navigation";
import OrderItem from "@/components/orderItem";
import { ShoppingCart } from "lucide-react";

function CartAside() {
  const { cart, getTotalPrice } = useCartStore();
  const route = useRouter();
  return (
    <div className=" h-full !p-4   max-sm:w-full  ">
      <div className="h-full">
        {cart.length === 0 ? (
          <div className="max-w-4xl !mx-auto  !px-4 !py-8 flex items-center justify-center">
            <div className="text-center rounded-2xl !p-8 border border-gray-100 max-w-md w-full">
              <div className="flex justify-center !mb-6">
                <div className="bg-indigo-100 !p-6 rounded-full">
                  <ShoppingCart className="w-16 h-16 text-red-500" />
                </div>
              </div>
              <h2 className="text-3xl font-extrabold text-gray-800 !mb-2">
                Your Cart is Empty
              </h2>
              <p className="text-gray-500 !mb-6 max-sm:text-sm">
                Looks like you haven’t added anything yet. Let’s find something
                delicious!
              </p>
              <Button
                onClick={() => route.push("/")}
                className="!px-6 !py-2 rounded-lg !bg-gradient-to-r from-red-500 to-red-600 !text-white font-medium shadow-md hover:shadow-lg hover:from-red-600 hover:to-red-700 transition-all duration-300"
              >
                Browse Menu
              </Button>
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
