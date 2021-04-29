import React, { useEffect, useState } from "react";
// usamos los hooks(funciones) useEffect y useState
//useEffect : es un hook que detecta  cambios en el ciclo de vida del componente
//useState : es un hook para "observar" cambios de propiedades , actuan como si fueran variables y tiene una funcion que permite modificar el valor

import Blog from "../BlogCard/BlogCard";
import "./CardsContainer.scss";
//useHistory es un hook que me permite obtener el historial de rutas en mi app
import { useHistory } from "react-router";
//firestore: la base de datos de firebase que nos permite guardar documentos (analogia a las tablas en sql)
import { firestore } from "../../firebase";

const CardsContainer = () => {
  //inicializo mi hook en una constante para poder usarlo
  const history = useHistory();
  //el primer valor en el hook de useState sirve para usar ese valor que puede cambair en cualquier momento
  // el segundo valor es una funcion que permite actualizar el primer valor
  const [blogs, setBlogs] = useState([]);
  // el valor que va entee los parentesis del useState es el valor inicial y se suele poner un valor vacio del tipo del valor


  useEffect(() => {
    //cuando vaya a obtener/consultar una url de un servicio o API , por ejemplo de backend como lo es firebase
    // debo hacerlo dentro de un hook de useEffect porque de esa manera evito que esta peticion se haga indefinidamente
    const fetchData = async () => {
      const data = await firestore.collection("blogs").get();
      setBlogs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    fetchData();
    //mi array de dependencias [] , si esta vacio siempre aue haya un cambio a nivel de vista(actual) ejecutara el codigo dentro del useEffect
    // y si hay un valor o varios adentro de esta dependencia , el codifo dentro del useEffect se ejcutara si uno de estos cambia
  }, []);

  const redirigir = (id) => {
    //esta funcion que requiere un parametro()id 
    // history.push es una manera de redirigir a una nueva ruta ej.facebook/login
    return history.push(`/detail/${id}`);
  };

  return (
    <div className="cardsContainer">
      <div className="cardsContainer__container">
        {/* && el y logico me indica que solo si ese valor existe , ejecuta lo que esta al otro lado del && */}
        {blogs &&
          blogs?.map((blog, index) => (
            // el simbolo ?(opcional) significa que es un valor que puede o no existir y de que en caso no ecista 
            // el resto del codigo no se ejecuta 
            // map me sirve para recorrer un iterable(algo que se puede recorrer . ej: un array , un string , un array de objetos) y a diferencia del forEach este "devuelve" un nuevo array

            //mi componente Blog  requiere las propiedades que declaramos en el componente BlogCard.jsx
            // estas propiedades son lo que requiere para funcionar
            <Blog
              key={index}
              titulo={blog.titulo}
              autor={blog.autor}
              url={blog.url}
              redirigir={() => {
                redirigir(blog.id);
              }}
            />
          ))}
      </div>
    </div>
  );
};

export default CardsContainer;
