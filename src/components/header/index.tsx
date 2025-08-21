"use client";
import React, { use, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faSearch } from "@fortawesome/free-solid-svg-icons";
import useCartStore from "@/store/useCart";
import { useRouter } from "next/navigation";
import { ShoppingCart, Menu, Search, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "../ui/input";

function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  const { cart } = useCartStore();
  const route = useRouter();

  return (
    <div className="!px-20 max-sm:!px-0">
      <div className="flex items-center justify-around gap-6 !p-4 ">
        <div className="max-sm:flex max-sm:items-center max-sm:justify-between max-sm:w-full">
          <div>
            <h1 className="text-2xl font-bold mr-6">
              Bill <span className="text-red-500">Mate</span>
            </h1>
          </div>
        </div>
        <div className="relative max-sm:hidden ">
          <span className="absolute left-88 -top-1 text-gray-500   !p-2">
            <FontAwesomeIcon icon={faSearch} />
          </span>
          <Input
            name="search"
            type="search"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="!w-96 !p-2 border border-gray-200 rounded-lg  focus:border-red-500  max-sm:hidden"
          />
        </div>
        <div className="  relative" onClick={() => route.push("/cart")}>
          <span className="  border border-gray-200 rounded-md !p-2">
            <FontAwesomeIcon icon={faCartShopping} />
          </span>
          {cart.length > 0 && (
            <p className="absolute  bottom-5 right-1 bg-red-500 text-white rounded-full w-2 h-2 "></p>
          )}
        </div>
      </div>
      <div className="!px-4 !mb-6  hidden max-sm:block">
        <div className="relative">
          <Input
            placeholder="Search..."
            className="!pl-4 !pr-10 !py-3 bg-muted border-0 rounded-lg"
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        </div>
      </div>
    </div>
  );
}

export default Header;
