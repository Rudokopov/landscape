import React from "react";
import { Link } from "react-router-dom";
import "./About.scss";

function About() {
  return (
    <div className="about">
      <h2>Наши услуги</h2>
      <ul>
        <li>
          <Link
            to={`/about-full-page/greening`}
            className="about__full-width-block about__full-width-block-greening"
          >
            <div className="about__full-width-block-content">
              <h3>Озеленение</h3>
              <p>Создание и поддержание зеленых насаждений</p>
            </div>
          </Link>
        </li>
        <li>
          <Link
            to={`/about-full-page/landscape`}
            className="about__full-width-block about__full-width-block-landscaping"
          >
            <div className="about__full-width-block-content">
              <h3>Благоустройство</h3>
              <p>Комплексное благоустройство территории</p>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default About;
