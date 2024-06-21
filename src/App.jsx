import React, { useState, useEffect } from "react";
import ScrollToTop from "./utils/scroll-top";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "./vendor/font/stylesheet.css";
import "./vendor/font/PlayFair/index.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import CardPage from "./pages/CardPage";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import jsonData from "./data/cards.json";
import { CartContextProvider } from "./contexts/CartContext";
import { TotalPriceProvider } from "./contexts/TotalPriceContext";
import AboutFullPage from "./components/AboutFullPage/AboutFullPage";
import GreeningPage from "./pages/GreeningPage";
import LandscapePage from "./pages/LandscapePage";

function App() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const localStorageCartData = JSON.parse(localStorage.getItem("cartData"));
    if (localStorageCartData) {
      setCartItems(localStorageCartData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartData", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <div className="App">
      <ScrollToTop>
        <CartContextProvider value={{ cartItems, setCartItems }}>
          <TotalPriceProvider>
            <header>
              <Header />
            </header>
            <Routes>
              <Route path="/" element={<Home data={jsonData} />} />
              <Route path="/card/:title" element={<CardPage />} />
              <Route
                path="/about-full-page/greening"
                element={<GreeningPage />}
              />
              <Route
                path="/about-full-page/landscape"
                element={<LandscapePage />}
              />
              <Route path="/shop" element={<Shop data={jsonData} />} />
              <Route
                path="/cart"
                element={<Cart setCartItems={setCartItems} />}
              />
            </Routes>
            <footer>
              <Footer />
            </footer>
          </TotalPriceProvider>
        </CartContextProvider>
      </ScrollToTop>
    </div>
  );
}

export default App;
