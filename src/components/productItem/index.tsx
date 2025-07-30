import React from "react";
import Button from "@/components/button";
import { product } from "../../../public/images";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const menuItems = [
  {
    title: "Burger",
    price: 199,
    desc: "Juicy grilled patty topped with melted cheese, fresh lettuce, tomato, and our secret sauce",
    img: product,
    rating: 5.0,
  },
  {
    title: "Biriyani",
    price: 199,
    desc: "A fragrant rice delight sealed and simmered to perfection every bite bursting with rich.",
    img: product,
    rating: 5.0,
  },
  {
    title: "Biriyani",
    price: 199,
    desc: "A fragrant rice delight sealed and simmered to perfection every bite bursting with rich.",
    img: product,
    rating: 5.0,
  },
];
function ProductItem() {
  return (
    <div className=" grid grid-cols-3 gap-4">
      {menuItems.map((item, index) => (
        <div
          key={index}
          className="!p-3  h-56 !my-6 rounded-3xl shadow-xl !border-gray-100 border  "
        >
          <div className=" flex justify-center relative mb-4 -top-10">
            <Image src={item.img} alt={item.title} className=" " />
          </div>
          <div className="flex flex-col  gap-2 relative -top-5">
            <div className="flex justify-between items-center gap-2">
              <h2 className="text-2xl font-semibold">{item.title}</h2>
              <span className="text-red-500 text-xl font-bold">
                ₹{item.price}
              </span>
            </div>
            <p className="text-gray-600 text-xs">{item.desc}</p>
            <div className="flex justify-between mt-2">
              <span className="text-yellow-500">
                {item.rating}
                <FontAwesomeIcon icon={faStar} className="!text-red-500" />
              </span>
              <Button className="!bg-red-500 !text-white  !rounded-full hover:bg-red-600 transition">
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductItem;
