import { Outlet } from "react-router-dom";
import { CartContext } from "../../context";
import { useEffect, useState } from "react";
import type { Product } from "../../types/Product";
import styles from "./Layout.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { toast } from "react-toastify";
import type { CartItem } from "../../types/CartItem";

const Layout = () => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const raw = localStorage.getItem("HYPER_CART");
    if (!raw) return [];
    return JSON.parse(raw) as CartItem[];
  });

  useEffect(() => {
    localStorage.setItem("HYPER_CART", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product) => {
    setCart(updateQuantity(product, "increase"));
    toast.success("Ürün başarıyla sepetinize eklendi!");
  };

  const removeFromCart = (product: Product) => {
    setCart(updateQuantity(product, "decrease"));
    toast.success("Ürün başarıyla sepetinizden çıkartıldı!");
  };

  const updateQuantity = (product: Product, updateType: string) => {
    const exists = cart.some(
      (cartItem) => cartItem.product.productID === product.productID
    );

    const quantity = updateType == "increase" ? 1 : -1;
    if (exists) {
      return cart
        .map((cartItem) =>
          cartItem.product.productID === product.productID
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        )
        .filter((item) => item.quantity > 0);
    }

    return [...cart, { product, quantity: 1 }];
  };

  const clearCart = () => {
    setCart([]);
    toast.success("Sepetiniz temizlendi!");
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      <div className={styles.page}>
        <Header />
        <div className={styles.contentWrapper}>
          <Outlet />
        </div>
        <Footer />
      </div>
    </CartContext.Provider>
  );
};

export default Layout;
