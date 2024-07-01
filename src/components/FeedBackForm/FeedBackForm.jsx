import React, { useState } from "react";
import InputMask from "react-input-mask";
import "./FeedBackForm.scss";

function FeedBackForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [popupMessage, setPopupMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const phoneRegex = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;

    if (!phoneRegex.test(phone)) {
      setPopupMessage("Ошибка: Некорректный номер телефона.");
      return;
    }

    try {
      const response = await fetch("/your-form-endpoint", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
        }),
      });

      if (response.ok) {
        setPopupMessage("Мы вам перезвоним.");
      } else {
        setPopupMessage("Ошибка: что-то пошло не так.");
      }
    } catch (error) {
      setPopupMessage("Ошибка: не удалось отправить данные.");
    }
  };

  const handleClosePopup = () => {
    setPopupMessage("");
  };

  return (
    <div className="form">
      <div className="form-container">
        <div className="form-left">
          <h2>Остались вопросы?</h2>
          <p>
            Заполните контактную информацию и мы свяжемся с вами в ближайшее
            время!
          </p>
        </div>
        <div className="form-right">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Имя</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Контактный номер</label>
              <InputMask
                mask="+7 (999) 999-99-99"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                maskChar=" "
                id="phone"
                required
              >
                {(inputProps) => <input {...inputProps} type="tel" />}
              </InputMask>
            </div>
            <button className="submit-button" type="submit">
              Оставить заявку
            </button>
          </form>
        </div>
      </div>
      {popupMessage && (
        <div className="popup">
          <div className="popup-content">
            <p>{popupMessage}</p>
            <button onClick={handleClosePopup}>Закрыть</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default FeedBackForm;
