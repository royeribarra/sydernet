import Category from "../components/Category/category";
import Clientes from "../components/Clientes/clientes";
import Offer from "../components/Offer/offer";
import NewProducts from "../components/Products/newProducts";
import Products from "../components/Products/products";

function Home()
{
  return(
    <>
      <div class="container-fluid pt-5">
        <div class="row px-xl-5 pb-3">
          <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div class="d-flex align-items-center border mb-4" style={{padding: "30px"}}>
              <h1 class="fa fa-check text-primary m-0 mr-3"></h1>
              <h5 class="font-weight-semi-bold m-0">Quality Product</h5>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div class="d-flex align-items-center border mb-4" style={{padding: "30px"}}>
              <h1 class="fa fa-shipping-fast text-primary m-0 mr-2"></h1>
              <h5 class="font-weight-semi-bold m-0">Free Shipping</h5>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div class="d-flex align-items-center border mb-4" style={{padding: "30px"}}>
              <h1 class="fas fa-exchange-alt text-primary m-0 mr-3"></h1>
              <h5 class="font-weight-semi-bold m-0">14-Day Return</h5>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div class="d-flex align-items-center border mb-4" style={{padding: "30px"}}>
              <h1 class="fa fa-phone-volume text-primary m-0 mr-3"></h1>
              <h5 class="font-weight-semi-bold m-0">24/7 Support</h5>
            </div>
          </div>
        </div>
      </div>
      <Category />
      <Offer />
      <Products />
      <div class="container-fluid bg-secondary my-5">
        <div class="row justify-content-md-center py-5 px-xl-5">
          <div class="col-md-6 col-12 py-5">
            <div class="text-center mb-2 pb-2">
              <h2 class="section-title px-5 mb-3"><span class="bg-secondary px-2">Stay Updated</span></h2>
              <p>Amet lorem at rebum amet dolores. Elitr lorem dolor sed amet diam labore at justo ipsum eirmod duo labore labore.</p>
            </div>
            <form action="">
              <div class="input-group">
                <input type="text" class="form-control border-white p-4" placeholder="Email Goes Here" />
                <div class="input-group-append">
                  <button class="btn btn-primary px-4">Subscribe</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <NewProducts />
      <Clientes />
    </>
  ) ; 
}

export default Home;