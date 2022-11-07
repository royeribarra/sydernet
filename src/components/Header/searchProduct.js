import React, { useState } from "react";
import Logo from "../../assets/images/logo2.jpeg";
import { Input } from 'antd';
import axios from 'axios';
import { toastr } from "react-redux-toastr";

const { Search } = Input;
function SearchProduct()
{
  const [descripcionABuscar, setDescripcionABuscar] = useState("");
  const [productos, setProductos] = useState([]);
  const [pagination, setPagination] = useState({
    current: 1,
    total: 0,
    pageSize: 12
  });

  const onSearch = (value) => {
    setDescripcionABuscar(value);
    fetchAll(null,null, value);
  }

  const fetchAll = (page=null, pageSize, descripcion = null) => {
    axios
      .get(`${process.env.REACT_APP_BASE_PATH}/productos-tienda?page=${page}`,  
        {
          params: {
            descripcion: page? descripcionABuscar: descripcion
          }
        }
      ).then(({ data }) => {
        if(data.total === 0){
          toastr.error("No se encontró ningún producto con la descripción.")
        }else{
          setProductos(data.data);
          setPagination({
            current: data.current_page,
            total: data.total,
            pageSize: 12
          });
        }
      });
  }

  return(
    <div class="row align-items-center py-3 px-xl-5">
      <div class="col-md-3 d-none d-lg-block">
        <a href="/" class="text-decoration-none">
          <h1 class="m-0 display-5 font-weight-semi-bold">Synerbyte</h1>
        </a>
        
      </div>
      <div class="col-md-6 text-left">
        <Search
          className="buscador-productos"
          style={{ padding: "0px", marginBottom: "15px" }}
          placeholder="Buscar productos" 
          allowClear
          onSearch={onSearch} 
        >
        </Search>
      </div>
    </div>
  );
}

export default SearchProduct;