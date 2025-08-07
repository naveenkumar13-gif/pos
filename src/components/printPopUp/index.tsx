import useCartStore from "@/store/useCart";
import React from "react";
import Button from "../button";

interface PrintPopUpProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function PrintPopUp({ setIsOpen }: PrintPopUpProps) {
  const { cart } = useCartStore();
  const baseStyle =
    "flex  items-center justify-between text-[#686868] font-bold";
  const ButtonbaseStyle =
    "!bg-red-500 hover:!bg-red-600 !text-white !font-bold py-2 px-4 rounded !focus:outline-none !focus:border-none !border-none";
  return (
    <div>
      <div
        className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-50"
        onClick={() => setIsOpen(false)}
      ></div>
      <div className="fixed  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white !p-6 z-50 rounded-md shadow-lg w-[30%] ">
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold mb-4">oredr #52142167</h2>
          <div className="!pb-8 border-b border-gray-400 flex flex-col gap-2">
            <div className={baseStyle}>
              <h2>Name</h2>
              <span>nk</span>
            </div>
            <div className={baseStyle}>
              <h2>Customer ID</h2>
              <span>{1}</span>
            </div>
            <div className={baseStyle}>
              <h2>Date</h2>
              <span>{new Date().toDateString()}</span>
            </div>
          </div>
          <div className="flex flex-col gap-2 !pb-4">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center justify">
                <p className="flex-1"> {item.title}</p>
                <p>{item.quantity}</p>
                <p>{}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-2 !pb-4">
            <div
              className={"font-bold text-lg  flex items-center justify-between"}
            >
              <h2>Subtotal</h2>
            </div>
            <div className={baseStyle}>
              <h2>Quantity</h2>
              <span>{cart.length}</span>
            </div>
            <div className={baseStyle}>
              <h2>Price</h2>
              <span>{cart.reduce((acc, item) => acc + item.price, 0)}</span>
            </div>
            <div className={baseStyle}>
              <h2>Tax</h2>
              <span>
                ₹{cart.reduce((acc, item) => acc + item.price + 10, 0)}
              </span>
            </div>
          </div>
          <Button className={ButtonbaseStyle}>Print</Button>
        </div>

        <div></div>
      </div>
    </div>
  );
}
