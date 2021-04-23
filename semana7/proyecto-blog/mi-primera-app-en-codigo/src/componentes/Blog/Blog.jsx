import React from "react";
import { Button, Content } from "@adobe/react-spectrum";
import "./Blog.css";
function Blog(props) {
  const { titulo, body, autor, url, redirigir, id } = props;
  return (
    <Content>
      <div className="subcontainer">
        <div className="blog">
          <p className="titulo">{titulo}</p>
          <p className="cuerpo">{body}</p>
          <p className="autor">Escrito por: {autor}</p>
          <Button variant="cta" onPress={() => redirigir(id)}>
            Ir a detalle
          </Button>
        </div>



        <img className="imagen" src={url} alt="imagen" />



        
      </div>
    </Content>
  );
}

export default Blog;
