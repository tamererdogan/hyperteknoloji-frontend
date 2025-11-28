import { createContext } from "react";
import type { CartContextType } from "./types/CartContextType";

export const CartContext = createContext<CartContextType>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
});
