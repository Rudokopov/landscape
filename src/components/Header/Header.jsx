import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.scss";

function Header() {
  const location = useLocation();
  const [active, setActive] = useState("");
  const [isOpen, setIsOpen] = useState(false);

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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleLinkClick = (page) => {
    setActive(page);
    closeMenu();
  };

  return (
    <div className="header">
      <h1>Ландшафтное бюро</h1>
      <a className={`phone ${isOpen ? "open" : ""}`} href="tel:+1234567890">
        +7(964)-948-59-84
      </a>
      <div
        className={`menu-toggle ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="menu-toggle__line"></div>
        <div className="menu-toggle__line"></div>
        <div className="menu-toggle__line"></div>
      </div>
      <ul className={`menu ${isOpen ? "open" : ""}`}>
        <li className={active === "Главная" ? "active" : ""}>
          <Link
            className="link"
            to="/"
            onMouseDown={() => handleLinkClick("Главная")}
            onClick={closeMenu}
          >
            Главная
          </Link>
        </li>
        <li className={active === "Магазин" ? "active" : ""}>
          <Link
            className="link"
            to="/shop"
            onMouseDown={() => handleLinkClick("Магазин")}
            onClick={closeMenu}
          >
            Магазин
          </Link>
        </li>
        <li className={active === "Услуги" ? "active" : ""}>
          <Link
            className="link"
            to="/service"
            onMouseDown={() => handleLinkClick("Услуги")}
            onClick={closeMenu}
          >
            Услуги
          </Link>
        </li>
        <li className={active === "Корзина" ? "active" : ""}>
          <Link
            className="link"
            to="/cart"
            onMouseDown={() => handleLinkClick("Корзина")}
            onClick={closeMenu}
          >
            Корзина
          </Link>
        </li>
      </ul>
      {isOpen && <div className="backdrop" onClick={closeMenu}></div>}
    </div>
  );
}

export default Header;
