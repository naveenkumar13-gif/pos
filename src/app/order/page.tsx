"use client";
import { useState } from "react";

import { Home } from "lucide-react";
import { OrderSidebar } from "@/components/orderSiderbar";
import { OrderDetails } from "@/components/orderDetails";


const orders = [
  {
    id: "Order #253687",
    customerName: "Nithin",
    quantity: 5,
    amount: 250,
    status: "paid" as const,
  },
  {
    id: "Order #253688",
    customerName: "Nithin",
    quantity: 5,
    amount: 250,
    status: "unpaid" as const,
  },
];

const OrderManagement = () => {
  const [selectedOrderId, setSelectedOrderId] = useState(orders[0].id);
  const selectedOrder = orders.find((order) => order.id === selectedOrderId);
  return (
    <div className="min-h-screen bg-background flex max-sm:flex-col max-sm:items-c ">
      <div className="w-16 bg-card border-r border-border flex flex-col items-center !py-6">
        <div className="w-8 h-8 bg-red-400 rounded flex items-center justify-center">
          <Home className="w-4 h-4 text-white " />
        </div>
      </div>
      <OrderSidebar
        orders={orders}
        selectedOrderId={selectedOrderId}
        onOrderSelect={setSelectedOrderId}
      />
      {selectedOrder && (
        <OrderDetails
          orderId={selectedOrder.id}
          customerName={selectedOrder.customerName}
          quantity={selectedOrder.quantity}
          paymentMethod="Cash"
          status={selectedOrder.status}
        />
      )}
    </div>
  );
};

export default OrderManagement;
