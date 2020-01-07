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
    text-align:center;

	@media (min-width:1024px) {
		padding-left: 24.5px;
    	padding-right: 24.5px;
    	text-decoration: none;
    	height: 100%;
		

    	:hover {
      	background-color: pink;
    	}
	}
    
    
`

const StyledNavLink = styled(NavLink)`
	font-size: 14px;
  	color : red;
	

  	@media (min-width: 1024px) {
	 	padding : 34px 24.5px 31px 24.5px;
		font-size: 16px;
  	}
  
`

const StyledNavbarBrand = styled(NavbarBrand)`
  position: fixed;
  margin: auto;
  margin-left: 40%;

  @media (min-width: 1024px) {
	  position: static;
	  margin: 20px 0 17px 0;
  }
`

const StyledNavbarText = styled(NavbarText)`
	font-size: 10px;
	font-family: 'Prompt', sans-serif;

	@media (min-width: 1024px) {
		font-size: 16px;
	}
`

const StyledNavbarToggler = styled(NavbarToggler)`
 	float: left ;
 	margin-left: 17px;
 	margin-top: 15px;
 	margin-bottom: 15.38px;
 	background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 ' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0,0,0, 1)' stroke-width='3' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
  
`

const ColorNav = styled(Navbar)`
  margin: 0;
  padding: 0;
  background-color : yellow; 

  @media (min-width: 1024px) {
	height: 86px;
  }
  
`
const StyledImg = styled.img`
    margin: auto;
	width: 63px;
	height: 32px;

	@media (min-width: 1024px) {
		margin-top: 20px;
  		margin-left: 100px;
  		margin-bottom: 17px;	
  		width: 96px;
  		height: 49px;
	}
    
  
`

const StyledButton = styled(Button)`
	margin-right: 16px;
	border-radius: 5px;
	border-color: black;
	padding: 2px 5px;
	
	@media (min-width: 1024px) {
		margin: 24px 94px 24px 0;
		padding: 10px 17px;
		border-radius: 9px;

		:hover {
			background-color: black;
			color: white;
		}
	}
  
`

const Example = (props) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<div className="sticky-top">
			<ColorNav expand="md" className="fixed-top">
				<StyledNavbarBrand href="/" ><StyledImg src="/Logo2.png" /></StyledNavbarBrand>
				<StyledNavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="mx-auto" navbar>
						<StyledNavItem>
							<Link href="/index">
								<StyledNavLink href="/" >HOME</StyledNavLink>
							</Link>
						</StyledNavItem>
						<StyledNavItem>
							<Link href="/">
								<StyledNavLink href="/">WHAT</StyledNavLink>
							</Link>
						</StyledNavItem>
						<StyledNavItem>
							<StyledNavLink href="/">WHO</StyledNavLink>
						</StyledNavItem>
						<StyledNavItem>
							<StyledNavLink href="/">BRANCH</StyledNavLink>
						</StyledNavItem>
						<StyledNavItem>
							<StyledNavLink href="/Where">WHERE</StyledNavLink>
						</StyledNavItem>
						<StyledNavItem>
							<StyledNavLink href="/">WHEN</StyledNavLink>
						</StyledNavItem>
						<StyledNavItem>
							<StyledNavLink href="/">FAQS</StyledNavLink>
						</StyledNavItem>
						<StyledNavItem>
							<StyledNavLink href="/">GAME</StyledNavLink>
						</StyledNavItem>
						<StyledNavItem>
							<StyledNavLink href="/contact">CONTACT</StyledNavLink>
						</StyledNavItem>
					</Nav>

				</Collapse>
				<StyledButton color="tranparent" ><StyledNavbarText>REGISTER</StyledNavbarText></StyledButton>
			</ColorNav>
		</div>


	);
}

export default Example;