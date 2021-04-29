import React, { useEffect, useState } from "react";
import Blog from "../BlogCard/BlogCard";
import "./CardsContainer.scss";
import { useHistory } from "react-router";
import { firestore } from "../../firebase";

const CardsContainer = () => {
  const history = useHistory();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await firestore.collection("blogs").get();
      setBlogs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    fetchData();
  }, []);

  const redirigir = (id) => {
    console.log("redirigiendo");
    return history.push(`/detail/${id}`);
  };

  return (
    <div className="cardsContainer">
      <div className="cardsContainer__container">
        {blogs &&
          blogs?.map((blog, index) => (
            <Blog
              key={index}
              titulo={blog.titulo}
              autor={blog.autor}
              url={blog.url}
              redirigir={() => {
                redirigir(blog.id);
              }}
            />
          ))}
      </div>
    </div>
  );
};

export default CardsContainer;
