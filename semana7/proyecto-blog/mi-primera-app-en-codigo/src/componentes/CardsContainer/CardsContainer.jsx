import React, { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch/useFetch";
import Blog from "../BlogCard/BlogCard";
import "./CardsContainer.scss";
import { useHistory } from "react-router";
import { url } from "../../utils/utils";
import { firestore } from "../../firebase";

const CardsContainer = () => {
  const [blogs, setBlogs] = useState([]);
  const history = useHistory();
  const redirigirRuta = (id) => {
    return history.push(`/detail/${id}`);
  };

  const fetchBlogs = async () => {
    const response = firestore.collection("blogs");
    const data = await response.get();

    data.docs.forEach((item) => {
      setBlogs([...blogs, item.data()]);
    });
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="cardsContainer">
      <div className="cardsContainer__container">
        {blogs &&
          blogs?.map((blog) => (
            
            console.log(blog)
          ))}
      </div>
    </div>
  );
};

export default CardsContainer;
