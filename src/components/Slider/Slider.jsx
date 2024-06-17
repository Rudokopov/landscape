import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Slider.css";

import image1 from "../../images/IMG_2090.jpeg";
import image2 from "../../images/IMG_2094.jpeg";
import image3 from "../../images/IMG_2098.jpeg";

export default function Slider() {
  return (
    <div className="slider-container">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className="image-slider"
      >
        <SwiperSlide className="slide">
          <img className="slide-image" src={image1} alt="Промоушн" />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img className="slide-image" src={image2} alt="Доставка" />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img className="slide-image" src={image3} alt="Реклама" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
