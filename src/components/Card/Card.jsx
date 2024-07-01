import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CardContext } from "../../contexts/CardContext";
import "./Card.scss";

function Card(props) {
  const { image, title, price, description, onAddToCart, isInCart } = props;
  const { setSelectedCard } = useContext(CardContext);

  // Функция для обрезки описания
  const truncateDescription = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };

  const handleMoreInfo = () => {
    setSelectedCard({
      image,
      title,
      price,
      description,
      onAddToCart,
      isInCart,
    });
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
      <Link className="link" to={`/card/${title}`}>
        <button onClick={handleMoreInfo}>Подробнее</button>
      </Link>
    </div>
  );
}

export default Card;
