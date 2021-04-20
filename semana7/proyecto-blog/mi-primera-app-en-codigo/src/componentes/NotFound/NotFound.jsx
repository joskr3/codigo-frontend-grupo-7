import React from "react";
import notFound from "./../../../src/assets/images/notfound/not-found.jpg";

const NotFound = () => {
  return (
    <div>
      <img style={{ maxWidth: 1080 }} src={notFound} alt="not found image" />
    </div>
  );
};

export default NotFound;
