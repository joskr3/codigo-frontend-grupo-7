import React from "react";
import { useHistory } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import "./Header.scss";

const Header = () => {
  const history = useHistory();
  return (
    <motion.div
      className="header"
      initial={{ y: -150 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.2, type: "spring", stiffness: 60 }}
    >
      <AnimatePresence>
        <motion.p
          className="header__logo"
          animate={{ x: 50 }}
          transition={{ ease: "easeOut", duration: 2 }}
        >
          codiGo
        </motion.p>
      </AnimatePresence>

      <nav className="header__nav">
        <a className="header__nav__a" href="/">
          Home
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
        <a className="header__nav__a" href="/register" onClick={() => history.push("/register")}>
          Registrate
        </a>
        <a className="header__nav__a" href="/logIn" onClick={() => history.push("/login")}>
          Iniciar sesion
        </a>
      </nav>
    </motion.div>
  );
};

export default Header;
