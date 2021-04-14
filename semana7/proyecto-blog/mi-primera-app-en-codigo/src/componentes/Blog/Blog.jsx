import React from "react";
import "./Blog.css";
function Blog(props) {
  const { titulo, body, autor, url, id, eliminarPost } = props;
  return (
    <div className="container">
      <div className="subcontainer">
        <div class="blog">
          <p className="titulo">{titulo}</p>
          <p className="cuerpo">{body}</p>
          <p className="autor">Escrito por: {autor}</p>
          <button onClick={() => eliminarPost(id)}>Eliminar post</button>
        </div>
        <img className="imagen" src={url} alt="imagen" />
      </div>
    </div>
  );
}

export default Blog;
