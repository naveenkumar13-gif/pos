import { cn } from "@/lib/utils";
import { StatusBadge } from "../statusBadge";


interface OrderCardProps {
  orderId: string;
  customerName: string;
  quantity: number;
  amount: number;
  status: "paid" | "unpaid";
  isSelected?: boolean;
  onClick?: () => void;
}

export const OrderCard = ({
  orderId,
  customerName,
  quantity,
  amount,
  status,
  isSelected,
  onClick,
}: OrderCardProps) => {
  return (
    <div
      className={cn(
        "!p-4 rounded-lg border cursor-pointer transition-all",
        isSelected
          ? "bg-[#E53935] text-white "
          : "bg-card text-card-foreground border-border hover:border-primary/50"
      )}
      onClick={onClick}
    >
      <div className="flex justify-between items-center !mb-2">
        <span className="font-medium">{orderId}</span>
        <StatusBadge status={status} />
      </div>
      <div className="!space-y-1">
        <div className="text-sm opacity-90">{customerName}</div>
        <div className="text-sm opacity-90">Quantity: {quantity}</div>
        <div className="font-semibold">${amount}</div>
      </div>
    </div>
  );
};