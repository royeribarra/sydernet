import { Carousel } from 'antd';
import React from 'react';
import Carousel1 from "../../assets/images/carousel-1.jpg";
import Carousel2 from "../../assets/images/carousel-2.jpg";

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
    // <div id="header-carousel" class="carousel slide" data-ride="carousel">
    //   <div class="carousel-inner">
          // <div class="carousel-item active" style={{height: "410px"}}>
          //     <img class="img-fluid" src="img/carousel-1.jpg" alt="Image" />
          //     <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
          //         <div class="p-3" style={{maxWidth: "700px"}}>
          //             <h4 class="text-light text-uppercase font-weight-medium mb-3">10% Off Your First Order</h4>
          //             <h3 class="display-4 text-white font-weight-semi-bold mb-4">Fashionable Dress</h3>
          //             <a href="" class="btn btn-light py-2 px-3">Shop Now</a>
          //         </div>
          //     </div>
          // </div>
    //       <div class="carousel-item" style={{height: "410px"}}>
    //           <img class="img-fluid" src="img/carousel-2.jpg" alt="Image" />
    //           <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
    //               <div class="p-3" style={{maxWidth: "700px"}}>
    //                   <h4 class="text-light text-uppercase font-weight-medium mb-3">10% Off Your First Order</h4>
    //                   <h3 class="display-4 text-white font-weight-semi-bold mb-4">Reasonable Price</h3>
    //                   <a href="" class="btn btn-light py-2 px-3">Shop Now</a>
    //               </div>
    //           </div>
    //       </div>
    //   </div>
    //   <a class="carousel-control-prev" href="#header-carousel" data-slide="prev">
    //       <div class="btn btn-dark" style={{width: "45px", height: "45px"}}>
    //           <span class="carousel-control-prev-icon mb-n2"></span>
    //       </div>
    //   </a>
    //   <a class="carousel-control-next" href="#header-carousel" data-slide="next">
    //       <div class="btn btn-dark" style={{width: "45px", height: "45px"}}>
    //           <span class="carousel-control-next-icon mb-n2"></span>
    //       </div>
    //   </a>
    // </div>
    <Carousel autoplay class="carousel slide">
      <div>
        <div class="carousel-item active" style={{height: "410px"}}>
          <img class="img-fluid" src={Carousel1} alt="Image" />
          <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
            <div class="p-3" style={{maxWidth: "700px"}}>
              <h4 class="text-light text-uppercase font-weight-medium mb-3">10% Off Your First Order</h4>
              <h3 class="display-4 text-white font-weight-semi-bold mb-4">Promocion 1</h3>
              <a href="" class="btn btn-light py-2 px-3">Shop Now</a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="carousel-item active" style={{height: "410px"}}>
          <img class="img-fluid" src={Carousel1} alt="Image" />
          <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
            <div class="p-3" style={{maxWidth: "700px"}}>
              <h4 class="text-light text-uppercase font-weight-medium mb-3">10% Off Your First Order</h4>
              <h3 class="display-4 text-white font-weight-semi-bold mb-4">Promocion 2</h3>
              <a href="" class="btn btn-light py-2 px-3">Shop Now</a>
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
              <h3 class="display-4 text-white font-weight-semi-bold mb-4">Promocion 3</h3>
              <a href="" class="btn btn-light py-2 px-3">Shop Now</a>
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
              <h3 class="display-4 text-white font-weight-semi-bold mb-4">Promocion 4</h3>
              <a href="" class="btn btn-light py-2 px-3">Shop Now</a>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}

export default Banner;