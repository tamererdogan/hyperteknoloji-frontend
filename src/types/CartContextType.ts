import type { CartItem } from "./CartItem";
import type { Product } from "./Product";

export type CartContextType = {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  clearCart: () => void;
};
