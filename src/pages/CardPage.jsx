import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CardContext } from "../contexts/CardContext";
import "./CardPage.scss";

function CardPage() {
  const { selectedCard } = useContext(CardContext);

  if (!selectedCard) {
    return <div>Загрузка...</div>;
  }

  const { image, title, price, description, onAddToCart, isInCart } =
    selectedCard;

  return (
    <>
      <div className="Card">
        <Link to="/" className="back-button">
          Назад
        </Link>
        <h1 className="card__title">{title}</h1>
        <div className="card-container__info">
          <img src={image} alt={title} />
          <p>{description}</p>
        </div>
        <div className="card-container__examples">
          <h2>Примеры</h2>
          <div className="card-container__examples-grid">
            <img src={image} alt="example" />
            <img src={image} alt="example" />
            <img src={image} alt="example" />
            <img src={image} alt="example" />
            <img src={image} alt="example" />
            <img src={image} alt="example" />
            <img src={image} alt="example" />
            <img src={image} alt="example" />
          </div>
        </div>
        <div className="card-container__video">
          <h2>Видео обзор</h2>
          <div className="card-container__video-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Jo19YfeXtP8?si=2fT5V3bO5enc72SW"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <button
          onClick={onAddToCart}
          disabled={isInCart}
          className="card-cart-button"
        >
          {isInCart ? "Уже в корзине" : "В корзину"}
        </button>
      </div>
    </>
  );
}

export default CardPage;
