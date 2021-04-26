import React, { useState } from "react";

import { motion } from "framer-motion";
import { firestore } from "../../firebase";

const CreateCard = () => {
  const [titulo, setTitulo] = useState("");
  const [body, setBody] = useState("");
  const [autor, setAutor] = useState("");
  const [url, setUrl] = useState("");

  const enviarInfo = (event) => {
    event.preventDefault();
    const blog = { titulo, body, autor, url };

    firestore
      .collection("blogs")
      .add({
        blog,
      })
      .then(() => {
        console.log("Blog enviado!!!");
      });

    setTitulo("");
    setBody("");
    setAutor("");
  };

  return (
    <div>
      <h2>Agregar un nuevo blog</h2>
      <form onSubmit={enviarInfo}>
        <div>
          <label>Titulo del blog: </label>
          <motion.input
            whileFocus={{ scale: 1.2 }}
            type="text"
            required
            value={titulo}
            onChange={(element) => setTitulo(element.target.value)}
          />
        </div>
        <div>
          <label>Contenido: </label>
          <motion.input
            whileFocus={{ scale: 1.2 }}
            type="text"
            required
            value={body}
            onChange={(element) => setBody(element.target.value)}
          />
        </div>
        <div>
          <label>Autor: </label>
          <motion.input
            whileFocus={{ scale: 1.2 }}
            type="text"
            required
            value={autor}
            onChange={(element) => setAutor(element.target.value)}
          />
        </div>
        <div>
          <label>Image url: </label>
          <motion.input
            whileFocus={{ scale: 1.2 }}
            type="text"
            required
            value={url}
            onChange={(element) => setUrl(element.target.value)}
          />
        </div>
        <button>Agregar blog</button>
      </form>
    </div>
  );
};

export default CreateCard;
