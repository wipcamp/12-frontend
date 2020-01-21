import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Header, SubHeader } from '../Core/Text'
import { device } from '../Core/device'
import { number } from 'prop-types'


const FaqsContainer = styled.div`
    background-color : black;
    /* padding: 100px 0 100px 0; */
    min-height: 100vh;
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
    display: none;

    @media (min-width: 1024px) {
    display: flex;
    }
`
const FaqsAnswer = styled.div`
    background: #6EB2B7;
    width: 100%;
    /* position: relative;
    bottom: -55vh; */
    height: 15vh;
    line-height: 15vh;
    color: white;
    text-align: center;
    z-index:1;
    

`

const FaqsImg = styled.img`
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    position: absolute;
    left: 0;
    right: 0;
    top: ${props => props.vertical};
    z-index: 0;
    @media (min-width: 1024px) {
        
    }
`

const AnswerContainer = styled.div`
    
    height: 60vh;
    @media (min-width: 1024px) {
        height: 100%;
    }
`

const DropRow = styled(Row)`
        @media (min-width: 1024px) {
        display:none
    }
`

export default class Faqs extends Component {

    state = {
        answer: "Default",
        answerArray: ["answer1", "answer2", "answer3", "answer4", "answer5", "answer6"]
    }

    changeAnswer = e => {
        
        this.setState({ answer: this.state.answerArray[e] })
        console.log(e)
    }

    render() {
        return (
            <FaqsContainer>
                <Container style={{ minHeight: '100vh' }}>
                    <Row>
                        <Col style={{ marginTop: '0px' }}>
                            <Header color="#ffffff" headerText="FAQS" />
                            <SubHeader subHeaderText="คำถามที่พบบ่อย" color="#ffffff" />
                        </Col>
                    </Row>
                    <DropRow>
                        <Col>
                            <div className="d-flex justify-content-center">
                            <select onChange={() => this.changeAnswer(event.target.value)}>
                                <option value="0">กรุณาเลือกคำถาม</option>
                                <option value="1">Question2</option>
                                <option value="2">Question3</option>
                                <option value="3">Question4</option>
                            </select>
                            </div>
                        </Col>
                    </DropRow>
                    <Row className="mt-5">
                        <Col lg='4' md='5' sm="auto">
                            <div className="d-flex flex-wrap align-items-center">
                                <FaqsBox onClick={() => this.changeAnswer(0)} >อยากมาเข้าร่วมค่ายนี้มากๆ ต้องทำอย่างไร test 1 ?</FaqsBox>
                                <FaqsBox onClick={() => this.changeAnswer(1)}>อยากมาเข้าร่วมค่ายนี้มากๆ ต้องทำอย่างไร ?</FaqsBox>
                                <FaqsBox onClick={() => this.changeAnswer(2)}>อยากมาเข้าร่วมค่ายนี้มากๆ ต้องทำอย่างไร ?</FaqsBox>
                            </div>
                        </Col>
                        <Col lg='4' md='2' sm="4">
                            <AnswerContainer className="d-flex align-items-center">
                                <FaqsAnswer className="align-self-end" >{this.state.answer}</FaqsAnswer>
                            </AnswerContainer>
                        </Col>
                        <Col lg='4' md='5' sm="auto">
                            <div className="d-flex flex-wrap align-items-center">
                                <FaqsBox onClick={() => this.changeAnswer(3)}>อยากมาเข้าร่วมค่ายนี้มากๆ ต้องทำอย่างไร ?</FaqsBox>
                                <FaqsBox onClick={() => this.changeAnswer(4)}>อยากมาเข้าร่วมค่ายนี้มากๆ ต้องทำอย่างไร ?</FaqsBox>
                                <FaqsBox onClick={() => this.changeAnswer(5)}>อยากมาเข้าร่วมค่ายนี้มากๆ ต้องทำอย่างไร ?</FaqsBox>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg='12'>
                            <div>
                                <FaqsImg vertical="-64vh" src="/img/lungtu.png" />
                                {/* <FaqsImg vertical="-20vh" src="/img/Faqs/book.png" /> */}
                            </div>
                        </Col>
                    </Row>

                </Container>
            </FaqsContainer>
        )
    }
}