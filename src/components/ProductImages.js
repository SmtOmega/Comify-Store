import React, { useState } from "react";

const ProductImages = ({ images = [{ url: "" }] }) => {
  const [main, setMain] = useState(images[0]);
  return (
    <section>
      <img src={main.url} alt="main" className="main" />
      <div className="gallery">
          {images.map((image, index) =>{
              return <img src={image.url} key={index} alt="gallery" onClick={()=> setMain(images[index])} />
          })}
      </div>
    </section>
  );
};
export default ProductImages;
