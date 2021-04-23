import React from "react";
import useFetch from "../../hooks/useFetch/useFetch";
import Blog from "../Blog/Blog";
import "./Home.css";
import { useHistory } from "react-router";
import { url } from "../../utils/utils";
import { Content, View } from "@react-spectrum/view";
import { Flex } from "@react-spectrum/layout";

const Home = () => {
  const { data: blogs, isLoading, error } = useFetch(url);

  const history = useHistory();

  //1.crear una funcion que use el hook use history(recibe una ruta como parametro)
  //y me debe redirigir a esa ruta : ej:/details/...aca le paso el id

  //2. le paso la funcion que cree en el paso al onclick de mi div

  const redirigirRuta = (id) => {
    return history.push(`/detail/${id}`);
  };

  return (
    // <Flex direction="row">
    //   {isLoading && <p>Cargando...</p>}

    //   {blogs
    //     ? blogs?.map((blog) => (
    //         <Blog
    //           titulo={blog.titulo}
    //           autor={blog.autor}
    //           url={blog.url}
    //           redirigir={() => redirigirRuta(blog.id)}
    //         />
    //       ))
    //     : error && <p>{error}</p>}
    // </Flex>

    <Flex direction="row" gap="size-100" wrap>
      {isLoading && <p>Cargando...</p>}
      {blogs
        ? blogs?.map((blog) => (
            <Blog
              key={blog.id}
              titulo={blog.titulo}
              autor={blog.autor}
              url={blog.url}
              redirigir={() => redirigirRuta(blog.id)}
            />
          ))
        : error && <p>{error}</p>}
    </Flex>
  );
};

export default Home;
