import React from "react";
import "./Blog.css";
function Blog(props) {
  const { titulo, body, autor, url, redirigir, id } = props;
  return (
    <div className="container">
      <div className="subcontainer">
        <div className="blog">
          <p className="titulo">{titulo}</p>
          <p className="cuerpo">{body}</p>
          <p className="autor">Escrito por: {autor}</p>
          <button onClick={() => redirigir(id)}>Ir a detalle</button>
        </div>
        <img className="imagen" src={url} alt="imagen" />
      </div>
    </div>
  );
}

export default Blog;
