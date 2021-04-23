import React from "react";
import logo from "../../assets/images/logotipo/logo-codigo.png";
import { Header, Image, Button, ButtonGroup } from "@adobe/react-spectrum";

import { useHistory } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const history = useHistory();
  return (
    <Header>
      <Image maxWidth={100} src={logo} alt="logo" />
      <ButtonGroup
        marginTop={25}
        marginEnd={10}
        marginBottom={10}
        justifySelf={"center"}
      >
        <Button variant="primary" isQuiet onPress={() => history.push("/")}>
          Home
        </Button>
        <Button variant="primary" isQuiet>
          Contacto
        </Button>
        <Button variant="primary" isQuiet>
          Informacion
        </Button>
        <Button
          variant="primary"
          isQuiet
          onPress={() => history.push("/detail")}
        >
          Detalles
        </Button>
        <Button
          variant="primary"
          isQuiet
          onPress={() => history.push("/create")}
        >
          Crear Nuevo Blog
        </Button>
        <Button variant="primary" isQuiet>
          Registrate
        </Button>
        <Button variant="primary" isQuiet>
          Iniciar sesion
        </Button>
      </ButtonGroup>
    </Header>
  );
}

export default NavBar;
