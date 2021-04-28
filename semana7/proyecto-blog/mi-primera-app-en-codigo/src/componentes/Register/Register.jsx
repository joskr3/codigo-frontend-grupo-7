import React from "react";
import "./Register.scss";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Login = () => {
  const [usuario, setUsuario] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [nombres,setNombres] = React.useState("");
  const [dni,setDni] = React.useState("");
  const [direccion,setDireccion] = React.useState("");

  const signUp = (e) =>  {
    e.preventDefault();

  }

  return (
    <div>
      <h2>Bienvenidos a codiGo</h2>
      <form onSubmit={signUp}>
        <div>
          <label>Usuario:  </label>
          <motion.input
            whileFocus={{ scale: 1.2 }}
            type="text"
            required
            value={usuario}
            onChange={(element) => setUsuario(element.target.value)}
          />
        </div>
        <div>
          <label>Contraseña </label>
          <motion.input
            whileFocus={{ scale: 1.2 }}
            type="password"
            required
            value={password}
            onChange={(element) => setPassword(element.target.value)}
          />
        </div>
        <div>
          <label>Nombres completos </label>
          <motion.input
            whileFocus={{ scale: 1.2 }}
            type="text"
            required
            value={nombres}
            onChange={(element) => setNombres(element.target.value)}
          />
        </div>
        <div>
          <label>Dni </label>
          <motion.input
            whileFocus={{ scale: 1.2 }}
            type="number"
            required
            value={dni}
            onChange={(element) => setDni(element.target.value)}
          />
        </div>
        <div>
          <label>Direccion </label>
          <motion.input
            whileFocus={{ scale: 1.2 }}
            type="text"
            required
            value={direccion}
            onChange={(element) => setDireccion(element.target.value)}
          />
        </div>
        <button>Agregar blog</button>
      </form>
    </div>
  );
};

export default Login;
