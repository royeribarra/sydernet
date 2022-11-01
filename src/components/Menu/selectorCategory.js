import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
import React from 'react';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

function SelectorCategory()
{
  return(
    <div className="col-lg-3 d-none d-lg-block">
      <a className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100" data-toggle="collapse" href="#navbar-vertical" style={{height: "65px", marginTop: "-1px", padding: "0 30px"}}>
        <h6 className="m-0">Categorías</h6>
        <i className="fa fa-angle-down text-dark"></i>
      </a>
      <nav className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0 bg-light" id="navbar-vertical" style={{width: "calc(100% - 30px)", zIndex: "1"}}>
        <div className="navbar-nav w-100 overflow-hidden" style={{height: "410px"}}>
          <div className="nav-item dropdown">
            <a href="#" className="nav-link" data-toggle="dropdown">Dresses <i className="fa fa-angle-down float-right mt-1"></i></a>
            <div className="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
              <a href="" className="dropdown-item">Men's Dresses</a>
              <a href="" className="dropdown-item">Women's Dresses</a>
              <a href="" className="dropdown-item">Baby's Dresses</a>
            </div>
          </div>
          <a href="" className="nav-item nav-link">Portátiles</a>
          <a href="" className="nav-item nav-link">Computadoras</a>
          <a href="" className="nav-item nav-link">Componéntes</a>
          <a href="" className="nav-item nav-link">Periféricos</a>
          <a href="" className="nav-item nav-link">Impresoras</a>
          <a href="" className="nav-item nav-link">Antivirus</a>
          <a href="" className="nav-item nav-link">Videovigilancia</a>
          <a href="" className="nav-item nav-link">Suministros</a>
          <a href="" className="nav-item nav-link">Softwares</a>
          <a href="" className="nav-item nav-link">Conectividad y redes</a>
        </div>
      </nav>
    </div>
  );
}

export default SelectorCategory;