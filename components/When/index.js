import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Header, SubHeader } from '../Core/Text'
import { isDayNow, dayAnnouce, dayCloseRegis, dayConfirm, dayNow, dayWip, dayOpenRegis } from './Day'
import { Parallax } from 'react-scroll-parallax'
import AOS from 'aos';
import 'aos/dist/aos.css';

const WhenContainer = styled.div`
    padding: 0rem 0 3rem 0;
    position: relative;
    padding-bottom: 4rem;
    position: relative;

    @media (min-width: 1024px) {
        padding-bottom: 10vh;
    }
`
const WhenImg = styled.img`
    width:20vw;
    margin: 20px 0 20px 0;
    transition: filter 0.5s ease-in;
    filter: ${ props => props.glow ? 'drop-shadow(0 0 1rem #2C898B)' : 'grayscale(90%)'};
    @media (min-width: 768px) {
    width: 8em;
    margin: 20px 20px 20px 20px;
    }
    @media (min-width: 1024px) {
    width: 10em;
    height: 10em;
    }
    @media (min-width: 1080px) {
    }
`
const TimerText = styled.h4`
    font-size: 12px;
    text-align:center ;
    color: white;
    font-family:'Sarabun-Regular', sans-serif;
    margin-left: 2em;
    text-align: left;
    width: 8.5em;
    @media (min-width: 768px){
        margin: 0;
        width: 10em;
        font-size: 16px;
    }
    @media (min-width: 1080px) {
        text-align:  center;
        width: auto;
        height: 5em;
    }

`
const BigContainer = styled(Container)`

`
const WhenRow = styled(Row)`
    height: auto;
    @media (min-width: 1080px) {
        height: 50vh;
    }
`
const BoxContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (min-width: 1080px) {
        align-self: center;
        flex-direction:column;
        justify-content: center;
    }

`
const Span = styled.span`
    font-weight: bold;
    font-size: 18px;

    @media (min-width: 768px) {
        font-size: 25px
    }

    @media (min-width: 1024px) {
        font-size: 1.5em;
    }
`

const Zodiac = styled.img`
   position: absolute;
   width: 20vw;
    left: 0vw;
    top: -20vh;
`

const WrapZodiac = styled.div`
    transform: rotate(45deg);
    position: absolute;
    top: -10vh;
`

const Cloud1 = styled(Zodiac)`
    top: 65vh;
    width: 30vw;
    left: -2vw;
`

const Cloud2 = styled(Zodiac)`
    left: 85vw;
    top: 55vh;
    width: 35vw;
`

const Cloud3 = styled(Zodiac)`
    left: 78vw;
    top: 68vh;
    width: 40vw;
`

const Cloud4 = styled(Zodiac)`
    top: 68vh;
    left: 75vw;
    width: 30vw;
