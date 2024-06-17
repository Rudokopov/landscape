import React from "react";
import "./ImagePopup.scss";

const ImagePopup = ({ imageSrc, onClose }) => {
  return (
    <div className="image-popup" onClick={onClose}>
      <div
        className="image-popup__content"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="image-popup__close" onClick={onClose}>
          &times;
        </button>
        <img src={imageSrc} alt="Popup" className="image-popup__image" />
      </div>
    </div>
  );
};

export default ImagePopup;
