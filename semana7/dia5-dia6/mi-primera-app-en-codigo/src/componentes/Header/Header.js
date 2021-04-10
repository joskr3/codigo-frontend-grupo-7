import React from "react";
import "./styles.css";

const Header = () => {
  return (
    <nav className="cabecera">
      <h1>codiBLog</h1>
      <div className="links">
        <a href="/">Inicio</a>
        <a href="/crear">Nueva entrada</a>
        <a href="/contacto">Contacto</a>
      </div>
    </nav>
  );
};

export default Header;
