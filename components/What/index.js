import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Col} from 'reactstrap'
import styled from 'styled-components'
import { Header, SubHeader, Content } from '../Core/Text'
import WhatSideScroll from './WhatSideScroll'
import { Parallax } from 'react-scroll-parallax'
import AOS from 'aos';
import 'aos/dist/aos.css';

const WhatBg = styled.div`
    padding-bottom: 4rem;
    position: relative;
    z-index: 5;

    @media (min-width: 1024px) {
        padding-bottom: 10vh;
    }
`

const WrapGrid = styled.div`
    margin-top: 1em;
    
    @media (min-width: 768px) {
        margin-top: 1.5em;
    }

    @media (min-width: 1024px) {
        margin-top: 2em;
    }
`

const WrapContent = styled.div`
    margin-left: 36px;
    margin-right: 36px;

    @media (min-width: 768px) {
        margin-left: 116px;
        margin-right: 116px;
    }

    @media (min-width: 1024px) {
        margin-left: 0px;
        margin-right: 0px;
    }
`

const WrapContent2 = styled.div`
    margin-top: -12px;

    @media (min-width: 768px) {
        margin-top: -16px;
    }

    @media (min-width: 1024px) {
        margin-top: -18px;
    }
`

const WrapSideScroll = styled.div`
    margin-top: 1em;

    @media (min-width: 768px) {
        margin-top: 1.5em;
    }

    @media (min-width: 1024px) {
        margin-top: 0px;
    }
`

const Cloud1 = styled.img`
    position: absolute;
    width: 15vw;
    top: 65vh;
    left: -5vw;
    display: none;

    @media (min-width: 1024px) {
        display: block;
    }
`

const Cloud2 = styled(Cloud1)`
    width: 30vw;
    top: 70vh;
    left: -5vw;
`

const Cloud3 = styled(Cloud1)`
    top: 71vh;
    left: 0vw;
    width: 25vw;
`
export default class What extends Component {
    state = {
        contentColumn1: 5,
        contentColumn2: 6
    }
    componentDidMount = () => {
        window.addEventListener('resize', this.updateWindowDimensions)
        this.updateWindowDimensions()
        AOS.init({
            duration: 3000
        })
    }

    updateWindowDimensions = () => {
        if (window.innerWidth < 1080) {
            this.setState({
                contentColumn1: 10,
                contentColumn2: 12
            })
        } else {
            this.setState({
                contentColumn1: 5,
                contentColumn2: 6
            })
        }
    }
    render() {
        return (
            <WhatBg>
                
                        <Cloud1 src="/img/What/cloud1.png" data-aos="fade-down-right" />
                        <Cloud2 src="/img/What/cloud2.png" data-aos="fade-down-right" data-aos-duration="1500"/>
                        <Cloud3 src="/img/What/cloud3.png" data-aos="fade-down-right" data-aos-duration="2000"/>
                    
                            <br />
                            <div className="text-center">
                                <Header color="white" headerText="WHAT" />
                            </div>
                            <SubHeader color="white" subHeaderText="ค่ายนี้คืออะไร ?" />  
                            <WrapGrid>
                                <Row>
                                <Col xl="1" lg="1" md="12" sm="12" xs="12"></Col>
                                <Col xl="5" lg={this.state.contentColumn1} md="12" sm="12" xs="12">
                                    <WrapContent>
                                        <Content
                                            textIndent="24px"
                                            textIndentIpad="50px"
                                            textIndentDesktop="50px"                                
                                            textAlign="left"
                                            color="white"
                                            content="กลับมาอีกครั้งพร้อมกับภารกิจอันยิ่งใหญ่ ซึ่งเปิดโอกาสให้น้อง ๆ 
                                            ที่มีความสนใจทางด้านไอที หรือกำลังตามหาเส้นทางของตัวเอง 
                                            มาร่วมกันเดินทางไปพร้อมกัน โดยน้อง ๆ เปรียบเสมือนนักดูดาว 
                                            ผู้ถูกเลือกเพื่อออกตามหาแสงสว่างที่หายไปจากดาวราศีต่าง ๆ ที่มีเวลาเพียงแค่ 
                                            5 วัน 4 คืนเท่านั้น "
                                        />
                                        <WrapContent2>
                                            <Content
                                                textIndent="24px"
                                                textIndentIpad="50px"
                                                textIndentDesktop="50px"                                
                                                textAlign="left"
                                                color="white"
                                                content="ในการเดินทางครั้งนี้เหล่านักดูดาว ทั้งหลาย จะมีผู้พิทักษ์ดวงดาวเป็นผู้ชี้นำทาง 
                                                หนึ่งในภารกิจสำคัญ คือ การตัดสินใจเลือกเส้นทางเดินของตัวเองจากทั้งหมด 4 เส้นทาง ได้แก่ 
                                                Programming, Web Developer, UX/UI และ Network นอกจากนั้น ยังมีกิจกรรมต่าง ๆ รวมไปถึง 
                                                IT Management ซึ่งเป็น Workshop พิเศษสำหรับเหล่านักดูดาวทั้งหลาย สุดท้ายแล้ว เรื่องราวครั้งนี้ 
                                                จะเป็นอย่างไร พวกเขาจะทำภารกิจสำเร็จหรือไม่ ติดตามได้ใน ค่ายเส้นทางสู่ฝันนักไอที ครั้งที่ 12 (WIP Camp #12)"
                                            />
                                            </WrapContent2>
                                        </WrapContent>
                                    </Col>
                                <Col xl="6" lg={this.state.contentColumn2} md="12" sm="12" xs="12" className="my-auto">
                                    <WrapSideScroll>
                                        <WhatSideScroll />
                                    </WrapSideScroll>
                                </Col>
                            </Row>
                        </WrapGrid>
                        
            </WhatBg >
        )
    }
}
