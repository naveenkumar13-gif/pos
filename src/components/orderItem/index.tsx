import useCartStore from "@/store/useCart";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faXmark } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

function OrderItem() {
  const { cart, updateQuantity } = useCartStore();
  return (
    <div className="">
      <div className="flex items-center justify-between !mb-6 ">
        {" "}
        <h2>Order #7465738</h2>
        <span>
          <FontAwesomeIcon icon={faXmark} />
        </span>
      </div>
      {cart.map((item) => (
        <div
          key={item.id}
          className="flex !items-center justify-between  gap-2 !mb-4 "
        >
          <div>
            <Image
              src={item.img || "placeholder.png"}
              alt={item.title}
              width={50}
              height={50}
            />
          </div>
          <div className="flex flex-col items-center ">
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-gray-600">₹{item.price}</p>
          </div>
          <div className="flex items-center gap-1">
            {" "}
            <button
              className="bg-gray-00 text-gray-600 border border-gray-200 font-semibold !py-1 !px-2 rounded-md text-sm cursor-pointer"
              onClick={() =>
                updateQuantity(item.id.toString(), item.quantity - 1)
              }
            >
              -
            </button>
            <span className="mx-2">{item.quantity}</span>
            <button
              className={`
               
               cursor-pointer  text-white  border    bg-[#ff0000]  border-gray-200 font-semibold !py-1 !px-2 rounded-md text-sm`}
              onClick={() =>
                updateQuantity(item.id.toString(), item.quantity + 1)
              }
            >
              +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default OrderItem;
