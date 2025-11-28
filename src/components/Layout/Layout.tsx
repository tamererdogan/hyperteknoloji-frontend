import { Outlet } from "react-router-dom";
import { CartContext } from "../../context";
import { useState } from "react";
import type { Product } from "../../types/Product";

const Layout = () => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (product: Product) => {
    const filteredCart = cart.filter(
      (item) => item.productID != product.productID
    );
    setCart(filteredCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      <>Header</>
      <Outlet />
    </CartContext.Provider>
  );
};

export default Layout;
