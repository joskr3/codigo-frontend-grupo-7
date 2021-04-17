import React from "react";
import useFetch from "../../hooks/useFetch/useFetch";
import Blog from "../Blog/Blog";
import "./Home.css";

const Home = () => {
  const { data: blogs, isLoading, error } = useFetch(
    "http://localhost:8000/blogs"
  );
  // const eliminarPost = (id) => {
  //   return setBlogs(blogs.filter((blog) => blog.id !== id));
  // };
  return (
    <>
      {isLoading && <p>Cargando...</p>}
      <div>
        {blogs
          ? blogs?.map((blog) => (
              <Blog
                titulo={blog.titulo}
                body={blog.body}
                autor={blog.autor}
                url={blog.url}
                key={blog.id}
                // eliminarPost={() => eliminarPost(blog.id)}
              />
            ))
          : error && <p>{error}</p>}
      </div>
    </>
  );
};

export default Home;
