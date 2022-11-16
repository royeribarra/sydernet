function Footer()
{
  return(
    <div className="container-fluid bg-secondary text-dark mt-5 pt-5">
      <div className="row px-xl-5 pt-5">
        <div className="col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5">
          <a href="" className="text-decoration-none">
            <h1 className="mb-4 display-5 font-weight-semi-bold">
            Synerbyte
            </h1>
          </a>
          <p>Dolore erat dolor sit lorem vero amet. Sed sit lorem magna, ipsum no sit erat lorem et magna ipsum dolore amet erat.</p>
          <p className="mb-2"><i className="fa fa-map-marker-alt text-primary mr-3"></i>123 Street, New York, USA</p>
          <p className="mb-2"><i className="fa fa-envelope text-primary mr-3"></i>info@example.com</p>
          <p className="mb-0"><i className="fa fa-phone-alt text-primary mr-3"></i>+012 345 67890</p>
        </div>
        <div className="col-lg-8 col-md-12">
          <div className="row">
            <div className="col-md-4 mb-5">
              <h5 className="font-weight-bold text-dark mb-4">Comprar con confianza</h5>
              <div className="d-flex flex-column justify-content-start">
                <a className="text-dark mb-2" href="nosotros"><i className="fa fa-angle-right mr-2"></i>¿Qué hacemos?</a>
                <a className="text-dark mb-2" href="servicios"><i className="fa fa-angle-right mr-2"></i>Servicios</a>
                <a className="text-dark mb-2" href="categorias"><i className="fa fa-angle-right mr-2"></i>Productos</a>
                <a className="text-dark mb-2" href="contacto"><i className="fa fa-angle-right mr-2"></i>Contacto</a>
              </div>
            </div>
            <div className="col-md-4 mb-5">
              <h5 className="font-weight-bold text-dark mb-4">Nuestras marcas</h5>
              <div className="d-flex flex-column justify-content-start">
                <a className="text-dark mb-2" href="index.html"><i className="fa fa-angle-right mr-2"></i>HP</a>
                <a className="text-dark mb-2" href="shop.html"><i className="fa fa-angle-right mr-2"></i>Lenovo</a>
                <a className="text-dark mb-2" href="detail.html"><i className="fa fa-angle-right mr-2"></i>Apple</a>
                <a className="text-dark mb-2" href="cart.html"><i className="fa fa-angle-right mr-2"></i>Asus</a>
                <a className="text-dark mb-2" href="checkout.html"><i className="fa fa-angle-right mr-2"></i>Toshiba</a>
                <a className="text-dark" href="contact.html"><i className="fa fa-angle-right mr-2"></i>Intel</a>
              </div>
            </div>
            <div className="col-md-4 mb-5">
              <h5 className="font-weight-bold text-dark mb-4">Noticias</h5>
              <form action="">
                <div className="form-group">
                  <input type="text" className="form-control border-0 py-4" placeholder="Nombre" required="required" />
                </div>
                <div className="form-group">
                  <input type="email" className="form-control border-0 py-4" placeholder="Correo"
                        required="required" />
                </div>
                <div>
                  <button className="btn btn-primary btn-block border-0 py-3" type="submit">Suscríbete ahora</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="row border-top border-light mx-xl-5 py-4">
        <div className="col-md-6 px-xl-0">
          <p className="mb-md-0 text-center text-md-left text-dark">
              &copy; <a className="text-dark font-weight-semi-bold" href="#">SynerByte</a>. Todos los derechos reservados. Diseñado
              por 
              <a className="text-dark font-weight-semi-bold" href="#"> SynerByte</a><br />
              Distribuido por <a href="#" target="_blank">SynerByte</a>
          </p>
        </div>
        <div className="col-md-6 px-xl-0 text-center text-md-right">
          <img className="img-fluid" src="img/payments.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer;