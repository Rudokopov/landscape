import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CardContext } from "../contexts/CardContext";
import ImagePopup from "../components/ImagePopup/ImagePopup";
import "./CardPage.scss";

function CardPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const { selectedCard } = useContext(CardContext);

  const {
    image,
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    title,
    price,
    description,
    onAddToCart,
    isInCart,
    background,
    color,
  } = selectedCard;

  const cardStyle = {
    backgroundImage: `url(${background})`,
    color: color,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  useEffect(() => {
    if (selectedCard) {
      document.body.style.backgroundImage = `url(${selectedCard.background})`;
    }

    // Убедитесь, что фон сбрасывается, когда компонент размонтируется
    return () => {
      document.body.style.backgroundImage = "none";
    };
  }, [selectedCard]);

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const handleClosePopup = () => {
    setSelectedImage(null);
  };

  if (!selectedCard) {
    return <div>Загрузка...</div>;
  }

  return (
    <>
      <div className="Card" style={cardStyle}>
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
            <img
              src={image1}
              alt="Пример 1"
              onClick={() => handleImageClick(image1)}
            />
            <img
              src={image2}
              alt="example"
              onClick={() => handleImageClick(image2)}
            />
            <img
              src={image3}
              alt="example"
              onClick={() => handleImageClick(image3)}
            />
            <img
              src={image4}
              alt="example"
              onClick={() => handleImageClick(image4)}
            />
            <img
              src={image5}
              alt="example"
              onClick={() => handleImageClick(image5)}
            />
            <img
              src={image6}
              alt="example"
              onClick={() => handleImageClick(image6)}
            />
            <img
              src={image7}
              alt="example"
              onClick={() => handleImageClick(image7)}
            />
            <img
              src={image8}
              alt="example"
              onClick={() => handleImageClick(image8)}
            />
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
        {selectedImage && (
          <ImagePopup imageSrc={selectedImage} onClose={handleClosePopup} />
        )}
      </div>
    </>
  );
}

export default CardPage;
