import React, { useEffect, useState } from "react";
//useParams me sirve para recuperar el valor de un parametro que este en mi url ej. detalles/kklsd34hgh345
//donde mi parametro "id" valdria kklsd34hgh345
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
      //para buscar un docuemnto en particular bastara con poner su id
      // hay otras maneras como aplicar reglas(condiciones)
      const snapshot = await firestore.collection("blogs").doc(id).get();

      //snapshot seria como el valor actual de ese dato (como si fiera una fotografia , captura exactamente el resultado)
      const data = snapshot.data();
      setBlog(data);
    }
    //al llamr la funcion dentro del useEffect nos aseguramos que solo se ejecutara una vez
    fetchData();
    //al poner id dentro del array de dependencias , le decimos que esta funcion solo se ejecutara cuando el id  sea diferente
  }, [id]);

  // al igual que con add , para eliminar un documento , necesitamos especificar que queremos eliminar(id)
  //para eso usare delete()
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
        // then es para cuando una promesa(algo que no se si retornara un valor o no)  es exitoso
        history.push("/");
      })
      .catch((err) => {
        // catch es para cuando una promesa no se lleve a cabo(falle)
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
            {/* es para cuando se hace click , esto lanzo el evento onClick */}
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
