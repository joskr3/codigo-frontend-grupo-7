import React from "react";
import {
  Button,
  Content,
  Flex,
  Heading,
  IllustratedMessage,
  Image,
} from "@adobe/react-spectrum";
import NotFound from "@spectrum-icons/illustrations/NotFound";
import "./Blog.css";

const NotFoundComponent = () => {
  return (
    <IllustratedMessage>
      <NotFound maxWidth={100} end={true} />
      <Heading>No hay imagen</Heading>
      <Content>Por favor revisa tu conexion a internet</Content>
    </IllustratedMessage>
  );
};

function Blog(props) {
  const { titulo, body, autor, url, redirigir, id } = props;
  return (
    <Content UNSAFE_className="card-color">
      <Flex direction="row" maxWidth={500}>
        <div className="blog">
          <p className="titulo">{titulo}</p>
          <p className="cuerpo">{body}</p>
          <p className="autor">Escrito por: {autor}</p>
          <Button variant="cta" onPress={() => redirigir(id)}>
            Ir a detalle
          </Button>
        </div>
        <div>
          {url ? (
            <Image maxWidth={250} src={url} alt="imagen" margin={15} />
          ) : (
            <NotFoundComponent />
          )}
        </div>
      </Flex>
    </Content>
  );
}

export default Blog;
