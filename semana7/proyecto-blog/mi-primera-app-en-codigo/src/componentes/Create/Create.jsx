import React, { useState } from "react";
import { v4 as id } from "uuid";
import { Typography, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { url } from "../../utils/utils";

const usarEstilos = makeStyles((tema) => ({
  principal: {
    "& > *": {
      display: "flex",
      flexDirection: "column",
      margin: tema.spacing(1),
      width: "25ch",
    },
  },
}));

const Create = () => {
  const clases = usarEstilos();
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
    }).then(() => alert("blog agregado!!!."));
  };

  return (
    <div>
      {/* <h2>Agregar un nuevo blog</h2>
      <form onSubmit={enviarInfo}>
        <div>
          <label>Titulo del blog: </label>
          <input
            type="text"
            required
            value={titulo}
            onChange={(element) => setTitulo(element.target.value)}
          />
        </div>
        <div>
          <label>Contenido: </label>
          <input
            type="text"
            required
            value={body}
            onChange={(element) => setBody(element.target.value)}
          />
        </div>
        <div>
          <label>Autor: </label>
          <input
            type="text"
            required
            value={autor}
            onChange={(element) => setAutor(element.target.value)}
          />
        </div>
        <button>Agregar blog</button>
      </form> */}
      <Typography variant="h4">Agregar un nuevo blog</Typography>

      <form className={clases.principal} noValidate autoComplete="off">
        <TextField
          id="standard-basic"
          label="Titulo del blog"
          type="text"
          required
          value={titulo}
          onChange={(element) => setTitulo(element.target.value)}
        />
        <TextField
          id="filled-basic"
          label="Contenido "
          variant="filled"
          type="text"
          required
          value={body}
          onChange={(element) => setBody(element.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Autor"
          variant="outlined"
          type="text"
          required
          value={autor}
          onChange={(element) => setAutor(element.target.value)}
        />
        <Button color="primary" variant="outlined" onClick={enviarInfo}>
          Agregar blog
        </Button>
      </form>
    </div>
  );
};

export default Create;
