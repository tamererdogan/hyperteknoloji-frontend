import styles from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className="container">
      <div className={styles.contentWrapper}>
        Aradığın sayfa taşınmış, silinmiş ya da hiç var olmamış olabilir.
      </div>
    </div>
  );
};

export default NotFoundPage;