`

const StarAndCloud = () => {
    return(
        <Fragment>
            <WrapZodiac>
                <Zodiac src="/img/When/libra.png" data-aos="fade-down-right" alt="libra" />
            </WrapZodiac>   
            <Cloud1 src="/img/What/cloud2.png" data-aos="fade-down-right" alt="cloud" />
            <Cloud1 src="/img/What/cloud3.png" data-aos="fade-down-right" alt="cloud" />
            <Cloud2 src="/img/When/cloud2.png" data-aos="fade-down-left" alt="cloud" />
            <Cloud3 src="/img/When/cloud3.png" data-aos="fade-down-left" data-aos-duration="2000" alt="cloud" />
            <Cloud4 src="/img/When/cloud4.png" data-aos="fade-down-left" data-aos-duration="1500" alt="cloud" />
        </Fragment>
    )
}

export default class When extends Component {
    state = {
        isMobile: true,
        contentColumn: 2,
        openRegis: false,
        closeRegis: false,
        announce: false,
        confirm: false,
        dayWIP: false
    }

    updateDimensions = () => {
        if (window.innerWidth < 1080) {
            this.setState({
                isMobile: true,
                contentColumn: 12
            })
        } else {
            this.setState({
                isMobile: false,
                contentColumn: 2
            })
        }
    }

    dateCheck = () => {
        if (dayOpenRegis.isBefore(dayNow) || dayOpenRegis.isSame(dayNow)) {
            this.setState({
                openRegis: true
            })
        }
        if (dayCloseRegis.isBefore(dayNow) || dayCloseRegis.isSame(dayNow)) {
            this.setState({
                closeRegis: true
            })
        }
        if (dayAnnouce.isBefore(dayNow) || dayAnnouce.isSame(dayNow)) {
            this.setState({
                announce: true
            })
        }
        if (dayConfirm.isBefore(dayNow) || dayConfirm.isSame(dayNow)) {
            this.setState({
                confirm: true
            })
        }
        if (dayConfirm.isBefore(dayNow) || dayConfirm.isSame(dayNow)) {
            this.setState({
                dayWIP: true
            })
        }
    }

    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions)
        this.updateDimensions()
        AOS.init({
            duration: 3000
        })
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    }

    getType = () => {
        return this.state.isMobile
    }

    render() {
        return (
            <WhenContainer>
                <BigContainer fluid={true} >
                    {
                        (this.getType()) ?
                            <Fragment></Fragment>
                            : <StarAndCloud />
                    }
                    <Row>
                        <Col>
                            <Header color="#ffffff" headerText="WHEN" />
                            <SubHeader color="#ffffff" subHeaderText="ค่ายจัดเมื่อไหร่ ?" />
                        </Col>
                    </Row>
                    <WhenRow>
                        <Col lg='1' md="auto" sm="auto"></Col>
                        <Col className="d-flex" lg={this.state.contentColumn} md="12" sm="12">
                            <BoxContainer>
                                <WhenImg src='/img/When/openregis.webp' glow={this.state.openRegis} alt="open register" />
                                <TimerText ><Span>เปิดรับสมัคร</Span><br /> 19 กุมภาพันธ์ 2563</TimerText>
                            </BoxContainer>
                        </Col>
                        <Col className="d-flex" lg={this.state.contentColumn} md="12" sm="12">
                            <BoxContainer>
                                <WhenImg src='/img/When/closeregis.webp' glow={this.state.closeRegis} alt="close register" />
                                <TimerText ><Span>ปิดรับสมัคร</Span><br /> 12 มีนาคม 2563</TimerText>
                            </BoxContainer>
                        </Col>
                        <Col className="d-flex" lg={this.state.contentColumn} md="12" sm="12">
                            <BoxContainer>
                                <WhenImg src='/img/When/announce.webp' glow={this.state.announce} alt="announce" />
                                <TimerText><Span>ประกาศผล</Span><br />28 มีนาคม 2563</TimerText>
                            </BoxContainer>
                        </Col>
                        <Col className="d-flex" lg={this.state.contentColumn} md="12" sm="12">
                            <BoxContainer>
                                <WhenImg src='/img/When/confirm.webp' glow={this.state.confirm} alt="confirm" />
                                <TimerText><Span>ยืนยันสิทธิ์</Span><br />29 มีนาคม 2563<br /> ถึง 4 เมษายน 2563</TimerText>
                            </BoxContainer>
                        </Col>
                        <Col className="d-flex" lg={this.state.contentColumn} md={this.state.contentColumn} sm="12">
                            <BoxContainer>
                                <WhenImg src='/img/When/wipday.webp' glow={this.state.dayWIP} alt="wipcamp day" />
                                <TimerText><Span>เปิดค่าย</Span><br />27 พฤษภาคม 2563<br /> ถึง 31 พฤษภาคม 2563</TimerText>
                            </BoxContainer>
                        </Col>
                        <Col lg='1' md="auto" sm="auto"></Col>
                    </WhenRow>                             
                </BigContainer>
            </WhenContainer>
        )
    }
}
