import React, { Component } from 'react'
import styled from 'styled-components'
import { Parallax } from 'react-scroll-parallax';


const HomeContainer = styled.div`
    display: table;
    position: relative;
    height: 100vh;
    width: 100%;
    z-index: 1;
`

const HomeContent = styled.div`
    text-align: center;
    display: table-cell;
    vertical-align: middle;
`

const WipLogoImg = styled.img`
    width: 16em;
    
    @media (min-width: 768px) {
        width: 30em;
    }

    @media (min-width: 1024px) {
        width: 38.5em;
    }
`

const LogoImg = styled.img`
    margin: 0 5px;
    height: 30px;

    @media (min-width: 768px) {
        height: 50px;
    }

    @media (min-width: 1024px) {
        height: 60px;
    }
`

const LogoCana = styled(LogoImg)`
    height: 40px;

    @media (min-width: 768px) {
        height: 60px;
    }

    @media (min-width: 1024px) {
        height: 70px;
    }
`

const WrapLogoCana = styled.div`
    text-align: center;
    margin-top: 30px;
    margin-bottom: 30px;

    @media (min-width: 768px) {
        margin-top: 50px;
        margin-bottom: 50px;
    }

    @media (min-width: 1024px) {
        margin-top: 55px;
        margin-bottom: 55px;
    }
`

const StyledButton = styled.button`
    background-color: #F4693D;
    border: none;
    font-family: "Prompt-Regular";
    font-size: 12px;
    color: white !important;
    padding: 0.5em 1em;

    :hover {
        background-color: white;
        color: #F4693D !important;
    }

    @media (min-width: 768px) {
        font-size: 24px;
        padding: 0.725em 2em;
    }

    @media (min-width: 1024px) {
        padding: 0.75em 2.5em;
    }
`

const Wippo = styled.img`
    position: absolute;
    bottom: -25vh;
    right: 5vw;
    display:none;
    width: 15vw;
    z-index: 3;
    animation: float 5s infinite;
    @media (min-width: 1024px) {
	  display: block;
  }
  @keyframes float {
	0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(-20px);
	}
	100% {
		transform: translatey(0px);
	}
}
`


export default class Home extends Component {

    render() {
        return (
                <HomeContainer>
                    <HomeContent>
                    <Parallax y={[-15, 15]}>
                        <Parallax y={[15,-15]}>
                        <WipLogoImg src='/img/Home/logo.png' />
                        <WrapLogoCana>
                            <LogoCana src="/img/Home/LogoCana.png" />
                        </WrapLogoCana>
                        <StyledButton>REGISTER</StyledButton>
                        </Parallax>
                        {/* <Wippo src="/img/Home/newWippo.png" /> */}
                    </Parallax>
                    </HomeContent>
                </HomeContainer>
        )
    }
}


// listenScrollEvent = e => {
//     if (window.innerWidth >= 1024 && this.state.isDesktop) {
//         if (window.scrollY > 100) {
//             document.getElementById('navcolor').style.backgroundColor = this.state.defaultDesktop
//             document.getElementById('navcolor').style.height = '65px'
//             document.getElementById('navcolor').style.lineHeight = '50px'
//         } else {
//             document.getElementById('navcolor').style.backgroundColor = this.state.noBg
//             document.getElementById('navcolor').style.height = '89px'
//             document.getElementById('navcolor').style.lineHeight = '70px'
//         }
//     }
// }


// componentDidMount() {
//     window.addEventListener('resize', this.updateWindowDimensions)
//     window.addEventListener('scroll', this.listenScrollEvent)
// }

// updateWindowDimensions = () => {
//     this.setState({ width: window.innerWidth, height: window.innerHeight });
//     if (window.innerWidth < 1024) {
//         this.setState({ isDesktop: false})
//         document.getElementById('navcolor').style.backgroundColor = this.state.defaultMobile
//         document.getElementById('navcolor').style.height = ''
//     }else if (window.innerWidth >= 1024) {
//         this.setState({ isDesktop: true})
//         document.getElementById('navcolor').style.backgroundColor = this.state.defaultDesktop
//         document.getElementById('navcolor').style.height = '89px'
//     } 
// }