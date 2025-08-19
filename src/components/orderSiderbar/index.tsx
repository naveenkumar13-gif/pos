import { OrderCard } from "../orderCard";

interface Order {
  id: string;
  customerName: string;
  quantity: number;
  amount: number;
  status: "paid" | "unpaid";
}

interface OrderSidebarProps {
  orders: Order[];
  selectedOrderId?: string;
  onOrderSelect: (orderId: string) => void;
}

export const OrderSidebar = ({
  orders,
  selectedOrderId,
  onOrderSelect,
}: OrderSidebarProps) => {
  return (
    <div className="w-80 bg-card border-r border-border !p-6 max-sm:border-none">
      <h2 className="text-xl font-bold !mb-6">Pending Order</h2>

      <div className="!mb-4">
        <div className="bg-muted rounded-lg !p-3 text-sm font-medium text-muted-foreground">
          All Order
        </div>
      </div>

      <div className="!space-y-3">
        {orders.map((order) => (
          <OrderCard
            key={order.id}
            orderId={order.id}
            customerName={order.customerName}
            quantity={order.quantity}
            amount={order.amount}
            status={order.status}
            isSelected={selectedOrderId === order.id}
            onClick={() => onOrderSelect(order.id)}
          />
        ))}
      </div>
    </div>
  );
};
