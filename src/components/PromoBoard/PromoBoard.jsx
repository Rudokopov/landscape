import React from "react";
import { Link } from "react-router-dom";
import "./PromoBoard.scss";

import gazon_promo_img from "../../images/promo/gazon/gazon_sale.jpg";

function PromoBoard() {
  return (
    <div className="promoBoard">
      <Link to={`/card/Газон`}>
        <img src={gazon_promo_img} className="promoBoard__content"></img>
      </Link>
    </div>
  );
}

export default PromoBoard;
