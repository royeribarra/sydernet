import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { DownOutlined } from '@ant-design/icons';
import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import "./selectorCategory.css";

const items = [
  {
    key: '1',
    type: 'group',
    label: 'Group title',
    children: [
      {
        key: '1-1',
        label: '1st menu item',
      },
      {
        key: '1-2',
        label: '2nd menu item',
      },
    ],
  },
  {
    key: '2',
    label: 'sub menu',
    children: [
      {
        key: '2-1',
        label: '3rd menu item',
      },
      {
        key: '2-2',
        label: '4th menu item',
      },
    ],
  },
  {
    key: '3',
    label: 'disabled sub menu',
    disabled: true,
    children: [
      {
        key: '3-1',
        label: '5d menu item',
      },
      {
        key: '3-2',
        label: '6th menu item',
      },
    ],
  },
];

function SelectorCategory()
{
  
  return(
  <div className="col-lg-3 d-none d-lg-block">
    <Dropdown autoClose={false}>
      <Dropdown.Toggle id="dropdown-basic" className='selectorCategoria'>
        Categorías
      </Dropdown.Toggle>

      <Dropdown.Menu className='categoriasProducto'>
        <Dropdown.Item href="/categoria/portatiles">Portátiles</Dropdown.Item>
        <Dropdown.Item href="/categoria/computadoras">Computadoras</Dropdown.Item>
        <Dropdown.Item href="/categoria/componentes">Componéntes</Dropdown.Item>
        <Dropdown.Item href="/categoria/perifericos">Periféricos</Dropdown.Item>
        <Dropdown.Item href="/categoria/impresoras">Impresoras</Dropdown.Item>
        <Dropdown.Item href="/categoria/antivirus">Antivirus</Dropdown.Item>
        <Dropdown.Item href="/categoria/videovigilancia">Videovigilancia</Dropdown.Item>
        <Dropdown.Item href="/categoria/suministros">Suministros</Dropdown.Item>
        <Dropdown.Item href="/categoria/softwares">Softwares</Dropdown.Item>
        <Dropdown.Item href="/categoria/conectividad-redes">Conectividad y redes</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </div>
  );
}

export default SelectorCategory;