import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import firebase from "./../../firebase";
import "./Header.scss";
import { AuthContext } from "../../Auth";

const Header = () => {
  const history = useHistory();
  const { currentUser } = useContext(AuthContext);

  const logOut = () => {
    firebase.auth().signOut();
    history.push("/");
  };

  return (
    <motion.div
      className="header"
      initial={{ y: -150 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.2, type: "spring", stiffness: 60 }}
    >
      <motion.p
        className="header__logo"
        animate={{ x: 50 }}
        transition={{ ease: "easeOut", duration: 2 }}
      >
        codiGo
      </motion.p>

      <nav className="header__nav">
        <a className="header__nav__a" href="/">
          Home
        </a>

        {!!currentUser && (
          <a
            className="header__nav__a"
            href="/blogs"
            onClick={() => history.push("/blogs")}
          >
            Blogs
          </a>
        )}

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

        {!!currentUser ? (
          <>
            <a className="header__nav__a" href="/signout" onClick={logOut}>
              Salir
            </a>
          </>
        ) : (
          <>
            <a
              className="header__nav__a"
              href="/signup"
              onClick={() => history.push("/signup")}
            >
              Registrate
            </a>
            <a
              className="header__nav__a"
              href="/logIn"
              onClick={() => history.push("/login")}
            >
              Iniciar sesion
            </a>
          </>
        )}
      </nav>
    </motion.div>
  );
};

export default Header;
