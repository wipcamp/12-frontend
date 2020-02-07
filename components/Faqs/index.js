import React, { Component, Fragment } from 'react'
import styled, { keyframes } from 'styled-components'
import { Container, Row, Col } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Header, SubHeader, Content } from '../Core/Text'
import './fade.css'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import { goToAnchor } from 'react-scrollable-anchor'

const FaqsContainer = styled.div`
    font-family: 'Sarabun-Regular', sans-serif;
`

const FaqsBox = styled.div`
    text-align: center;
    background-color:#263555;
    width: 90%;
    height: auto;
    color: white;
    border: 2px solid rgb(255,255,255,0.4);
    padding: 0.7em;
    font-size: 16px;
    z-index:2;
    display: none;
    margin-bottom: 2em;
    cursor: pointer;
    -moz-user-select: none; 
    -ms-user-select: none; 
    -khtml-user-select: none;
    -webkit-user-select: none; 
    -webkit-touch-callout: none; 
    transition: box-shadow 0.25s ease-in-out;
    box-shadow: ${props => props.active? "0px 0px 25px rgba(65, 147, 222, 0.71)" : "unset"};
    
    :hover{
        box-shadow: 0px 0px 25px rgba(65, 147, 222, 0.71);
        transition: box-shadow 0.3s ease-in-out;
    }
    @media (min-width: 1080px) {
    display: block;
    height: 8em;
    width: 100%;
    }
    @media (min-width: 1280px){
        margin-bottom: 2em;
    }
    @media (min-width: 1500px){
        margin-bottom: 2em; 
    }
`
const Qtag = styled.p`
    margin: 0;
    width: 100%;
    text-align: inherit;
    line-height: ${props => props.lineHeight || "unset"};
    z-index:1;
    @media (min-width: 1024px) {
    }
`
const Qhead = styled.h4`
    font-family: 'Sarabun-Regular', sans-serif;
    font-size: 24px;
    margin: 0 0 15px 0;

    &:before {
        margin-right: 2px;
        display:inline-block;
        width: 20px;
        height: 19px;
        content: '';
        background: url(/img/Faqs/star.png) center no-repeat;
    }
    &:after {
        margin-left: 2px;
        display:inline-block;
        width: 20px;
        height: 19px;
        content: '';
        background: url(/img/Faqs/star.png) center no-repeat;
    }
`
const BoxImage = styled.img`
    position: absolute;
    width: 22em;
    transform: translate(0, -2.5em);
    z-index: 0;
    display:none;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    transition: filter 0.5s ease-in-out;
    filter : ${props => props.active};
    ${FaqsBox}:hover &{
        filter: drop-shadow(0 0 0.5rem #CCA403);
    }
        @media (min-width: 1080px) {
        display: block;
    }
`
const AnswerBoxImage = styled.img`
    position: absolute;
    width: 80%;
    transform: translate(0, -15px);
    height: 8.5em;
    margin-left: auto;
    margin-right: auto;
    z-index: 0;
    top: 0;
    left: 0;
    right: 0;
    display: none;
    @media (min-width: 768px) {
        height: 8em;
        width: 70%;
    }
    @media (min-width: 1080px) {
        width: 100%;
    }
`
const FaqsAnswer = styled.div`
    width: 100%;
    color: white;
    text-align: center;
    position:absolute;
    top: -14.5em;
    opacity: ${props => props.opacity || '1'};
    z-index: 2;
    @media (min-width: 768px) {
        top: -22em;
    }
    @media (min-width: 1024px) {
        top: -22em;
    }
    @media (min-width: 1080px) {
        width: 100%;
        position:initial;
    }

`
const AnswerContent = styled.p`
    white-space: pre-wrap;
    font-size: 20px ;
    z-index: 2;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    padding: 1em 0 0 0;
    width: 95%;
    font-size: 16px ;
    @media (min-width: 768px) {
        font-size: 20px ;
        width:70%;
    }
    @media (min-width: 1080px) {
        width: unset;
    }
`

