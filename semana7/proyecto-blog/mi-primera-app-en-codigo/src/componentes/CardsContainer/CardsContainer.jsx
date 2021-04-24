import React from "react";
import useFetch from "../../hooks/useFetch/useFetch";
import Blog from "../BlogCard/BlogCard";
import "./CardsContainer.scss";
import { useHistory } from "react-router";
import { url } from "../../utils/utils";

const CardsContainer = () => {
  const { data: blogs, isLoading, error } = useFetch(url);
  const history = useHistory();
  const redirigirRuta = (id) => {
    return history.push(`/detail/${id}`);
  };

  return (
    <div className="cardsContainer">
      {isLoading && <p className="cardsContainer__cargando">Cargando...</p>}
      <div className="cardsContainer__container">
        {blogs
          ? blogs?.map((blog) => (
              <div className="cardsContainer__container__card">
                <Blog
                  key={blog.id}
                  titulo={blog.titulo}
                  autor={blog.autor}
                  url={blog.url}
                  redirigir={() => redirigirRuta(blog.id)}
                ></Blog>
              </div>
            ))
          : error && <p className="cardsContainer__error">{error}</p>}
      </div>
    </div>
  );
};

export default CardsContainer;
