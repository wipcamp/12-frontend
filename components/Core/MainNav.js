import React, { useState, Fragment, Component } from 'react';
import {
	Navbar,
	Nav,
	NavItem,
	NavLink,
} from 'reactstrap'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css'
import './sidebar.css'
const StyledNavItem = styled(NavItem)`
    text-align:center;
	font-weight:400;
	@media (min-width:1024px) {
    	text-decoration: none;
    	height: 100%;
	}
`

const StyledNavLink = styled(NavLink)`
	font-size: 14px;
  	color : white;
	background-color: ${ props => props.isCurrent ? "#37558a" : "unset"};
	transition: background-color 0.3s ease-in-out;
	:hover {
		color: black;
	}
  	@media (min-width: 1024px) {
	 	/* padding : 34px 24.5px 31px 24.5px; */
		width:160px !important;
		height: inherit !important;
		font-size: 16px;
		line-height: 48px;
		font-family: 'Prompt-medium', sans-serif;
		:hover {
		background-color: whitesmoke;
		}
  	}
  
`
const ColorNav = styled(Navbar)`
  margin: 0;
  padding: 0;
  background-color : #345185;
  transition : 0.2s ease-in-out;
  -webkit-transition : 0.2s ease-in-out;
  

  @media (min-width: 1024px) {
	height: 86px;
	background-color : rgba(196, 196, 196, 0.0);
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
const MainNavContainer = styled.div`
	display:none;
	@media (min-width: 1024px) {
		display: block
	}
`

export default class MainNav extends Component {
	state = {
		noBg: 'rgba(255, 255, 255, 0.0)',
		defaultDesktop: '#223557',
		isDesktop: true,
		isWhat: false,
		isTrack: false,
		isWhen: false,
		isFaqs: false
	}

	listenScrollEvent = () => {

		if (window.innerWidth >= 1024 && this.state.isDesktop) {
			if (document.getElementById('navcolor') !== null && document.getElementsByClassName("nav-style") !== null) {
				if (window.scrollY > 100) {
					document.getElementById('navcolor').style.backgroundColor = this.state.defaultDesktop
					document.getElementById('navcolor').style.height = '65px'
					let navLinkAfter = document.getElementsByClassName("nav-style")
					this.applyStyles(navLinkAfter,'50px')
				} else {
					document.getElementById('navcolor').style.backgroundColor = this.state.noBg
					document.getElementById('navcolor').style.height = '89px'
					let navLinkBefore = document.getElementsByClassName("nav-style")
					this.applyStyles(navLinkBefore,'70px')
				}

			}
		}
	}

	applyStyles(navStyle,lineHeight) {
		var i;
		for (i = 0; i < navStyle.length; i++) {
			navStyle[i].style.lineHeight = lineHeight;
		  }
	}

		updateWindowDimensions = () => {
			if (window.innerWidth < 1080) {
				this.setState({ isDesktop: false })
			} else if (window.innerWidth >= 1080) {
				this.setState({ isDesktop: true })
			}
		}

		updateCurrentSection = () => {
			let currentHash = window.location.hash
			this.setState({
				isWhat: false,
				isTrack: false,
				isWhen: false,
				isFaqs: false
			})
			if (currentHash == '#what') {
				this.setState({
					isWhat: true
				})
			} else if (currentHash == '#track') {
				this.setState({
					isTrack: true
				})

			} else if (currentHash == '#when') {
				this.setState({
					isWhen: true
				})
			} else if (currentHash == '#faqs') {
				this.setState({
					isFaqs: true
				})
			}
		}

		componentDidMount() {
			this.listenScrollEvent()
			window.addEventListener('resize', this.updateWindowDimensions)
			window.addEventListener('scroll', this.listenScrollEvent)
			window.addEventListener("hashchange", this.updateCurrentSection);
		}

		getViewport = () => {
			return this.state.isDesktop
		}


		render() {
			if (this.getViewport()) {
				return (
					<MainNavContainer className='fixed-top'>
						<ColorNav expand="lg" id="navcolor" isScrolled={this.state.isScrolled}>
							<div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
								<StyledNav navbar>
									<StyledNavItem>
										<StyledNavLink className="nav-style" href="#home">HOME</StyledNavLink>
									</StyledNavItem>
									<StyledNavItem >
										<StyledNavLink className="nav-style" isCurrent={this.state.isWhat} href="#what">WHAT</StyledNavLink>
									</StyledNavItem>
									<StyledNavItem >
										<StyledNavLink className="nav-style" isCurrent={this.state.isTrack} href="#track">TRACK</StyledNavLink>
									</StyledNavItem>
									<StyledNavItem >
										<StyledNavLink className="nav-style" isCurrent={this.state.isWhen} href="#when">WHEN</StyledNavLink>
									</StyledNavItem>
									<StyledNavItem>
										<StyledNavLink className="nav-style" isCurrent={this.state.isFaqs} href="#faqs">FAQS</StyledNavLink>
									</StyledNavItem>
								</StyledNav>
							</div>
						</ColorNav>
					</MainNavContainer>
				)
			} else {
				return (<MainNavContainer />)
			}
		}
	}