const FaqsImg = styled.img`
    width : 232px;
    height: 111px;
    z-index: 0;
    margin-top: 12em;
    animation: float 5s ease-in-out infinite;
    @media (min-width: 414px) {
        width: 307px;
        height: 147px;
    }
    @media (min-width: 768px) {
        margin-top: 10em;
        width: 621px;
        height: 298px;
    }
    @media (min-width: 1024px) {
    }
    @media (min-width: 1080px) {
        width: 90%;
        height: auto;
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        bottom: -29em;
    }
    @keyframes float {
	0% {
		transform: translatey(0);
	}
	50% {
		transform: translatey(-1em);
	}
	100% {
		transform: translatey(0);
    }
}
`
const DropRow = styled(Row)`
        padding: 3em 0 0 0;
        height: 38em;
        @media (min-width: 368px) {
        height: 32em;
    }
        @media (min-width: 768px) {
        height: 29em;
    }
        @media (min-width: 1080px) {
        display:none;
    }
`
const StyledAccordian = styled(Accordion)`
    color: white;
    font-size: 12px;
    width: 90%;
    @media (min-width: 500px) {
        font-size: 16px;
    }
`
const StyledAccordionItem = styled(AccordionItem)`
    -moz-user-select: none; 
    -ms-user-select: none; 
    -khtml-user-select: none;
    -webkit-user-select: none; 
    -webkit-touch-callout: none; 
`
const StyledAccordionItemHeading = styled(AccordionItemHeading)`
`
const StyledAccordionItemButton = styled(AccordionItemButton)`
    background-color: #223557;
    color: white;
    cursor: pointer;
    padding: 18px;
    width: 100%;
    text-align: left;
    border: none;
    display: flex;
    border-bottom: 1px solid #cecece;
    & p {
        display: inline-block;
        width: 90%;
        margin:0;
    }
    &:before {
        width: 3em;
        align-self: center;
        display: inline-block;
        content: '';
        height: 10px;
        width: 10px;
        margin-right: 1em;
        border-bottom: 2px solid currentColor;
        border-right: 2px solid currentColor;
        transform: rotate(-45deg);
    }
    &[aria-selected='true']::before,
    &[aria-expanded='true']::before {
        transform: rotate(45deg);
    }
    &[botborder='none'] {
        border: none;
    }
    &[aria-expanded='true'] {
        border-bottom: 1px solid #cecece;
    }
     
`
const slideDown = keyframes`
      0% { padding-top:0; max-height: 0; }
      /* 25% {padding-top:1em}    */
    100% { padding-top:1em;max-height:10em; }
}
`
const StyledAccordionItemPanel = styled(AccordionItemPanel)`
    background-color: #2e343e;
    z-index:0;
    overflow:hidden;
    padding: 1em 1em 0.2em 1em;
    animation: ${slideDown} 0.5s ease-in;
`
const AnswerContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    @media (min-width: 1024px) {
    }
    @media (min-width: 1080px) {
        height: 10em;
    }
`
const FaqsImgContainer = styled.div`
    display: flex;
    justify-content: center;
`

const StyledContainer = styled(Container)`
        min-height: 25em;
        padding-bottom: 0;
        @media (min-width: 768px) {
            padding-bottom: 0;
    }
    @media (min-width: 1080px) {
        padding-bottom: 10em;
    }
`
const StyledSelect = styled.select`
    width: 80%;
