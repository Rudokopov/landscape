import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import "./Cart.scss";
import { TotalPriceContext } from "../contexts/TotalPriceContext";
import { Link } from "react-router-dom";
import SubmitFormPopup from "../components/SubmitFormPopup/SubmitFormPopup";

const Cart = () => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const { totalPrice, setTotalPrice } = useContext(TotalPriceContext);
  const [isSubmitFormPopupOpen, setIsSubmitFormPopupOpen] = useState(false);

  useEffect(() => {
    if (cartItems) {
      const total = cartItems.reduce(
        (accumulator, item) => accumulator + item.price * item.count,
        0
      );
      setTotalPrice(total);
    }
    if (!cartItems) {
      setTotalPrice(0);
    }
  }, [cartItems]);

  if (!Array.isArray(cartItems) || cartItems.length === 0) {
    return (
      <div>
        <div className="cart__error-container">
          <p className="cart__error-text">Корзина пуста</p>
          <Link className="cart__error-link" to="/shop">
            В магазин
          </Link>
        </div>
      </div>
    );
  }

  const increaseCartItem = (item) => {
    if (!Array.isArray(cartItems)) {
      return;
    }

    const updatedCart = cartItems.map((cartItem) =>
      cartItem.id === item.id
        ? {
            ...cartItem,
            count: cartItem.count + 1,
          }
        : cartItem
    );
    setCartItems(updatedCart);
  };

  const decreaseCartItem = (item) => {
    console.log(cartItems);
    if (!Array.isArray(cartItems)) {
      return;
    }

    const updatedCart = cartItems.map((cartItem) =>
      cartItem.id === item.id
        ? {
            ...cartItem,
            count: cartItem.count > 1 ? cartItem.count - 1 : 0,
          }
        : cartItem
    );

    // Фильтруем элементы с count больше 0, чтобы удалить элементы с count равным 0
    const filteredCart = updatedCart.filter((cartItem) => cartItem.count > 0);
    setCartItems(filteredCart);
  };

  return (
    <div className="cart__container">
      <div className="cart__textContainer">
        <h2 className="cart__title">Корзина</h2>
        <h3 className="cart__secondTitle">Наименование</h3>
        <h3 className="cart__secondTitle">Кол-во</h3>
      </div>
      <ul className="cart__list">
        {cartItems.map((item) => (
          <li className="cart__list-item" key={item.id}>
            <img className="cart__image" src={item.image} alt={item.title} />
            <h3 className="cart__item-title">
              {item.title} - {item.price * item.count} руб.
            </h3>
            <p className="cart__item-title-count">{item.count}</p>
            <div>
              <button
                className="cart__increase-button"
                onClick={() => increaseCartItem(item)}
              >
                +
              </button>
              <button
                className="cart__decrease-button"
                onClick={() => decreaseCartItem(item)}
              >
                -
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="cart__buttom-center">
        <p className="cart__buttom-center-price">
          Общая сумма заказа: {totalPrice} рублей <br />
          {totalPrice < 500 && (
            <span className="cart__buttom-center-price-info">
              До бесплатной доставки не хватает {500 - totalPrice} рублей.
            </span>
          )}
        </p>

        <button
          onClick={() => setIsSubmitFormPopupOpen(true)}
          className="cart__buttom-center-button"
        >
          Оформить заказ
        </button>
      </div>
      <SubmitFormPopup
        isOpen={isSubmitFormPopupOpen}
        onClose={() => setIsSubmitFormPopupOpen(false)}
      />
    </div>
  );
};

export default Cart;
