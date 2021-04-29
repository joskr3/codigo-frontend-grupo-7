import React, { useCallback } from "react";
import "./SignUp.scss";
import { motion } from "framer-motion";
import firebase from "./firebase";
import { withRouter } from "react-router";

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await firebase
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  return (
    <div>
      <h2>Bienvenidos a codiGo</h2>
      <form onSubmit={handleSignUp}>
        <div>
          <label>Email: </label>
          <motion.input
            whileFocus={{ scale: 1.2 }}
            type="email"
            required
            name="email"
            placeholder="email"
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

        <button type="submit">Registrate</button>
      </form>
    </div>
  );
};

export default withRouter(SignUp);
