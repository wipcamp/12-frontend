import React, { Component, Fragment } from 'react'
import Countdown from 'react-countdown'
import styled from 'styled-components'
import { SubHeader } from './Text'
import StarParticle from './Particle'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link'

const OverFlowHidden = styled.div`
    overflow: hidden;
`

const CountdownContainer = styled.div`
    font-family: 'NotoSansThai-Regular', sans-serif;
    width: 100%;
    height: 100vh;
    position: relative;
    display: table;
    z-index: 1;
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
        width: 32em;
    }
`

const ComingSoonText = styled.h1`
    font-family: 'NotoSansThai-Regular', sans-serif;
    font-size: 24px;
    color: #6F7F8D;

    @media (min-width: 768px) {
        font-size: 40px;
    }

    @media (min-width: 1024px) {
        font-size: 56px;
    }
`

const StayTune = styled.a`
    font-family: 'Sarabun-Regular', sans-serif;
    font-size: 18px;
    color: #1877F2 !important;
    text-decoration: none !important;
    & span {
        font-family: 'NotoSansThai-Regular', sans-serif;
        color: #ffffff;
    }
    @media (min-width: 768px) {
        font-size: 36px;
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
    bottom: 1vh;
    width: 45vw;
`

const Li = styled.li`
  display: inline-block;
  font-size: 0.5em;
  list-style-type: none;
  margin-left: 0.5em;
  text-transform: uppercase;
  letter-spacing: 0px;
  font-family: 'NotoSansThai-Regular', sans-serif;
    color: #6F7F8D;
   & span {
    width: 1.5em;
    margin-bottom: 0.2em;
    line-height: 1.4em;
    background-color: rgb(0,0,0,0.2);
    display: block;
    color: #ffffff;
    font-size: 2.5rem;
   }
   @media (min-width: 768px) {
        font-size: 1em;
        & span {
    display: block;
    font-size: 4.5rem;
   }
    }


`

const Facebook = styled.img`
    width: 30px;
    height: 30px;
    transform: translateY(-0.2em);
    @media (min-width: 768px) {
        width: 50px;
        height: 50px;
    }
`

const GroupOfStar = () => {
    return (
        <Fragment>
            <Zodiac1 src="/img/Core/zodiac1.png" data-aos="fade-down" />
            <Zodiac2 src="/img/Core/zodiac2.png" data-aos="fade-down" />
            <Zodiac3 src="/img/Core/zodiac3.png" data-aos="fade-down" />
            <Star1 src="/img/Core/star1.png" data-aos="fade-down-right" />
            <Star2 src="/img/Core/star2.png" data-aos="fade-down-left" data-aos-duration="2000" />
            <Star3 src="/img/Core/star3.png" data-aos="fade-down-left" data-aos-duration="2500" />
            <CloudLeft src="/img/Core/cloudleft.png"  />
            <CloudLeft2 src="/img/Core/cloudleft.png" />
            <CloudRight src="/img/Core/cloudright1.png" />
            <CloudRight2 src="/img/Core/cloudright2.png" />
            <CloudRight3 src="/img/Core/cloudright3.png"  />
        </Fragment>
    )
}
export default class ComingSoon extends Component {

    state = {
        width: 0
    };

    componentDidMount = () => {
        this.setState({
            width: window.innerWidth
        })
        window.addEventListener('resize', this.updateDimensions);
        AOS.init({
            duration: 1500
        })
    }

    updateDimensions = () => {
        this.setState({
            width: window.innerWidth
        });
    };

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    }

    render() {
        return (
            <StarParticle>
                <OverFlowHidden>
                    <CountdownContainer>
                        <Wrap>
                            {
                                (this.state.width < 1024) ?
                                    <Fragment></Fragment>
                                    : <GroupOfStar />
                            }
                            <WipLogoImg src='/img/Core/oldlogo.png' />
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
                            <StayTune href="https://www.facebook.com/wipcamp/" target="_blank">
                                ติดตามได้ที่&nbsp;&nbsp;
                                <Facebook src="/img/Contact/facebook.png" />
                                &nbsp;<span>WIP Camp</span></StayTune>
                        </Wrap>
                    </CountdownContainer>
                </OverFlowHidden>
            </StarParticle>
        )
    }
}
