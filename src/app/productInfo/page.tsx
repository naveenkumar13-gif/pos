"use client";
import Aside from "@/components/aside";
import Button from "@/components/button";

import ProductForm from "@/components/productForm";
import useCartStore from "@/store/useCart";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
          <div className="   gap-4 flex  justify-between">
            <div className="w-[80%]">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="border border-gray-400 bg-[F4F4F4] flex  items-center justify-between !p-2 !mb-2 rounded-lg "
                >
                  <div>
                    <Image
                      src={item.img ?? "/placeholder.png"}
                      alt={item.title}
                      width={100}
                      height={100}
                    />
                  </div>
                  <h1>{item.title}</h1>
                  <p>{item.price}</p>
                  <p>{item.quantity}</p>
                  <span>
                    <FontAwesomeIcon
                      icon={faXmark}
                      className="cursor-pointer"
                    />
                  </span>
                </div>
              ))}
            </div>

            <div className="border border-gray-400 bg-[F4F4F4] !p-2 !mb-2 rounded-lg  w-[30%] h-fit ">
              <h1 className="font-bold text-2xl">subTotal</h1>
              <div>
                <div className="flex  items-center justify-between text-[#686868]">
                  <p>Quantity:</p>
                  <span>{0}</span>
                </div>
              <div className="flex  items-center justify-between text-[#686868]">
                  <p>Price</p>
                  <span>{0}</span>
                </div>
              <div className="flex  items-center justify-between text-[#686868]">
                  <p>Tax:</p>
                  <span>10</span>
                </div>
                <div className="flex  items-center justify-between border-t !my-4">
                  <h2>Total</h2>
                  <p>200</p>
                </div>
                <div className="flex gap-4">
                  <Button className="!bg-red-500 !text-white   hover:bg-red-600 transition flex-1">
                    Print
                  </Button>
                  <Button className="!bg-black !text-white transition">
                    Place Order
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
