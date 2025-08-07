"use client";
import Aside from "@/components/aside";
import Button from "@/components/button";
import PrintPopUp from "@/components/printPopUp";
import ProductForm from "@/components/productForm";
import useCartStore from "@/store/useCart";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, { useState } from "react";

export default function ProductInfo() {
  const [isOpen, setIsOpen] = useState(false);
  const { cart, removeFromCart } = useCartStore();
  const baseStyle =
    "flex  items-center justify-between text-[#686868] tracking-wider  font-bold";

  return (
    <div className="flex">
      <Aside />
      <div className="flex-1  ">
        <main className="flex flex-col justify-between !p-4 ">
          <ProductForm />
          <div className="   gap-4  flex  justify-between">
            <div className="w-[80%] ">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="border border-gray-400 bg-[#F4F4F4]/60 flex items-center justify-between text-center !p-2 !mb-2 rounded-lg"
                >
                  <div>
                    <Image
                      src={item.img ?? "/placeholder.png"}
                      alt={item.title}
                      width={100}
                      height={100}
                    />
                  </div>

                  <h1 className="truncate max-w-[80px] text-left text-sm font-medium">
                    {item.title}
                  </h1>

                  <p>{item.price}</p>
                  <p>{item.quantity}</p>

                  <span onClick={() => removeFromCart(item.id)}>
                    <FontAwesomeIcon
                      icon={faXmark}
                      className="cursor-pointer"
                    />
                  </span>
                </div>
              ))}
            </div>

            {cart.length > 0 && (
              <div className="border border-gray-400 bg-[#F4F4F4]/10 !p-2 !mb-2 rounded-lg  w-[20%] h-[100%]  ">
                <h1 className="font-bold text-2xl">subTotal</h1>
                <div className="">
                  <div className={baseStyle}>
                    <p>Quantity:</p>
                    <span>{cart.length}</span>
                  </div>
                  <div className={baseStyle}>
                    <p>Price</p>
                    <span>
                      {cart.reduce((acc, item) => acc + item.price, 0)}
                    </span>
                  </div>
                  <div className={baseStyle}>
                    <p>Tax:</p>
                    <span>{10}</span>
                  </div>
                  <div className="flex  items-center justify-between border-t text-xl font-bold !my-4">
                    <h2>Total</h2>
                    <p>
                      {" "}
                      {cart.reduce((acc, item) => acc + item.price + 10, 0)}
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <Button
                      className="!bg-red-500 !text-white   hover:bg-red-600 transition flex-1 max-md:!text-xs max-md:!px-0"
                      onClick={() => setIsOpen(true)}
                    >
                      Print
                    </Button>
                    <Button className="!bg-black !text-white transition flex-1">
                      Place Order
                    </Button>
                  </div>
                </div>
              </div>
            )}
            {isOpen && <PrintPopUp setIsOpen={setIsOpen} />}
          </div>
        </main>
      </div>
    </div>
  );
}
