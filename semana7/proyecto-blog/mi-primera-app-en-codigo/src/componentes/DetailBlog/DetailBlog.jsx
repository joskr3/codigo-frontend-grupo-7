import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router";
import { firestore } from "../../firebase";
import "./DetailBlog.scss";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const DetailBlog = () => {
  const [blog, setBlog] = useState(null);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    async function fetchData() {
      const snapshot = await firestore.collection("blogs").doc(id).get();
      const data = snapshot.data();
      setBlog(data);
    }
    fetchData();
  }, [id]);

  const eliminarEntrada = () => {
    firestore
      .collection("blogs")
      .doc(id)
      .delete()
      .then(() => {
        MySwal.fire(
          `El blog fue elimninado exitosamente!!`,
          `Se elimino la entrada `,
          "success"
        );
      })
      .then(() => {
        history.push("/");
      })
      .catch((err) => {
        MySwal.fire(`Error al eliminar el blog !!`, `${err}`, "error");
      });
  };

  return (
    <div className="detalle">
      {blog && (
        <div className="detalle__articulo">
          <div className="detalle__titulo">{blog.titulo}</div>
          <p className="detalle__autor">Escrito por: {blog.autor}</p>
          <div className="detalle_body">
            <p>{blog.body}</p>

            <button className="detalle__body__boton" onClick={eliminarEntrada}>
              Eliminar esta entrada
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailBlog;
