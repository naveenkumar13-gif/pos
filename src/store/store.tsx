import { create } from 'zustand';

export interface MenuItem {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
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

interface AppState {
  cart: CartItem[];
  customerInfo: CustomerInfo;
  currentOrder: string | null;
  addToCart: (item: MenuItem) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  setCustomerInfo: (info: CustomerInfo) => void;
  setCurrentOrder: (orderId: string) => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
}

export const useStore = create<AppState>((set, get) => ({
  cart: [],
  customerInfo: {
    name: '',
    gender: '',
    city: '',
    phone: '',
    email: '',
    dateOfBirth: '',
  },
  currentOrder: null,
  
  addToCart: (item) => set((state) => {
    const existingItem = state.cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      return {
        cart: state.cart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      };
    } else {
      return {
        cart: [...state.cart, { ...item, quantity: 1 }]
      };
    }
  }),
  
  removeFromCart: (id) => set((state) => ({
    cart: state.cart.filter(item => item.id !== id)
  })),
  
  updateQuantity: (id, quantity) => set((state) => ({
    cart: quantity <= 0 
      ? state.cart.filter(item => item.id !== id)
      : state.cart.map(item =>
          item.id === id ? { ...item, quantity } : item
        )
  })),
  
  clearCart: () => set({ cart: [] }),
  
  setCustomerInfo: (info) => set({ customerInfo: info }),
  
  setCurrentOrder: (orderId) => set({ currentOrder: orderId }),
  
  getTotalPrice: () => {
    const state = get();
    return state.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  },
  
  getTotalItems: () => {
    const state = get();
    return state.cart.reduce((total, item) => total + item.quantity, 0);
  },
}));