import React, { useContext, useState, useEffect } from "react";
import Card from "../components/Card/Card";
import { CartContext } from "../contexts/CartContext";
import "./Shop.scss";

const ITEMS_PER_PAGE = 6;

function Shop(props) {
  const { data } = props;
  const { cartItems, setCartItems } = useContext(CartContext);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handleClick(i)}
          className={currentPage === i ? "active" : ""}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

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

  const isInCart = (item) => {
    return cartItems.some((cartItem) => cartItem.id === item.id);
  };

  return (
    <div>
      <h2 className="shop-title">Магазин</h2>
      <h3 className="shop-secondTitle">
        Представляем вашему вниманию растения по самым выгодным ценам
      </h3>
      <div className="shop-container">
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
            background={item.background}
            color={item.color}
            title={item.title}
            price={item.price}
            description={item.description}
            onAddToCart={() => addToCart(item)}
            isInCart={isInCart(item)}
          />
        ))}
      </div>
      <div className="pagination">{renderPageNumbers()}</div>
    </div>
  );
}

export default Shop;
