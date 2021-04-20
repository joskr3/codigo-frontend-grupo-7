import React from "react";
import logo from "../../assets/images/logotipo/logo-codigo.png";
import { Link, useHistory } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const history = useHistory();
  return (
    <header>
      <img className="logo" src={logo} alt="logo" />
      <nav>
        <a href="/">Home</a>
        <a href="/Contact">Contacto</a>
        <a href="/Info">Informacion</a>
        <a onClick={() => history.push("/detail")}>Detalles</a>
        <a onClick={() => history.push("/create")}>Crear Nuevo Blog</a>
        <a href="/Register">Registrate</a>
        <a href="/logIn">Iniciar sesion</a>
      </nav>
    </header>
  );
}

export default NavBar;
