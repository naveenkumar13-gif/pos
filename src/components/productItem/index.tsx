import React from "react";
import Button from "@/components/button";
import { product } from "../../../public/images";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import useCartStore from "@/store/useCart";


const menuItems = [
  {
    id: 1,
    title: "Burger",
    price: 199,
    desc: "Juicy grilled patty topped with melted cheese, fresh lettuce, tomato, and our secret sauce.",
    img: product,
    rating: 5.0,
  },
  {
    id: 2,
    title: "Chicken Biriyani",
    price: 249,
    desc: "Aromatic basmati rice with tender chicken, spices, and herbs cooked to perfection.",
    img: product,
    rating: 4.9,
  },
  {
    id: 3,
    title: "Paneer Tikka",
    price: 179,
    desc: "Grilled paneer cubes marinated in spiced yogurt served with mint chutney.",
    img: product,
    rating: 4.8,
  },
  {
    id: 4,
    title: "French Fries",
    price: 99,
    desc: "Crispy golden fries served with tangy tomato ketchup and cheese dip.",
    img: product,
    rating: 4.7,
  },
  {
    id: 5,
    title: "Veg Pizza",
    price: 199,
    desc: "Crispy base loaded with fresh veggies, mozzarella cheese, and tangy sauce.",
    img: product,
    rating: 4.6,
  },
  {
    id: 6,
    title: "Momos",
    price: 129,
    desc: "Steamed dumplings filled with spicy vegetables or chicken, served with hot sauce.",
    img: product,
    rating: 4.5,
  },
];

type MenuItem = {
  id: number;
  title: string;
  price: number;
  desc: string;
  img: typeof product;
  rating: number;
};

function ProductItem() {
  const { addToCart } = useCartStore();

  const handleAddToCart = (item: MenuItem) => {
    const newItem = {
      id: item.id,
      title: item.title,
      price: item.price,
      quantity: 1,
      img: item.img.src,
    };

    addToCart(newItem);
  };
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
              <div className="flex items-center justify-center gap-1 ">
                <span className="text-yellow-500">{item.rating}</span>
                <span>
                  <FontAwesomeIcon icon={faStar} className="!text-red-500" />
                </span>
              </div>
              <Button
                className="!bg-red-500 !text-white  !rounded-full hover:bg-red-600 transition"
                onClick={() => handleAddToCart(item)}
              >
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
