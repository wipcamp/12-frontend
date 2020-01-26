import React, { Component, Fragment } from 'react'
import styled, { keyframes } from 'styled-components'
import { Container, Row, Col } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Header, SubHeader ,Content } from '../Core/Text'
import './fade.css'


const FaqsContainer = styled.div`
    /* background: rgb(9,10,15);
    background: linear-gradient(90deg, rgba(9,10,15,1) 0%, rgba(27,39,53,1) 50%, rgba(9,10,15,1) 100%); */
    font-family: "ChakraPetch-Regular", sans-serif;
`

const FaqsBox = styled.div`
    text-align: center;
    background-color: #cecece;
    border-radius: 6px;
    width: 80%;
    height: 5.3em;
    color: black;
    padding: 0.7em;
    font-size: 16px;
    /* margin-top: 10vh; */
    margin-bottom: 10vh;
    z-index:1;
    display: none;
    cursor: pointer;
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer */
    -khtml-user-select: none; /* KHTML browsers (e.g. Konqueror) */
    -webkit-user-select: none; /* Chrome, Safari, and Opera */
    -webkit-touch-callout: none; /* Disable Android and iOS callouts*/
    transition: filter 0.25s ease-in-out;
    filter: ${props => props.active || "none"};
    :hover {
        filter: drop-shadow(0 0 0.5rem white);
    }
    @media (min-width: 1024px) {
    display: flex;
    }
`
const FaqsAnswer = styled.div`
    box-shadow: 0 0 0.5rem white;
    background-color: rgb(255,255,255,0.8);
    padding: 0.2rem;
    width: 80%;
    color: black;
    text-align: center;
    z-index:1;
    position:absolute;
    bottom: -60vw;
    opacity: ${props => props.opacity || '0'};

    @media (min-width: 1024px) {
        width: 100%;
        position:initial;
    }

`

const FaqsImg = styled.img`
    width : 80%;
    top: -64vh;
    z-index: 0;
    @media (min-width: 500px) {
    }
    @media (min-width: 800px) {
        width: 60%;
        height:auto;
    }
    @media (min-width: 1024px) {
        height: 80vh;
        top: -60vh;
        width: auto;
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
    }
    /* Ipad pro */
    @media (min-height: 1024px) {
        height: 60vh;
        width: auto;
        top: -50vh;
    }
`

const AnswerContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    @media (min-width: 1024px) {
        height: 100%;
    }
`

const DropRow = styled(Row)`
        @media (min-width: 1024px) {
        display:none
    }
`
const FaqsImgContainer = styled.div`
    display: flex;
    justify-content: center;
` 

const StyledContainer = styled(Container)`
        min-height: 25em;
        padding-bottom: 10vh;
        @media (min-width: 1024px) {
        min-height: 100vh;
    }
    @media (min-height: 1024px) {
        min-height: 60vh;
        padding-bottom: 3vh;
    }
`

const Qtag = styled.p`
    width: 100%;
    text-align: inherit;
    line-height: ${props => props.lineHeight || "unset"};
    padding-bottom: 5px;
    @media (max-width: 1200px) {
        line-height: unset;
    }
`
const StyledSelect = styled.select`
    width: 80%;
