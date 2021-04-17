import React from "react";
import { useParams } from "react-router";

function Detail() {
  const { id } = useParams();

  return (
    <div>
      <p>Hola soy un detalle {id}</p>
    </div>
  );
}

export default Detail;
