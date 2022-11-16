import Category from "../components/Category/category";
import Clientes from "../components/Clientes/clientes";
import Offer from "../components/Offer/offer";
import NewProducts from "../components/Products/newProducts";
import Products from "../components/Products/products";

function Home()
{
  return(
    <>
      <div className="container-fluid pt-5">
        <div className="row px-xl-5 pb-3">
          <div className="col-lg-4 col-md-6 col-sm-12 pb-1">
            <div className="d-flex align-items-center border mb-4" style={{padding: "30px"}}>
              <h1 className="fa fa-check text-primary m-0 mr-3"></h1>
              <h5 className="font-weight-semi-bold m-0">Productos de calidad</h5>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 pb-1">
            <div className="d-flex align-items-center border mb-4" style={{padding: "30px"}}>
              <h1 className="fa fa-shipping-fast text-primary m-0 mr-2"></h1>
              <h5 className="font-weight-semi-bold m-0">Envío gratuito</h5>
            </div>
          </div>
          {/* <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div className="d-flex align-items-center border mb-4" style={{padding: "30px"}}>
              <h1 className="fas fa-exchange-alt text-primary m-0 mr-3"></h1>
              <h5 className="font-weight-semi-bold m-0">14-Day Return</h5>
            </div>
          </div> */}
          <div className="col-lg-4 col-md-6 col-sm-12 pb-1">
            <div className="d-flex align-items-center border mb-4" style={{padding: "30px"}}>
              <h1 className="fa fa-phone-volume text-primary m-0 mr-3"></h1>
              <h5 className="font-weight-semi-bold m-0">Soporte 24/7</h5>
            </div>
          </div>
        </div>
      </div>
      <Category />
      <Offer />
      <Products />
      <div className="container-fluid bg-secondary my-5">
        <div className="row justify-content-md-center py-5 px-xl-5">
          <div className="col-md-6 col-12 py-5">
            <div className="text-center mb-2 pb-2">
              <h2 className="section-title px-5 mb-3"><span className="bg-secondary px-2">Entérate de nuestras promociones</span></h2>
              <p>Amet lorem at rebum amet dolores. Elitr lorem dolor sed amet diam labore at justo ipsum eirmod duo labore labore.</p>
            </div>
            <form action="">
              <div className="input-group">
                <input type="text" className="form-control border-white p-4" placeholder="Ingresa tu correo aquí." />
                <div className="input-group-append">
                  <button className="btn btn-primary px-4">Suscríbete</button>
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