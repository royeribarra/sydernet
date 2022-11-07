import Banner from "../Banner/banner";
import SelectorCategory from "./selectorCategory";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import "./menu.css";

function Menu()
{
  const [showCabecera, setShowCabecera] = useState(true);
  const showCabeceraSecundaria = () => {
    const nameUrl = window.location.pathname;
    
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
          <Navbar collapseOnSelect expand="lg" className="navBar">
            <Container>
              <Navbar.Brand href="/home" className="logoNav-menu">
                <img
                  height="50"
                  alt="SynerByte"
                />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="botonesPaginas">
                  <Nav.Link href="/nosotros" className="tituloNav">¿Qué hacemos?</Nav.Link>
                  <Nav.Link href="/servicios" className="tituloNav">Servicios</Nav.Link>
                  <Nav.Link href="/categorias" className="tituloNav">Productos</Nav.Link>
                  <Nav.Link href="/contacto" className="tituloNav">Contáctanos</Nav.Link>
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