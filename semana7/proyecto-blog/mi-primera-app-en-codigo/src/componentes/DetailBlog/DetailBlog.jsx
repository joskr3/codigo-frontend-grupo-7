import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router";
import { firestore } from "../../firebase";
import "./DetailBlog.scss";

const DetailBlog = () => {
  const { id } = useParams();
  const history = useHistory();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const snapshot = await firestore.collection("blogs").doc(id).get();
      const data = snapshot.data();
      setBlog(data);
    }
    fetchData();
  }, [id]);

  const eliminarEntrada = (id) => {
    firestore
      .collection("blogs")
      .doc(id)
      .delete()
      .then(() => history.push("/"));
  };

  return (
    <div className="detalle">
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
