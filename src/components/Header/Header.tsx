import styles from "./Header.module.css";
import logo from "../../assets/images/logo.webp";
import Cart from "../Cart/Cart";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.headerContent} onClick={() => navigate("/")}>
          <img src={logo} className={styles.logo} />
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default Header;
