import burgerImage from "@/assets/burger.jpg";
import Image from "next/image";
import { product } from "../../../public/images";

interface OrderItemProps {
  name: string;
  quantity: number;
  price: number;
  image?: string;
}

export const OrderItem = ({ name, quantity, price, image }: OrderItemProps) => {
  return (
    <div className="flex items-center gap-4 !p-4 bg-muted rounded-lg ">
      <div className=" rounded-lg overflow-hidden !p-2">
        <Image
          src={image || product}
          alt={name}
          width={100}
          height={100}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1">
        <h4 className="font-medium">
          {name} x {quantity}
        </h4>
      </div>
      <div className="text-lg font-semibold text-primary">₹{price}</div>
    </div>
  );
};
