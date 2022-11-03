import Banner from "../Banner/banner";
import SelectorCategory from "./selectorCategory";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useEffect, useState } from "react";

function Menu()
{
  const [showCabecera, setShowCabecera] = useState(true);
  const showCabeceraSecundaria = () => {
    const nameUrl = window.location.pathname;
    console.log(nameUrl);
    if(nameUrl !== '/'){
      setShowCabecera(false);
    }
  }

  useEffect(()=> {
    showCabeceraSecundaria();
  }, [])

  return(
    <div class="container-fluid">
      <div class="row border-top px-xl-5">
        {
          showCabecera && <SelectorCategory />
        } 
        <div class="col-lg-9">
          {/* <nav class="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
            <a href="" class="text-decoration-none d-block d-lg-none">
              
              <h1 class="m-0 display-5 font-weight-semi-bold">Synerbyte</h1>
            </a>
            <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
              <div class="navbar-nav mr-auto py-0">
                <a href="index.html" class="nav-item nav-link">Home</a>
                <a href="shop.html" class="nav-item nav-link">Shop</a>
                <a href="detail.html" class="nav-item nav-link active">Shop Detail</a>
                <div class="nav-item dropdown">
                  <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
                  <div class="dropdown-menu rounded-0 m-0">
                    <a href="cart.html" class="dropdown-item">Shopping Cart</a>
                    <a href="checkout.html" class="dropdown-item">Checkout</a>
                  </div>
                </div>
                <a href="contact.html" class="nav-item nav-link">Contact</a>
              </div>
            </div>
          </nav> */}
          <Navbar collapseOnSelect expand="lg" className="navBar">
            <Container>
              <Navbar.Brand href="/home">
                <img
                  height="50"
                  className="logoNav"
                  alt="Repo"
                />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="botonesPaginas">
                <Nav.Link href="/nosotros" className="tituloNav">¿Qué hacemos?</Nav.Link>
                  <Nav.Link href="/servicios" className="tituloNav">Servicios</Nav.Link>
                  <Nav.Link href="/ayuda" className="tituloNav">Productos</Nav.Link>
                  <Nav.Link href="/contacto" className="tituloNav">Contáctanos</Nav.Link>
                  <Nav.Link href="https://blog.repo.com.pe/" className="tituloNav">Blog</Nav.Link>
                </Nav>
                <Nav className="botonesRegistro">
                  <Nav.Link eventKey={2} href="https://dashboard.repo.com.pe/" className="navPrincipal btn me-2 ">Iniciar sesión</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          {
            showCabecera && <Banner />
          }
        </div>
      </div>
    </div>
  );
}

export default Menu;