"use client";
import Aside from "@/components/aside";

import ProductForm from "@/components/productForm";
import useCartStore from "@/store/useCart";
import Image from "next/image";
import React, { useState } from "react";

export default function ProductInfo() {
  const { cart } = useCartStore();

  return (
    <div className="flex">
      <Aside />
      <div className="flex-1  ">
        <main className="flex flex-col justify-between !p-4 ">
          <ProductForm />
          <div>
            <div className="border border-gray-300 p-4 rounded   ">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center   gap-2 !mb-4 ">
                  <Image
                    src={item.img || "placeholder.png"}
                    alt={item.title}
                    width={50}
                    height={50}
                  />

                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-gray-600">₹{item.price}</p>
                  <p>Quantity: {item.quantity}</p>

                  {/* <div className="flex  items-center justify-between "></div> */}
                </div>
              ))}
            </div>
            <div>
              
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
