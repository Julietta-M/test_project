import React, { ReactElement } from "react";
import useForm from "../../hooks/useForm";
import "./form.scss";

export default function Form(): ReactElement {
  const handleOnSubmit = () => {
    console.log("User data: ", values);
  };

  const { handleChange, values, errors, handleSubmit } =
    useForm(handleOnSubmit);

  return (
    <form id="form" className="header__form">
      <div className="header__form-title">Lorem ipsum</div>
      <label className="form__label">First Name</label>
      <input
        type="text"
        name="firstName"
        className={
          errors.hasOwnProperty("firstName")
            ? "form__input form_error"
            : "form__input"
        }
        placeholder="e.g. John"
        onChange={handleChange}
      ></input>

      <label className="form__label">Last Name</label>
      <input
        type="text"
        name="lastName"
        className={
          errors.hasOwnProperty("lastName")
            ? "form__input form_error"
            : "form__input"
        }
        placeholder="e.g. Lander"
        onChange={handleChange}
      ></input>

      <label className="form__label">Email</label>
      <input
        type="email"
        name="email"
        className={
          errors.hasOwnProperty("email")
            ? "form__input form_error"
            : "form__input"
        }
        placeholder="e.g. name@gmail.com"
        onChange={handleChange}
      ></input>

      <label className="form__label">Phone number</label>
      <input
        type="number"
        name="phone"
        className={
          errors.hasOwnProperty("phone")
            ? "form__input form_error"
            : "form__input"
        }
        placeholder="8710211"
        onChange={handleChange}
      ></input>

      <button onClick={handleSubmit} type="button" className="form__button">
        submit
      </button>

      <label className="container">
        <input type="checkbox" />
        <span className="checkmark"></span>I agree to the{" "}
        <a href="/#">Privacy Policy, Terms & Conditions</a> and to receive
        marketing material
      </label>

      <div className="header__description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu tortor
        orci.
      </div>

      <div className="payment__container">
        <img src="./payment.svg" className="payment_image" alt="payment" />
      </div>
    </form>
  );
}
