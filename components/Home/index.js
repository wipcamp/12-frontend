import React, { Component, Fragment } from 'react'
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

const StyledButton = styled.button`
    background-color: #F4693D;
    border-color: transparent;
    text-decoration: none !important;
    font-family: 'NotoSans-Medium';
    font-size: 16px;
    color: white !important;
    padding: 0.75em 3em;
    transition: background-color 0.25s ease-in-out, color 0.25s ease-in-out;
    border-radius: 5px;
    filter: brightness(60%);

    /* :hover {
        background-color: white;
        color: #F4693D !important;
    } */

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
    /* bottom: 2vh;
    right: 40vw;
    width: 20vw; */
    display: none;
    z-index: 3;
    animation: float 5s infinite;
    
    @media (min-width: 1024px) {
        display: block;
        bottom: 5vh;
        right: 5vw;
        width: 15vw;
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
    width: 10vw;
`

const Star2 = styled.img`
    position: absolute;
    top: -5vh;
    right: 10vw;
    width: 20vw;
`

const Star3 = styled(Star2)`
    top: 0vh;
    right: -3vw;
`

const Zodiac1 = styled(Star2)`
    right: 15vw;
    top: 22vh;
    transform: rotate(40deg);
    width: 3vw;
`

const Zodiac2 = styled(Star1)`
    transform: rotate(-40deg);
    width: 8vw;
    top: 2vh;
    left: 12vw;
`

const Zodiac3 = styled(Star1)`
    top: 20vh;
    width: 4vw;
`

const CloudLeft = styled.img`
    position: absolute;
    margin-top: -10vh;
    left: -7vw;
    width: 42vw;
    bottom: -2vh;
`

const CloudLeft2 = styled(CloudLeft)`
    width: 32vw;
    left: 8vw;
`

const CloudRight = styled.img`
    position: absolute;
    width: 40vw;
    bottom: -2vh;
    right: -5vw;
    z-index: 3;
`

const CloudRight2 = styled(CloudRight)`
    right: -8vw;
    z-index: 2;
    width: 41vw;
`

const CloudRight3 = styled(CloudRight)`
    right: -25vw;
    z-index: 1;
    bottom: 0vh;
    width: 45vw;
`

const StyledP = styled.p`
    color: white;
    font-family: 'Sarabun-Regular';
`
const StarAndCloud = () => {
    return (
        <Fragment>
            <Zodiac1 src="/img/Core/zodiac1.png" data-aos="fade-down" alt="Gemini" />
            <Zodiac2 src="/img/Core/zodiac2.png" data-aos="fade-down" alt="Taurus" />
            <Zodiac3 src="/img/Core/zodiac3.png" data-aos="fade-down" alt="Virgo" />
            <Star1 src="/img/Core/star1.png" data-aos="fade-down-right" alt="group of stars"/>
            <Star2 src="/img/Core/star2.png" data-aos="fade-down-left" data-aos-duration="2000" alt="group of stars"/>
            <Star3 src="/img/Core/star3.png" data-aos="fade-down-left" data-aos-duration="2500" alt="group of stars"/>
            <CloudLeft src="/img/Core/cloudleft.png" data-aos="fade-up-right" data-aos-offset="-100" alt="cloud" />
            <CloudLeft2 src="/img/Core/cloudleft.png" data-aos="fade-up-right" data-aos-duration="2000" data-aos-offset="-100" alt="cloud" />
            <CloudRight src="/img/Core/cloudright1.png" data-aos="fade-up-left" data-aos-offset="-100" alt="cloud" />
            <CloudRight2 src="/img/Core/cloudright2.png" data-aos="fade-up-left" data-aos-duration="2000" data-aos-offset="-100" alt="cloud" />
            <CloudRight3 src="/img/Core/cloudright3.png" data-aos="fade-up-left" data-aos-duration="2500" data-aos-offset="-100" alt="cloud" />
        </Fragment>
    )
}
export default class Home extends Component {
    state = {
        isMobile: true
    };

    componentDidMount = () => {
        window.addEventListener('resize', this.updateDimensions)
        this.updateDimensions()
        AOS.init({
            duration: 1500
        })
    }

    updateDimensions = () => {
        if (window.innerWidth < 1080) {
            this.setState({
                isMobile: true
            })
        } else {
            this.setState({
                isMobile: false
            })
        }
    };

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    }

    getType = () => {
        return this.state.isMobile
    }

    render() {
        return (
            <HomeContainer>
                {
                    (this.getType()) ?
                        <Fragment></Fragment>
                        : <StarAndCloud />
                }
                <HomeContent>
                    <WipLogoImg src='/img/Core/logo.png' alt="wipcamp#12 logo" />
                    <WrapLogoCana>
                        <LogoCana src="/img/Home/LogoCana.png" alt="kmutt logo, sit logo, wipcamp logo" />
                    </WrapLogoCana>
                    {/* <a href="https://itim.wip.camp/"> */}
                        <StyledButton disabled>
                            REGISTER
                        </StyledButton>
                    {/* </a> */}
                    <StyledP className="mt-2">เปิดรับสมัครวันที่ 21 กุมภาพันธ์ 2563</StyledP>
                    <Wippo src="/img/Core/Wippo.png" alt="Wippo" />
                </HomeContent>
            </HomeContainer>
        )
    }
}


