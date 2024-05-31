import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.scss";

function Header() {
  const location = useLocation();
  const [active, setActive] = useState("");

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setActive("Главная");
        break;
      case "/shop":
        setActive("Магазин");
        break;
      case "/service":
        setActive("Услуги");
        break;
      case "/cart":
        setActive("Корзина");
        break;
      default:
        setActive("");
        break;
    }
  }, [location]);

  return (
    <div className="header">
      <h1>Ландшафтное бюро</h1>
      <a className="phone" href="tel:+1234567890">
        <span>+7(964)-948-59-84</span>
      </a>
      <ul>
        <li className={active === "Главная" ? "active" : ""}>
          <Link className="link" to="/" onClick={() => setActive("Главная")}>
            Главная
          </Link>
        </li>
        <li className={active === "Магазин" ? "active" : ""}>
          <Link
            className="link"
            to="/shop"
            onClick={() => setActive("Магазин")}
          >
            Магазин
          </Link>
        </li>
        <li className={active === "Услуги" ? "active" : ""}>
          <Link
            className="link"
            to="/service"
            onClick={() => setActive("Услуги")}
          >
            Услуги
          </Link>
        </li>
        <li className={active === "Корзина" ? "active" : ""}>
          <Link
            className="link"
            to="/cart"
            onClick={() => setActive("Корзина")}
          >
            Корзина
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
