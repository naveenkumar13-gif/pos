import { cn } from "@/lib/utils";
import { Tag } from "antd";

interface StatusBadgeProps {
  status: "paid" | "unpaid";
  className?: string;
}

export const StatusBadge = ({ status, className }: StatusBadgeProps) => {
  return (
    <span className={cn("!px-2 !py-1 text-xs font-medium rounded-md", className)}>
      {status === "paid" ? (
        <Tag color="green">paid</Tag>
      ) : (
        <Tag color="red">Unpaid</Tag>
      )}
    </span>
  );
};
