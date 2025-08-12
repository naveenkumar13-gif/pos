"use client";
import Aside from "@/components/aside";
import { Empty, Tag, Typography } from "antd";
import Image from "next/image";
import React, { useState } from "react";

type Product = {
  id: number;
  name: string;
  status: string;
  productId: number;
  quantity: number;
  price: number;
  image: string;
  isEditing?: boolean;
};

export default function ProductPage() {
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: "Product 1",
      status: "In stock",
      productId: 12345,
      quantity: 10,
      price: 99,
      image: "",
    },
    {
      id: 2,
      name: "Product 3",
      status: "Out of stock",
      productId: 12346,
      quantity: 10,
      price: 99,
      image: "",
    },
  ]);

  const handleDelete = (id: number) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const handleAdd = () => {
    const newProduct: Product = {
      id: Date.now(),
      name: "New Product",
      status: "In stock",
      productId: Math.floor(Math.random() * 100000),
      quantity: 10,
      price: 99,
      image: "",
    };
    setProducts([...products, newProduct]);
  };

  const handleEditToggle = (id: number) => {
    setProducts(
      products.map((p) => (p.id === id ? { ...p, isEditing: !p.isEditing } : p))
    );
  };

  return (
    <div className="   ">
      <div className="flex ">
        {" "}
        <Aside />
        <div className="flex-1 !p-6 h-auto ">
          <div className="flex justify-between items-center !mb-4">
            <h1 className="text-5xl font-bold">Product</h1>
            <button
              onClick={handleAdd}
              className="bg-red-500 text-white !px-4 !py-2 rounded-lg hover:bg-red-600"
            >
              + Add Product
            </button>
          </div>
          {products.length > 0 ? (
            <div className="overflow-x-auto ">
              <table className="min-w-full border rounded-lg text-center ">
                <thead>
                  <tr className="border-b">
                    <th className="!p-3 border-r border-gray-300">Product</th>
                    <th className="!p-3 border-r border-gray-300">Status</th>
                    <th className="!p-3 border-r border-gray-300">
                      Product ID
                    </th>
                    <th className="!p-3 border-r border-gray-300">Quantity</th>
                    <th className="!p-3 border-r border-gray-300">Price</th>
                    <th className="!p-3">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id} className="border-b">
                      <td className="!p-5 flex items-center gap-2 border-r border-gray-300">
                        <Image
                          src={product.image || "/placeholder.png"}
                          alt={product.name}
                          width={40}
                          height={40}
                          className="w-8 h-8 rounded-full"
                        />
                        {product.isEditing ? (
                          <>
                            <input
                              type="text"
                              value={product.name}
                              onChange={(e) =>
                                setProducts(
                                  products.map((p) =>
                                    p.id === product.id
                                      ? { ...p, name: e.target.value }
                                      : p
                                  )
                                )
                              }
                              onBlur={() => handleEditToggle(product.id)}
                              className="bg-white border border-gray-300 rounded-lg !p-2"
                            />
                          </>
                        ) : (
                          <span
                            className="font-semibold cursor-pointer"
                            onClick={() => handleEditToggle(product.id)}
                          >
                            {product.name}
                          </span>
                        )}
                      </td>

                      <td className="!p-3 border-r border-gray-300">
                        {product.status === "In stock" ? (
                          <Tag color="green">In stock</Tag>
                        ) : (
                          <Tag color="red">Out of stock</Tag>
                        )}
                      </td>

                      <td className="!p-3 border-r border-gray-300 font-semibold">
                        {product.status === "In stock" ? (
                          <p>{product.productId}</p>
                        ) : (
                          <p className="text-red-400 line-through">
                            Out of stock
                          </p>
                        )}
                      </td>

                      <td className="!p-3 border-r border-gray-300">
                        {product.status === "In stock" ? (
                          <p>{product.quantity}</p>
                        ) : (
                          <p className="text-red-400 line-through">
                            Out of stock
                          </p>
                        )}
                      </td>

                      <td className="!p-3 border-r border-gray-300">
                        {product.status === "In stock" ? (
                          <p>{product.price}</p>
                        ) : (
                          <p className="text-red-400 line-through">
                            Out of stock
                          </p>
                        )}
                      </td>

                      <td className="!p-3 border-gray-300 flex gap-4 items-center justify-center">
                        {product.status === "In stock" && (
                          <>
                            <button
                              onClick={() => handleEditToggle(product.id)}
                              className="text-green-500 hover:underline flex items-center gap-1"
                              disabled={product.status !== "In stock"}
                            >
                              ✏️ Edit
                            </button>
                            <button
                              onClick={() => handleDelete(product.id)}
                              className="text-red-500 hover:underline flex items-center gap-1"
                              disabled={product.status !== "In stock"}
                            >
                              🗑 Delete
                            </button>
                          </>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="flex justify-center items-center h-[60vh]">
              <Empty
                description={
                  <Typography.Text
                    style={{ fontSize: 16, fontWeight: 500, color: "#ff4d4f" }}
                  >
                    No product found. Please add a new product.
                  </Typography.Text>
                }
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
