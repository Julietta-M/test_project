import React, { ReactElement } from "react";
import "./footer.scss";

export default function Footer(): ReactElement {
  return (
    <div className="footer">
      <a className="footer__button" href="#form">
        Lorem ipsum dolor sit amet
      </a>
      <img
        src="./images/payment.svg"
        className="footer__image"
        alt="payments"
      />
    </div>
  );
}
