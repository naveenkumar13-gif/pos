interface Dish {
  id: number;
  name: string;
  price: string;
  orders: number;
  image: string;
}

const dishes: Dish[] = [
  { id: 1, name: "Ice Cream", price: "₹199", orders: 200, image: "🍦" },
  { id: 2, name: "Chicken", price: "₹199", orders: 200, image: "🍗" },
  { id: 3, name: "Chicken", price: "₹199", orders: 200, image: "🍗" },
  { id: 4, name: "Chicken", price: "₹199", orders: 200, image: "🍗" },
];

export const BestDishes = () => {
  return (
    <div className="!space-y-4">
      <div className="flex justify-between text-sm font-medium text-muted-foreground">
        <span>Dishes</span>
        <span>Orders</span>
      </div>
      
      <div className="space-y-3">
        {dishes.map((dish) => (
          <div key={dish.id} className="flex items-center justify-between !p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg flex items-center justify-center text-2xl">
                {dish.image}
              </div>
              <div>
                <div className="font-medium">{dish.name}</div>
                <div className="text-sm text-primary font-semibold">{dish.price}</div>
              </div>
            </div>
            <div className="font-semibold text-lg">{dish.orders}</div>
          </div>
        ))}
      </div>
    </div>
  );
};