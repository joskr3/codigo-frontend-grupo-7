import React, { useState } from "react";
import "./styles.css";

const Content = () => {
  const [likes, aumentarLikes] = useState(0);
  const [entradas, setEntradas] = useState([
    {
      titulo: "lomo saltado",
      body: "Unos de los platos emblematicos de Peru",
      chef: "Rolando",
      id: "1",
    },
    {
      titulo: "pollito a la brasa",
      body: "Otro de los platos emblematicos de Peru",
      chef: "Andrea",
      id: "2",
    },
    {
      titulo: "ceviche",
      body: "Otro de los platos emblematicos de Peru",
      chef: "Miguel",
      id: "3",
    },
  ]);

  const manejarAumentoLikes = () => {
    aumentarLikes(likes + 1);
  };

  // function manejarAumentoLikes(){
  //   aumentarLikes(likes + 1);
  // };

  return (
    // <div>
    //   <h3>Bienvenid@s a mi publicacion</h3>

    //   <p style={{ width: "50%" }}>
    //     Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis iste
    //     omnis optio voluptas, minima deleniti excepturi vero facere veritatis
    //     tenetur neque quos, perspiciatis at numquam, est consectetur
    //     necessitatibus quae voluptates!
    //   </p>

    //   <button onClick={() => manejarAumentoLikes()}>Me gusta este post</button>

    //   <p>Likes: {likes} </p>
    // </div>

    <div className="content">
      {entradas.map((entrada) => (
        <div className="content-preview" key={entrada.id}>
          <h3>Bienvenid@s a mi publicacion</h3>
          <h2>{entrada.titulo}</h2>
          <p>Escrito por la/el cheff : {entrada.chef}</p>
          <button onClick={() => manejarAumentoLikes()}>Me gusta</button>
        </div>
      ))}
    </div>
  );
};

export default Content;
