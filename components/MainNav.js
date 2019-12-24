import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'reactstrap'

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/"><img src="/Logo2.png"/></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">HOME</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">WHAT</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href ="/">WHO</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href ="/">BRANCH</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href ="/">WHERE</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href ="/">WHEN</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href ="/">FAQS</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href ="/">GAME</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;