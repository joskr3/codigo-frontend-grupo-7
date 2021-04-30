import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import firebase from "./../../firebase";
import { AuthContext } from "./../../Auth";
import "./Login.scss";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await firebase
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );
  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <h2>Bienvenidos a codiGo</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email: </label>
          <motion.input
            whileFocus={{ scale: 1.2 }}
            required
            name="email"
            type="email"
            placeholder="Email"
          />
        </div>
        <div>
          <label>Contraseña </label>
          <motion.input
            whileFocus={{ scale: 1.2 }}
            required
            name="password"
            type="password"
            placeholder="Password"
          />
        </div>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default withRouter(Login);
