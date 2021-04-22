import React from "react";
import useFetch from "../../hooks/useFetch/useFetch";
import Blog from "../Blog/Blog";
import "./Home.css";
import { useHistory } from "react-router";
import { url } from "../../utils/utils";
import { Col, Row } from "antd";

const Home = () => {
  const { data: blogs, isLoading, error } = useFetch(url);

  const history = useHistory();

  const redirigirRuta = (id) => {
    return history.push(`/detail/${id}`);
  };

  return (
    <>
      {isLoading && <p>Cargando...</p>}
      <Row span={4}>
        {blogs
          ? blogs?.map((blog) => (
              <Col key={blog.id} style={{ padding: 50, marginTop: 30 }}>
                <Blog
                  titulo={blog.titulo}
                  autor={blog.autor}
                  url={blog.url}
                  redirigir={() => redirigirRuta(blog.id)}
                ></Blog>
              </Col>
            ))
          : error && <p>{error}</p>}
      </Row>
    </>
  );
};

export default Home;
