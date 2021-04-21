import React from "react";
import logo from "../../assets/images/logotipo/logo-codigo.png";
import { useHistory } from "react-router-dom";
import { AppBar, Button, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const usarEstilos = makeStyles((tema) => ({
  escritorio: {
    display: "flex",
    marginLeft: "auto",
  },
}));

const NavBar = () => {
  const clases = usarEstilos();
  const history = useHistory();
  return (
    <AppBar position="static" color="transparent">
      <Toolbar>
        <img className="logo" src={logo} alt="logo" style={{ maxWidth: 100 }} />
        <div className={clases.escritorio}>
          <Button onClick={() => history.push("/")}>Home</Button>
          <Button>Contacto</Button>
          <Button>Informacion</Button>
          <Button onClick={() => history.push("/detail")}>Detalles</Button>
          <Button onClick={() => history.push("/create")}>
            Crear Nuevo Blog
          </Button>
          <Button>Registrate</Button>
          <Button>Iniciar sesion</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
