import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import SideScroll from './SideScroll'
import { Header, SubHeader } from '../Core/Text'


const FaqsContainer = styled.div`
    background-color : #1E1E1E;
    padding: 100px 0 100px 0;
    min-height: 80vh;
`
const FaqsBox = styled.div`
    text-align: center;
    background: #C4C4C4;
    border-radius: 6px;
    width: 80%;
    height: 10vh;
    color: black;
    padding: 0.7em;
    font-size: 2vh;
    margin-top: 10vh;
    z-index:1;
    line-height: 7vh;
`
const FaqsAnswer = styled.div`
    background: #6EB2B7;
    width: 100%;
    position: relative;
    bottom: -70vh;
    height: 15vh;
    line-height: 15vh;
    color: white;
    text-align: center;
    z-index:1;
    

`

const FaqsImg = styled.img`
    width: 50%;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    top: -64vh;
    z-index: 0;
`

export default class Faqs extends Component {
    render() {
        return (
            <FaqsContainer>
                <Container>
                    <Row>
                        <Col style={{ marginTop: '50px' }}>
                            <Header stroke="#ffffff" headerText="FAQS" />
                            <SubHeader subHeaderText="คำถามที่พบบ่อย" color="#ffffff" />
                        </Col>
                    </Row>
                    <Row className="mt-5"> 
                        <Col xl='4'>
                            <div className="d-flex flex-column align-items-centerr">
                                <FaqsBox>อยากมาเข้าร่วมค่ายนี้มากๆ ต้องทำอย่างไร ?</FaqsBox>
                                <FaqsBox>อยากมาเข้าร่วมค่ายนี้มากๆ ต้องทำอย่างไร ?</FaqsBox>
                                <FaqsBox>อยากมาเข้าร่วมค่ายนี้มากๆ ต้องทำอย่างไร ?</FaqsBox>
                            </div>
                        </Col>
                        <Col xl='4' style={{}}>
                            <div className="d-flex flex-column align-items-centerr">
                                <FaqsAnswer className="align-self-end" >คำตอบ</FaqsAnswer>
                            </div>
                        </Col>
                        <Col xl='4'>
                            <div className="d-flex flex-column align-items-center">
                                <FaqsBox>อยากมาเข้าร่วมค่ายนี้มากๆ ต้องทำอย่างไร ?</FaqsBox>
                                <FaqsBox>อยากมาเข้าร่วมค่ายนี้มากๆ ต้องทำอย่างไร ?</FaqsBox>
                                <FaqsBox>อยากมาเข้าร่วมค่ายนี้มากๆ ต้องทำอย่างไร ?</FaqsBox>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl='12'>
                            <div>
                                <FaqsImg src="/img/Faqs/test.jpg" />
                                <FaqsImg style={{top:'10vh'}} src="/img/Faqs/book.png" />
                            </div>
                        </Col>
                    </Row>
                    
                </Container>
            </FaqsContainer>
        )
    }
}