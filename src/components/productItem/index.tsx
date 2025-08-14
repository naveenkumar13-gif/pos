import React from "react";
import Button from "@/components/button";
import { product } from "../../../public/images";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import useCartStore from "@/store/useCart";

export const menuItems = [
  {
    id: 1,
    name: "Burger",
    price: 199,
    description:
      "Juicy grilled patty topped with melted cheese, fresh lettuce, tomato, and our secret sauce.",
    image: product,
    rating: 5.0,
    category: "",
  },
  {
    id: 2,
    name: "Chicken Biriyani",
    price: 249,
    description:
      "Aromatic basmati rice with tender chicken, spices, and herbs cooked to perfection.",
    image: product,
    rating: 4.9,
    category: "",
  },
  {
    id: 3,
    name: "Paneer Tikka",
    price: 179,
    description:
      "Grilled paneer cubes marinated in spiced yogurt served with mint chutney.",
    image: product,
    rating: 4.8,
    category: "",
  },
  {
    id: 4,
    name: "French Fries",
    price: 99,
    description:
      "Crispy golden fries served with tangy tomato ketchup and cheese dip.",
    image: product,
    rating: 4.7,
    category: "",
  },
  {
    id: 5,
    name: "Veg Pizza",
    price: 199,
    description:
      "Crispy base loaded with fresh veggies, mozzarella cheese, and tangy sauce.",
    image: product,
    rating: 4.6,
    category: "",
  },
  {
    id: 6,
    name: "Momos",
    price: 129,
    description:
      "Steamed dumplings filled with spicy vegetables or chicken, served with hot sauce.",
    image: product,
    rating: 4.5,
    category: "",
  },
];

type MenuItem = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  rating: number;
  category: string;
};

function ProductItem() {
  const { addToCart } = useCartStore();

  const handleAddToCart = (item: MenuItem) => {
    const newItem: MenuItem = {
      id: item.id,
      name: item.name,
      price: item.price,
      description: item.description,
      image: item.image,
      rating: item.rating ?? 0,
      category: item.category ?? "",
    };

    addToCart(newItem);
  };
  return (
    <div className=" grid grid-cols-3 gap-4 max-sm:grid-cols-1">
      {menuItems.map((item, index) => (
        <div
          key={index}
          className="!p-3  h-56 !my-6 rounded-3xl shadow-xl !border-gray-100 border  "
        >
          <div className=" flex justify-center relative mb-4 -top-10">
            <Image src={item.image} alt={item.name} className=" " />
          </div>
          <div className="flex flex-col  gap-2 relative -top-5">
            <div className="flex justify-between items-center gap-2">
              <h2 className="text-2xl font-semibold">{item.name}</h2>
              <span className="text-red-500 text-xl font-bold">
                ₹{item.price}
              </span>
            </div>
            <p className="text-gray-600 text-xs max-sm:text-sm">
              {item.description}
            </p>
            <div className="flex justify-between mt-2">
              <div className="flex items-center justify-center gap-1 ">
                <span className="text-yellow-500">{item.rating}</span>
                <span>
                  <FontAwesomeIcon icon={faStar} className="!text-red-500" />
                </span>
              </div>
              <Button
                className="!bg-red-500 !text-white  !rounded-full hover:bg-red-600 transition"
                onClick={() => handleAddToCart}
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
