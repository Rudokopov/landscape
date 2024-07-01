import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./FloatingCartIcon.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import cartIcon from "../../images/cart.svg";

function FloatingCartIcon() {
  const { cartItems } = useContext(CartContext);
  const location = useLocation();

  if (location.pathname === "/cart" || cartItems.length < 1) {
    return null; // Не отображаем иконку на странице корзины
  }

  return (
    <Link to="/cart" className="floatingCartIcon">
      <img src={cartIcon} alt="Корзина" />
      {cartItems.length > 0 && (
        <span className="itemCount">{cartItems.length}</span>
      )}
    </Link>
  );
}

export default FloatingCartIcon;
