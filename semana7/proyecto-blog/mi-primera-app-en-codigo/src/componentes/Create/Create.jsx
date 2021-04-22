import React, { useState } from "react";
import "antd/dist/antd.css";
import { v4 as id } from "uuid";
import { url } from "../../utils/utils";
import { Form, Input, Button } from "antd";
import { useHistory } from "react-router";

const Create = () => {
  const history = useHistory();
  const [titulo, setTitulo] = useState("");
  const [body, setBody] = useState("");
  const [autor, setAutor] = useState("");

  const enviarInfo = (event) => {
    event.preventDefault();
    const blog = { titulo, body, autor, id };

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blog),
    }).then(() => history.push("/"));
  };

  return (
    <div>
      <h2>Agregar un nuevo blog</h2>
      <Form name="Form codigo">
        <Form.Item
          label="Titulo del blog"
          name="titulo"
          rules={[
            {
              required: true,
              message: "Por favor , ingresa el titulo",
            },
          ]}
        >
          <Input
            value={titulo}
            onChange={(element) => setTitulo(element.target.value)}
          />
        </Form.Item>

        <Form.Item
          label="Contenido: "
          name="contenido"
          rules={[
            {
              required: true,
              message: "Por favor , ingresa el contenido",
            },
          ]}
        >
          <Input
            value={body}
            onChange={(element) => setBody(element.target.value)}
          />
        </Form.Item>

        <Form.Item
          label="Autor:  "
          name="autor"
          rules={[
            {
              required: true,
              message: "Por favor , ingresa el autor",
            },
          ]}
        >
          <Input
            value={autor}
            onChange={(element) => setAutor(element.target.value)}
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" onClick={enviarInfo}>
            Agregar blog
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Create;
