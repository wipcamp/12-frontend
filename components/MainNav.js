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
    margin : 0 10px 0 10px;
    text-decoration: none;
    color: white;
    height: 100%;

    /* :hover{
    color : red;
    background-color : black; */
  }
    `

const StyledNavLink = styled(NavLink)`
  color : black;
`

const StyledNavbarBrand = styled(NavbarBrand)`
`

const ColorNav = styled(Navbar)`
  padding-top : 0px;
  padding-bottom : 0px;
  /* background-color : #A9A9A9; */
`
const StyledImg = styled.img`
    height : px;
`

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <ColorNav color = "light" light expand="md">
        <StyledNavbarBrand href="/" className="mr-auto"><StyledImg src="/Logo2.png"/></StyledNavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <StyledNavItem>
              <Link href="/index">
              <StyledNavLink href= "/" >HOME</StyledNavLink>
              </Link>
            </StyledNavItem>
            <StyledNavItem>
              <Link href="/test">
              <StyledNavLink href="/">WHAT</StyledNavLink>
              </Link>
            </StyledNavItem>
            <StyledNavItem>
              <StyledNavLink href ="/">WHO</StyledNavLink>
            </StyledNavItem>
            <StyledNavItem>
              <StyledNavLink href ="/">BRANCH</StyledNavLink>
            </StyledNavItem>
            <StyledNavItem>
              <StyledNavLink href ="/">WHERE</StyledNavLink>
            </StyledNavItem>
            <StyledNavItem>
              <StyledNavLink href ="/">WHEN</StyledNavLink>
            </StyledNavItem>
            <StyledNavItem>
              <StyledNavLink href ="/">FAQS</StyledNavLink>
            </StyledNavItem>
            <StyledNavItem>
              <StyledNavLink href ="/">GAME</StyledNavLink>
            </StyledNavItem>
          </Nav>
          <Button className ="ml-auto" size ="sm" color ="warning"><NavbarText>Register</NavbarText></Button>
        </Collapse>
      </ColorNav>
    </div>
  );
}

export default Example;