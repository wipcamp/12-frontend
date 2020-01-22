import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import {Container,Row,Col} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Header , SubHeader} from '../Core/Text'
import { ImageInfo , ImageInfoGlow} from '../Core/ImgInfo'
import WhenTimer from './WhenTimer'

const WhenContainer = styled.div`
background-color : #1E1E1E;
padding: 100px 0 100px 0;
`
const WhenImg = styled.img`
    width:50px;
    margin: 10px 0 10px 0;
`
const TimerText = styled.h4`
    font-size: 12px;
    text-align:center ;
    color: white;
    font-family:'ChakraPetch-Regular', sans-serif;
`
const SmallContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    color: white;
    flex-wrap: wrap;
    font-family: 'Chakra Petch', sans-serif;
`


export default class When extends Component {
    render () {
        return(
            <WhenContainer>
                <Container>
                    <Row>
                        <Col>
                        <Header color="#ffffff" headerText="WHEN" />
                        <SubHeader color="#ffffff" subHeaderText="ค่ายจัดเมื่อไหร่" />
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col lg=''></Col>
                        <Col lg=''>
                        <div className="d-flex flex-column align-items-center">
                        <WhenImg src='/img/Who/tempcircle.png' />
                        <TimerText>เปิดรับสมัคร<br/> 12 กุมภาพันธ์ 2563</TimerText>
                        </div>
                        </Col>
                        <Col lg=''>
                        <div className="d-flex flex-column align-items-center">
                        <TimerText>เปิดรับสมัคร<br/> 12 กุมภาพันธ์ 2563</TimerText>
                        <WhenImg src='/img/Who/tempcircle.png' />
                        </div>
                        </Col>
                        <Col lg=''>
                        <div className="d-flex flex-column align-items-center">
                        <WhenImg src='/img/Who/tempcircle.png' />
                        <TimerText>เปิดรับสมัคร<br/> 12 กุมภาพันธ์ 2563 นี้ ที่ หี้ </TimerText>
                            </div>
                        </Col>
                        <Col lg=''>
                        <div className="d-flex flex-column align-items-center">
                        <TimerText>เปิดรับสมัคร<br/> 12 กุมภาพันธ์ 2563</TimerText>
                        <WhenImg src='/img/Who/tempcircle.png' />
                        </div>
                        </Col>
                        <Col lg=''>
                        <div className="d-flex flex-column align-items-center">
                        <WhenImg src='/img/Who/tempcircle.png' />
                        <TimerText>เปิดรับสมัคร<br/> 12 กุมภาพันธ์ 2563</TimerText>
                        </div>
                        </Col>
                        <Col lg=''>
                        <div className="d-flex flex-column align-items-center">
                        <TimerText>เปิดรับสมัคร<br/> 12 กุมภาพันธ์ 2563</TimerText>
                        <WhenImg src='/img/Who/tempcircle.png' />
                        </div>
                        </Col>
                        <Col lg=''></Col>
                    </Row>   
                </Container>
                
            </WhenContainer>
        )
    }
}
