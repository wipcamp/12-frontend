import React, { Component } from 'react'
import styled from 'styled-components'
import { Header, SubHeader, Content } from '../Core/Text'
import CardInGrid from './CardInGrid'
import Flippycardnaja from '../Core/FlippyCard'
import { Container, Row, Col } from 'reactstrap'
import CarouselTrack from './Carousel'
import { Parallax } from 'react-scroll-parallax'
import AOS from 'aos';
import 'aos/dist/aos.css';

const TrackBg = styled.div`
    position: relative;
    padding-bottom: 4rem;
    @media (min-width: 1024px) {
        padding-bottom: 10vh;
    }
`

const Trackcontainer = styled.div`
        display:block;
        margin-top: 20px;

        @media (min-width: 768px) {
            margin:50.36px 0px 50px 0px;
        }
    
        @media (min-width: 1024px) {
            margin:60px 0px 30px 0px;
        }
`
const ButtomContainer = styled.div`
    margin-top: 10px;
 @media (min-width: 768px) {
    margin-top:50px;
 }

 @media (min-width: 1024px) {
    margin-top:20px
 }
`

const showCardGrid = () => {
    document.getElementById("cards-grid").style.display = 'flex';
    hideCardScroll();
}

const hideCardGrid = () => {
    document.getElementById("cards-grid").style.display = 'none';
}

const showCardScroll = () => {
    document.getElementById("cards-scroll").style.display = 'block';
    hideCardGrid();
}

const hideCardScroll = () => {
    document.getElementById("cards-scroll").style.display = 'none';
}

export default class Track extends Component {
    state = { 
        isMobile: true
    };

    componentDidMount = () => {
        window.addEventListener('resize', this.updateDimensions)
        this.updateDimensions()
        AOS.init({
            duration: 3000
        })
    }

    updateDimensions = () => {
        if (window.innerWidth < 768) {
            this.setState({
                isMobile: true
            })
        } else {
            this.setState({
                isMobile: false
            })
        }
    };

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    }

    getType = () => {
        return this.state.isMobile
    }

    render() {
        return (
            <TrackBg>
                <Container>
                    <Row>
                        <Col>
                            <Header color="white" headerText="TRACK" />
                            <SubHeader color="white" subHeaderText="เส้นทางในค่าย" />
                        </Col>
                    </Row>
                    <Row>
                        <Col xl="1" lg="1" md="1" sm="1" xs="1"></Col>
                        <Col xl="10" lg="10" md="10" sm="10" xs="10">
                            <Trackcontainer>
                                <Content
                                    textIndent="30px"
                                    textIndentIpad="68px"
                                    textIndentDesktop="68px"
                                    textAlign="left"
                                    color="white"
                                    content="แทร็ก (Track) หมายถึง สายอาชีพไอทีที่เปิดโอกาสให้น้อง ๆ 
                                        ได้เข้ามาสัมผัสและเรียนรู้ตามความสนใจ น้อง ๆ จะได้เลือก Track ตามที่ตนเองสนใจ     
                                        2 Track จากทั้งหมด 4 Track โดยเลือก Track ที่น้องสนใจลำดับที่ 1 " />
                            </Trackcontainer>
                        </Col>
                        <Col xl="1" lg="1" md="1" sm="1" xs="1"></Col>
                    </Row>
                </Container>
                {
                    (this.getType()) ?
                        <CarouselTrack />
                        : <CardInGrid />
                }
                <Container>
                    <Row>
                        <Col xl="1" lg="1" md="1" sm="1" xs="1"></Col>
                        <Col xl="10" lg="10" md="10" sm="10" xs="10">
                            <ButtomContainer>
                                <Content
                                    textIndent="0px"
                                    textAlign="left"
                                    textAlignResponsive="center"
                                    color="white"
                                    content="สำหรับการเลือกเข้าร่วม Track ลำดับที่ 2 จะได้เลือกภายในวันค่าย WIP Camp #12" />   
                            </ButtomContainer>
                        </Col>
                        <Col xl="1" lg="1" md="1" sm="1" xs="1"></Col>
                    </Row>
                </Container>
            </TrackBg>
        )
    }
}
