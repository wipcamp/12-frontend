import React, { Component } from 'react'
import styled from 'styled-components'
import { Header, SubHeader, Content } from '../Core/Text'
import Trackpage from './Track'
import Flippycardnaja from '../Core/FlippyCard'
import { Container, Row, Col } from 'reactstrap'
import CarouselTrack from './Carousel'
import { Parallax } from 'react-scroll-parallax'

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
            margin:60px 0px 75px 0px;
        }
`
const ButtomContainer = styled.div`
    margin-top: 20px;
 @media (min-width: 768px) {
    margin-top:50px;
 }

 @media (min-width: 1024px) {
    margin-top:75px
 }
`

const Star = styled.img`
    position: absolute;
    bottom: -8vh;
    width: 20vw;
    right: -11vw;
    display: none;

    @media (min-width: 1024px) {
        display: block;
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
        width: 0, 
        height: 0,
        isMobile: false
    };

    showHideElement = e => {
        if (!this.state.isMobile) {
            showCardGrid();
        }else{
            showCardScroll();
        }
    }

    updateDimensions = () => {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
        if (window.innerWidth < 768) {
            this.setState({ isMobile: true})
        }else if (window.innerWidth >= 768) {
            this.setState({ isMobile: false})
        } 
      };
    
    componentDidMount = () => {
        window.addEventListener('resize', this.updateDimensions);
        window.addEventListener('resize', this.showHideElement);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    }

    render() {
        return (
            <TrackBg>
                <Parallax y={[0,10]}>
                    <Parallax y={[0,-10]}>
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
                                 textIndent="0px"
                                 textIndentIpad="68px"
                                 textIndentDesktop="68px"
                                 textAlign="left"
                                 color="white"
                                 content="แทร็ก (Track) หมายถึง สายอาชีพไอทีที่เปิดโอกาสให้น้อง ๆ ได้เข้ามาสัมผัสและเรียนรู้ตามความสนใจ น้อง ๆ จะได้เลือก Track ตามที่ตนเองสนใจ     
                                 2 Track จากทั้งหมด 4 Track โดย เลือก Track ที่น้องสนใจ ลำดับที่ 1 สำหรับการเลือกเข้าร่วม Track ลำดับที่ 2 จะได้เลือกในวันค่าย" />
                                </Trackcontainer>
                                </Col>
                                <Col xl="1" lg="1" md="1" sm="1" xs="1"></Col>
                            </Row>
                            <Row id="cards-grid" >
                                <Col xl='3' lg='3' xs='6'>
                                    <div className=" d-flex justify-content-lg-center justify-content-md-end">
                                        <Flippycardnaja srcFront="/img/FrontCard.png" srcBack="/img/BackCard.png" />
                                    </div>
                                </Col>
                                <Col xl='3' lg='3' xs='6'>
                                    <div className=" d-flex justify-content-lg-center justify-content-md-start">
                                        <Flippycardnaja srcFront="/img/FrontCard.png" srcBack="/img/BackCard.png" />
                                    </div>
                                </Col>
                                <Col xl='3' lg='3' xs='6'>
                                    <div className=" d-flex justify-content-lg-center justify-content-md-end">
                                        <Flippycardnaja srcFront="/img/FrontCard.png" srcBack="/img/BackCard.png" />
                                    </div>
                                </Col>
                                <Col xl='3' lg='3' xs='6'>
                                    <div className=" d-flex justify-content-lg-center justify-content-md-start">
                                        <Flippycardnaja srcFront="/img/FrontCard.png" srcBack="/img/BackCard.png" />
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                        <div id="cards-scroll" style={{display: 'none'}}>
                            <CarouselTrack />
                        </div>
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
                    </Parallax>
                    <Star src="/img/Track/star.png" />
                </Parallax>
            </TrackBg>
        )
    }
}
