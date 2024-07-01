import React, { useState } from "react";
import "./LandscapePage.scss";
import ImagePopup from "../components/ImagePopup/ImagePopup";

import landscape from "../images/landscape/landscape.jpg";
import landscape_1 from "../images/landscape/landscape_1.jpg";
import landscape_2 from "../images/landscape/landscape_2.jpg";

import greening_1 from "../images/greening_1.jpeg";
import greening_2 from "../images/greening_2.jpeg";
import greening_3 from "../images/greening_3.jpeg";
import greening_4 from "../images/greening_4.jpeg";
import greening_5 from "../images/greening_5.jpeg";
import FeedBackForm from "../components/FeedBackForm/FeedBackForm";
import { Link } from "react-router-dom";

const LandscapePage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const handleClosePopup = () => {
    setSelectedImage(null);
  };

  return (
    <div className="landscapePage">
      <Link to="/" className="back-button">
        Назад
      </Link>
      <h1 className="landscapePage__title">Благоустройство</h1>
      <h2 className="landscapePage__description">
        <span className="bold-mark">Благоустройство территории –</span> это
        процесс создания и поддержания зеленых насаждений, который включает в
        себя широкий спектр работ, направленных на улучшение эстетического вида
        и экологического состояния участка. Эта услуга востребована как среди
        частных домовладельцев, так и среди коммерческих организаций и
        муниципальных учреждений.
      </h2>
      <img
        className="landscapePage__central-image"
        src={landscape}
        alt="Пример благоустройства"
      />
      <ul className="landscapePage__list">
        <li className="landscapePage__list-item">
          <h3 className="landscapePage__list-title">
            Основные этапы озеленения:
          </h3>
        </li>
        <li className="landscapePage__list-item">
          <p className="landscapePage__list-description">
            <span className="bold-mark">Проектирование –</span> Включает в себя
            разработку ландшафтного проекта, который учитывает особенности
            рельефа, климатические условия, пожелания заказчика и существующую
            растительность. На этом этапе создается подробный план расположения
            всех элементов озеленения.
          </p>
        </li>

        <li className="landscapePage__list-item">
          <p className="landscapePage__list-description">
            <span className="bold-mark">Подготовка территории –</span> Включает
            в себя очистку участка от строительного мусора, старых растений и
            сорняков, а также работы по улучшению почвы, такие как дренаж,
            аэрация и внесение удобрений.
          </p>
        </li>

        <li className="landscapePage__list-item">
          <p className="landscapePage__list-description">
            <span className="bold-mark">Посадка растений –</span> В этот этап
            входят посадка деревьев, кустарников, цветов и газонной травы.
            Правильный выбор растений и их размещение являются ключевыми
            факторами для создания гармоничного и устойчивого зеленого
            пространства.
          </p>
        </li>

        <li className="landscapePage__list-item">
          <p className="landscapePage__list-description">
            <span className="bold-mark">Создание декоративных элементов –</span>{" "}
            Включает в себя установку цветочных клумб, альпийских горок, живых
            изгородей и водоемов. Эти элементы помогают создать уникальный облик
            участка и сделать его более привлекательным.
          </p>
        </li>

        <li className="landscapePage__list-item">
          <p className="landscapePage__list-description">
            <span className="bold-mark">Уход за насаждениями –</span> {""}
            Регулярный уход включает полив, стрижку, прополку, подкормку
            растений и защиту их от вредителей и болезней. Качественный уход
            гарантирует долгий срок службы зеленых насаждений и их здоровый вид.
          </p>
        </li>
      </ul>
      <div className="landscapePage__image-block">
        <img
          className="landscapePage__image-block-image"
          src={landscape_1}
          alt="Пример благоустройства 2"
        />
        <img
          className="landscapePage__image-block-image"
          src={landscape_2}
          alt="Пример благоустройства 3"
        />
      </div>
      <p className="landscapePage__description-final">
        Наша команда имеет большой опыт в сфере озеленения, проектирования и
        благоустройства, мы с радостью возьмемся за проект любой сложности и
        выполним его в соответствии с договоренностями с заказчиком.
      </p>
      <div className="landscapePage__gallery">
        <h2 className="landscapePage__example-title">Примеры работ</h2>
        <div className="landscapePage__images">
          {[greening_1, greening_2, greening_3, greening_4, greening_5].map(
            (image, index) => (
              <img
                key={index}
                src={image}
                alt={`Example ${index + 1}`}
                onClick={() => handleImageClick(image)}
              />
            )
          )}
        </div>
      </div>
      {selectedImage && (
        <ImagePopup imageSrc={selectedImage} onClose={handleClosePopup} />
      )}
      <FeedBackForm />
    </div>
  );
};

export default LandscapePage;
