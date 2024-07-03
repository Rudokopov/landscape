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

  const isInCart = (item) => {
    return cartItems.some((cartItem) => cartItem.id === item.id);
  };

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
            image1={item.image1}
            image2={item.image2}
            image3={item.image3}
            image4={item.image4}
            image5={item.image5}
            image6={item.image6}
            image7={item.image7}
            image8={item.image8}
            title={item.title}
            price={item.price}
            description={item.description}
            onAddToCart={() => addToCart(item)}
            isInCart={isInCart(item)} // Передаем пропс
          />
        ))}
      </div>
      <div className="ShopPromo__buttonContainer">
        <Link className="link" to="/shop">
          <button className="ShopPromo__button">Ещё</button>
        </Link>
      </div>
    </div>
  );
}

export default ShopPromo;
