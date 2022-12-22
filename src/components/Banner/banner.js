import { Carousel } from 'antd';
import React from 'react';
import Carousel1 from "../../assets/images/productos/promocion 2.jpg";
import Carousel2 from "../../assets/images/productos/promocion 3.jpg";
import Carousel3 from "../../assets/images/productos/promocion 4.jpg";
import Carousel4 from "../../assets/images/productos/promocion 5.jpg";

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

function Banner()
{
  return(
    <Carousel autoplay class="carousel slide">
      <div>
        <div class="carousel-item active" style={{height: "410px"}}>
          <img class="img-fluid" src={Carousel1} alt="Image" />
          <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
            <div class="p-3" style={{maxWidth: "700px"}}>
              <h4 class="text-light text-uppercase font-weight-medium mb-3">10% Off Your First Order</h4>
              <h3 class="display-4 text-white font-weight-semi-bold mb-4">Promocion 1</h3>
              <a href="/categorias" class="btn btn-light py-2 px-3">Shop Now</a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="carousel-item active" style={{height: "410px"}}>
          <img class="img-fluid" src={Carousel2} alt="Image" />
          <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
            <div class="p-3" style={{maxWidth: "700px"}}>
              <h4 class="text-light text-uppercase font-weight-medium mb-3">10% Off Your First Order</h4>
              <h3 class="display-4 text-white font-weight-semi-bold mb-4">Promocion 2</h3>
              <a href="/categorias" class="btn btn-light py-2 px-3">Shop Now</a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="carousel-item active" style={{height: "410px"}}>
          <img class="img-fluid" src={Carousel3} alt="Image" />
          <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
            <div class="p-3" style={{maxWidth: "700px"}}>
              <h4 class="text-light text-uppercase font-weight-medium mb-3">10% Off Your First Order</h4>
              <h3 class="display-4 text-white font-weight-semi-bold mb-4">Promocion 3</h3>
              <a href="/categorias" class="btn btn-light py-2 px-3">Shop Now</a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="carousel-item active" style={{height: "410px"}}>
          <img class="img-fluid" src={Carousel4} alt="Image" />
          <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
            <div class="p-3" style={{maxWidth: "700px"}}>
              <h4 class="text-light text-uppercase font-weight-medium mb-3">10% Off Your First Order</h4>
              <h3 class="display-4 text-white font-weight-semi-bold mb-4">Promocion 4</h3>
              <a href="/categorias" class="btn btn-light py-2 px-3">Shop Now</a>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}

export default Banner;