import React from "react";
import Blog from "../Blog/Blog";
import "./Home.css";

const Home = () => {


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
