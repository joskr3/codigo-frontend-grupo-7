import React from "react";
import logo from "../../assets/images/logotipo/logo-codigo.png";
import { useHistory } from "react-router-dom";
import "./NavBar.scss";

function NavBar() {
  const history = useHistory();
  return (
    <div className="header">
      <img className="header__logo" src={logo} alt="logo" />
      <nav className="header__nav">
        <a className="header__nav__a" href="/">
          Home
        </a>
        <a className="header__nav__a" href="/Contact">
          Contacto
        </a>
        <a className="header__nav__a" href="/Info">
          Informacion
        </a>
        <a
          className="header__nav__a"
          href="/Detail"
          onClick={() => history.push("/detail")}
        >
          Detalles
        </a>
        <a
          className="header__nav__a"
          href="/Create"
          onClick={() => history.push("/create")}
        >
          Crear Nuevo Blog
        </a>
        <a className="header__nav__a" href="/Register">
          Registrate
        </a>
        <a className="header__nav__a" href="/logIn">
          Iniciar sesion
        </a>
      </nav>
    </div>
  );
}

export default NavBar;
