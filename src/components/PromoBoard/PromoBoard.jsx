import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CardContext } from "../../contexts/CardContext";
import "./PromoBoard.scss";

function PromoBoard({ productData, promoImage }) {
  const { setSelectedCard } = useContext(CardContext);
  const navigate = useNavigate();

  const handlePromoClick = () => {
    setSelectedCard(productData);
    navigate(`/card/${productData.title}`);
  };

  return (
    <div className="promoBoard" onClick={handlePromoClick}>
      <img
        src={promoImage}
        className="promoBoard__content"
        alt={productData.title}
      />
    </div>
  );
}

export default PromoBoard;
