import React, { useState, useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { TotalPriceContext } from "../../contexts/TotalPriceContext";
import "./SubmitFormPopup.scss";

const SubmitFormPopup = ({ isOpen, onClose }) => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const { totalPrice } = useContext(TotalPriceContext);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async () => {
    const orderData = {
      name,
      phone,
      cartItems,
      totalPrice,
    };

    const response = await fetch(
      "https://api.telegram.org/bot7287586582:AAHWcnhcuwL6swszWMY_GyRfsBSywFFQ6xo/sendMessage",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: "480039636",
          text: `Новый заказ:
        Имя: ${name}
        Телефон: ${phone}
        Товары: ${cartItems
          .map(
            (item) =>
              `${item.title} - ${item.count} шт. - ${
                item.price * item.count
              } руб.`
          )
          .join(", ")}
        Общая сумма: ${totalPrice} руб.`,
        }),
      }
    );

    if (response.ok) {
      alert("Заказ успешно отправлен!");
      onClose();
      setCartItems([]);
    } else {
      alert("Ошибка при отправке заказа.");
    }
  };

  return (
    isOpen && (
      <div className="submit-form-popup">
        <div className="submit-form-popup__content">
          <h2>Оформление заказа</h2>
          <label>Имя:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Телефон:</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <button onClick={handleSubmit}>Отправить заказ</button>
          <button onClick={onClose}>Отмена</button>
        </div>
      </div>
    )
  );
};

export default SubmitFormPopup;
