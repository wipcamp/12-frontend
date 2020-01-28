import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Header, SubHeader } from '../Core/Text'
import { isDayNow, dayAnnouce, dayCloseRegis, dayConfirm, dayNow, dayWip, dayOpenRegis } from './Day'


const WhenContainer = styled.div`
padding: 0rem 0 3rem 0;
/* background: rgb(9,10,15);
    background: linear-gradient(90deg, rgba(9,10,15,1) 0%, rgba(27,39,53,1) 50%, rgba(9,10,15,1) 100%); */
`
const WhenImg = styled.img`
    width:20vw;
    margin: 20px 0 20px 0;
    transition: filter 0.5s ease-in;
    filter: ${ props => props.glow ? 'drop-shadow(0 0 1rem #2C898B)' : 'grayscale(90%)' };    
    @media (min-width: 768px) {
    width: 8em;
    margin: 20px 20px 20px 20px;    
    }
    @media (min-width: 1024px) {
    width: 10em;
    }
    @media (min-width: 1080px) {
    }
`
const TimerText = styled.h4`
    font-size: 15px;
    text-align:center ;
    color: white;
    font-family:'ChakraPetch-Regular', sans-serif;
    margin-left: 2em;
    text-align: left;
    width: 8.5em; 
    @media (min-width: 768px){
        margin: 0;
        width: 10em; 
        font-size: 18px;
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
    font-size: 1.5em;
`

export default class When extends Component {
    state = {
        contentColumn: 2,
        openRegis: false,
        closeRegis: false,
        announce: false,
        confirm: false,
        dayWIP: false
    }

    updateWindowDimensions = () => {
        if (window.innerWidth < 1080) {
            this.setState({
                contentColumn: 12
            })
        } else {
            this.setState({
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
        window.addEventListener('resize', this.updateWindowDimensions)
        this.updateWindowDimensions()
        this.dateCheck()
    }
    render() {
        return (
            <WhenContainer>
                <BigContainer fluid={true} >
                    <Row>
                        <Col>
                            <Header color="#ffffff" headerText="WHEN" />
                            <SubHeader color="#ffffff" subHeaderText="ค่ายจัดเมื่อไหร่" />
                        </Col>
                    </Row>
                    <WhenRow>
                        <Col lg='1' md="auto" sm="auto"></Col>
                        <Col className="d-flex" lg={this.state.contentColumn} md="12" sm="12">
                            <BoxContainer>
                                <WhenImg src='/img/When/OpenRegis.png' glow={this.state.openRegis} />
                                <TimerText ><Span>เปิดรับสมัคร</Span><br /> 12 กุมภาพันธ์ 2563</TimerText>
                            </BoxContainer>
                        </Col>
                        <Col className="d-flex" lg={this.state.contentColumn} md="12" sm="12">
                            <BoxContainer>
                                <WhenImg src='/img/When/CloseRegis.png' glow={this.state.closeRegis} />
                                <TimerText ><Span>ปิดรับสมัคร</Span><br /> 12 มีนาคม 2563</TimerText>
                            </BoxContainer>
                        </Col>
                        <Col className="d-flex" lg={this.state.contentColumn} md="12" sm="12">
                            <BoxContainer>
                                <WhenImg src='/img/When/Annouce.png' glow={this.state.announce} />
                                <TimerText><Span>ประกาศผล</Span><br />28 มีนาคม 2563</TimerText>
                            </BoxContainer>
                        </Col>
                        <Col className="d-flex" lg={this.state.contentColumn} md="12" sm="12">
                            <BoxContainer>
                                <WhenImg src='/img/When/Confirm.png' glow={this.state.confirm} />
                                <TimerText><Span>ยืนยันสิทธิ์</Span><br />29 เมษายน 2563<br /> ถึง 4 พฤษภาคม 2563</TimerText>
                            </BoxContainer>
                        </Col>
                        <Col className="d-flex" lg={this.state.contentColumn} md={this.state.contentColumn} sm="12">
                            <BoxContainer>
                                <WhenImg src='/img/When/WipDay.png' glow={this.state.dayWIP} />
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
