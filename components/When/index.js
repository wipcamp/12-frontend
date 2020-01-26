import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import {Container,Row,Col} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Header , SubHeader} from '../Core/Text'
import { ImageInfo , ImageInfoGlow} from '../Core/ImgInfo'


const WhenContainer = styled.div`
padding: 0rem 0 3rem 0;
/* background: rgb(9,10,15);
    background: linear-gradient(90deg, rgba(9,10,15,1) 0%, rgba(27,39,53,1) 50%, rgba(9,10,15,1) 100%); */
`
const WhenImg = styled.img`
    width:20vw;
    margin: 20px 0 20px 0;
    @media (min-width: 1024px) {
    width: 12em;
    }
    @media (min-width: 1080px) {
    width: 80%;
    }
`
const TimerText = styled.h4`
    font-size: 18px;
    text-align:center ;
    color: white;
    font-family:'ChakraPetch-Regular', sans-serif;
    
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
    }
`
const Span = styled.span`
    font-weight: bold;
    font-size: 1.5em;
`

export default class When extends Component {
    state={
        contentColumn: 2
    }

    componentDidMount() {
        window.addEventListener('resize', this.updateWindowDimensions)
        this.updateWindowDimensions()
    }

    updateWindowDimensions = () => {
        if(window.innerWidth < 1080) {
            this.setState({
                contentColumn: 12
            })
        }else {
            this.setState({
                contentColumn: 2
            })
        }
    }
    render () {
        return(
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
                        <WhenImg src='/img/When/date.png' />
                        <TimerText ><Span>เปิดรับสมัคร</Span><br/> 12 กุมภาพันธ์ 2563</TimerText>
                        </BoxContainer>
                        </Col>
                        <Col className="d-flex" lg={this.state.contentColumn} md="12" sm="12">
                        <BoxContainer>
                        <WhenImg src='/img/When/date.png' />
                        <TimerText ><Span>เปิดรับสมัคร</Span><br/> 12 กุมภาพันธ์ 2563</TimerText>
                        </BoxContainer>
                        </Col>
                        <Col className="d-flex" lg={this.state.contentColumn} md="12" sm="12">
                        <BoxContainer>
                        <WhenImg src='/img/When/date.png' />
                        <TimerText><Span>เปิดรับสมัคร</Span><br/> 12 กุมภาพันธ์ 256</TimerText>
                            </BoxContainer>
                        </Col>
                        <Col className="d-flex" lg={this.state.contentColumn} md="12" sm="12">
                        <BoxContainer>
                        <WhenImg src='/img/When/date.png' />    
                        <TimerText><Span>เปิดรับสมัคร</Span><br/> 12 กุมภาพันธ์ 2563</TimerText>
                        </BoxContainer>
                        </Col>
                        <Col className="d-flex" lg={this.state.contentColumn} md={this.state.contentColumn} sm="12">
                        <BoxContainer>
                        <WhenImg src='/img/When/date.png' />
                        <TimerText><Span>เปิดค่าย</Span><br/>27 พฤษภาคม 2563<br/> ถึง 31 พฤษภาคม 2563</TimerText>
                        </BoxContainer>
                        </Col>
                        <Col lg='1' md="auto" sm="auto"></Col>
                    </WhenRow>   
                </BigContainer>
                
            </WhenContainer>
        )
    }
}
