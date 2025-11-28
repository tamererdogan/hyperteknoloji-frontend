import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context";
import styles from "./Cart.module.css";
import type { CartItem } from "../../types/CartItem";

const Cart = () => {
  const { cart, addToCart, removeFromCart, clearCart } =
    useContext(CartContext);

  const [open, setOpen] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);
  const isMobile = window.matchMedia("(hover: none)").matches;

  useEffect(() => {
    const total = cart.reduce(
      (sum, cartItem) => sum + cartItem.product.listPrice * cartItem.quantity,
      0
    );
    setTotalAmount(total);
  }, [cart]);

  return (
    <div
      className={styles.cartWrapper}
      onMouseEnter={() => !isMobile && setOpen(true)}
      onMouseLeave={() => !isMobile && setOpen(false)}
      onClick={() => isMobile && setOpen((prev) => !prev)}
    >
      <span className={styles.cartIcon}>🛒</span>
      <span className={styles.cartCount}>{cart.length}</span>
      {open && (
        <div className={styles.cartDropdown}>
          <div className={styles.cartTitle}>Sepetim</div>
          {cart.length === 0 ? (
            <div className={styles.cartEmpty}>Sepetiniz boş</div>
          ) : (
            <>
              <div className={styles.cartItems}>
                {cart.map((cartItem: CartItem) => (
                  <div
                    className={styles.cartItem}
                    key={cartItem.product.productID}
                  >
                    <img
                      className={styles.productImage}
                      src={cartItem.product.productData.productMainImage}
                      alt={cartItem.product.productSlug}
                    />
                    <div className={styles.productInfo}>
                      <div className={styles.productName}>
                        {cartItem.product.productName}
                      </div>
                      <div className={styles.productPrice}>
                        {cartItem.product.listPrice} TL
                      </div>
                    </div>
                    <div className={styles.countControl}>
                      <button
                        className={styles.countDecButton}
                        onClick={(e) => {
                          e.stopPropagation();
                          removeFromCart(cartItem.product);
                        }}
                      >
                        -
                      </button>
                      <span className={styles.countValue}>
                        {cartItem.quantity}
                      </span>
                      <button
                        className={styles.countIncButton}
                        onClick={(e) => {
                          e.stopPropagation();
                          addToCart(cartItem.product);
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className={styles.cartFooter}>
                <span className={styles.cartTotalLabel}>Toplam</span>
                <span className={styles.cartTotalAmount}>
                  {totalAmount.toFixed(2)} TL
                </span>
              </div>
              <button
                className={styles.clearCartBtn}
                onClick={(e) => {
                  e.stopPropagation();
                  clearCart();
                }}
              >
                Sepeti Boşalt
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
