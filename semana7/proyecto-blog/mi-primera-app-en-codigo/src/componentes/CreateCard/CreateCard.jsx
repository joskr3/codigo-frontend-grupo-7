import React, { useState } from "react";
import { motion } from "framer-motion";
import { firestore } from "../../firebase";
//swal , una libreria para mostrar alertas estilizadas
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

//antes de usar swal tengo que inicializarlo
const MySwal = withReactContent(Swal);

const CreateCard = () => {
  const [titulo, setTitulo] = useState("");
  const [body, setBody] = useState("");
  const [autor, setAutor] = useState("");
  const [url, setUrl] = useState("");

  const enviarInfo = (event) => {
    //event.preventDefault() , evita el comportamiento por defecto de submit , el cual apenas es detectado lanza el codigo
    event.preventDefault();
    //construimos un objeto
    const blog = { titulo, body, autor, url };

/**
 * aqui vamos agregar un nuevo "documento" a nuestra nase de datos en firebase(firestore)
 * 
 * le indico la coleccion a la cual quiero añadir el dato y en add le paso lo quiero añadir
 * 
 */

//lanzo una nueva alerta con swal . con el .fire, y esta tiene tres parametros , el titulo de la alerta
// el mensaje de la alerta
// el tipo de la alerta

    firestore
      .collection("blogs")
      .add(blog)
      .then(() =>
        MySwal.fire(
          `El blog ${titulo} de ${autor}`,
          "Fue creado exitosamente!",
          "success"
        )
      )
      .catch((err) =>
        MySwal.fire(
          `Error`,
          `No se pudo crear el blog por los siguientes motivos: ${err.message}`,
          "error"
        )
      );
    setTitulo("");
    setBody("");
    setAutor("");
    setUrl("");
  };

  return (
    <div>
      <h2>Agregar un nuevo blog</h2>
      <form onSubmit={enviarInfo}>
        <div>
          <label>Titulo del blog: </label>
          {/* para usar un componente con motion , no importa cual sea(html) se leagrega motion. al componente 
            y dependiendo de que componente sea , algunas prpiedades de animacion estaran disponibles
          */}
          <motion.input
            whileFocus={{ scale: 1.2 }}
            type="text"
            required
            value={titulo}
            //onchange = enCambio = cada vez que el valor cambie
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
