import { Button } from "@react-spectrum/button";
import { Flex } from "@react-spectrum/layout";
import { Heading, Text } from "@react-spectrum/text";
import React from "react";
import { useParams, useHistory } from "react-router";
import useFetch from "../../hooks/useFetch/useFetch";
import { url } from "../../utils/utils";

function Detail() {
  const { id } = useParams();
  const { data: blog, isLoading, error } = useFetch(`${url}${id}`);
  const history = useHistory();

  //POST,DELETE,PUT,GET, son los metodos para hacer peticiones
  // POST agrego una entrada(consulta)
  //DELETE , elimino una entrada(consulta)
  //PUT , actualizo una entrada(consulta)
  //GET, obtengo una entrada

  const eliminarEntrada = (id) => {
    fetch(`${url}${id}`, {
      method: "DELETE",
    }).then(() => history.push("/"));
  };

  return (
    <div>
      {isLoading && <Text>Cargando...</Text>}
      {error && <Text>{error}</Text>}
      {blog && (
        <Flex direction="column" gap="size-100" alignItems="center">
          <Heading level={2}>{blog.titulo}</Heading>
          <Text>Escrito por: {blog.autor}</Text>
          <Text>{blog.body}</Text>
          <Button
            maxWidth={250}
            variant="secondary"
            onPress={() => eliminarEntrada(blog.id)}
          >
            ELiminar esta entrada
          </Button>
        </Flex>
      )}
    </div>
  );
}

export default Detail;
