import React, { ReactElement } from "react";
import AdditionalContent from "../AdditionalContent/AdditionalContent";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MainContent from "../MainContent/MainContent";
import "./layout.scss";

export default function Layout(): ReactElement {
  return (
    <div className="layout">
      <Header />
      <MainContent />
      <AdditionalContent />
      <Footer />
    </div>
  );
}
