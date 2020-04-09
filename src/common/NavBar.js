import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, NavbarText, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { useQuery } from 'react-apollo-hooks';
import gql from 'graphql-tag';

import logoNetflix from '../assets/img/logo-netflix.png';
import profileDefault from '../assets/img/profile-default.jpg';

const styles = {
  logo: {
      maxWidth: '8rem'
  },
  profilePicture: {
    maxWidth: '3rem'
  },
  navbar: {
    background: '#000',
    padding: '0rem 1rem'
  },
  dropdownToggle: {
    padding: '0rem 0rem 0.6rem 0rem',
  },
  username: {
    color: '#fff',
    margin: '0rem 1rem 0rem 0rem'
  },
  noMarginNoPadding: {
    padding: '0rem',
    margin: '0rem'
  }
};

const QUERY_ME = gql`
  query me {
    me {
      _id
      profile_pic
      first_name
    }
  }
`;

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const { data, loading, error } = useQuery(QUERY_ME);

  return (
    <Navbar style={styles.navbar} expand="sm">
        <NavbarBrand href="/"><img src={logoNetflix} alt="Netflix" style={styles.logo}/></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">Catálogo</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Mi Lista</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        <NavbarText style={styles.username}>{data ? data.me.first_name : null}</NavbarText>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret style={styles.dropdownToggle}>
            <img src={data ? data.me.profile_pic ? data.me.profile_pic: profileDefault : profileDefault} alt="Perfil" style={styles.profilePicture}/>
          </DropdownToggle>
          <DropdownMenu right style={styles.noMarginNoPadding}>
            <DropdownItem>Mi perfil</DropdownItem>
            <DropdownItem>Cerrar sesión</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
    </Navbar>
  );
}

export default NavBar;