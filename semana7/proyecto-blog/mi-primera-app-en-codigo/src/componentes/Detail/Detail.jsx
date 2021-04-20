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
      {isLoading && <div>Cargando...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.titulo}</h2>
          <p>Escrito por: {blog.autor}</p>
          <div>{blog.body}</div>
          <button onClick={() => eliminarEntrada(blog.id)}>
            ELiminar esta entrada
          </button>
        </article>
      )}
    </div>
  );
}

export default Detail;
