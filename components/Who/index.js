import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Header, SubHeader } from '../Core/Text'
import { ImageInfo, WhoMobile } from '../Core/ImgInfo'
import { Parallax } from 'react-scroll-parallax'

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
`

const Image = styled.img`
top: -21vh;
display: none;
width: 14vw;
display: none;

@media (min-width: 1080px) {
position: absolute;
display: block;
margin-left: auto;
margin-right: auto;
left: 0;
right: 0;
}
@media (min-height: 1280px) {
    top: -15vw;
}
`
const Image2 = styled.img`
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

    @media (min-height: 1280px) {
    
}
`

const Zodiac = styled.img`
    position: absolute;
    right: 2vw;
    width: 20vw;
    bottom: -15vh;
    display: none;

    @media (min-width: 1024px) {
        display: block;
    }
`

const Star = styled(Zodiac)`
    right: 2vw;
    bottom: -4vh;
`

export default class Who extends Component {
    state = {
        midColumn: 2,
        contentColumn: 4
    }

    componentDidMount() {
        window.addEventListener('resize', this.updateWindowDimensions)
    }

    updateWindowDimensions = () => {
        if (window.innerWidth < 1080) {
            this.setState({
                midColumn: 'auto',
                contentColumn: 5
            })
        } else {
            this.setState({
                midColumn: 2,
                contentColumn: 4
            })
        }
    }

    render() {
        return (
            <WhoContainer>
                <ContentContainer fluid={true} >
                    <Parallax y={[0, 10]}>
                        <Parallax y={[0, 10]}>
                            <Parallax y={[0, -20]}>
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
                                            color="white" 
                                            content="น้อง ๆ ที่มีความสนใจทางด้านไอที หรือต้องการตามหาเส้นทางเดิน ของตัวเอง" 
                                            textAlign="left"
                                            textAlignResponsive="left"
                                        />
                                        <ImageInfo 
                                            src="/img/Who/who1.png" 
                                            color="white" 
                                            content="น้อง ๆ ที่มีความสนใจทางด้านไอที หรือต้องการตามหาเส้นทางเดิน ของตัวเอง"                                            
                                            textAlignDeskTop="center"
                                        />
                                    </Col>
                                    <Col lg={this.state.midColumn} md="auto"></Col>
                                    <Col lg={this.state.contentColumn} md='5'>
                                        <WhoMobile 
                                            src="/img/Who/who2.png" 
                                            color="white" 
                                            content="น้องระดับชั้นมัธยมศึกษาตอนปลาย “ทุกแผนการเรียน”" 
                                            textAlign="left"
                                            textAlignResponsive="left"                                            
                                        />
                                        <ImageInfo 
                                            src="/img/Who/who2.png" 
                                            color="white" 
                                            content="น้องระดับชั้นมัธยมศึกษาตอนปลาย “ทุกแผนการเรียน”" 
                                            textAlignDeskTop="center"
                                        />
                                    </Col>
                                    <Col lg="1" md='1'></Col>
                                </WhoRow>
                                <Row>
                                    <Col><Image src="/img/Who/Wippo.png" /></Col>
                                </Row>
                                <Row>
                                    <Col lg="1" md='1' sm="auto"></Col>
                                    <Col lg={this.state.contentColumn} md='5' sm="12">
                                        <WhoMobile 
                                            src="/img/Who/who3.png" 
                                            color="white" 
                                            content="น้อง ๆ ที่สามารถอยู่ร่วมค่ายค้างคืน ได้ตลอดระยะเวลา 5 วัน 4 คืน" 
                                            textAlign="left"
                                            textAlignResponsive="left"
                                        />
                                        <ImageInfo 
                                            src="/img/Who/who3.png" 
                                            color="white" 
                                            content="น้อง ๆ ที่สามารถอยู่ร่วมค่ายค้างคืน ได้ตลอดระยะเวลา 5 วัน 4 คืน" 
                                            textAlignDeskTop="center"
                                        />
                                    </Col>
                                    <Col lg={this.state.midColumn} md='auto' ></Col>
                                    <Col lg={this.state.contentColumn} md='5' sm="12">
                                        <WhoMobile 
                                            src="/img/Who/who4.png" 
                                            color="white" 
                                            content="น้อง ๆ ที่ได้รับการอนุญาตจาก ผู้ปกครอง โดยมีเอกสารเป็น ลายลักษณ์ อักษรที่ถูกต้อง" 
                                            textAlign="left"
                                            textAlignResponsive="left"
                                        />
                                        <ImageInfo 
                                            src="/img/Who/who4.png" 
                                            color="white" 
                                            content="น้อง ๆ ที่ได้รับการอนุญาตจาก ผู้ปกครอง โดยมีเอกสารเป็น ลายลักษณ์ อักษรที่ถูกต้อง"                                             
                                            textAlignDeskTop="center"
                                        />
                                    </Col>
                                    <Col lg="2" md='1' sm="auto"></Col>
                                </Row>
                                <Row>
                                    <Col md="12" className="d-flex justify-content-center">
                                        <Image2 src="/img/Who/Wippo.png" />
                                    </Col>
                                </Row>
                            </Parallax>
                            <Star src="/img/Who/star.png" />
                        </Parallax>
                        <Zodiac src="/img/Who/zodiac.png" />
                    </Parallax>
                </ContentContainer>
            </WhoContainer>
        )
    }
}
