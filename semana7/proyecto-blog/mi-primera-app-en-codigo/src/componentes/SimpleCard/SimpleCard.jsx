import React from "react";
import "./SimpleCard.scss";
import { motion } from "framer-motion";
const SimpleCard = ({ url, contenido, boton, titulo }) => {
  return (
    <motion.div
      className="card"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <img className="card__image" alt="card_image" src={url} />
      <div className="card__content">
        <h2 className="card__content__title">{titulo}</h2>
        <p className="card__content__text">{contenido} </p>
      </div>
      <div className="card__footer">
        <button className="card__footer__button">{boton}</button>
      </div>
    </motion.div>
  );
};

export default SimpleCard;
