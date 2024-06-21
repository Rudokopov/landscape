import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./CardPage.scss";

function CardPage() {
  const location = useLocation();
  const { image, title, price, description } = location.state || {};

  return (
    <div className="Card">
      <img src={image} alt={title} />
      <div className="card-container">
        <h2>{title}</h2>
        <h3>{price} руб.</h3>
        <p>{description}</p>
        <button className="card-cart-button">В корзину</button>
        <Link className="card-back-button" to="/">
          Назад
        </Link>
      </div>
    </div>
  );
}

export default CardPage;
