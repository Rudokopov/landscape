import React from "react";
import { Link } from "react-router-dom";
import "./Card.scss";

function Card(props) {
  const { image, title, price, description, onAddToCart, isInCart } = props;

  // Функция для обрезки описания
  const truncateDescription = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <div className="card">
      <img className="cardImage" src={image} alt={title} />
      <div className="textWrapper">
        <h3>{title}</h3>
        <p>{price} руб.</p>
      </div>
      <p>{truncateDescription(description, 100)}</p>
      <button onClick={onAddToCart} disabled={isInCart}>
        {isInCart ? "Уже в корзине" : "В корзину"}
      </button>
      <Link
        className="card__link"
        to={{
          pathname: `/card/${title}`,
          state: { image, title, price, description },
        }}
      >
        <button>Подробнее</button>
      </Link>
    </div>
  );
}

export default Card;
