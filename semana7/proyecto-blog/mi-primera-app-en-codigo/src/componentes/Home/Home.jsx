import React from "react";
import useFetch from "../../hooks/useFetch/useFetch";
import Blog from "../Blog/Blog";
import "./Home.scss";
import { useHistory } from "react-router";
import { url } from "../../utils/utils";

const Home = () => {
  const { data: blogs, isLoading, error } = useFetch(url);
  const history = useHistory();
  const redirigirRuta = (id) => {
    return history.push(`/detail/${id}`);
  };

  return (
    <div className="home">
      {isLoading && <p className="home__cargando">Cargando...</p>}
      <div className="home__container">
        {blogs
          ? blogs?.map((blog) => (
              <div className="home__container__card">
                <Blog
                key={blog.id} 
                  titulo={blog.titulo}
                  autor={blog.autor}
                  url={blog.url}
                  redirigir={() => redirigirRuta(blog.id)}
                ></Blog>
              </div>
            ))
          : error && <p className="home__error">{error}</p>}
      </div>
    </div>
  );
};

export default Home;
