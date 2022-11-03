import React from "react";
import Producto1 from "../../assets/images/product-1.jpg";
import Producto2 from "../../assets/images/product-2.jpg";
import Producto3 from "../../assets/images/product-3.jpg";
import Producto4 from "../../assets/images/product-4.jpg";
import Producto5 from "../../assets/images/product-5.jpg";
import Producto6 from "../../assets/images/product-6.jpg";
import Producto7 from "../../assets/images/product-7.jpg";
import Producto8 from "../../assets/images/product-8.jpg";
import { Carousel } from 'antd';

function ImageCaraousel()
{
  return(
    <div className="col-lg-5 pb-5">
      <Carousel autoplay>
        <div className="carousel-item active">
            <img className="w-100 h-100" src={Producto1} alt="Image" />
        </div>
        <div className="carousel-item">
            <img className="w-100 h-100" src={Producto2} alt="Image" />
        </div>
        <div className="carousel-item">
            <img className="w-100 h-100" src={ Producto3 } alt="Image"/>
        </div>
        <div className="carousel-item">
            <img className="w-100 h-100" src={ Producto4 } alt="Image" />
        </div>
      </Carousel>
    </div>
  );
}

export default ImageCaraousel;