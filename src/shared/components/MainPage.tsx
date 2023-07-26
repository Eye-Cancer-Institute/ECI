import React from "react";
import Header from "./Header";
import "./mainPage.styles.scss";
import Body from "./Body";
import Footer from "./Footer";
import Cuestionario from "./Cuestionario";

const MainPage = () => {
  return (
    <div className="main-div">
      <Header />
      <Body />
      <Cuestionario />
      <Footer />
    </div>
  );
};

export default MainPage;
