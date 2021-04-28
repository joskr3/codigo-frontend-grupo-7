import React from "react";
import "./Login.scss";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Login = () => {
  const [usuario, setUsuario] = React.useState("");
  const [password, setPassword] = React.useState("");


  const sigIn = (e) =>  {
    e.preventDefault();

  }

  return (
    <div>
      <h2>Bienvenidos a codiGo</h2>
      <form onSubmit={sigIn}>
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
        <button>Agregar blog</button>
      </form>
    </div>
  );
};

export default Login;
