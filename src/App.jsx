import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./utils/scroll-top";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import CardPage from "./pages/CardPage";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import jsonData from "./data/cards.json";
import { CartContextProvider } from "./contexts/CartContext";
import { TotalPriceProvider } from "./contexts/TotalPriceContext";
import { CardProvider } from "./contexts/CardContext";
import AboutFullPage from "./components/AboutFullPage/AboutFullPage";
import GreeningPage from "./pages/GreeningPage";
import LandscapePage from "./pages/LandscapePage";
import "./App.css";
import "./vendor/font/stylesheet.css";
import "./vendor/font/PlayFair/index.css";
import Service from "./pages/Service";
import FloatingCartIcon from "./components/FloatingCartIcon/FloatingCartIcon";

function App() {
  return (
    <div className="App">
      <ScrollToTop>
        <CartContextProvider>
          <TotalPriceProvider>
            <CardProvider>
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
                <Route path="/cart" element={<Cart />} />
                <Route path="/service" element={<Service />} />
              </Routes>
              <FloatingCartIcon />
              <footer>
                <Footer />
              </footer>
            </CardProvider>
          </TotalPriceProvider>
        </CartContextProvider>
      </ScrollToTop>
    </div>
  );
}

export default App;
