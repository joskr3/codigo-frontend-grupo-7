import React, { useState } from "react";
import "./styles.css";
const Content = () => {
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

  return (
    // <div className="content">
    //   {entradas.map((entrada) => (
    //     <div className="content-preview" key={entrada.id}>
    //       <h3>Bienvenid@s a mi publicacion</h3>
    //       <h2>{entrada.titulo}</h2>
    //       <p>Escrito por la/el cheff : {entrada.chef}</p>
    //     </div>
    //   ))}
    // </div>

    <div className="container m-6">
      <div className="row ">
        {entradas.map((entrada) => (
          <div className="card col-sm m-3" key={entrada.id}>
            <div className="card-body">
              <h5 className="card-title">{entrada.titulo}</h5>
              <p className="card-text">
                Escrito por la/el cheff : {entrada.chef}
              </p>
              <a href="#" className="btn btn-primary">
                Leer el articulo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Content;
