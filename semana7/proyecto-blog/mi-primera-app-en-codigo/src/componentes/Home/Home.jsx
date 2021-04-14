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
import React, { useState } from "react";
import Blog from "../Blog/Blog";

import "./Home.css";

function Home() {
  //un hook es una funcion que la uso desde la libreria de React
  //useState es una "funcion" que me permite "observar" los cambios de valor de una propiedad(variable)
  // toma dos parametros una constante que es valor que tendra los cambios
  // y una funcion que me permitira actualizar esa constante
  // debo pasarle un valor inicial

  const [blogs, setBlogs] = useState([
    {
      titulo: "Nuevos proyectos de los alumnos de codiGo",
      body:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, quaerat. Aliquid rem pariatur doloremque cumque ab dolore incidunt labore saepe, nemo omnis voluptatum tempore neque quo veritatis iste numquam delectus.Officiis nihil tenetur magnam aliquam minus quidem, ad assumenda exercitationem sed dolorem deleniti hic nam iusto corporis voluptatibus voluptatem fugiat mollitia rem consequuntur odio nulla in itaque. Sapiente, voluptatem error",
      autor: "Josue Retamozo",
      url:
        "https://images.pexels.com/photos/7191981/pexels-photo-7191981.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      id: 1,
    },
    {
      titulo: "Nuevos proyectos de los alumnos de codiGo",
      body:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, quaerat. Aliquid rem pariatur doloremque cumque ab dolore incidunt labore saepe, nemo omnis voluptatum tempore neque quo veritatis iste numquam delectus.Officiis nihil tenetur magnam aliquam minus quidem, ad assumenda exercitationem sed dolorem deleniti hic nam iusto corporis voluptatibus voluptatem fugiat mollitia rem consequuntur odio nulla in itaque. Sapiente, voluptatem error",
      autor: "Josue Retamozo",
      url:
        "https://images.pexels.com/photos/7191981/pexels-photo-7191981.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      id: 2,
    },
    {
      titulo: "Nuevos proyectos de los alumnos de codiGo",
      body:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, quaerat. Aliquid rem pariatur doloremque cumque ab dolore incidunt labore saepe, nemo omnis voluptatum tempore neque quo veritatis iste numquam delectus.Officiis nihil tenetur magnam aliquam minus quidem, ad assumenda exercitationem sed dolorem deleniti hic nam iusto corporis voluptatibus voluptatem fugiat mollitia rem consequuntur odio nulla in itaque. Sapiente, voluptatem error",
      autor: "beto",
      url:
        "https://images.pexels.com/photos/7191981/pexels-photo-7191981.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      id: 3,
    },
  ]);

  const eliminarPost = (id) => {
    return setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  return (
    //esto renderea una lista de blog
    <div>
      {blogs?.map((blog) => (
        <Blog
          titulo={blog.titulo}
          body={blog.body}
          autor={blog.autor}
          url={blog.url}
          key={blog.id}
          eliminarPost={() => eliminarPost(blog.id)}
        />
      ))}
    </div>
  );
}

export default Home;
