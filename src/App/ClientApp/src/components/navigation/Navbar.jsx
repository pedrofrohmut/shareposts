import React, { useState } from 'react'
import { Collapse, Container, Navbar as BootstrapNavbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'

const Navbar = () => {
  const [isOpen, setOpen] = useState(false)
  return (
    <BootstrapNavbar color="faded" light>
      <Container>
        <NavbarBrand href="/" className="mr-auto">Share Posts</NavbarBrand>
        <NavbarToggler onClick={() => setOpen(!isOpen)} className="mr-2" />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </BootstrapNavbar>
  )
}

export default Navbar
