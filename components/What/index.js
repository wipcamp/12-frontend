import React, { Component, Fragment } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Col} from 'reactstrap'
import styled from 'styled-components'
import { Header, SubHeader, Content } from '../Core/Text'
import WhatSideScroll from './WhatSideScroll'
import AOS from 'aos';
import 'aos/dist/aos.css';

const WhatBg = styled.div`
    position: relative;
    z-index: 5;
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

const GroupOfCloud = () => {
    return(
        <Fragment>
            <Cloud1 src="/img/What/cloud1.png" data-aos="fade-down-right" alt="cloud" />
            <Cloud2 src="/img/What/cloud2.png" data-aos="fade-down-right" data-aos-duration="1500" alt="cloud"/>
            <Cloud3 src="/img/What/cloud3.png" data-aos="fade-down-right" data-aos-duration="2000" alt="cloud"/>
        </Fragment>
    )
}
export default class What extends Component {
    state = {
        isMobile: true,
        contentColumn1: 5,
        contentColumn2: 6
    }
    componentDidMount = () => {
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
                contentColumn1: 10,
                contentColumn2: 12
            })
        } else {
            this.setState({
                isMobile: false,
                contentColumn1: 5,
                contentColumn2: 6
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
            <WhatBg>
                {
                    (this.getType()) ?
                        <Fragment></Fragment>
                        : <GroupOfCloud />
                }
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
                                    textAlign="่justify"
                                    color="white"
                                    content="กลับมาอีกครั้งกับภารกิจครั้งใหม่ สำหรับน้องที่มีความสนใจทางด้านไอที 
                                        หรือกำลังตามหาเส้นทางของตัวเอง ซึ่งน้อง ๆ เปรียบเสมือนนักดูดาว 
                                        ผู้ถูกเลือกเพื่อออกตามหาแสงสว่างที่หายไปจากดาวราศีต่าง ๆ 
                                        โดยมีผู้พิทักษ์ดวงดาวเป็นผู้ชี้นำทาง หนึ่งภารกิจสำคัญ คือ 
                                        การเลือกเส้นทางเดินของตัวเอง 2 เส้นทางจากทั้งหมด 
                                        นั่นคือ Programmer, Website, UX & UI และ Network 
                                        นอกจากนี้ ยังมีภารกิจอื่น ๆ มากมายที่ยังรอคอยอยู่ 
                                        เรื่องราวครั้งนี้จะเป็นอย่างไร ภารกิจนี้จะสำเร็จหรือไม่ 
                                        ติดตามได้ใน ค่ายเส้นทางสู่ฝันนักไอที ครั้งที่ 12 (WIP Camp #12)"
                                />
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
