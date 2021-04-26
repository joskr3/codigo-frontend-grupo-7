import React, { useEffect, useState } from "react";
import Blog from "../BlogCard/BlogCard";
import "./CardsContainer.scss";
import { useHistory } from "react-router";
import { firestore } from "../../firebase";

const CardsContainer = () => {
  const history = useHistory();
  const redirigirRuta = (id) => {
    return history.push(`/detail/${id}`);
  };

  const [blogs,setBlogs]=useState([])

  const fetchBlogs=async()=>{
    const response=firestore.collection('blogs');
    const data=await response.get();
    data.docs.forEach(item=>{
      console.log(item,"ITEM")
     setBlogs([...blogs,item.data()])
    })
  }

  useEffect(() => {
    fetchBlogs();
  }, [])

  return (
    <div className="cardsContainer">
      <div className="cardsContainer__container">
        {blogs &&
          blogs?.map((blog) => (
            <div className="cardsContainer__container__card">
              <Blog
                key={blog.id}
                titulo={blog.titulo}
                autor={blog.autor}
                url={blog.url}
                redirigir={() => redirigirRuta(blog.id)}
              ></Blog>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CardsContainer;