`

export default class Faqs extends Component {

    state = {
        answer: "Default",
        answerArray: ["WIP Camp ครั้งที่ 12 นี้ รับสมัครผู้เข้าร่วมจำนวน 100 คนครับ",
                      "สำหรับที่พักนั้นจะอยู่ภายในหอพักนักศึกษา มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี โดยมีพี่ ๆ รวมไปถึงฝ่ายพยาบาล คอยดูแลน้อง ๆ ตลอด 24 ชั่วโมงครับ",
                      "มีค่าใช้จ่ายเป็นจำนวนเงิน 450 บาท สำหรับค่าอาหาร และที่พัก โดยสามารถชำระเงินได้ผ่านทางธนาคาร หลังจากผ่านการคัดเลือกแล้วเท่านั้นครับ",
                      "ในส่วนของการสมัครน้อง ๆ จำเป็นต้องอัปโหลดเอกสาร ปพ.7 ผ่านทางเว็บไซต์ค่ายเลยครับ",
                      "เอกสารยินยอมจากผู้ปกครอง และหลักฐานการโอนเงินยืนยันสิทธิ์ครับ โดยน้อง ๆ สามารถอัปโหลดผ่านทางเว็บไซต์ค่ายได้เลยครับ",
                      "ไม่จำเป็นต้องมีพื้นฐานครับ ขอเพียงน้อง ๆ มีความสนใจทางด้านไอที น้องก็สามารถเข้าร่วมได้แล้วครับ"],
        currentAnswerIndex: 99,
        answerOpacity: 0,
        activeQuestion_0 : "none",
        activeQuestion_1 : "none",
        activeQuestion_2 : "none",
        activeQuestion_3 : "none",
        activeQuestion_4 : "none",
        activeQuestion_5 : "none",
        activeStyle : "drop-shadow(0 0 0.5rem white)"
    }

    changeAnswer = e => {
        var prevQ = "activeQuestion_"+this.state.currentAnswerIndex  
        this.setState({faqClass: "none",
                      [prevQ] : "none"    
                    })
        if (e >= 0 && e <= 5) {
        var currentQ = "activeQuestion_"+e       
        setTimeout(
            function() {
                this.setState({answer: this.state.answerArray[e],
                                     currentAnswerIndex: e,
                                     faqClass: "animatedFadeInUp",
                                    [currentQ] : this.state.activeStyle})
            }
            .bind(this),
            1
        )
        }else{
            this.setState({
                answerOpacity: 0,
                currentAnswerIndex: e
            })
        }
    }



    render() {
        return (
            <FaqsContainer>
                <StyledContainer>
                    <Row>
                        <Col style={{ margin: '0px' }}>
                            <Header color="#ffffff" headerText="FAQS" />
                            <SubHeader subHeaderText="คำถามที่พบบ่อย" color="#ffffff" />
                        </Col>
                    </Row>
                    <DropRow>
                        <Col>
                            <div className="d-flex justify-content-center">
                            <StyledSelect value={this.state.currentAnswerIndex} onChange={() => this.changeAnswer(event.target.value)}>
                                <option value="99">กรุณาเลือกคำถาม</option>
                                <option value="0">รับสมัครคนเข้าค่ายกี่คน ?</option>
                                <option value="1">พักค้างคืนที่ไหน ?</option>
                                <option value="2">มีค่าใช้จ่ายไหม ถ้ามีต้องจ่ายเท่าไหร่  ?</option>
                                <option style={{overflow:"warp"}} value="3">มีเอกสารอะไรที่จำเป็นบ้างในขั้นตอนการสมัคร และต้องอัปโหลดทางไหน ?</option>
                                <option value="4">หากผ่านการคัดเลือกแล้ว มีเอกสารอะไรที่ต้องใช้ไหม และต้องอัปโหลดทางไหน ?</option>
                                <option value="5">จำเป็นต้องมีพื้นฐานทางด้านคอมพิวเตอร์ หรือเขียนโปรแกรมไหม ?</option>
                            </StyledSelect>
                            </div>
                        </Col>
                    </DropRow>
                    <Row className="mt-5 order-2">
                        <Col lg='4' md='3' sm="3" xs="2">
                            <div className="d-flex flex-column align-items-center">
                                <FaqsBox onClick={() => this.changeAnswer(0)} active={this.state.activeQuestion_0}><Qtag lineHeight="3em">รับสมัครคนเข้าค่ายกี่คน ?</Qtag></FaqsBox>
                                <FaqsBox onClick={() => this.changeAnswer(1)} active={this.state.activeQuestion_1}><Qtag lineHeight="3em">พักค้างคืนที่ไหน ?</Qtag></FaqsBox>
                                <FaqsBox onClick={() => this.changeAnswer(2)} active={this.state.activeQuestion_2}><Qtag lineHeight="3em">มีค่าใช้จ่ายไหม ถ้ามีต้องจ่ายเท่าไหร่  ?</Qtag></FaqsBox>
                            </div>
                        </Col>
                        <Col lg='4' md='6' sm="6" xs="8">
                            <AnswerContainer className="d-flex align-items-center">
                                <FaqsAnswer className={"align-self-end "+this.state.faqClass} opacity={this.state.answerOpacity}>
                                    {this.state.answer}
                                </FaqsAnswer>
                            </AnswerContainer>
                        </Col>
                        <Col lg='4' md='3' sm="3" xs="2">
                            <div className="d-flex flex-column align-items-center">
                                <FaqsBox onClick={() => this.changeAnswer(3)} active={this.state.activeQuestion_3}><Qtag>มีเอกสารอะไรที่จำเป็นบ้างในขั้นตอนการสมัคร และต้องอัปโหลดทางไหน ?</Qtag></FaqsBox>
                                <FaqsBox onClick={() => this.changeAnswer(4)} active={this.state.activeQuestion_4}><Qtag>หากผ่านการคัดเลือกแล้ว มีเอกสารอะไรที่ต้องใช้ไหม และต้องอัปโหลดทางไหน ?</Qtag></FaqsBox>
                                <FaqsBox onClick={() => this.changeAnswer(5)} active={this.state.activeQuestion_5}><Qtag>จำเป็นต้องมีพื้นฐานทางด้านคอมพิวเตอร์ หรือเขียนโปรแกรมไหม ?</Qtag></FaqsBox>
                            </div>
                        </Col>
                    </Row>
                    <Row className="">
                        <Col lg='12'>
                            <FaqsImgContainer>
                                <FaqsImg src="/img/Faqs/wipfaq.png" />
                            </FaqsImgContainer>
                        </Col>
                    </Row>

                </StyledContainer>
            </FaqsContainer>
        )
    }
}