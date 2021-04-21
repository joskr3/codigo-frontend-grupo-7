import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";

import notFound from "../../assets/images/notfound/not-found.jpg";

const usarEstilos = makeStyles({
  principal: {
    maxWidth: 250,
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

const Blog = (props) => {
  const clases = usarEstilos();
  const { titulo, body, autor, url, redirigir, id } = props;
  return (
    <Card className={clases.principal}>
      <CardActionArea onClick={() => redirigir(id)}>
        {url ? (
          <CardMedia className={clases.media} image={url} title={autor} />
        ) : (
          <CardMedia className={clases.media} image={notFound} title={autor} />
        )}
      </CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h1">
          {titulo}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {body}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => redirigir(id)} size="small" color="primary">
          Ir al detalle
        </Button>
      </CardActions>
    </Card>
  );
};

export default Blog;
