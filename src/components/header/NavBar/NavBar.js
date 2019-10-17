import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

import styles from './NavBar.module.css';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isNavOpen: false,
    };
  }

  toggleNav = () => {
    const { isNavOpen } = this.state;
    this.setState({
      isNavOpen: !isNavOpen,
    });
  };

  render() {
    return (
      <>
        <Navbar dark className={styles.navbarsite} expand="md">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} className="mr-2" />
            <NavbarBrand className="mr-auto" href="/">
              <b>
                <i>Valentin the Hacker</i>
              </b>
            </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar className="ml-auto">
                <NavItem>
                  <NavLink activeClassName="active" className="nav-link" to="/">
                    Main page
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    activeClassName="active"
                    className="nav-link"
                    to="/posts"
                  >
                    Posts
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    activeClassName="active"
                    className="nav-link"
                    to="/warning"
                  >
                    Warning
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    activeClassName="active"
                    className="nav-link"
                    to="/information"
                  >
                    Information
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </>
    );
  }
}

export default NavBar;
