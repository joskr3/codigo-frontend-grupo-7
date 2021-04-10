import React from "react";
import "./styles.css";
import lisa from "../../assets/images/lisa.jpg";

const Home = () => {
  const autor = "Josue";

  return (
    <div>
      <p style={{ color: "red" }}>
        Hola amigos de codiGo ,soy el creador de esta entrada {autor}
      </p>
      <img src={lisa} alt="imagen" />
    </div>
  );
};

export default Home;
