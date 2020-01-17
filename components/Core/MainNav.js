import React, { useState, Fragment } from 'react';
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
    	text-decoration: none;
    	height: 100%;
		

	}
    
    
`

const StyledNavLink = styled(NavLink)`
	font-size: 14px;
  	color : white;
	
	:hover {
		color: white;
	}
  	@media (min-width: 1024px) {
	 	/* padding : 34px 24.5px 31px 24.5px; */
		width:110px !important;
		height: inherit !important;
		font-size: 16px;
		line-height: 70px;
		:hover {
		background-color: rgba(196, 196, 196, 0.5);
		transition: background 0.5s ease-in-out;
		}

		

  	}


	  
`

const StyledNavLink2 = styled(NavLink)`
	font-size: 10px;
	color: black;
	padding: 2px 5px;
	@media (min-width: 1024px) {
		font-size: 16px;
		:hover{
	 		color: white !important;
		}
  	}
`

const StyledNavbarBrand = styled(NavbarBrand)`
	margin: 0;
	padding: 0;
	/* margin-left: 85.96px; */
	
  @media (min-width: 1024px) {
	  /* margin: 20px 0 17px 0; */
  }
`


const StyledNavbarToggler = styled(NavbarToggler)`
 	border: none;
 	/* margin: 15px 0px 15px 17px; */
 	padding: 0;
	margin-left: 15px;
	margin-right: 20px; 
 	background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255,255,255, 1)' stroke-width='3' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E") !important;
	background-repeat: no-repeat !important;
	@media (min-width: 1024px) {
	  display: none
  }
`

const StyledNavbarTogglerOpen = styled(StyledNavbarToggler)`
	background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255,255,255, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M8 8 L24 24 M8 24 L24 8'/%3E%3C/svg%3E") !important;
  	display: none;
  	padding: 0;
	 margin-left: 15px; 
  	 background-repeat: no-repeat !important;
	   @media (min-width: 1024px) {
	  display: none
  }  
	
`

const ColorNav = styled(Navbar)`
  margin: 0;
  padding: 0;
  background-color : darkgray;
  transition : 0.5s ease-in-out;
  -webkit-transition : 0.45s ease-in-out;
  

  @media (min-width: 1024px) {
	height: 86px;
	background-color : rgba(196, 196, 196, 0.0);
  }
  
`
const StyledImg = styled.img`
	width: 63px;
	height: 32px;

	@media (min-width: 1024px) {
		/* margin-top: 20px;
  		margin-left: 100px;
  		margin-bottom: 17px;	 */
  		width: 96px;
  		height: 49px;
	}
    
  
`

const RegisterButton = styled(Button)`
	padding: 0.2em;
	border-radius: 5px;
	border-color: #505050;
	background-color: none;
	font-size: 10px;
	margin-right:16px;


	
	@media (min-width: 1024px) {
		/* margin: 24px 94px 24px 0; */
		border-radius: 9px;
		position: absolute;
		right: 18px;
		top: 24px;
		:hover {
			background-color: #505050;
		}
	}
  
`
const StyledNav = styled(Nav)`

	@media (min-width: 1024px) {
		width: 100%;
		height: inherit;
		display: flex;
		justify-content: center ; 

	}
`

const NavMobile = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
padding: 9px 0 8px 0;

@media (min-width: 1024px) {
		/* margin: 24px 94px 24px 0; */
		display: none;


	}
  
`




const Navbar1 = (props) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	const changeIconToX = () => {
		var hamberger = document.getElementById("hamberger");
		var close = document.getElementById("close");
		var bgcolor = document.getElementById("bgcolor");
		if (isOpen == false) {
			hamberger.style.display = 'none';
			close.style.display = 'inline';
			// bgcolor.style.backgroundColor = '#918686';
		} 
	}

	const changeIconToHamberg = () => {
		var hamberger = document.getElementById("hamberger");
		var close = document.getElementById("close");
		var bgcolor = document.getElementById("bgcolor");
		if (isOpen == true) {
			hamberger.style.display = 'inline';
			close.style.display = 'none';
			// bgcolor.style.backgroundColor = '#c4c4c4'
		}
	}


	return (
		<div className='fixed-top'>
			<ColorNav expand="lg" id="navcolor">
				<NavMobile>
					<StyledNavbarToggler onClick={() => { toggle(); changeIconToX();}} id="hamberger"/>
					<StyledNavbarTogglerOpen  onClick={() => { toggle(); changeIconToHamberg();}} id="close" />
					{/* <StyledNavbarBrand href="/">
						<StyledImg src="/img/Logo2.png" />
					</StyledNavbarBrand> */}
				</NavMobile>
				<Collapse isOpen={isOpen} navbar>
					<div style={{width:'100%',display:'flex',justifyContent:'center'}}>
					<StyledNav navbar>
						<StyledNavItem>
							<Link href="./App">
								<StyledNavLink href="/">WHAT</StyledNavLink>
							</Link>
						</StyledNavItem>
						<StyledNavItem>
							<StyledNavLink href="/">BRANCH</StyledNavLink>
						</StyledNavItem>
						<StyledNavItem>
							<StyledNavLink href="/When">WHEN</StyledNavLink>
						</StyledNavItem>
						<StyledNavItem>
							<StyledNavLink href="/">FAQS</StyledNavLink>
						</StyledNavItem>
					</StyledNav>
					</div>
				</Collapse>

			</ColorNav>
		</div>


	);
}

