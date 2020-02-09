import React, { Component } from 'react'
import styled from 'styled-components'
import { Header, SubHeader, Content } from '../Core/Text'
import Trackpage from './Track'
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
        AOS.init({
            duration: 3000
        })
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
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
                                 content="แทร็ก (Track) หมายถึง สายอาชีพไอทีที่เปิดโอกาสให้น้อง ๆ ได้เข้ามาสัมผัสและเรียนรู้ตามความสนใจ น้อง ๆ จะได้เลือก Track ตามที่ตนเองสนใจ     
                                 2 Track จากทั้งหมด 4 Track โดย เลือก Track ที่น้องสนใจ ลำดับที่ 1 สำหรับการเลือกเข้าร่วม Track ลำดับที่ 2 จะได้เลือกในวันค่าย" />
                                </Trackcontainer>
                                </Col>
                                <Col xl="1" lg="1" md="1" sm="1" xs="1"></Col>
                            </Row>
                            <Row id="cards-grid" >
                                <Col xl='3' lg='3' xs='6'>
                                    <div className=" d-flex justify-content-lg-center justify-content-md-end">
                                        <Flippycardnaja 
                                            srcFront="/img/Track/uxui.png" 
                                            bg="/img/Track/uxuib.png" 
                                            content="หากเราจะสร้างแอปพลิเคชัน หรือเว็บไซต์ขึ้นมา สิ่งสำคัญที่เราควรจะคำนึงถึงคือ 
                                                สิ่งที่ผู้ใช้ของเราต้องการ (UX) และเมื่อนำมาเพิ่มความสวยงาม (UI)
                                                ก็จะช่วยเสริมให้แอปพลิเคชันหรือเว็บไซต์ของเราตอบโจทย์ผู้ใช้มากขึ้น 
                                                น้อง ๆ คงสงสัยล่ะสิ ว่าเราทำงานเกี่ยวกับอะไร ? เส้นทางนี้จะทำให้รู้จัก 
                                                UX & UI มากขึ้นแน่นอน" 
                                            header="UX/UI"/>
                                    </div>
                                </Col>
                                <Col xl='3' lg='3' xs='6'>
                                    <div className=" d-flex justify-content-lg-center justify-content-md-start">
                                        <Flippycardnaja 
                                            srcFront="/img/Track/website.png" 
                                            bg="/img/Track/websiteb.png" 
                                            content="ถ้าพูดถึงไอทีหนึ่งในสิ่งที่หลายคน นึกถึงคงจะมีเว็บไซต์อยู่แน่นอน 
                                                เส้นทางนี้จะพาไปทำความรู้จักสายอาชีพด้านเว็บไซต์ ทำความเข้าใจเกี่ยวกับเว็บไซต์ 
                                                ด้วยการเขียน HTML และ CSS ถ้าอยากรู้จักสายอาชีพนี้มากขึ้นล่ะก็… เส้นทางนี้แหละ ใช่เลย !" 
                                            header="WEBSITE"/>
                                    </div>
                                </Col>
                                <Col xl='3' lg='3' xs='6'>
                                    <div className=" d-flex justify-content-lg-center justify-content-md-end">
                                        <Flippycardnaja 
                                            srcFront="/img/Track/programming.png" 
                                            bg="/img/Track/programmingb.png" 
                                            content="เคยสงสัยกันไหมว่า ทำไมแอปพลิเคชันที่เราใช้ถึง โต้ตอบกับเราได้ และมันทำงานอย่างไร ? 
                                                เส้นทางที่จะพาไปทำความเข้าใจ เกี่ยวกับ Concept ของการเขียนโปรแกรม 
                                                ผ่านการเรียนภาษาจาวา (Java Programming) ถ้าอยากรู้จักสายอาชีพนี้มากกว่านี้ล่ะก็ ต้องเส้นทางนี้เลย !" 
                                            header="PROGRAMMER"/>
                                    </div>
                                </Col>
                                <Col xl='3' lg='3' xs='6'>
                                    <div className=" d-flex justify-content-lg-center justify-content-md-start">
                                        <Flippycardnaja 
                                            srcFront="/img/Track/network.png" 
                                            bg="/img/Track/networkb.png" 
                                            content="ในยุคที่โลกทั้งใบเชื่อมต่อกันผ่าน สิ่งที่เรียกว่าอินเทอร์เน็ต แล้วมันทำได้ยังไง ? 
                                                เส้นทางนี้จะพาไปเรียนรู้เกี่ยวกับ สายอาชีพ Networkและตามติด Internet Trends ในปัจจุบัน 
                                                รวมถึงสัมผัสอุปกรณ์ของจริง กันไปเลยถ้าอยากรู้จักสายอาชีพนี้อย่างใกล้ชิด เส้นทางนี้ให้คำตอบได้แน่นอน" 
                                            header="NETWORK"/>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                        <div id="cards-scroll" style={{display: 'none'}}>
                            <CarouselTrack />
                        </div>
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
