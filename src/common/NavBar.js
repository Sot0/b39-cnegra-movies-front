import React from 'react';
import { Navbar, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Media, NavbarBrand } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../styles/navbar.scss';

import authenticate from '../utils/authenticate';

import logo from '../assets/img/logo.png';
import profileDefault from '../assets/img/profile-default.jpg';

const NavBar = () => {
  const { payload } = authenticate();

  return (
    <Navbar className="navbar" >
      <NavbarBrand href="/">
        <Media className="logo" src={logo} />
      </NavbarBrand>
      <Link to="/" className="link">Explorar</Link>
      <Link to="/favorites" className="link">Mis favoritos</Link>
      <UncontrolledDropdown nav inNavbar >
        <DropdownToggle nav caret >
          <img className="profile-pic" src={payload.profile_pic || profileDefault} alt="Perfil" />
        </DropdownToggle>
        <DropdownMenu right >
          <DropdownItem >{payload.first_name}</DropdownItem>
          <DropdownItem divider />
          <DropdownItem ><Link to="/me" className="link">Mi perfil</Link></DropdownItem>
          <DropdownItem ><Link to="/logout" className="link">Cerrar sesión</Link></DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </Navbar>
  );
}

export default NavBar;