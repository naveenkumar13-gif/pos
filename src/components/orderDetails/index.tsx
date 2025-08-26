"use client";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "../statusBadge";
import { OrderItem } from "../orderitems";
import { useState } from "react";
import useCartStore from "@/store/useCart";
import PrintPopUp from "../printPopUp";

interface OrderDetailsProps {
  orderId: string;
  customerName: string;
  quantity: number;
  paymentMethod: string;
  status: "paid" | "unpaid";
  // items: Array<{
  //   id: string;
  //   name: string;
  //   quantity: number;
  //   price: number;
  //   image?: string;
  // }>;
}

export const OrderDetails = ({
  orderId,
  customerName,
  quantity,
  paymentMethod,
  status,

}: OrderDetailsProps) => {
  const { cart } = useCartStore();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex-1 !p-6 ">
      <div className="flex justify-between items-center !mb-8">
        <h2 className="text-xl font-bold">{orderId}</h2>
        <StatusBadge status={status} />
      </div>

      <div className="!mb-8">
        <h3 className="text-lg font-semibold !mb-4">Details</h3>
        <div className="grid grid-cols-3 gap-8">
          <div>
            <div className="text-sm font-medium text-muted-foreground !mb-1">
              Name
            </div>
            <div className="text-muted-foreground">{customerName}</div>
          </div>
          <div>
            <div className="text-sm font-medium text-muted-foreground !mb-1">
              Quantity
            </div>
            <div className="text-muted-foreground">{quantity}</div>
          </div>
          <div>
            <div className="text-sm font-medium text-muted-foreground !mb-1">
              Payment
            </div>
            <div className="text-muted-foreground">{paymentMethod}</div>
          </div>
        </div>
      </div>

      <div className="!mb-8 ">
        <h3 className="text-lg font-semibold !mb-4">Orders</h3>
        <div className="!space-y-3">
          {cart.map((item) => (
            <OrderItem
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>

      <Button
        className="w-full h-12 text-base font-medium bg-[#E53935] hover:bg-[#E53935]/90"
        onClick={() => setIsOpen(true)}
      >
        Print Invoice
      </Button>
      {isOpen && <PrintPopUp setIsOpen={setIsOpen} />}
    </div>
  );
};
