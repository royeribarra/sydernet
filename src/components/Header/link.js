import { NavLink } from "react-router-dom";
import React from "react";

function Link()
{
  return(
    <div className="row bg-secondary py-2 px-xl-5">
      <div className="col-lg-6 d-none d-lg-block">
        <div className="d-inline-flex align-items-center">
          <a className="text-dark" href="/faqs">FAQs</a>
          <span className="text-muted px-2">|</span>
          <a className="text-dark" href="/ayuda">Ayuda</a>
          <span className="text-muted px-2">|</span>
          <a className="text-dark" href="/soporte">Soporte</a>
        </div>
      </div>
      <div className="col-lg-6 text-center text-lg-right">
        <div className="d-inline-flex align-items-center">
          <a className="text-dark px-2" href="">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a className="text-dark px-2" href="">
            <i className="fab fa-instagram"></i>
          </a>
          <a className="text-dark pl-2" href="">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Link;