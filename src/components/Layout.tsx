import React, { ReactElement } from "react";
import "./layout.scss";

export default function Layout(): ReactElement {
  return (
    <div className="layout">
      <div className="header">
        <div className="header__text">
          <h2 className="header__text-subtitle">Morbi eu tortor orci</h2>
          <h1 className="header__text-title">Lorem ipsum dolor sit amet</h1>
        </div>

        <form className="header__form">
          <div className="header__form-title">Lorem ipsum</div>
          <label className="form__label">First Name</label>
          <input className="form__input" placeholder="e.g. John"></input>

          <label className="form__label">Last Name</label>
          <input className="form__input" placeholder="e.g. Lander"></input>

          <label className="form__label">Email</label>
          <input
            className="form__input"
            placeholder="e.g. name@gmail.com"
          ></input>

          <label className="form__label">Phone number</label>
          <input className="form__input" placeholder="8710211"></input>

          <button className="form__button">submit</button>

          <label className="container">
            <input type="checkbox" />
            <span className="checkmark"></span>I agree to the{" "}
            <a href="#">Privacy Policy, Terms & Conditions</a> and to receive
            marketing material
          </label>

          <div className="header__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu
            tortor orci.
          </div>

          <div className="payment__container">
            <img src="./payment.svg" className="payment_image" alt="payment" />
          </div>
        </form>
      </div>
    </div>
  );
}
