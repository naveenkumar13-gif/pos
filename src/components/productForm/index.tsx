import React, { useState } from "react";
import Input from "@/components/inputs";

function ProductForm() {
  const [name, setName] = useState("");
  return (
    <>
      <form className="flex-1  !p-6  max-md:!p-4">
        <h1 className="!mb-6">0rder#894398</h1>
        <div className="flex  justify-between  !pb-10">
          <div className="flex flex-col gap-3">
            <label>Name</label>
            <Input
              name="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="flex flex-col gap-3">
            <label>Gender</label>
            <Input
              name="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your Gender"
              required
            />
          </div>

          <div className="flex flex-col gap-3">
            <label>Ctiy</label>
            <Input
              name="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your City"
              required
            />
          </div>
        </div>
        <div className="flex  justify-between ">
          <div className="flex flex-col gap-3">
            <label>Phone Number</label>
            <Input
              name="name"
              type="number"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your Phone"
              required
            />
          </div>
          <div className="flex flex-col gap-3">
            <label>Name</label>
            <Input
              name="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your Email "
              required
            />
          </div>

          <div className="flex flex-col gap-3">
            <label>Name</label>
            <Input
              name="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Date of Birth"
              required
            />
          </div>
        </div>
      </form>
    </>
  );
}

export default ProductForm;
