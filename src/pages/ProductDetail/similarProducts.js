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

function SimilarProducts()
{
  return(
    <div className="row">
      <div className="col-md-3">
        <div className="card product-item border-0">
          <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
            <img className="img-fluid w-100" src={ Producto1 } alt="" />
          </div>
          <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
            <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
            <div className="d-flex justify-content-center">
              <h6>$123.00</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
            </div>
          </div>
          <div className="card-footer d-flex justify-content-between bg-light border">
            <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>View Detail</a>
            <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card product-item border-0">
          <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
            <img className="img-fluid w-100" src={Producto2} alt="" />
          </div>
          <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
            <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
            <div className="d-flex justify-content-center">
              <h6>$123.00</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
            </div>
          </div>
          <div className="card-footer d-flex justify-content-between bg-light border">
            <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>View Detail</a>
            <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card product-item border-0">
          <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
            <img className="img-fluid w-100" src={Producto3} alt="" />
          </div>
          <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
            <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
            <div className="d-flex justify-content-center">
              <h6>$123.00</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
            </div>
          </div>
          <div className="card-footer d-flex justify-content-between bg-light border">
            <a href="/product-detail" className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>View Detail</a>
            <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card product-item border-0">
          <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
            <img className="img-fluid w-100" src={Producto4} alt="" />
          </div>
          <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
            <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
            <div className="d-flex justify-content-center">
              <h6>$123.00</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
            </div>
          </div>
          <div className="card-footer d-flex justify-content-between bg-light border">
            <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>View Detail</a>
            <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SimilarProducts;