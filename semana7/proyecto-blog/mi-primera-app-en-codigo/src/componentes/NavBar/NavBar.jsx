import React from "react";
import logo from "../../assets/images/logotipo/logo-codigo.png";
import "./NavBar.css"
function NavBar() {
  return (
    <header>
      <img  className="logo" src={logo} alt="logo" />
      <nav>
          <a href="./Home">Home</a>
          <a href="./Contact">Contacto</a>
          <a href="./About-us">Sobre nosotros</a>
          <a href="./Info">Informacion</a>
          <a href="./Register">Registrate</a>
          <a href="./logIn">Iniciar sesion</a>
      </nav>
    </header>
  );
}

export default NavBar;
