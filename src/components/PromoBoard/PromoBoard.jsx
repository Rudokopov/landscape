import React from "react";
import { Link } from "react-router-dom";
import "./PromoBoard.scss";

function PromoBoard() {
  return (
    <div className="promoBoard">
      <Link>
        <img
          src="https://furman.top/uploads/posts/2022-07/1656776636_31-furman-top-p-iskusstvennii-gazon-tekstura-krasivo-33.jpg"
          className="promoBoard__content"
        ></img>
      </Link>
    </div>
  );
}

export default PromoBoard;
