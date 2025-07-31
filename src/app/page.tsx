"use client";
import Header from "@/components/header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import ProductItem from "@/components/productItem";
import useCartStore from "@/store/useCart";
import OrderItem from "@/components/orderItem";
export default function Home() {
  const { cart,  totalPrice } = useCartStore();
  console.log(cart);
  return (
    <div className="flex">
      <aside className="w-16  flex flex-col items-center justify-end pb-8 border-r bg-amber-500"></aside>
      <div className="flex-1  ">
        <Header />
        <main className="flex-1  !p-4  ">
          <h1 className="text-2xl font-bold">Special Menu For You</h1>
          <div className=" grid  !mt-4">
            <ProductItem />
          </div>
        </main>
      </div>
      <div className="w-[25%]   !p-4 border-l border-gray-200  ">
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
            <div className="flex flex-col justify-between gap-4 h-full ">
              <OrderItem />
              {cart && (
                <div className=" gap-4">
                  <div className="flex justify-between">
                    <h2 className="text-2xl font-bold ">SubTotal</h2>
                    <h2 className="text-2xl font-bold text-[#ff0000]">
                      ₹{totalPrice()}
                    </h2>
                  </div>
                  <div className="flex justify-between">
                    <h2 className="text-2xl font-bold">Tax</h2>
                    <h2 className="text-2xl font-bold text-[#ff0000]">₹ 16</h2>
                  </div>
                  <div className="flex justify-between border-t !my-2 border-t-gray-400">
                    <h2 className="text-2xl font-bold">Total</h2>
                    <h2 className="text-2xl font-bold text-[#ff0000]">
                      ₹{totalPrice() + 16}
                    </h2>
                  </div>
                  <div></div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
