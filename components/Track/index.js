import React, { Component } from 'react'
import styled from 'styled-components'
import { Header, SubHeader, Content } from '../Core/Text'
import Trackpage from './Track'
import Flippycardnaja from '../Core/FlippyCard'
import { Container, Row, Col } from 'reactstrap'
import CarouselTrack from './Carousel'

const TrackBg = styled.div`
    background: rgb(9,10,15);
    background: linear-gradient(90deg, rgba(9,10,15,1) 0%, rgba(27,39,53,1) 50%, rgba(9,10,15,1) 100%);
    padding-bottom: 4rem;
    @media (min-width: 1024px) {
        padding-bottom: 10vh;
    }
`

const Trackcontainer = styled.div`
        display:block;

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
                <Container>
                    <Row>
                        <Col>
                            <Header color="white" headerText="TRACK" />
                            <SubHeader color="white" subHeaderText="สาขาอาชีพในค่าย" />
                        </Col>
                    </Row>
                    <Row id="cards-grid" >
                        <Col xl='3' lg='3' xs='6'>
                            <div className="yakhaimunmefaiahmae d-flex justify-content-lg-center justify-content-md-end">
                                <Flippycardnaja srcFront="/img/Card_BG.png" srcBack="/img/Card_BG.png" />
                            </div>
                        </Col>
                        <Col xl='3' lg='3' xs='6'>
                            <div className="yakhaimunmefaiahmae d-flex justify-content-lg-center justify-content-md-start">
                                <Flippycardnaja srcFront="/img/Card_BG.png" srcBack="/img/Card_BG.png" />
                            </div>
                        </Col>
                        <Col xl='3' lg='3' xs='6'>
                            <div className="yakhaimunmefaiahmae d-flex justify-content-lg-center justify-content-md-end">
                                <Flippycardnaja srcFront="/img/Card_BG.png" srcBack="/img/Card_BG.png" />
                            </div>
                        </Col>
                        <Col xl='3' lg='3' xs='6'>
                            <div className="yakhaimunmefaiahmae d-flex justify-content-lg-center justify-content-md-start">
                                <Flippycardnaja srcFront="/img/Card_BG.png" srcBack="/img/Card_BG.png" />
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div id="cards-scroll" style={{display: 'none'}}>
                    <CarouselTrack />
                </div>
            </TrackBg>
        )
    }
}
