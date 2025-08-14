"use client";
import Header from "@/components/header";
import ProductItem from "@/components/productItem";
import AsideBar from "@/components/cartAside";
import Aside from "@/components/aside";
import Menu from "./home/page";
export default function Home() {
  return (
    // <div className="flex  max-sm:w-full max-sm:flex-col  w-full">
    //   <Aside />
    //   <div className="flex-1 max-sm:w-full  ">
    //     <Header />
    //     <main className="flex-1  max-sm:w-full !p-4  ">
    //       <h1 className="text-2xl font-bold">Special Menu For You</h1>
    //       <div className=" max-sm:w-full  !mt-4">
    //         <ProductItem />
    //       </div>
    //     </main>
    //   </div>
    //   <div className="max-sm:hidden w-[25%] max-sm:w-0  ">
    //     <AsideBar />
    //   </div>
    // </div>
    <Menu />
  );
}
