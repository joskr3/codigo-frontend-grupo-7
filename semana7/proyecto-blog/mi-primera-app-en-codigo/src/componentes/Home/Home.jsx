import React from "react";
import useFetch from "../../hooks/useFetch/useFetch";
import Blog from "../Blog/Blog";
import { useHistory } from "react-router";
import { url } from "../../utils/utils";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const usarEstilos = makeStyles(() => ({
  principal: {
    flexGrow: 1,
  },
}));

const Home = () => {
  const { data: blogs, isLoading, error } = useFetch(url);

  const history = useHistory();
  const redirigirRuta = (id) => {
    return history.push(`/detail/${id}`);
  };

  const clases = usarEstilos();

  return (
    <div className={clases.principal}>
      {isLoading && <p>Cargando...</p>}
      <Grid container spacing={3}>
        {blogs
          ? blogs?.map((blog) => (
              <Grid item xs={6} sm={3} key={blog.id}>
                <Blog
                  titulo={blog.titulo}
                  autor={blog.autor}
                  url={blog.url}
                  redirigir={() => redirigirRuta(blog.id)}
                ></Blog>
              </Grid>
            ))
          : error && <p>{error}</p>}
      </Grid>
    </div>
  );
};

export default Home;
