import React from "react";
import Header from "./Header";
import "./mainPage.styles.scss";
import Body from "./Body";

const MainPage = () => {
  return (
    <div className="main-div">
      <Header />
      <Body />
    </div>
  );
};

export default MainPage;
