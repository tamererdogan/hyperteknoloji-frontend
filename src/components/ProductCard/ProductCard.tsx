import { useContext } from "react";
import type { Product } from "../../types/Product";
import { CartContext } from "../../context";
import styles from "./ProductCard.module.css";

interface ProductCardProps {
  product: Product;
}

const ProductCard = (props: ProductCardProps) => {
  const { product } = props;
  const { addToCart } = useContext(CartContext);

  return (
    <article>
      <div>
        <img
          className={styles.productImage}
          src={product.productData.productMainImage}
          alt={product.productSlug}
        />
      </div>
      <h2 className={styles.productTitle}>{product.productName}</h2>
      <div className={styles.productPrice}>{product.listPrice} TL</div>
      <div>
        <button
          className={styles.addToCartBtn}
          onClick={() => addToCart(product)}
        >
          Sepete Ekle
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
