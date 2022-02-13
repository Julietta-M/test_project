import React, { ReactElement } from "react";
import "./additionalContent.scss";

export default function AdditionalContent(): ReactElement {
  return (
    <>
      <div className="additional__content">
        <div className="additional__content-title">Lorem Ipsum</div>
        <div className="additional__content-container">
          <div className="container__block">
            <img
              src="./images/icon1.svg"
              className="container__block-image"
              alt="icon"
            />
            <div className="container__block-text">
              Praesent vitae orci ac urna finibus
            </div>
          </div>

          <div className="container__block">
            <img
              src="./images/icon2.svg"
              className="container__block-image"
              alt="icon"
            />
            <div className="container__block-text">
              Duis sed tortor hendrerit
            </div>
          </div>

          <div className="container__block">
            <img
              src="./images/icon3.svg"
              className="container__block-image"
              alt="icon"
            />
            <div className="container__block-text">Efficitur non vel urna</div>
          </div>

          <div className="container__block">
            <img
              src="./images/icon4.svg"
              className="container__block-image"
              alt="icon"
            />
            <div className="container__block-text">
              Bibendum sem sed, aliquam mi
            </div>
          </div>
        </div>
      </div>
      <div className="additional__content-triangle"></div>
    </>
  );
}
