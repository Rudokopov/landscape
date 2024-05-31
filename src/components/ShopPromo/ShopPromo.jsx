import Card from "../Card/Card";
import "./ShopPromo.scss";
import { Link } from "react-router-dom";

const ITEMS_PER_PAGE = 6;

function ShopPromo(props) {
  const { data } = props;
  const currentItems = data.slice(0, ITEMS_PER_PAGE);

  return (
    <div className="ShopPromo">
      <h2>Магазин</h2>
      <div className="cardContainer">
        {currentItems.map((item, index) => (
          <Card
            key={index}
            image={item.image}
            title={item.title}
            price={item.price}
            description={item.description}
            // onAddToCart={() => addToCart(item)}
          />
        ))}
      </div>
      <div className="ShopPromo__buttonContainer">
        <button className="ShopPromo__button">
          <Link to="/shop">Ещё</Link>
        </button>
      </div>
    </div>
  );
}

export default ShopPromo;
