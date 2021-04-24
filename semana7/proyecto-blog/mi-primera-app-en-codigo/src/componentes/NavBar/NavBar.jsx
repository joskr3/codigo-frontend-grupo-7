import React from "react";
import logo from "../../assets/images/logotipo/logo-codigo.png";
import { useHistory } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import "./NavBar.scss";

function NavBar() {
  const history = useHistory();
  return (
    <motion.div
      className="header"
      initial={{ y: -150 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.2, type: "spring", stiffness: 60 }}
    >
      <AnimatePresence>
        <motion.img
          className="header__logo"
          src={logo}
          alt="logo"
          animate={{ x: 100 }}
          transition={{ ease: "easeOut", duration: 2 }}
        />
      </AnimatePresence>

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
    </motion.div>
  );
}

export default NavBar;
