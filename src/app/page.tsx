"use client";
import Header from "@/components/header";
import ProductItem from "@/components/productItem";
import useCartStore from "@/store/useCart";
import OrderItem from "@/components/orderItem";
import AsideBar from "@/components/asideBar";
export default function Home() {
  const { cart,  totalPrice } = useCartStore();
  console.log(cart);
  return (
    <div className="flex">
      <aside className="w-16  flex flex-col items-center justify-end pb-8 border-r "></aside>
      <div className="flex-1  ">
        <Header />
        <main className="flex-1  !p-4  ">
          <h1 className="text-2xl font-bold">Special Menu For You</h1>
          <div className=" grid  !mt-4">
            <ProductItem />
          </div>
        </main>
      </div>
    <AsideBar/>
    </div>
  );
}
