import React, { useState } from "react";
import "antd/dist/antd.css";
import { Form, Input, Button } from "antd";
import { useHistory } from "react-router";

const Contact = () => {
  const history = useHistory();
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [dni, setDNI] = useState("");
  const [correo, setCorreo] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const enviarInfo = (event) => {
    event.preventDefault();
    console.log(nombres, apellidos, dni.correo, descripcion);
    history.push("/");
  };

  return (
    <div>
      <h2>Contactanos</h2>
      <Form name="Datos">
        <Form.Item
          label="Nombres"
          name="nombres"
          rules={[
            {
              required: true,
              message: "Por favor , ingresa tus nombres",
            },
          ]}
        >
          <Input
            value={nombres}
            onChange={(element) => setNombres(element.target.value)}
          />
        </Form.Item>

        <Form.Item
          label="Apellidos"
          name="apellidos"
          rules={[
            {
              required: true,
              message: "Por favor , ingresa tus apellidos",
            },
          ]}
        >
          <Input
            value={apellidos}
            onChange={(element) => setApellidos(element.target.value)}
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
            value={dni}
            onChange={(element) => setDNI(element.target.value)}
          />
        </Form.Item>

        <Form.Item
          label="Correo:  "
          name="correo"
          rules={[
            {
              required: true,
              message: "Por favor , ingresa el correo",
            },
          ]}
        >
          <Input
            value={correo}
            onChange={(element) => setCorreo(element.target.value)}
          />
        </Form.Item>

        <Form.Item
          label="Descripcion"
          name="descripcion"
          rules={[
            {
              required: true,
              message: "Por favor , ingresa  una descripcion",
            },
          ]}
        >
          <Input
            value={descripcion}
            onChange={(element) => setDescripcion(element.target.value)}
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" onClick={enviarInfo}>
            Enviar
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Contact;
