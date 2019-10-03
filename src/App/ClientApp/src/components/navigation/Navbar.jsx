import React, { useState } from "react"
import { NavLink } from "react-router-dom"

import {
  Collapse,
  Container,
  Navbar as BootstrapNavbar,
  NavbarToggler,
  Nav,
  NavItem
} from "reactstrap"

const Navbar = () => {
  const [isOpen, setOpen] = useState(false)
  return (
    <BootstrapNavbar color="dark" dark className="navbar-expand-lg mb-4">
      <Container>
        <NavLink to="/" className="navbar-brand mr-4">
          Share Posts
        </NavLink>
        <NavbarToggler onClick={() => setOpen(!isOpen)} className="mr-2" />
        <Collapse isOpen={isOpen} onClick={() => setOpen(false)} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink
                className="nav-link"
                activeClassName="active"
                exact
                to="/"
              >
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/about"
              >
                About
              </NavLink>
            </NavItem>
          </Nav>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/signin"
              >
                Sign In
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/signup"
              >
                Sign Up
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </BootstrapNavbar>
  )
}

export default Navbar
