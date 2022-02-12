import React, { ReactElement } from "react";
import "./footer.scss";

export default function Footer(): ReactElement {
  return (
    <div className="footer">
      <button className="footer__button">Lorem ipsum dolor sit amet</button>
      <img src="./payment.svg" className="footer__image" alt="payments" />
    </div>
  );
}
