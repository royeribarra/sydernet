import React from 'react';
import Categoria1 from "../../assets/images/portatiles.png";
import Categoria2 from "../../assets/images/computadoras.jpeg";
import Categoria3 from "../../assets/images/componentes.jpg";
import Categoria4 from "../../assets/images/perifericos.jpg";
import Categoria5 from "../../assets/images/impresoras.jpg";
import Categoria6 from "../../assets/images/antivirus.webp";
import "./category.css";

function Category()
{
  return(
    <div className="container-fluid pt-5">
      <div className="row px-xl-5 pb-3">
        <div className="col-lg-4 col-md-6 pb-1">
          <div className="cat-item d-flex flex-column border mb-4 contenedor-img-cat" style={{padding: "30px"}}>
            <p className="text-right">15 Productos</p>
            <a href="/categoria/portatiles" className="cat-img position-relative overflow-hidden mb-3">
              <img className="img-fluid" src={Categoria1} alt="" />
            </a>
            <h5 className="font-weight-semi-bold m-0">Portátiles</h5>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 pb-1">
          <div className="cat-item d-flex flex-column border mb-4 contenedor-img-cat" style={{padding: "30px"}}>
            <p className="text-right">15 Productos</p>
            <a href="/categoria/computadoras" className="cat-img position-relative overflow-hidden mb-3">
              <img className="img-fluid" src={Categoria2} alt="" />
            </a>
            <h5 className="font-weight-semi-bold m-0">Computadoras</h5>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 pb-1">
          <div className="cat-item d-flex flex-column border mb-4" style={{padding: "30px"}}>
            <p className="text-right">15 Productos</p>
            <a href="/categoria/componentes" className="cat-img position-relative overflow-hidden mb-3">
              <img className="img-fluid" src={Categoria3} alt="" />
            </a>
            <h5 className="font-weight-semi-bold m-0">Componéntes</h5>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 pb-1">
          <div className="cat-item d-flex flex-column border mb-4" style={{padding: "30px"}}>
            <p className="text-right">15 Productos</p>
            <a href="/categoria/perifericos" className="cat-img position-relative overflow-hidden mb-3">
              <img className="img-fluid" src={Categoria4} alt="" />
            </a>
            <h5 className="font-weight-semi-bold m-0">Periféricos</h5>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 pb-1">
          <div className="cat-item d-flex flex-column border mb-4" style={{padding: "30px"}}>
            <p className="text-right">15 Productos</p>
            <a href="/categoria/impresoras" className="cat-img position-relative overflow-hidden mb-3">
              <img className="img-fluid" src={Categoria5} alt="" />
            </a>
            <h5 className="font-weight-semi-bold m-0">Impresoras</h5>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 pb-1">
          <div className="cat-item d-flex flex-column border mb-4" style={{padding: "30px"}}>
            <p className="text-right">15 Productos</p>
            <a href="/categoria/antivirus" className="cat-img position-relative overflow-hidden mb-3">
              <img className="img-fluid" src={Categoria6} alt="" />
            </a>
            <h5 className="font-weight-semi-bold m-0">Antivirus</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;