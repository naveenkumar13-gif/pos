"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import Layout from "@/app/checkout/layout";
import useCartStore, { CustomerInfo } from "@/store/useCart";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Header from "@/components/header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { ShoppingCart } from "lucide-react";

export default function Checkout() {
  const route = useRouter();
  const { cart, getTotalPrice, setCustomerInfo, removeFromCart } =
    useCartStore();
  const [orderId] = useState(`#${Math.floor(Math.random() * 9999)}`);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<CustomerInfo>();

  const subtotal = getTotalPrice();
  const tax = Math.round(subtotal * 0.18);
  const total = subtotal + tax;

  const onSubmit = (data: CustomerInfo) => {
    setCustomerInfo(data);
    route.push("/payment");
  };

  // if (cart.length === 0) {
  //   return (
  //     <Layout>
  //       <div className="min-h-screen !px-4 !py-8 flex items-center justify-center">
  //         <div className="text-center rounded-2xl !p-8 border border-gray-100 max-w-md w-full">
  //           <div className="flex justify-center !mb-6">
  //             <div className="bg-indigo-100 !p-6 rounded-full">
  //               <ShoppingCart className="w-16 h-16 text-red-500" />
  //             </div>
  //           </div>
  //           <h2 className="text-3xl font-extrabold text-gray-800 !mb-2">
  //             Your Cart is Empty
  //           </h2>
  //           <p className="text-gray-500 !mb-6">
  //             Looks like you haven’t added anything yet. Let’s find something
  //             delicious!
  //           </p>
  //           <Button
  //             onClick={() => route.push("/")}
  //             className="!px-6 !py-2 rounded-lg bg-gradient-to-r from-red-500 to-red-600 text-white font-medium shadow-md hover:shadow-lg hover:from-red-600 hover:to-red-700 transition-all duration-300"
  //           >
  //             Browse Menu
  //           </Button>
  //         </div>
  //       </div>
  //     </Layout>
  //   );
  // }

  return (
    <Layout>
      <div className=" !px-4 !py-6 ">
        <h1 className="text-2xl font-bold !mb-6">Order {orderId}</h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 !p-2"
        >
          {/* Customer Information Form */}
          <div className="lg:col-span-2  ">
            <Card className="!p-4 ">
              <CardHeader>
                <CardTitle>Customer Information</CardTitle>
              </CardHeader>
              <CardContent className="!space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="!space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      placeholder="Enter Name"
                      {...register("name", { required: "Name is required" })}
                      className="!p-2"
                    />
                    {errors.name && (
                      <p className="text-sm text-red-500 !mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div className="!space-y-2 w-full">
                    <Label htmlFor="gender">Gender</Label>
                    <Select
                      name="gender"
                      onValueChange={(value) => setValue("gender", value)}
                    >
                      <SelectTrigger className="!p-2  w-full">
                        <SelectValue placeholder="Select Gender" />
                      </SelectTrigger>
                      <SelectContent className="!p-2 !space-y-2">
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="!space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input
                      className="!p-2"
                      id="city"
                      placeholder="Enter City"
                      {...register("city", { required: "City is required" })}
                    />
                    {errors.city && (
                      <p className="text-sm text-red-500 !mt-1">
                        {errors.city.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="!space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      className="!p-2"
                      id="phone"
                      placeholder="Enter Phone"
                      {...register("phone", { required: "Phone is required" })}
                    />
                    {errors.phone && (
                      <p className="text-sm text-red-500 !mt-1">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  <div className="!space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      className="!p-2"
                      id="email"
                      type="email"
                      placeholder="Enter Email"
                      {...register("email", { required: "Email is required" })}
                    />
                    {errors.email && (
                      <p className="text-sm text-red-500 !mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div className="!space-y-2">
                    <Label htmlFor="dateOfBirth">Date of Birth</Label>
                    <Input
                      className="!p-2"
                      id="dateOfBirth"
                      type="date"
                      {...register("dateOfBirth", {
                        required: "Date of birth is required",
                      })}
                    />
                    {errors.dateOfBirth && (
                      <p className="text-sm text-red-500 !mt-1">
                        {errors.dateOfBirth.message}
                      </p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Order Items */}
            <Card className=" !mt-6 !p-4 max-sm:!p-2">
              <CardHeader>
                <CardTitle>Order Items</CardTitle>
              </CardHeader>
              <CardContent className="!space-y-4 !p-4 max-sm:!p-2">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 !p-4 bg-gray-50 rounded-lg "
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={50}
                      height={50}
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-primary font-bold">₹{item.price}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">Quantity: {item.quantity}</p>
                    </div>
                    <FontAwesomeIcon
                      icon={faXmark}
                      onClick={() => removeFromCart(item.id)}
                      className="cursor-pointer"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="!p-4 ">
              <CardHeader>
                <CardTitle>Subtotal</CardTitle>
              </CardHeader>
              <CardContent className="!space-y-4">
                <div className="!space-y-2">
                  <div className="flex justify-between">
                    <span>Quantity</span>
                    <span>
                      {cart.reduce((sum, item) => sum + item.quantity, 0)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Price</span>
                    <span>₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>₹{tax}</span>
                  </div>
                </div>

                <Separator />

                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>₹{total}</span>
                </div>

                <div className="!space-y-2">
                  <Button variant="outline" className="w-full">
                    Print
                  </Button>
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90"
                  >
                    Place Order
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </form>
      </div>
    </Layout>
  );
}
