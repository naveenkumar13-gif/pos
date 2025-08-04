"use client";
import Header from "@/components/header";
import ProductItem from "@/components/productItem";
import AsideBar from "@/components/cartAside";
import Aside from "@/components/aside";
export default function Home() {
  return (
    <div className="flex">
      <Aside />
      <div className="flex-1  ">
        <Header />
        <main className="flex-1  !p-4  ">
          <h1 className="text-2xl font-bold">Special Menu For You</h1>
          <div className=" grid  !mt-4">
            <ProductItem />
          </div>
        </main>
      </div>
      <AsideBar />
    </div>
  );
}
