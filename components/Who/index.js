import React, { Component, Fragment } from 'react'
import styled, { keyframes } from 'styled-components'
import { Container, Row, Col } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Header, SubHeader } from '../Core/Text'
import { ImageInfo, WhoMobile } from './ImgInfo'
import AOS from 'aos';
import 'aos/dist/aos.css';

const WhoContainer = styled.div`
    position: relative;
    
`

const ContentContainer = styled(Container)`
    /* max-height: 130vh; */
    padding-bottom:4vh;
    @media (min-width: 1080px) {
        padding-bottom:10vh;
    }
    @media (min-width: 1280px) {
        padding-bottom:10vh;
    }
    @media (min-width: 1680px) {
        padding-bottom:20vh;
    }
`

const Float = keyframes`
	0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(-10px);
	}
	100% {
		transform: translatey(0px);
    }`

const Image = styled.img`
top: -15em;
display: none;
width: 14vw;
display: none;
animation: ${Float} 5s infinite;

@media (min-width: 1080px) {
position: absolute;
display: block;
margin-left: auto;
margin-right: auto;
left: 0;
right: 0;
}
@media (min-height: 1280px) {
    top: -15em;
}
`
const Image2 = styled.img`
    animation: ${Float} 5s infinite;
    display: none;
@media (min-width: 768px) {
    display: block;
    width: 192px;
    height: 366px;
}
@media (min-width: 1024px) {
    width: 192px;
    height: 366px;
} 
@media (min-width: 1080px) {
    display: none;
} 
`
const WhoRow = styled(Row)`
    @media (min-width: 1080px) {
        height: 13em;
    margin-top: 3em;
}
    @media (min-width: 1680px) {
        height: 15em;
    margin-top: 4em;
}
`

const Zodiac = styled.img`
    position: absolute;
    width: 15vw;
`

const WrapZodiac = styled.div`
    position: absolute;
    transform: rotate(120deg);
    right: 2vw;
    bottom: 2vw;
`

const Star = styled.img`
    position: absolute;
    width: 20vw;
    left: -2vw;
    top: 30vh;
`
const Br = styled.br`
display: ${props => props.break? 'unset':'none'};
@media (min-width: 1440px) {
    display:unset;
}
`

