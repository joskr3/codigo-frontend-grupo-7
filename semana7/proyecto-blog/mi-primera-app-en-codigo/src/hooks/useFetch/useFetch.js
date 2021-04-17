import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  //isLoading para cuando esta cargando
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("No se pudo hacer el fetch(la consulta al servidor)");
        }
        return res.json();
      })
      .then((data) => {
        setError(null);
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error.message);
      });
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