export default Navbar1

// const Navbar1 = (props) => {
// 	const [isOpen, setIsOpen] = useState(false);

// 	const toggle = () => setIsOpen(!isOpen);

// 	const changeIconToX = () => {
// 		var hamberger = document.getElementById("hamberger");
// 		var close = document.getElementById("close");
// 		var bgcolor = document.getElementById("bgcolor");
// 		if (isOpen == false) {
// 			hamberger.style.display = 'none';
// 			close.style.display = 'inline';
// 			bgcolor.style.backgroundColor = '#918686';
// 		} 
// 	}

// 	const changeIconToHamberg = () => {
// 		var hamberger = document.getElementById("hamberger");
// 		var close = document.getElementById("close");
// 		var bgcolor = document.getElementById("bgcolor");
// 		if (isOpen == true) {
// 			hamberger.style.display = 'inline';
// 			close.style.display = 'none';
// 			bgcolor.style.backgroundColor = '#c4c4c4'
// 		}
// 	}


// 	return (
// 		<div className="sticky-top">
// 			<ColorNav expand="lg" id="bgcolor">
// 				<NavMobile>
// 					<StyledNavbarToggler onClick={() => { toggle(); changeIconToX();}} id="hamberger"/>
// 					<StyledNavbarTogglerOpen  onClick={() => { toggle(); changeIconToHamberg();}} id="close" />
// 					<StyledNavbarBrand href="/">
// 						<StyledImg src="/img/Logo2.png" />
// 					</StyledNavbarBrand>
// 					<RegisterButton color="tranparent">
// 						<StyledNavLink2 href="/" >REGISTER</StyledNavLink2>
// 					</RegisterButton>
// 				</NavMobile>
// 				<Collapse isOpen={isOpen} navbar>
// 					<div style={{width:'100%',display:'flex',justifyContent:'center'}}>
// 					<StyledNav navbar>
// 						<StyledNavItem>
// 							<Link href="/index">
// 								<StyledNavLink href="/" >HOME</StyledNavLink>
// 							</Link>
// 							<Line></Line>
// 						</StyledNavItem>
// 						<StyledNavItem>
// 							<Link href="./App">
// 								<StyledNavLink href="/">WHAT</StyledNavLink>
// 							</Link>
// 						</StyledNavItem>
// 						<StyledNavItem>
// 							<StyledNavLink href="/">WHO</StyledNavLink>
// 						</StyledNavItem>
// 						<StyledNavItem>
// 							<StyledNavLink href="/">BRANCH</StyledNavLink>
// 						</StyledNavItem>
// 						<StyledNavItem>
// 							<StyledNavLink href="/Where">WHERE</StyledNavLink>
// 						</StyledNavItem>
// 						<StyledNavItem>
// 							<StyledNavLink href="/When">WHEN</StyledNavLink>
// 						</StyledNavItem>
// 						<StyledNavItem>
// 							<StyledNavLink href="/">FAQS</StyledNavLink>
// 						</StyledNavItem>
// 						<StyledNavItem>
// 							<StyledNavLink href="/">GAME</StyledNavLink>
// 						</StyledNavItem>
// 						<StyledNavItem>
// 							<StyledNavLink href="/contact">CONTACT</StyledNavLink>
// 						</StyledNavItem>
// 					</StyledNav>
// 					</div>
// 					<PlaceHolder></PlaceHolder>
// 				</Collapse>

// 			</ColorNav>
// 		</div>


// 	);
// }