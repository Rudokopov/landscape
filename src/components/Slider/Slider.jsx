import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Slider.css";

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
          <img
            className="slide-image"
            src="https://nevagreen.ru/upload/image/screenshot_1_(1).png"
            alt="Промоушн"
          />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img
            className="slide-image"
            src="https://www.drevo-spas.ru/img/work/article/a_516_3065.jpg"
            alt="Доставка"
          />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img
            className="slide-image"
            src="https://s0.rbk.ru/v6_top_pics/media/img/6/01/346841313133016.jpg"
            alt="Реклама"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
