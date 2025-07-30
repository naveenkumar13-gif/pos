"use client";
import Header from "@/components/header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import ProductItem from "@/components/productItem";

export default function Home() {
  return (
    <div className="flex h-screen">
      <aside className="w-16 bg-red flex flex-col items-center justify-end pb-8 border-r"></aside>
      <div className="flex-1  ">
        <Header />
        <main className="flex-1  !p-4  h-screen ">
          <h1 className="text-2xl font-bold">Special Menu For You</h1>
          <div className=" grid  !mt-4">
            <ProductItem />
            <ProductItem />
          </div>
        </main>
      </div>
      <div className="w-[30%] bg-gray-100 p-6 flex flex-col items-center justify-center ">
        <div className="flex flex-col items-center justify-center">
          <span>
            <FontAwesomeIcon icon={faPlus} />
          </span>
          <h2 className="text-2xl font-bold mb-4 text-gray-400">
            Add Product{" "}
          </h2>
          <p className="!text-gray-400">From Special Menu</p>
        </div>
      </div>
    </div>
  );
}