const GroupOfStar = () => {
    return(
        <Fragment>
            <Star src="/img/Who/star.png" data-aos="fade-down-right" alt="star" />
            <WrapZodiac> 
                <Zodiac src="/img/Who/scorpio.png" data-aos="fade-down-right" alt="scorpio" />
            </WrapZodiac>
        </Fragment>
    )
}
export default class Who extends Component {
    state = {
        isMobile: true,
        midColumn: 2,
        contentColumn: 4
    }

    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions)
        this.updateDimensions()
        AOS.init({
            duration: 3000
        })
    }

    updateDimensions = () => {
        if (window.innerWidth < 1080) {
            this.setState({
                isMobile: true,
                midColumn: 'auto',
                contentColumn: 5
            })
        } else {
            this.setState({
                isMobile: false,
                midColumn: 2,
                contentColumn: 4
            })
        }
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    }

    getType = () => {
        return this.state.isMobile
    }

    render() {
        return (
            <WhoContainer>
                {
                    (this.getType()) ?
                        <Fragment></Fragment>
                        : <GroupOfStar />
                }
                <ContentContainer fluid={true} >
                    <Row>
                        <Col>
                            <Header color="white" headerText="WHO" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <SubHeader color="white" subHeaderText="ค่ายนี้เหมาะกับใคร ?" />
                        </Col>
                    </Row>
                    <WhoRow>
                        <Col lg="1" md='1'></Col>
                        <Col lg={this.state.contentColumn} md='5'>
                            <WhoMobile 
                                src="/img/Who/who1.png" 
                                alt="interesting in IT"
                                color="white" 
                                content="น้อง ๆ ที่มีความสนใจทางด้านไอที หรือต้องการตามหาเส้นทางเดินของตัวเอง" 
                                textAlign="left"
                                textAlignResponsive="left"
                            >
                                น้อง ๆ ที่มีความสนใจทางด้านไอที<Br/> หรือต้องการตามหาเส้นทางเดิน ของตัวเอง</WhoMobile>
                                        {/* <ImageInfo 
                                            src="/img/Who/who1.png" 
                                            color="white" 
                                            content="น้อง ๆ ที่มีความสนใจทางด้านไอที หรือต้องการตามหาเส้นทางเดิน ของตัวเอง"                                            
                                            textAlignDeskTop="center"
                                        /> */}
                        </Col>
                        <Col lg={this.state.midColumn} md="auto"></Col>
                        <Col lg={this.state.contentColumn} md='5'>
                            <WhoMobile 
                                src="/img/Who/who2.png" 
                                alt="high school student"
                                color="white" 
                                content="น้องระดับชั้นมัธยมศึกษาตอนปลาย “ทุกแผนการเรียน”" 
                                textAlign="left"
                                textAlignResponsive="left"                                            
                            >
                                น้องระดับชั้นมัธยมศึกษาตอนปลาย<Br break={true} /> “ทุกแผนการเรียน”</WhoMobile>
                                        {/* <ImageInfo 
                                            src="/img/Who/who2.png" 
                                            color="white" 
                                            content="น้องระดับชั้นมัธยมศึกษาตอนปลาย “ทุกแผนการเรียน”" 
                                            textAlignDeskTop="center"
                                        /> */}
                        </Col>
                        <Col lg="1" md='1'></Col>
                    </WhoRow>
                    <Row>
                        <Col><Image src="/img/Core/Wippo.png" alt="Wippo" /></Col>
                    </Row>
                    <Row>
                        <Col lg="1" md='1' sm="auto"></Col>
                        <Col lg={this.state.contentColumn} md='5' sm="12">
                            <WhoMobile 
                                src="/img/Who/who3.png" 
                                alt="can stay in the camp for 5 days 4 nights"
                                color="white" 
                                content="น้อง ๆ ที่สามารถอยู่ร่วมค่ายค้างคืนได้ตลอดระยะเวลา 5 วัน 4 คืน" 
                                textAlign="left"
                                textAlignResponsive="left"
                            >
                                น้อง ๆ ที่สามารถอยู่ร่วมค่ายค้างคืน<Br/> ได้ตลอดระยะเวลา 5 วัน 4 คืน</WhoMobile>
                                        {/* <ImageInfo 
                                            src="/img/Who/who3.png" 
                                            color="white" 
                                            content="น้อง ๆ ที่สามารถอยู่ร่วมค่ายค้างคืน ได้ตลอดระยะเวลา 5 วัน 4 คืน" 
                                            textAlignDeskTop="center"
                                        /> */}
                        </Col>
                        <Col lg={this.state.midColumn} md='auto' ></Col>
                        <Col lg={this.state.contentColumn} md='5' sm="12">
                            <WhoMobile 
                                src="/img/Who/who4.png" 
                                alt="parents agreed to let student come to camp"
                                color="white" 
                                content="น้อง ๆ ที่ได้รับการอนุญาตจากผู้ปกครอง โดยมีเอกสารเป็นลายลักษณ์อักษรที่ถูกต้อง" 
                                textAlign="left"
                                textAlignResponsive="left"
                            >
                                น้อง ๆ ที่ได้รับการอนุญาตจาก ผู้ปกครอง<Br/> โดยมีเอกสารเป็น ลายลักษณ์ อักษรที่ถูกต้อง</WhoMobile>
                                        {/* <ImageInfo 
                                            src="/img/Who/who4.png" 
                                            color="white" 
                                            content="น้อง ๆ ที่ได้รับการอนุญาตจาก ผู้ปกครอง โดยมีเอกสารเป็น ลายลักษณ์ อักษรที่ถูกต้อง"                                             
                                            textAlignDeskTop="center"
                                        /> */}
                        </Col>
                        <Col lg="2" md='1' sm="auto"></Col>
                    </Row>
                    <Row>
                        <Col md="12" className="d-flex justify-content-center">
                            <Image2 src="/img/Core/Wippo.png" alt="Wippo" />
                        </Col>
                    </Row>            
                </ContentContainer>
            </WhoContainer>
        )
    }
}
