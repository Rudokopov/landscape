import { useContext } from "react";
import Card from "../Card/Card";
import PromoBoard from "../PromoBoard/PromoBoard";
import "./ShopPromo.scss";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";

const ITEMS_PER_PAGE = 6;

function ShopPromo(props) {
  const { data } = props;
  const { cartItems, setCartItems } = useContext(CartContext);
  const currentItems = data.slice(0, ITEMS_PER_PAGE);

  const addToCart = (item) => {
    const itemExists = cartItems.find((cartItem) => cartItem.id === item.id);

    if (itemExists) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, count: cartItem.count + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, count: 1 }]);
    }
  };

  return (
    <div className="ShopPromo">
      <h2>Магазин</h2>

      <div className="ShopPromo__sale">
        <PromoBoard />
      </div>
      <div className="cardContainer">
        {currentItems.map((item, index) => (
          <Card
            key={index}
            image={item.image}
            title={item.title}
            price={item.price}
            description={item.description}
            onAddToCart={() => addToCart(item)}
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
