import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import type { Product } from "../../types/Product";
import { ProductApi } from "../../client/ProductApi";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  const [loading, setLoading] = useState(Boolean);
  const [page, setPage] = useState(0);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setLoading(true);
    ProductApi.getProducts(page)
      .then((response) => setProducts([...products, ...response.data]))
      .finally(() => {
        setLoading(false);
      });
  }, [page]);

  return (
    <main className="container">
      <section className={styles.productGrid}>
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </section>
      <div className={styles.loadMoreBtnContainer}>
        <button
          className={styles.loadMoreBtn}
          disabled={loading}
          onClick={() => setPage(page + 1)}
        >
          {loading ? "Yükleniyor..." : "Daha fazla yükle"}
        </button>
      </div>
    </main>
  );
};

export default LandingPage;
