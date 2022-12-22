import React from "react";
import Producto1 from "../../assets/images/product-1.jpg";
import Producto2 from "../../assets/images/product-2.jpg";
import Producto3 from "../../assets/images/product-3.jpg";
import Producto4 from "../../assets/images/product-4.jpg";
import Producto5 from "../../assets/images/product-5.jpg";
import Producto6 from "../../assets/images/product-6.jpg";
import Producto7 from "../../assets/images/product-7.jpg";
import Producto8 from "../../assets/images/product-8.jpg";
import ImageCaraousel from "./imageCaraousel";
import InformationProduct from "./selectorProduct";
import { Tabs } from 'antd';
import SimilarProducts from "./similarProducts";

function DescripcionProduct()
{
  return(
    <div>
      <h4 className="mb-3">Product Description</h4>
      <p>Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam. Dolore diam stet rebum sed tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing, eos dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt.</p>
      <p>Dolore magna est eirmod sanctus dolor, amet diam et eirmod et ipsum. Amet dolore tempor consetetur sed lorem dolor sit lorem tempor. Gubergren amet amet labore sadipscing clita clita diam clita. Sea amet et sed ipsum lorem elitr et, amet et labore voluptua sit rebum. Ea erat sed et diam takimata sed justo. Magna takimata justo et amet magna et.</p>
    </div>
  );
}

function InformacionProduct()
{
  return(
    <div>
      <h4 className="mb-3">Additional Information</h4>
      <p>Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam. Dolore diam stet rebum sed tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing, eos dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt.</p>
      <div className="row">
        <div className="col-md-6">
          <ul className="list-group list-group-flush">
            <li className="list-group-item px-0">
                Sit erat duo lorem duo ea consetetur, et eirmod takimata.
            </li>
            <li className="list-group-item px-0">
                Amet kasd gubergren sit sanctus et lorem eos sadipscing at.
            </li>
            <li className="list-group-item px-0">
                Duo amet accusam eirmod nonumy stet et et stet eirmod.
            </li>
            <li className="list-group-item px-0">
                Takimata ea clita labore amet ipsum erat justo voluptua. Nonumy.
            </li>
          </ul> 
        </div>
        <div className="col-md-6">
          <ul className="list-group list-group-flush">
            <li className="list-group-item px-0">
                Sit erat duo lorem duo ea consetetur, et eirmod takimata.
            </li>
            <li className="list-group-item px-0">
                Amet kasd gubergren sit sanctus et lorem eos sadipscing at.
            </li>
            <li className="list-group-item px-0">
                Duo amet accusam eirmod nonumy stet et et stet eirmod.
            </li>
            <li className="list-group-item px-0">
                Takimata ea clita labore amet ipsum erat justo voluptua. Nonumy.
            </li>
            </ul> 
        </div>
      </div>
    </div>
  );
}

function ReviewProduct()
{
  return(
    <div>
      <div className="row">
        <div className="col-md-6">
          <h4 className="mb-4">1 review for "Colorful Stylish Shirt"</h4>
          <div className="media mb-4">
            <img src="img/user.jpg" alt="Image" className="img-fluid mr-3 mt-1" style={{width: "45px"}} />
            <div className="media-body">
              <h6>John Doe<small> - <i>01 Jan 2045</i></small></h6>
              <div className="text-primary mb-2">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
                <i className="far fa-star"></i>
              </div>
              <p>Diam amet duo labore stet elitr ea clita ipsum, tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h4 className="mb-4">Leave a review</h4>
          <small>Your email address will not be published. Required fields are marked *</small>
          <div className="d-flex my-3">
            <p className="mb-0 mr-2">Your Rating * :</p>
            <div className="text-primary">
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
            </div>
          </div>
          <form>
            <div className="form-group">
              <label for="message">Your Review *</label>
              <textarea id="message" cols="30" rows="5" className="form-control"></textarea>
            </div>
            <div className="form-group">
              <label for="name">Your Name *</label>
              <input type="text" className="form-control" id="name" />
            </div>
            <div className="form-group">
              <label for="email">Your Email *</label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="form-group mb-0">
              <input type="submit" value="Leave Your Review" className="btn btn-primary px-3" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

function ProductDetail()
{
  return(
    <>
      <div className="container-fluid bg-secondary mb-5">
        <div className="d-flex flex-column align-items-center justify-content-center" style={{minHeight: "300px" }}>
          <h1 className="font-weight-semi-bold text-uppercase mb-3">Detalle de producto</h1>
          <div className="d-inline-flex">
            <p className="m-0"><a href="">Inicio</a></p>
            <p className="m-0 px-2">-</p>
            <p className="m-0">Detalle de producto</p>
          </div>
        </div>
      </div>
      <div className="container-fluid py-5">
        <div className="row px-xl-5">
          <ImageCaraousel />
          <InformationProduct />
        </div>
        <div className="row px-xl-5">
          <Tabs
            defaultActiveKey="1"
            centered
            items={[
              {
                label: 'Descripción',
                key: '1',
                children: <DescripcionProduct />,
              },
              {
                label: 'Información',
                key: '2',
                children: <InformacionProduct />,
              },
              {
                label: 'Reviews',
                key: '3',
                children: <ReviewProduct />,
                disabled: true,
              },
            ]}
          />
        </div>
      </div>

      <div className="container-fluid py-5">
        <div className="text-center mb-4">
            <h2 className="section-title px-5"><span className="px-2">You May Also Like</span></h2>
        </div>
        <div className="row px-xl-5">
          <SimilarProducts />
        </div>
      </div>
    </>
  );
}

export default ProductDetail;