import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';
import Link from 'next/link'
import { Button } from 'reactstrap'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css'
const StyledNavItem = styled(NavItem)`
    padding-left: 24.5px;
    padding-right: 24.5px;
    text-decoration: none;
    height: 100%;

    :hover {
      background-color: pink;
    }
    
`

const StyledNavLink = styled(NavLink)`
padding : 40px 24.5px 40px 24.5px;
  color : red;
  :hover {
    color: blue;
  }
`

const StyledNavbarBrand = styled(NavbarBrand)`
  
`

const ColorNav = styled(Navbar)`
  margin: 0;
  padding: 0;
  background-color : yellow; 
`
const StyledImg = styled.img`
    margin-top: 20px;
  margin-left: 100px;
  margin-bottom: 17px;
  
`

const StyledButton = styled(Button)`
  margin: 24px 94px 24px 0;
`

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    
      <ColorNav expand="md">
        <StyledNavbarBrand href="/" className="mr-auto"><StyledImg src="/Logo2.png"/></StyledNavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="m-auto" navbar>
            <StyledNavItem>
              <Link href="/index">
              <StyledNavLink href= "/" >HOME</StyledNavLink>
              </Link>
            </StyledNavItem>
            <StyledNavItem>
              <Link href="/">
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
            <StyledNavItem>
              <StyledNavLink href ="/contact">CONTACT</StyledNavLink>
            </StyledNavItem>
          </Nav>
          <StyledButton color ="warning" ><NavbarText>Register</NavbarText></StyledButton>
        </Collapse>

      </ColorNav>

   
  );
}

export default Example;