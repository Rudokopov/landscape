import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import "./AboutFullPage.scss";

const AboutFullPage = () => {
  const location = useLocation();
  const { serviceId } = useParams();

  return (
    <div className="about-full-page">
      <h1 className="about-full-page__title"></h1>
      <p className="about-full-page__description"></p>

      <div className="about-full-page__gallery">
        <h2>Примеры работ</h2>
        <div className="about-full-page__images"></div>
      </div>
    </div>
  );
};

export default AboutFullPage;
