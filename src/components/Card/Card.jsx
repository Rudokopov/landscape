import React from "react";
import "./Card.scss";

function Card(props) {
  const { image, title, price, description, onAddToCart, isInCart } = props;

  return (
    <div>
      <div className="card">
        <img className="cardImage" src={image} alt={title} />
        <div className="textWrapper">
          <h3>{title}</h3>
          <p>{price} руб.</p>
        </div>
        <p>{description}</p>
        <button onClick={onAddToCart} disabled={isInCart}>
          {isInCart ? "Уже в корзине" : "В корзину"}
        </button>
      </div>
    </div>
  );
}

export default Card;
