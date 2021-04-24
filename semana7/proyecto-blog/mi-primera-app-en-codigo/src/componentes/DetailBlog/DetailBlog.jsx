import React from "react";
import { useParams, useHistory } from "react-router";
import useFetch from "../../hooks/useFetch/useFetch";
import { url } from "../../utils/utils";
import "./DetailBlog.scss";

const DetailBlog = () => {
  const { id } = useParams();
  const { data: blog, isLoading, error } = useFetch(`${url}${id}`);
  const history = useHistory();
  const eliminarEntrada = (id) => {
    fetch(`${url}${id}`, {
      method: "DELETE",
    }).then(() => history.push("/"));
  };

  return (
    <div className="detalle">
      {isLoading && <div className="detalle_cargando">Cargando...</div>}
      {error && <div className="detalle_error">{error}</div>}
      {blog && (
        <div className="detalle__articulo">
          <div className="detalle__titulo">{blog.titulo}</div>
          <p className="detalle__autor">Escrito por: {blog.autor}</p>
          <div className="detalle_body">
            <p>{blog.body}</p>

            <button
              className="detalle__body__boton"
              onClick={() => eliminarEntrada(blog.id)}
            >
              Eliminar esta entrada
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailBlog;