`
export default class Faqs extends Component {

    state = {
        answer: "กรุณาเลือกคำถามจากด้านบน",
        answerArray: ["WIP Camp ครั้งที่ 12 นี้ รับสมัครผู้เข้าร่วมจำนวน 100 คนครับ",
            "สำหรับที่พักนั้นจะอยู่ภายในหอพักนักศึกษา\n มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี\n  โดยมีพี่ ๆ รวมไปถึงฝ่ายพยาบาล\n  คอยดูแลน้อง ๆ ตลอด 24 ชั่วโมงครับ",
            "มีค่าใช้จ่ายเป็นจำนวนเงิน 450 บาท\n สำหรับค่าอาหาร และที่พัก\n โดยสามารถชำระเงินได้ผ่านทางธนาคาร\n หลังจากผ่านการคัดเลือกแล้วเท่านั้นครับ",
            "ในส่วนของการสมัครน้อง ๆ\n จำเป็นต้องอัปโหลดเอกสาร\n ปพ.7 ผ่านทางเว็บไซต์ค่ายเลยครับ",
            "เอกสารยินยอมจากผู้ปกครอง\n และหลักฐานการโอนเงินยืนยันสิทธิ์ครับ \nโดยน้อง ๆ สามารถอัปโหลดผ่านทางเว็บไซต์ค่ายได้เลยครับ",
            "ไม่จำเป็นต้องมีพื้นฐานครับ \nขอเพียงน้อง ๆ มีความสนใจทางด้านไอที\n น้องก็สามารถเข้าร่วมได้แล้วครับ",
            "กรุณาเลือกคำถามจากด้านบน"
        ],
        currentAnswerIndex: 6,
        answerOpacity: 1,
        activeQuestion_0: false,
        activeQuestion_1: false,
        activeQuestion_2: false,
        activeQuestion_3: false,
        activeQuestion_4: false,
        activeQuestion_5: false,
        activeStyle: "drop-shadow(0 0 0.5rem #CCA403)",
        isMobile: true,
        middleContent: 6,
        sideCol: 3,
        selectedIndex: 0,
        isFirstClick: true
    }

    changeAnswer = e => {
        if (e != this.state.currentAnswerIndex) {
            this.isFirstClick()
            var prevQ = "activeQuestion_" + this.state.currentAnswerIndex
            this.setState({
                faqClass: "none",
                [prevQ]: false
            })
            if (e >= 0 && e <= 6) {
                var currentQ = "activeQuestion_" + e
                setTimeout(
                    function () {
                        this.setState({
                            answer: this.state.answerArray[e],
                            currentAnswerIndex: e,
                            faqClass: "animatedFadeInUp",
                            [currentQ]: true
                        })
                    }
                        .bind(this),
                    50
                )
            } else {
                this.setState({
                    answerOpacity: 1,
                    answer:"กรุณาเลือกคำถามจากด้านบน",
                    currentAnswerIndex: e
                })
            }
        }
    }

    componentDidMount() {
        window.addEventListener('resize', this.updateWindowDimensions)
        this.updateWindowDimensions()
    }

    updateWindowDimensions = () => {
        if (window.innerWidth < 1080) {
            this.setState({
                isMobile: true,
                middleContent: 12,
                sideCol: 'auto'
            })
        } else {
            this.setState({
                isMobile: false,
                middleContent: 6,
                sideCol: 3
            })
        }
    }

    getType = () => {
        return this.state.isMobile
    }

    isFirstClick = () => {
        if (this.state.isFirstClick) {
            goToAnchor('faqs', true)
            this.setState({
                isFirstClick: false
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
                    {(this.getType()) ?
                        <DropRow>
                            <Col className="d-flex justify-content-center">
        <StyledAccordian allowZeroExpanded={true} >
            <StyledAccordionItem>
                <StyledAccordionItemHeading>
                    <StyledAccordionItemButton>
                    <p>รับสมัครคนเข้าค่ายกี่คน ?</p>
                    </StyledAccordionItemButton>
                </StyledAccordionItemHeading>
                <StyledAccordionItemPanel>
                    <p>
                    WIP Camp ครั้งที่ 12 นี้ รับสมัครผู้เข้าร่วมจำนวน 100 คนครับ
                    </p>
                </StyledAccordionItemPanel>
            </StyledAccordionItem>
            <StyledAccordionItem>
                <StyledAccordionItemHeading>
                    <StyledAccordionItemButton>
                    <p>พักค้างคืนที่ไหน ?</p>
                    </StyledAccordionItemButton>
                </StyledAccordionItemHeading>
                <StyledAccordionItemPanel>
                    <p>
                    สำหรับที่พักนั้นจะอยู่ภายในหอพักนักศึกษา มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี โดยมีพี่ ๆ รวมไปถึงฝ่ายพยาบาล <br/>คอยดูแลน้อง ๆ ตลอด 24 ชั่วโมงครับ
                    </p>
                </StyledAccordionItemPanel>
            </StyledAccordionItem>
            <StyledAccordionItem>
                <StyledAccordionItemHeading>
                    <StyledAccordionItemButton>
                    <p>มีค่าใช้จ่ายไหม ถ้ามีต้องจ่ายเท่าไหร่</p>
                    </StyledAccordionItemButton>
                </StyledAccordionItemHeading>
                <StyledAccordionItemPanel>
                    <p>
                    มีค่าใช้จ่ายเป็นจำนวนเงิน 450 บาท สำหรับค่าอาหาร และที่พัก โดยสามารถชำระเงินได้ผ่านทางธนาคาร หลังจากผ่านการคัดเลือกแล้วเท่านั้นครับ
                    </p>
                </StyledAccordionItemPanel>
            </StyledAccordionItem>
            <StyledAccordionItem>
                <StyledAccordionItemHeading>
                    <StyledAccordionItemButton>
                    <p>มีเอกสารอะไรที่จำเป็นบ้างในขั้นตอนการสมัคร และต้องอัปโหลดทางไหน ?</p>
                    </StyledAccordionItemButton>
                </StyledAccordionItemHeading>
                <StyledAccordionItemPanel>
                    <p>
                    ในส่วนของการสมัครน้อง ๆ จำเป็นต้องอัปโหลดเอกสาร ปพ.7 ผ่านทางเว็บไซต์ค่ายเลยครับ
                    </p>
                </StyledAccordionItemPanel>
            </StyledAccordionItem>
            <StyledAccordionItem>
                <StyledAccordionItemHeading>
                    <StyledAccordionItemButton>
                    <p>หากผ่านการคัดเลือกแล้ว มีเอกสารอะไรที่ต้องใช้ไหม และต้องอัปโหลดทางไหน ?</p>
                    </StyledAccordionItemButton>
                </StyledAccordionItemHeading>
                <StyledAccordionItemPanel>
                    <p>
                    เอกสารยินยอมจากผู้ปกครอง และหลักฐานการโอนเงินยืนยันสิทธิ์ครับ โดยน้อง ๆ สามารถอัปโหลดผ่านทางเว็บไซต์ค่ายได้เลยครับ 
                    </p>
                </StyledAccordionItemPanel>
            </StyledAccordionItem>
            <StyledAccordionItem>
                <StyledAccordionItemHeading>
                    <StyledAccordionItemButton botborder="none">
                     <p>จำเป็นต้องมีพื้นฐานทางด้านคอมพิวเตอร์ หรือเขียนโปรแกรมไหม ?</p>
                    </StyledAccordionItemButton>
                </StyledAccordionItemHeading>
                <StyledAccordionItemPanel>
                    <p>
                    ไม่จำเป็นต้องมีพื้นฐานครับ ขอเพียงน้อง ๆ มีความสนใจทางด้านไอที น้องก็สามารถเข้าร่วมได้แล้วครับ
                    </p>
                </StyledAccordionItemPanel>
            </StyledAccordionItem>
        </StyledAccordian>
        </Col>
                        </DropRow> :
                        <Fragment>
                        <Row className="mt-5 order-2">
                            <Col lg='4' md='3' sm="3" xs="2">
                                <div className="d-flex flex-column align-items-center">
                                    <FaqsBox onClick={() => this.changeAnswer(0)} active={this.state.activeQuestion_0}>
                                    <Qhead>QUESTION 1</Qhead>
                                        <Qtag lineHeight="3em">รับสมัครคนเข้าค่ายกี่คน ?</Qtag>
    
                                    </FaqsBox>
                                    <FaqsBox onClick={() => this.changeAnswer(3)} active={this.state.activeQuestion_3}>
                                    <Qhead>QUESTION 4</Qhead>
                                        <Qtag>มีเอกสารอะไรที่จำเป็นบ้างในขั้นตอนการสมัคร และต้องอัปโหลดทางไหน ?</Qtag>
                                    </FaqsBox>
                                </div>
                            </Col>
                            <Col className="d-flex flex-column align-items-center" lg='4' md='6' sm="6" xs="8">
                                <FaqsBox onClick={() => this.changeAnswer(1)} active={this.state.activeQuestion_1}>
                                <Qhead>QUESTION 2</Qhead>
                                    <Qtag lineHeight="3em">พักค้างคืนที่ไหน ?</Qtag>
                                </FaqsBox>
                                <FaqsBox onClick={() => this.changeAnswer(4)} active={this.state.activeQuestion_4}>
                                <Qhead>QUESTION 5</Qhead>
                                    <Qtag>หากผ่านการคัดเลือกแล้ว มีเอกสารอะไรที่ต้องใช้ไหม และต้องอัปโหลดทางไหน ?</Qtag>
                                </FaqsBox>
                            </Col>
                            <Col lg='4' md='3' sm="3" xs="2">
                                <div className="d-flex flex-column align-items-center">
                                    <FaqsBox onClick={() => this.changeAnswer(2)} active={this.state.activeQuestion_2}>
                                    <Qhead>QUESTION 3</Qhead>
                                        <Qtag lineHeight="3em">มีค่าใช้จ่ายไหม ถ้ามีต้องจ่ายเท่าไหร่  ?</Qtag>
                                    </FaqsBox>
                                    <FaqsBox onClick={() => this.changeAnswer(5)} active={this.state.activeQuestion_5}>
                                    <Qhead>QUESTION 6</Qhead>
                                        <Qtag>จำเป็นต้องมีพื้นฐานทางด้านคอมพิวเตอร์ หรือเขียนโปรแกรมไหม ?</Qtag>
    
                                    </FaqsBox>
                                </div>
                            </Col>
                        </Row>
                                            <Row className="">
                                            <Col lg='12'>
                                                <FaqsImgContainer>
                                                    <FaqsImg src="/img/Faqs/Book.png" />
                                                </FaqsImgContainer>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col lg={this.state.sideCol} md="auto" sm="auto" ></Col>
                                            <Col lg={this.state.middleContent} md="12" sm="12" >
                                                <AnswerContainer className="d-flex align-items-center">
                                                    <FaqsAnswer className={this.state.faqClass} opacity={this.state.answerOpacity}>
                                                        <AnswerContent>{this.state.answer}</AnswerContent>
                                                    </FaqsAnswer>
                                                </AnswerContainer>
                                            </Col>
                                            <Col lg={this.state.sideCol} md="12" sm="auto" ></Col>
                                        </Row>
                                        </Fragment>
                    }

                </StyledContainer>
            </FaqsContainer>
        )
    }
}