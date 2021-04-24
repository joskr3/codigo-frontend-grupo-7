import React from "react";
import "./BlogCard.scss";
import { motion } from "framer-motion";

const BlogCard = (props) => {
  const { titulo, body, autor, url, redirigir, id } = props;
  return (
    <motion.div
      className="blog-card"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <div className="blog-card__subcontainer">
        <div className="blog-card__subcontainer__blog">
          <p className="blog-card__subcontainer__titulo">{titulo}</p>
          <p className="blog-card__subcontainer__cuerpo">{body}</p>
          <p className="blog-card__subcontainer__autor">Escrito por: {autor}</p>
          <motion.button
            className="blog-card__subcontainer__button"
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
        <img className="blog-card__image" src={url} alt="imagen" />
      </div>
    </motion.div>
  );
};

export default BlogCard;
