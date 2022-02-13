import React, { ReactElement } from "react";
import Form from "../Form/Form";
import "./header.scss";

export default function Header(): ReactElement {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__text">
          <h2 className="header__text-subtitle">Morbi eu tortor orci</h2>
          <h1 className="header__text-title">Lorem ipsum dolor sit amet</h1>
          <div className="header__text-desc">
            <span>Lorem ipsum dolor, consectetur elit</span>
            <img
              className="header__text-desc-img"
              src="./images/big-arrow.svg"
              alt="arrow"
            ></img>
          </div>
        </div>
        <Form />
      </div>
      <div className="header__end-line"></div>
    </div>
  );
}
