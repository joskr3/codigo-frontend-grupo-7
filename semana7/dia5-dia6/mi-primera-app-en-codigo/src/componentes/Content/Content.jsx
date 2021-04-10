import React, { useState } from "react";
import "./styles.css";

const Content = () => {
  
  const [likes, aumentarLikes] = useState(0);


  const manejarAumentoLikes = () => {
    aumentarLikes(likes + 1);
  };

  // function manejarAumentoLikes(){
  //   aumentarLikes(likes + 1);
  // };

  return (
    <div>
      <h3>Bienvenid@s a mi publicacion</h3>

      <p style={{ width: "50%" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis iste
        omnis optio voluptas, minima deleniti excepturi vero facere veritatis
        tenetur neque quos, perspiciatis at numquam, est consectetur
        necessitatibus quae voluptates!
      </p>

      <button onClick={() => manejarAumentoLikes()}>Me gusta este post</button>

      <p>Likes: {likes} </p>
    </div>
  );
};

export default Content;
