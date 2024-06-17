import React, { useState } from "react";
import "./GreeningPage.scss";
import ImagePopup from "../components/ImagePopup/ImagePopup";

import greening_1 from "../images/greening_1.jpeg";
import greening_2 from "../images/greening_2.jpeg";
import greening_3 from "../images/greening_3.jpeg";
import greening_4 from "../images/greening_4.jpeg";
import greening_5 from "../images/greening_5.jpeg";
import FeedBackForm from "../components/FeedBackForm/FeedBackForm";

const GreeningPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const handleClosePopup = () => {
    setSelectedImage(null);
  };

  return (
    <div className="greeningPage">
      <h1 className="greeningPage__title">Озеленение</h1>
      <h2 className="greeningPage__description">
        <span className="bold-mark">Озеленение территории –</span> это процесс
        создания и поддержания зеленых насаждений, который включает в себя
        широкий спектр работ, направленных на улучшение эстетического вида и
        экологического состояния участка. Эта услуга востребована как среди
        частных домовладельцев, так и среди коммерческих организаций и
        муниципальных учреждений.
      </h2>
      <ul className="greeningPage__list">
        <li className="greeningPage__list-item">
          <h3 className="greeningPage__list-title">
            Основные этапы озеленения:
          </h3>
        </li>
        <li className="greeningPage__list-item">
          <p className="greeningPage__list-description">
            <span className="bold-mark">1. Проектирование –</span> Включает в
            себя разработку ландшафтного проекта, который учитывает особенности
            рельефа, климатические условия, пожелания заказчика и существующую
            растительность. На этом этапе создается подробный план расположения
            всех элементов озеленения.
          </p>
        </li>

        <li className="greeningPage__list-item">
          <p className="greeningPage__list-description">
            <span className="bold-mark">2. Подготовка территории –</span>{" "}
            Включает в себя очистку участка от строительного мусора, старых
            растений и сорняков, а также работы по улучшению почвы, такие как
            дренаж, аэрация и внесение удобрений.
          </p>
        </li>

        <li className="greeningPage__list-item">
          <p className="greeningPage__list-description">
            <span className="bold-mark">3. Посадка растений –</span> В этот этап
            входят посадка деревьев, кустарников, цветов и газонной травы.
            Правильный выбор растений и их размещение являются ключевыми
            факторами для создания гармоничного и устойчивого зеленого
            пространства.
          </p>
        </li>

        <li className="greeningPage__list-item">
          <p className="greeningPage__list-description">
            <span className="bold-mark">
              4. Создание декоративных элементов –
            </span>{" "}
            Включает в себя установку цветочных клумб, альпийских горок, живых
            изгородей и водоемов. Эти элементы помогают создать уникальный облик
            участка и сделать его более привлекательным.
          </p>
        </li>

        <li className="greeningPage__list-item">
          <p className="greeningPage__list-description">
            <span className="bold-mark">5. Уход за насаждениями –</span> {""}
            Регулярный уход включает полив, стрижку, прополку, подкормку
            растений и защиту их от вредителей и болезней. Качественный уход
            гарантирует долгий срок службы зеленых насаждений и их здоровый вид.
          </p>
        </li>
      </ul>
      <div className="greeningPage__gallery">
        <h2>Примеры работ</h2>
        <div className="greeningPage__images">
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

export default GreeningPage;
