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
import Link from 'next/link'
import { Button } from 'reactstrap'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css'

const StyledNavItem = styled(NavItem)`
    margin : 0 15px 0 15px;
    `

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/" className="mr-auto"><img src="/Logo2.png"/></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <StyledNavItem>
              <Link href="/index">
              <NavLink  href= "/" >HOME</NavLink>
              </Link>
            </StyledNavItem>
            <StyledNavItem>
              <Link href="/test">
              <NavLink href="/">WHAT</NavLink>
              </Link>
            </StyledNavItem>
            <StyledNavItem>
              <NavLink href ="/">WHO</NavLink>
            </StyledNavItem>
            <StyledNavItem>
              <NavLink href ="/">BRANCH</NavLink>
            </StyledNavItem>
            <StyledNavItem>
              <NavLink href ="/">WHERE</NavLink>
            </StyledNavItem>
            <StyledNavItem>
              <NavLink href ="/">WHEN</NavLink>
            </StyledNavItem>
            <StyledNavItem>
              <NavLink href ="/">FAQS</NavLink>
            </StyledNavItem>
            <StyledNavItem>
              <NavLink href ="/">GAME</NavLink>
            </StyledNavItem>
          </Nav>
          <Button className ="ml-auto" color ="warning"><NavbarText>Register</NavbarText></Button>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;