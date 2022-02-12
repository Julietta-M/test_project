import React, { ReactElement, useState } from "react";
import "./form.scss";

export default function Form(): ReactElement {
  const [firstName, setFirstName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [phone, setPhone] = useState<string>();
  const [firstNameError, setFirstNameError] = useState<boolean>(false);
  const [lastNameError, setLastNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [phoneError, setPhoneError] = useState<boolean>(false);

  const handleFirstName = (e: {
    target: { value: React.SetStateAction<string | undefined> };
  }) => {
    setFirstName(e.target.value);
  };

  const handleLastName = (e: {
    target: { value: React.SetStateAction<string | undefined> };
  }) => {
    setLastName(e.target.value);
  };

  const handleEmail = (e: {
    target: { value: React.SetStateAction<string | undefined> };
  }) => {
    setEmail(e.target.value);
  };

  const handlePhone = (e: {
    target: { value: React.SetStateAction<string | undefined> };
  }) => {
    setPhone(e.target.value);
  };

  const handleOnSubmit = () => {
    const userData = {
      firstName,
      lastName,
      email,
      phone,
    };

    if (firstName && firstName?.length < 2) {
      setFirstNameError(true);
    } else if (lastName && lastName?.length < 2) {
      setLastNameError(true);
    } else if (
      email &&
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)
    ) {
      setEmailError(true);
    } else if (phone && phone?.length >= 6 && phone?.length <= 12) {
      setPhoneError(true);
    } else {
      setFirstNameError(false);
      console.log(userData);
    }
  };

  console.log(firstNameError);

  return (
    <form className="header__form">
      <div className="header__form-title">Lorem ipsum</div>
      <label className="form__label">First Name</label>
      <input
        value={firstName}
        type="text"
        className={firstNameError ? "form__input form_error" : "form__input"}
        placeholder="e.g. John"
        onChange={handleFirstName}
      ></input>

      <label className="form__label">Last Name</label>
      <input
        value={lastName}
        type="text"
        className={lastNameError ? "form__input form_error" : "form__input"}
        placeholder="e.g. Lander"
        onChange={handleLastName}
      ></input>

      <label className="form__label">Email</label>
      <input
        value={email}
        type="email"
        className={emailError ? "form__input form_error" : "form__input"}
        placeholder="e.g. name@gmail.com"
        onChange={handleEmail}
      ></input>

      <label className="form__label">Phone number</label>
      <input
        value={phone}
        type="number"
        className={phoneError ? "form__input form_error" : "form__input"}
        placeholder="8710211"
        onChange={handlePhone}
      ></input>

      <button
        onClick={handleOnSubmit}
        disabled={!firstName || !lastName || !phone || !email}
        type="button"
        className="form__button"
      >
        submit
      </button>

      <label className="container">
        <input type="checkbox" />
        <span className="checkmark"></span>I agree to the{" "}
        <a href="#">Privacy Policy, Terms & Conditions</a> and to receive
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
