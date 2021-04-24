import React from "react";
import "./Blog.scss";
import { motion } from "framer-motion";
function Blog(props) {
  const { titulo, body, autor, url, redirigir, id } = props;
  return (
    <motion.div
      className="container"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <div className="container__subcontainer">
        <div className="container__subcontainer__blog">
          <p className="container__subcontainer__titulo">{titulo}</p>
          <p className="container__subcontainer__cuerpo">{body}</p>
          <p className="container__subcontainer__autor">Escrito por: {autor}</p>
          <motion.button
            className="container__subcontainer__button"
            onClick={() => redirigir(id)}
            whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.9 }}
          >
            Ir a detalle
          </motion.button>
        </div>
        <img className="container__image" src={url} alt="imagen" />
      </div>
    </motion.div>
  );
}

export default Blog;
