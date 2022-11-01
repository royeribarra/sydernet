import React from 'react';
import Categoria1 from "../../assets/images/cat-1.jpg";
import Categoria2 from "../../assets/images/cat-2.jpg";
import Categoria3 from "../../assets/images/cat-3.jpg";
import Categoria4 from "../../assets/images/cat-4.jpg";
import Categoria5 from "../../assets/images/cat-5.jpg";
import Categoria6 from "../../assets/images/cat-6.jpg";

function Category()
{
  return(
    <div class="container-fluid pt-5">
      <div class="row px-xl-5 pb-3">
        <div class="col-lg-4 col-md-6 pb-1">
          <div class="cat-item d-flex flex-column border mb-4" style={{padding: "30px"}}>
            <p class="text-right">15 Productos</p>
            <a href="" class="cat-img position-relative overflow-hidden mb-3">
              <img class="img-fluid" src={Categoria1} alt="" />
            </a>
            <h5 class="font-weight-semi-bold m-0">Portátiles</h5>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 pb-1">
          <div class="cat-item d-flex flex-column border mb-4" style={{padding: "30px"}}>
            <p class="text-right">15 Productos</p>
            <a href="" class="cat-img position-relative overflow-hidden mb-3">
              <img class="img-fluid" src={Categoria2} alt="" />
            </a>
            <h5 class="font-weight-semi-bold m-0">Computadoras</h5>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 pb-1">
          <div class="cat-item d-flex flex-column border mb-4" style={{padding: "30px"}}>
            <p class="text-right">15 Productos</p>
            <a href="" class="cat-img position-relative overflow-hidden mb-3">
              <img class="img-fluid" src={Categoria3} alt="" />
            </a>
            <h5 class="font-weight-semi-bold m-0">Componéntes</h5>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 pb-1">
          <div class="cat-item d-flex flex-column border mb-4" style={{padding: "30px"}}>
            <p class="text-right">15 Productos</p>
            <a href="" class="cat-img position-relative overflow-hidden mb-3">
              <img class="img-fluid" src={Categoria4} alt="" />
            </a>
            <h5 class="font-weight-semi-bold m-0">Periféricos</h5>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 pb-1">
          <div class="cat-item d-flex flex-column border mb-4" style={{padding: "30px"}}>
            <p class="text-right">15 Productos</p>
            <a href="" class="cat-img position-relative overflow-hidden mb-3">
              <img class="img-fluid" src={Categoria5} alt="" />
            </a>
            <h5 class="font-weight-semi-bold m-0">Impresoras</h5>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 pb-1">
          <div class="cat-item d-flex flex-column border mb-4" style={{padding: "30px"}}>
            <p class="text-right">15 Productos</p>
            <a href="" class="cat-img position-relative overflow-hidden mb-3">
              <img class="img-fluid" src={Categoria6} alt="" />
            </a>
            <h5 class="font-weight-semi-bold m-0">Antivirus</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;