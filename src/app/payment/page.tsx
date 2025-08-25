"use client";
import { useState } from "react";
import { CreditCard, Smartphone, Banknote, QrCode } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/app/checkout/layout";
import useCartStore from "@/store/useCart";
import { useRouter } from "next/navigation";

export default function Payment() {
  const route = useRouter();
  const { cart, getTotalPrice, customerInfo, setCurrentOrder, clearCart } =
    useCartStore();
  const [selectedPayment, setSelectedPayment] = useState<string>("");

  const subtotal = getTotalPrice();
  const tax = Math.round(subtotal * 0.18);
  const total = subtotal + tax;

  const paymentMethods = [
    {
      id: "cash",
      title: "Continue With Cash",
      icon: Banknote,
      color: "bg-primary hover:bg-primary/90",
    },
    {
      id: "credit",
      title: "Use Credit Card",
      icon: CreditCard,
      color: "bg-primary hover:bg-primary/90",
    },
    {
      id: "debit",
      title: "Use Debit Card",
      icon: Smartphone,
      color: "bg-primary hover:bg-primary/90",
    },
  ];

  const handlePayment = (method: string) => {
    const orderId = `#${Math.floor(Math.random() * 9999)}`;
    setCurrentOrder(orderId);
    setSelectedPayment(method);

    // Simulate payment processing
    setTimeout(() => {
      clearCart();
      route.push(
        `/order-conform?orderId=${encodeURIComponent(
          orderId
        )}&method=${encodeURIComponent(method)}`
      );
    }, 2000);
  };

  if (cart.length === 0) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto min-h-svh !px-4 !py-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">No items to pay for</h2>
            <Button onClick={() => route.push("/")} className="!p-2">
              Browse Menu
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className=" !px-4 !py-6 max-sm:!px-0 max-sm:!py-0  ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* QR Code Section */}
          <div className="flex flex-col items-center justify-center">
            <Card className="w-full ">
              <CardContent className="flex flex-col items-center !p-8">
                <div className="w-80 h-64 bg-gray-100 rounded-lg flex items-center justify-center !mb-4">
                  <QrCode className="w-32 h-32 text-gray-400" />
                </div>
                <p className="text-center text-muted-foreground">
                  Scan QR code to pay with your mobile wallet
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Payment Options */}
          <div className="!space-y-6 ">
            <div className="text-center lg:text-left">
              <h1 className="text-2xl font-bold !mb-2">
                Choose Payment Method
              </h1>
              <p className="text-muted-foreground">Total Amount: ₹{total}</p>
            </div>

            <div className="flex justify-center lg:justify-start">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-2xl font-bold">
                OR
              </div>
            </div>

            <div className="!space-y-4">
              {paymentMethods.map((method) => {
                const Icon = method.icon;
                return (
                  <Button
                    key={method.id}
                    onClick={() => handlePayment(method.id)}
                    disabled={selectedPayment !== ""}
                    className={`w-full h-14 text-lg ${method.color} ${
                      selectedPayment === method.id ? "opacity-50" : ""
                    }`}
                  >
                    <Icon className="w-5 h-5 !mr-3" />
                    {selectedPayment === method.id
                      ? "Processing..."
                      : method.title}
                  </Button>
                );
              })}
            </div>

            {/* Customer Info Summary */}
            {customerInfo.name && (
              <Card className="!mt-6 !p-4 max-sm:!p-2">
                <CardHeader>
                  <CardTitle className="text-lg">Order Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="!space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Customer:</span>
                      <span>{customerInfo.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Phone:</span>
                      <span>{customerInfo.phone}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Items:</span>
                      <span>{cart.length} items</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
