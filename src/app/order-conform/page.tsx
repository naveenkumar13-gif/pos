"use client";
import { useEffect, useState } from "react";
import { CheckCircle, Download, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import Layout from "@/app/checkout/layout";
import useCartStore from "@/store/useCart";
import { useRouter } from "next/navigation";

export default function OrderConfirmation() {
  const router = useRouter();
  // const location = useLocatio();
  const { customerInfo } = useCartStore();
  const [showInvoice, setShowInvoice] = useState(false);

  // In Next.js, you can get orderId and paymentMethod from context/store or query params if needed
  const orderId = "#1234";
  const paymentMethod = "cash";

  // Sample order data since cart is cleared
  const [orderItems] = useState([
    { name: "Burger", quantity: 1, price: 199 },
    { name: "Chicken Fry", quantity: 1, price: 179 },
    { name: "French Fries", quantity: 1, price: 99 },
  ]);

  const subtotal = orderItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = Math.round(subtotal * 0.18);
  const total = subtotal + tax;

  useEffect(() => {
    // Auto show success message
    const timer = setTimeout(() => {
      setShowInvoice(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handlePrintInvoice = () => {
    window.print();
  };

  return (
    <Layout>
      <div className=" !px-4 !py-8">
        {/* Success Message */}
        <div className="text-center flex flex-col justify-center items-center !mb-8">
          <CheckCircle className="w-20 h-20 text-green-500 mx-auto !mb-4" />
          <h1 className="text-3xl font-bold text-green-600 !mb-2">
            Order Successful!
          </h1>
          <p className="text-muted-foreground">
            Your order {orderId} has been placed successfully
          </p>
        </div>

        {/* Order Summary */}
        <Card className="!mb-6 !p-4 max-sm:!p-3">
          <CardHeader>
            <CardTitle>Order Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="!space-y-4">
              <div className="flex justify-between">
                <span>Order ID:</span>
                <span className="font-semibold">{orderId}</span>
              </div>
              <div className="flex justify-between">
                <span>Payment Method:</span>
                <span className="capitalize">{paymentMethod} Payment</span>
              </div>
              <div className="flex justify-between">
                <span>Customer:</span>
                <span>{customerInfo.name || "Guest"}</span>
              </div>
              <div className="flex justify-between">
                <span>Total Amount:</span>
                <span className="font-bold text-lg">₹{total}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => setShowInvoice(true)}
            variant="outline"
            className="!p-3"
          >
            <Download className="w-4 h-4 !mr-2 " />
            View Invoice
          </Button>
          <Button onClick={() => router.push("/")} className="!p-3">
            <Home className="w-4 h-4 !mr-2" />
            Back to Menu
          </Button>
        </div>
      </div>

      {/* Invoice Modal */}
      <Dialog open={showInvoice} onOpenChange={setShowInvoice}>
        <DialogContent className=" !p-4">
          <DialogHeader>
            <DialogTitle>Order {orderId}</DialogTitle>
          </DialogHeader>

          <div className="!space-y-4   ">
            <div className="text-sm !space-y-2">
              <div className="flex justify-between">
                <span>Name</span>
                <span>{customerInfo.name || "Guest"}</span>
              </div>
              <div className="flex justify-between">
                <span>Customer ID</span>
                <span>{orderId}</span>
              </div>
              <div className="flex justify-between">
                <span>Date</span>
                <span>{new Date().toLocaleDateString()}</span>
              </div>
            </div>

            <Separator />

            <div className="!space-y-2">
              {orderItems.map((item, index) => (
                <div key={index} className="flex justify-between text-sm">
                  <span>
                    {index + 1}. {item.name}
                  </span>
                  <span>{item.quantity}</span>
                </div>
              ))}
            </div>

            <Separator />

            <div className="!space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span>Quantity</span>
                <span>
                  {orderItems.reduce((sum, item) => sum + item.quantity, 0)}
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

            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>₹{total}</span>
            </div>

            <Button
              onClick={handlePrintInvoice}
              className="w-full bg-primary hover:bg-primary/90"
            >
              Print Invoice
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </Layout>
  );
}
