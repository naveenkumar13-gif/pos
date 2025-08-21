import { create } from "zustand";
import { persist } from "zustand/middleware";
import { product } from "../../public/images";

export interface MenuItem {
  id: number;
  name: string;
  price: number;
  description: string;
  image: typeof product;
  rating: number;
  category: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface CustomerInfo {
  name: string;
  gender: string;
  city: string;
  phone: string;
  email: string;
  dateOfBirth: string;
}

interface CartState {
  cart: CartItem[];
  customerInfo: CustomerInfo;
  currentOrder: string | null;

  addToCart: (item: MenuItem) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;

  setCustomerInfo: (info: CustomerInfo) => void;
  setCurrentOrder: (orderId: string) => void;

  getTotalItems: () => number;
  getTotalPrice: () => number;
}

const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cart: [],
      customerInfo: {
        name: "",
        gender: "",
        city: "",
        phone: "",
        email: "",
        dateOfBirth: "",
      },
      currentOrder: null,

      addToCart: (item) => {
        const { cart } = get();
        const existingItem = cart.find((cartItem) => cartItem.id === item.id);
        if (existingItem) {
          set({
            cart: cart.map((cartItem) =>
              cartItem.id === item.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
            ),
          });
        } else {
          set({
            cart: [...cart, { ...item, quantity: 1 }],
          });
        }
      },

      removeFromCart: (id) => {
        set({
          cart: get().cart.filter((item) => item.id !== id),
        });
      },

      updateQuantity: (id, quantity) => {
        if (quantity <= 0) {
          set({
            cart: get().cart.filter((item) => item.id !== id),
          });
        } else {
          set({
            cart: get().cart.map((item) =>
              item.id === id ? { ...item, quantity } : item
            ),
          });
        }
      },

      clearCart: () => {
        set({ cart: [] });
      },

      setCustomerInfo: (info) => {
        set({ customerInfo: info });
      },

      setCurrentOrder: (orderId) => {
        set({ currentOrder: orderId });
      },

      getTotalItems: () => {
        return get().cart.reduce((acc, item) => acc + item.quantity, 0);
      },

      getTotalPrice: () => {
        return get().cart.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0
        );
      },
    }),
    { name: "cart-storage" }
  )
);

export default useCartStore;
