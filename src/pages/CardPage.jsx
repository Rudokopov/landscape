import "./CardPage.scss";
import { Link } from "react-router-dom";

function CardPage(props) {
  const { name, price, description, image } = props;

  return (
    <div className="Card">
      <img src={image} alt="" />
      <div className="card-container">
        <h2>{name}</h2>
        <h3>{price} руб.</h3>
        <p>{description}</p>
        <button className="card-cart-button">В корзину</button>
        <button>
          <Link className="card-back-button" to="/">
            Назад
          </Link>
        </button>
      </div>
    </div>
  );
}

export default CardPage;
