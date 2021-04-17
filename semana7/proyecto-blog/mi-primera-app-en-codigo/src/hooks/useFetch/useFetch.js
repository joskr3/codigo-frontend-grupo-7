import { useState, useffect } from "react";
//  const [blogs, setBlogs] = useState(null || []);
//  const [estaPendiente, setEstaPendiente] = useState(true);
//  const [error, setError] = useState("");

//   useEffect(() => {
//     fetch("http://localhost:8000/blogs")
//       .then((res) => {
//         return res.json();
//       })
//       .then((data) => {
//         setBlogs(data);
//         setEstaPendiente(false);
//         setError(null);
//       })
//       .catch((error) => {
//         setError(error.message);
//       });
//   }, []);

const useFetch = (url) => {
  const [data, setData] = useState(null);
  //isLoading para cuando esta cargando
  const [isLoading, setIsLoading] = useState(true);

  //hacer el hook e implemntar su uso dentro del hook useFetch

  useffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("No se pudo hacer ek fetch(la consulta al servidor)");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error.name);
        setIsLoading(false);
      });
  }, [url]);

  return { data, isLoading };
};

export default useFetch;
