// import { create } from "zustand";
// import { persist } from "zustand/middleware";

// interface CartItem {
//   id: number;
//   title: string;
//   price: number;
//   quantity: number;
//   img?: string; // Optional image property
// }

// type CartState = {
//   cart: CartItem[];
//   addToCart: (item: CartItem) => void;
//   removeFromCart: (id: string) => void;
//   updateQuantity: (id: string, quantity: number) => void;
//   clearCart: () => void;
//   totalItems: () => number;
//   totalPrice: () => number;
// };

// const useCartStore = create<CartState>()(
//   persist(
//     (set, get) => ({
//       cart: [],
//       addToCart: (item) => {
//         const { cart } = get();
//         const existItem = cart.find((cartItem) => cartItem.id === item.id);
//         if (existItem) {
//           set({
//             cart: cart.map((cartItem) =>
//               cartItem.id === item.id
//                 ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
//                 : cartItem
//             ),
//           });
//         } else {
//           set({
//             cart: [...cart, { ...item, quantity: item.quantity }],
//           });
//         }
//       },
//       removeFromCart: (id) => {
//         const { cart } = get();
//         set({
//           cart: cart.filter((item) => item.id !== Number(id)),
//         });
//       },
//       updateQuantity: (id, quantity) => {
//         const { cart } = get();
//         set({
//           cart: cart.map((item) =>
//             item.id === Number(id) ? { ...item, quantity } : item
//           ),
//         });
//       },
//       clearCart: () => {
//         set({ cart: [] });
//       },
//       totalItems: () => {
//         const { cart } = get();
//         return cart.reduce((acc, item) => acc + item.quantity, 0);
//       },
//       totalPrice: () => {
//         const { cart } = get();
//         return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
//       },
//     }),
//     {
//       name: "cart-storage",
//     }
//   )
// );

// export default useCartStore;

import { p } from "framer-motion/m";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  img: string;
}
type CartState = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: () => number;
  totalPrice: () => number;
};

const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cart: [],
      addToCart: (item) => {
        const { cart } = get();
        const existItem = cart.find((cartItem) => cartItem.id === item.id);
        if (existItem) {
          set({
            cart: cart.map((cartItem) =>
              cartItem.id === item.id
                ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
                : cartItem
            ),
          });
        } else {
          set({
            cart: [...cart, { ...item, quantity: item.quantity }],
          });
        }
      },
      removeFromCart: (id) => {
        const { cart } = get();
        set({
          cart: cart.filter((item) => item.id !== Number(id)),
        });
      },
      updateQuantity: (id, quantity) => {
        const { cart } = get();
        set({
          cart: cart.map((item) =>
            item.id === Number(id) ? { ...item, quantity } : item
          ),
        });
        if (quantity <= 0) {
          set({
            cart: cart.filter((item) => item.id !== Number(id)),
          });
        }
      },
      clearCart: () => {
        set({ cart: [] });
      },
      totalItems: () => {
        const { cart } = get();
        return cart.reduce((acc, item) => acc + item.quantity, 0);
      },
      totalPrice: () => {
        const { cart } = get();
        return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
      },
    }),
    {
      name: "cart-storage",
    }
  )
);

export default useCartStore;
