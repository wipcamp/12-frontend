import React, { Component } from 'react'
import Countdown from 'react-countdown'
import styled from 'styled-components'
import { SubHeader } from './Text'
import StarParticle from './Particle'
import AOS from 'aos';
import 'aos/dist/aos.css';

const OverFlowHidden = styled.div`
    overflow: hidden;
`

const CountdownContainer = styled.div`
    font-family: 'NotoSansThai-Regular', sans-serif;
    width: 100%;
    height: 100vh;
    position: relative;
    display: table;
`

const Wrap = styled.div`
    display: table-cell;
    vertical-align: middle;
    text-align: center;
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

const ComingSoonText = styled.h1`
    font-family: 'ChakraPetch-Regular';
    font-size: 24px;
    color: #6F7F8D;

    @media (min-width: 768px) {
        font-size: 40px;
    }

    @media (min-width: 1024px) {
        font-size: 48px;
    }
`

const StayTune = styled(ComingSoonText)`
    font-family: 'ChakraPetch-Regular';
    font-size: 18px;

    @media (min-width: 768px) {
        font-size: 36px;
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

    @media (min-height: 720px) {
        top: 73vh;
    }

    @media (min-height: 768px) {
        top: 80vh;
    }

    @media (min-height: 794px) {
        top: 70vh;
    }

    @media (min-height: 900px) {
        top: 75vh;
    }

    @media (min-height: 1024px) {
        top: 81vh;
    }

    @media (min-height: 1080px) {
        top: 75vh;
    }

    @media (min-height: 1366px) {
        top: 89vh;
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

    @media (min-height: 720px) {
        top: 78vh;
    }

    @media (min-height: 768px) {
        top: 83vh;
    }

    @media (min-height: 794px) {
        top: 81vh;
    }

    @media (min-height: 900px) {
        top: 82vh;
    }

    @media (min-height: 1024px) {
        top: 85vh;
    }

    @media (min-height: 1080px) {
        top: 80vh;
    }

    @media (min-height: 1366px) {
        top: 91vh;
    }
`

const Cloud4 = styled(Cloud3)`
    right: -41.5vw;
    width: 60vw;

    @media (min-height: 720px) {
        top: 73vh;
    }

    @media (min-height: 768px) {
        top: 75vh;
    }

    @media (min-height: 794px) {
        top: 65vh;
    }

    @media (min-height: 900px) {
        top: 71vh;
    }

    @media (min-height: 1024px) {
        top: 75vh;
    }

    @media (min-height: 1080px) {
        top: 70vh;
    }

    @media (min-height: 1366px) {
        top: 85vh;
    }
`
const Li = styled.li`
  display: inline-block;
  font-size: 1em;
  list-style-type: none;
  padding: 0.5em;
  text-transform: uppercase;
  font-family: 'ChakraPetch-Regular';
    color: #6F7F8D;
   & span {
    display: block;
    font-size: 2.5rem;
   }
   @media (min-width: 768px) {
        font-size: 1.5em;
        padding: 1em;
        & span {
    display: block;
    font-size: 4.5rem;
   }
    }

`
export default class ComingSoon extends Component {

    componentDidMount = () => {
        AOS.init({
            duration: 1500
        })
    }

    render() {
        return (
            <StarParticle>
                <OverFlowHidden>
                    <CountdownContainer>
                        <Wrap>
                            <Star1 src="/img/ComingSoon/star1.png" data-aos="fade-down-right" />
                            <Star2 src="/img/ComingSoon/star2.png" data-aos="fade-down-left" data-aos-duration="2000" />
                            <Star3 src="/img/ComingSoon/star3.png" data-aos="fade-down-left" data-aos-duration="2500" />
                            <Cloud1 src="/img/ComingSoon/cloud1.png" data-aos="fade-up-right" />
                            <Cloud2 src="/img/ComingSoon/cloud2.png" data-aos="fade-up-right" data-aos-duration="2500" />
                            <Cloud3 src="/img/ComingSoon/cloud3.png" data-aos="fade-up-left" data-aos-duration="2500" />
                            <Cloud4 src="/img/ComingSoon/cloud4.png" data-aos="fade-up-left" />
                            <WipLogoImg src='/img/Home/logo.png' />
                            <br />
                            <br />
                            <ComingSoonText>C O M I N G &nbsp;&nbsp;S O O N</ComingSoonText>

                            <ul>
                                <Li><span id="days">{this.props.day}</span>days</Li>
                                <Li><span id="hours">{this.props.hr}</span>Hours</Li>
                                <Li><span id="minutes">{this.props.min}</span>Minutes</Li>
                                <Li><span id="seconds">{this.props.sec}</span>Seconds</Li>
                            </ul>

                            <br />
                            <br />
                            <StayTune>ติดตามได้ที่เพจ WIP Camp</StayTune>
                        </Wrap>
                    </CountdownContainer>
                </OverFlowHidden>
            </StarParticle>
        )
    }
}
