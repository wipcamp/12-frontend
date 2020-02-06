import React, { Component } from 'react'
import styled from 'styled-components'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Wrap = styled.div`
    overflow: hidden;
`
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
    margin-bottom: 45px;

    @media (min-width: 768px) {
        margin-top: 50px;
        margin-bottom: 65px;
    }

    @media (min-width: 1024px) {
        margin-top: 55px;
        margin-bottom: 70px;
    }
`

const StyledButton = styled.a`
    background-color: #F4693D;
    text-decoration: none !important;
    font-family: "Prompt-Regular";
    font-size: 12px;
    color: white !important;
    padding: 0.5em 1em;
    transition: background-color 0.25s ease-in-out, color 0.25s ease-in-out;

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
    bottom: 5vh;
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

const Star1 = styled.img`
    position: absolute;
    top: 5vh;
    left: 5vw;
    width: 15vw;
    display: none;

    @media (min-width: 1024px) {
        display: block;
    }
`

const Star2 = styled.img`
    position: absolute;
    top: -5vh;
    right: 10vw;
    width: 20vw;
    display: none;

    @media (min-width: 1024px) {
        display: block;
    }
`

const Star3 = styled(Star2)`
    top: 0vh;
    right: -3vw;
`

const Cloud1 = styled(Star1)`
    left: -13vw;
    width: 55vw;
    z-index: -1;

    @media (min-width: 1024px) {
        top:80vh;
    }

    @media (min-width: 1280px) {
        top:77vh;
    }
`

const Cloud2 = styled(Cloud1)`
    top: 73vh;
    left: -0vw;
    width: 50vw;
`
const Cloud3 = styled(Star2)`
    right: 0vw;
    width: 50vw;
    z-index: -1;

    @media (min-width: 1024px) {
        top: 84vh;
    }

    @media (min-width: 1280px) {
        top:80vh;
    }
`

const Cloud4 = styled(Cloud3)`
    right: -41.5vw;
    width: 60vw;

    @media (min-width: 1024px) {
        top: 78vh;
    }

    @media (min-width: 1280px) {
        top:75vh;
    }
    
`

export default class Home extends Component {

    componentDidMount = () => {
        AOS.init({
            duration: 1500
        })
    }

    render() {
        return (
            <Wrap>
                <HomeContainer>
                    <Star1 src="/img/Core/star1.png" data-aos="fade-down-right" />
                    <Star2 src="/img/Core/star2.png" data-aos="fade-down-left" data-aos-duration="2000" />
                    <Star3 src="/img/Core/star3.png" data-aos="fade-down-left" data-aos-duration="2500" />
                    <Cloud1 src="/img/Core/cloud1.png" data-aos="fade-up-right" />
                    <Cloud2 src="/img/Core/cloud2.png" data-aos="fade-up-right" data-aos-duration="2500" />
                    <Cloud3 src="/img/Core/cloud3.png" data-aos="fade-up-left" data-aos-duration="2500" />
                    <Cloud4 src="/img/Core/cloud4.png" data-aos="fade-up-left" />
                    <HomeContent>
                        <WipLogoImg src='/img/Core/logo.png' />
                        <WrapLogoCana>
                            <LogoCana src="/img/Home/LogoCana.png" />
                        </WrapLogoCana>
                        <StyledButton href="https://itim.wip.camp/login">REGISTER</StyledButton>
                        
                        <Wippo src="/img/Core/Wippo.png" data-aos="fade-up-left"/>
                    
                    </HomeContent>
                </HomeContainer>
            </Wrap>
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