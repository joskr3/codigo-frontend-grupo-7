// react , es una libreria que me permite hacer interfaces graficas

//es basada en componentes funcionales (funciones que generan una pieza de codigo de UI )
//ej.un navbar, un footer, un Home

//react usa jsx , que es javascript con "superpoderes" o le agregan a la sintaxis de javascript
//ciertas funcionalidades
//eso no quita que pueda seguir trabajando en archivos con .js

//me permite trabajar la logica(funcionalidades(javascript))y la interfaz de usuario(UI) que es el html

//es mantenido por Facebook
// usa una sintaxis basada en XML

//detalles de blog(posts-blogDetail)
import React, { useState, useEffect } from "react";
//import { useQuery } from "react-query";
import Blog from "../Blog/Blog";

import "./Home.css";

function Home() {
  //un hook es una funcion que la uso desde la libreria de React
  //useState es una "funcion" que me permite "observar" los cambios de valor de una propiedad(variable)
  // toma dos parametros una constante que es valor que tendra los cambios
  // y una funcion que me permitira actualizar esa constante
  // debo pasarle un valor inicial

  const [blogs, setBlogs] = useState(null || []);
  const [estaPendiente, setEstaPendiente] = useState(true);
  const [error, setError] = useState("");

  // const url = "https://pokeapi.co/api/v2/"

  // const { isLoading, error, data } = useQuery("consulta", () => {
  //   fetch(url)
  //   .then((resultado) => console.log(resultado.json()));
  // });

  const eliminarPost = (id) => {
    return setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
        setEstaPendiente(false);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  return (
    <>
      {estaPendiente && <p>Cargando...</p>}
      <div>
        {blogs
          ? blogs?.map((blog) => (
              <Blog
                titulo={blog.titulo}
                body={blog.body}
                autor={blog.autor}
                url={blog.url}
                key={blog.id}
                eliminarPost={() => eliminarPost(blog.id)}
              />
            ))
          : error && <p>{error}</p>}
      </div>
    </>
  );
}

export default Home;
