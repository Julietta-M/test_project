import React, { ReactElement } from "react";
import Form from "../Form/Form";
import "./layout.scss";

export default function Layout(): ReactElement {
  return (
    <div className="layout">
      <div className="header">
        <div className="header__container">
          <div className="header__text">
            <h2 className="header__text-subtitle">Morbi eu tortor orci</h2>
            <h1 className="header__text-title">Lorem ipsum dolor sit amet</h1>
            <div className="header__text-desc">
              <span>Lorem ipsum dolor, consectetur elit</span>
              <img
                className="header__text-desc-img"
                src="./big-arrow.svg"
                alt="arrow"
              ></img>
            </div>
          </div>
          <Form />
        </div>
        <div className="header__end-line"></div>
      </div>

      <div className="main__content">
        <div className="main__content-title">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
        <img
          src="./grid-blocks.svg"
          className="main__content-image"
          alt="blocks"
        />
        <div className="main__content-text">
          <p className="main__content-text-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu
            tortor orci. Vestibulum ornare faucibus dui, eu egestas augue
            aliquam sed. Suspendisse commodo consectetur ligula at commodo.
            Curabitur pretium turpis in ante consectetur, ac euismod ligula
            posuere. Nulla fermentum lorem vel libero pellentesque porttitor.
            Praesent libero ante, molestie quis sapien eu, mattis cursus orci.
            Quisque tellus nunc, consectetur faucibus ullamcorper in, imperdiet
            sit amet leo. Cras iaculis leo eu tempus volutpat. Nulla nec sapien
            condimentum, malesuada nunc nec, ultricies sem.
          </p>
          <p className="main__content-text-paragraph">
            Phasellus tristique lacinia enim, quis iaculis purus rutrum ac. Cras
            non sapien vestibulum, semper ligula sit amet, venenatis urna. Etiam
            consequat turpis sit amet sapien viverra, fringilla feugiat turpis
            aliquam. Sed quis ultricies neque. Mauris ac aliquam mauris, sed
            mattis mi. Aliquam in posuere purus, at porta sapien. Donec quis
            orci gravida, finibus lectus a, bibendum ante. Nam bibendum
            malesuada luctus. Donec malesuada facilisis aliquet. Proin tincidunt
            enim sed sapien euismod rutrum. Proin suscipit mattis nisl nec
            pulvinar.
          </p>
        </div>
        <button className="main__content-button">
          Lorem ipsum dolor sit amet
        </button>
      </div>

      <div className="additional__content">
        <div className="additional__content-title">Lorem Ipsum</div>
        <div className="additional__content-container">
          <div className="container__block">
            <img src="./icon1.svg" className="container__block-image" />
            <div className="container__block-text">
              Praesent vitae orci ac urna finibus
            </div>
          </div>

          <div className="container__block">
            <img src="./icon2.svg" className="container__block-image" />
            <div className="container__block-text">
              Duis sed tortor hendrerit
            </div>
          </div>

          <div className="container__block">
            <img src="./icon3.svg" className="container__block-image" />
            <div className="container__block-text">Efficitur non vel urna</div>
          </div>

          <div className="container__block">
            <img src="./icon4.svg" className="container__block-image" />
            <div className="container__block-text">
              Bibendum sem sed, aliquam mi
            </div>
          </div>
        </div>
      </div>
      <div className="additional__content-triangle"></div>

      <div className="footer">
        <button className="footer__button">Lorem ipsum dolor sit amet</button>
        <img src="./payment.svg" className="footer__image" alt="payments" />
      </div>
    </div>
  );
}
