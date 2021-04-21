import React from "react";
import { useParams, useHistory } from "react-router";
import useFetch from "../../hooks/useFetch/useFetch";
import { url } from "../../utils/utils";

import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const usarEstilos = makeStyles({
  principal: {
    maxWidth: 550,
    minHeight: 350,
    marginTop: 50,
    marginRight: 10,
    marginLeft: 10,
  },
  media: {
    height: 140,
    maxWidth: 250,
  },
});

function Detail() {
  const clases = usarEstilos();
  const { id } = useParams();
  const { data: blog, isLoading, error } = useFetch(`${url}${id}`);
  const history = useHistory();

  // POST,DELETE,PUT,GET, son los metodos para hacer peticiones
  // POST agrego una entrada(consulta)
  // DELETE , elimino una entrada(consulta)
  // PUT , actualizo una entrada(consulta)
  // GET, obtengo una entrada

  const eliminarEntrada = (id) => {
    fetch(`${url}${id}`, {
      method: "DELETE",
    }).then(() => history.push("/"));
  };

  return (
    <div>
      {isLoading && <div>Cargando...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <Card className={clases.principal}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h1">
              {blog.titulo}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {blog.body}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              color="primary"
              onClick={() => eliminarEntrada(blog.id)}
            >
              ELiminar esta entrada
            </Button>
          </CardActions>
        </Card>
      )}
    </div>
  );
}

export default Detail;
