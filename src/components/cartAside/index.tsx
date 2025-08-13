"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import useCartStore from "@/store/useCart";
import OrderItem from "../orderItem";
import Button from "@/components/button/index";
import { useRouter } from "next/navigation";

function CartAside() {
  const { cart, totalPrice } = useCartStore();
  const route = useRouter();
  return (
    <div className=" h-full !p-4 border-l border-stone-300   max-sm:w-full ">
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
              <div className=" flex flex-col gap-4 ">
                <div className="flex justify-between">
                  <h2 className="text-2xl font-bold ">SubTotal:</h2>
                  <h2 className="text-2xl font-bold text-[#ff0000]">
                    ₹{totalPrice()}
                  </h2>
                </div>
                <div className="flex justify-between">
                  <h2 className="text-2xl font-bold">Tax:</h2>
                  <h2 className="text-2xl font-bold text-[#ff0000]">₹ 16</h2>
                </div>
                <div className="flex justify-between border-t !pt-4 border-t-gray-400">
                  <h2 className="text-2xl font-bold">Total:</h2>
                  <h2 className="text-2xl font-bold text-[#ff0000]">
                    ₹{totalPrice() + 16}
                  </h2>
                </div>
                <Button
                  className="!bg-red-500 !text-white !font-bold !text-lg !py-6 !focus:outline-none !focus:border-none !border-none"
                  onClick={() => route.push("/productInfo")}
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
