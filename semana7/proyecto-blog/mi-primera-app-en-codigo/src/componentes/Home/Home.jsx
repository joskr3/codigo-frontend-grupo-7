import React from "react";
import useFetch from "../../hooks/useFetch/useFetch";
import Blog from "../Blog/Blog";
import "./Home.css";
import { useHistory } from "react-router";

const Home = () => {
  const { data: blogs, isLoading, error } = useFetch(
    "http://localhost:8000/blogs"
  );
  const history = useHistory();

  //1.crear una funcion que use el hook use history(recibe una ruta como parametro)
  //y me debe redirigir a esa ruta : ej:/details/...aca le paso el id

  //2. le paso la funcion que cree en el paso al onclick de mi div

  const redirigirRuta = (id) => {
    return history.push(`/detail/${id}`);
  };

  return (
    <>
      {isLoading && <p>Cargando...</p>}
      <div>
        {blogs
          ? blogs?.map((blog) => (
              <div key={blog.id}>
                <Blog
                  titulo={blog.titulo}
                  autor={blog.autor}
                  url={blog.url}
                  redirigir={() => redirigirRuta(blog.id)}
                ></Blog>
              </div>
            ))
          : error && <p>{error}</p>}
      </div>
    </>
  );
};

export default Home;
