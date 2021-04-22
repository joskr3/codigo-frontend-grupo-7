import React from "react";
import "antd/dist/antd.css";
import "./Blog.css";
import { Card } from "antd";

const { Meta } = Card;

function Blog(props) {
  const { titulo, body, autor, url, redirigir, id } = props;
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt="card" src={url} />}
      onClick={() => redirigir(id)}
    >
      <Meta title={`${titulo} (escrito por ${autor})`} description={body} />
    </Card>
  );
}

export default Blog;
