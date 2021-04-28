import React, { useCallback, useEffect, useState } from "react";
import Blog from "../BlogCard/BlogCard";
import "./CardsContainer.scss";
import { useHistory } from "react-router";
import { firestore } from "../../firebase";

const CardsContainer = () => {
  const history = useHistory();
  const redirigirRuta = (id) => {
    return history.push(`/detail/${id}`);
  };

  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = useCallback(async () => {
    const response = firestore.collection("blogs");
    const data = await response.get();
    data.docs.forEach((item) => {
      setBlogs([...blogs, item.data()]);
    });
  }, [blogs]);

  useEffect(() => {
    fetchBlogs();
  }, []);

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
            />
          ))}
      </div>
    </div>
  );
};

export default CardsContainer;
