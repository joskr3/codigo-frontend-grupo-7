import React from "react";
import "./Blog.scss";
function Blog(props) {
  const { titulo, body, autor, url, redirigir, id } = props;
  return (
    <div className="container">
      <div className="container__subcontainer">
        <div className="container__subcontainer__blog">
          <p className="container__subcontainer__titulo">{titulo}</p>
          <p className="container__subcontainer__cuerpo">{body}</p>
          <p className="container__subcontainer__autor">Escrito por: {autor}</p>
          <button
            className="container__subcontainer__button"
            onClick={() => redirigir(id)}
          >
            Ir a detalle
          </button>
        </div>
        <img className="container__image" src={url} alt="imagen" />
      </div>
    </div>
  );
}

export default Blog;
