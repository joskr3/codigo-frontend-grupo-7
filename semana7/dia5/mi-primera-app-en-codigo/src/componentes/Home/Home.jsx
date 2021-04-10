import React from "react";
import Aside from "../Aside/Aside";
import Content from "../Content/Content";
import Imagen from "../Imagen/Imagen";
import "./styles.css";

const Home = () => {
  return (
    <>
      <div className="container">
        <Content />
        <Aside />
      </div>
      <Imagen/>
    </>
  );
};

export default Home;
