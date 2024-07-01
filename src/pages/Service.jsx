import React from "react";
import ErrorImg from "../images/Error.jpg";
import "./Service.scss";

function Service() {
  return (
    <div className="service">
      <img className="service__image" src={ErrorImg} alt="Ошибка" />
    </div>
  );
}

export default Service;
