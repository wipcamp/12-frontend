import React, { useState } from 'react';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
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
  	color : red !important;
  	@media (min-width: 1024px) {
	 	padding : 34px 24.5px 31px 24.5px;
		font-size: 16px;
  	}
  
`

const StyledNavLink2 = styled(StyledNavLink)`
	font-size: 10px;
	color: black !important;
	padding: 2px 5px;
	@media (min-width: 1024px) {
		:hover{
	 		color: white !important;
		}
  	}
`

const StyledNavbarBrand = styled(NavbarBrand)`
	margin: 0;
	margin-left: 85.96px;
	
  @media (min-width: 1024px) {
	  
	  margin: 20px 0 17px 0;
  }
`


const StyledNavbarToggler = styled(NavbarToggler)`
 	border: none;
 	margin: 15px 0px 15px 17px;
 	padding: 0;
 	background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255,102,203, 1)' stroke-width='3' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E") !important;
	
`

const StyledNavbarTogglerOpen = styled(StyledNavbarToggler)`
	background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0,0,0, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M8 8 L24 24 M8 24 L24 8'/%3E%3C/svg%3E") !important;
  display: none;
	
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
	padding: 0;
	border-radius: 5px;
	border-color: black;
	margin-left: 54px;
	font-size: 10px;
	
	@media (min-width: 1024px) {
		margin: 24px 94px 24px 0;
		border-radius: 9px;
		:hover {
			background-color: black;
		}
	}
  
`

const Navbar1 = (props) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	const changeIconToX = () => {
		var hamberger = document.getElementById("hamberger");
		var close = document.getElementById("close");
		if (isOpen == false) {
			hamberger.style.display = 'none';
			close.style.display = 'inline';
		} 
	}

	const changeIconToHamberg = () => {
		var hamberger = document.getElementById("hamberger");
		var close = document.getElementById("close");
		if (isOpen == true) {
			hamberger.style.display = 'inline';
			close.style.display = 'none';
		}
	}

	return (
		<div className="sticky-top">
			<ColorNav expand="md" color="yellow" >
				<div id="navbar-mobile">
					<StyledNavbarToggler onClick={() => { toggle(); changeIconToX();}} id="hamberger"/>
					<StyledNavbarTogglerOpen  onClick={() => { toggle(); changeIconToHamberg();}} id="close" />
					<StyledNavbarBrand href="/">
						<StyledImg src="/Logo2.png" />
					</StyledNavbarBrand>
					<StyledButton color="tranparent">
						<StyledNavLink2 href="/" >REGISTER</StyledNavLink2>
					</StyledButton>
				</div>
				<Collapse isOpen={isOpen} navbar>
					<Nav navbar>
						<StyledNavItem>
							<Link href="/index">
								<StyledNavLink href="/" >HOME</StyledNavLink>
							</Link>
						</StyledNavItem>
						<StyledNavItem>
							<Link href="./App">
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
							<StyledNavLink href="/When">WHEN</StyledNavLink>
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

			</ColorNav>
		</div>


	);
}



export default Navbar1;