import React, { ReactElement } from "react";
import "./mainContent.scss";

export default function MainContent(): ReactElement {
  return (
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
          tortor orci. Vestibulum ornare faucibus dui, eu egestas augue aliquam
          sed. Suspendisse commodo consectetur ligula at commodo. Curabitur
          pretium turpis in ante consectetur, ac euismod ligula posuere. Nulla
          fermentum lorem vel libero pellentesque porttitor. Praesent libero
          ante, molestie quis sapien eu, mattis cursus orci. Quisque tellus
          nunc, consectetur faucibus ullamcorper in, imperdiet sit amet leo.
          Cras iaculis leo eu tempus volutpat. Nulla nec sapien condimentum,
          malesuada nunc nec, ultricies sem.
        </p>
        <p className="main__content-text-paragraph">
          Phasellus tristique lacinia enim, quis iaculis purus rutrum ac. Cras
          non sapien vestibulum, semper ligula sit amet, venenatis urna. Etiam
          consequat turpis sit amet sapien viverra, fringilla feugiat turpis
          aliquam. Sed quis ultricies neque. Mauris ac aliquam mauris, sed
          mattis mi. Aliquam in posuere purus, at porta sapien. Donec quis orci
          gravida, finibus lectus a, bibendum ante. Nam bibendum malesuada
          luctus. Donec malesuada facilisis aliquet. Proin tincidunt enim sed
          sapien euismod rutrum. Proin suscipit mattis nisl nec pulvinar.
        </p>
      </div>
      <a className="main__content-button" href="#form">
        Lorem ipsum dolor sit amet
      </a>
    </div>
  );
}
