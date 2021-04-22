import React from "react";
import "antd/dist/antd.css";
import "./Blog.css";
import { Card } from "antd";
import notFound from "../../assets/images/notfound/not-found.jpg";

const { Meta } = Card;

function Blog(props) {
  const { titulo, body, autor, url, redirigir, id } = props;
  return (
    <Card 
      className="tarjeta"
      hoverable
      style={{ width: 240 }}
      cover={
        url ? <img alt="card" src={url} /> : <img alt="card" src={notFound} />
      }
      onClick={() => redirigir(id)}
    >
      <Meta title={`${titulo} (escrito por ${autor})`} description={body} />
    </Card>
  );
}

export default Blog;
