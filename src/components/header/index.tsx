"use client";
import React, { useState } from "react";
import Input from "../inputs/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="flex-1 w-full   ">
      <div className="flex items-center justify-around gap-6 !p-4 ">
        <div>
          <h1 className="text-2xl font-bold mr-6">
            Bill <span className="text-red-500">Mate</span>
          </h1>
        </div>
        <div className="relative ">
          <span className="absolute left-88 top-2 text-gray-500 ">
            <FontAwesomeIcon icon={faSearch} />
          </span>
          <Input
            name="search"
            type="search"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="!w-96  rounded-full border-gray-200  focus:border-red-500 "
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
