import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
    Container,
    Col,
    Row,
    Button
} from 'reactstrap'
import styled from 'styled-components'
import { Header, SubHeader, Content } from '../Core/Text'
import Iframe from 'react-iframe'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax'

const WhereBg = styled.div`
    padding-bottom: 4rem;
    position: relative;

    @media (min-width: 1024px) {
        padding-bottom: 10vh;
    }
`

const SIT = styled.div`
    background-color: black;
    margin-top: 20%;
    width: 200px;
    height: 100px;
    border-top-right-radius: 110px;
    border-top-left-radius: 110px;
    border-bottom: 0;
    float: right; /* Change this to left to float it to left */
    margin-left:50%;
    border-radius: 50%;
    display:none ;
`

const LineHeight = styled.div`
    line-height: ${props => props.LineHeight};
`
const WIPMap = styled(Iframe)`
    width: 80%;
    border: none;
    height: 18em;
    margin-top: 5vh;

    @media (min-width: 760px) {
        height: 40vh;
    }

    @media (min-width: 1024px) {
        height: 40vh;
    }

    @media (min-width: 1080px) {
        height: 50vh;
}
`

const Star1 = styled.img`
    position: absolute;
    top: -5vh;
    left: 2vw;
    width: 15vw;
    display: none;

    @media (min-width: 1024px) {
        display: block;
    }
`

const Star2 = styled(Star1)`
    top: 10vh;
    left: 80vw;

`

export default class Where extends Component {
    state = {
        sideColumn: 3,
        contentColumn: 6
    }

    componentDidMount() {
        window.addEventListener('resize', this.updateWindowDimensions)
        this.updateWindowDimensions()
    }

    updateWindowDimensions = () => {
        if (window.innerWidth < 1080) {
            this.setState({
                sideColumn: 2,
                contentColumn: 8
            })
        } else {
            this.setState({
                sideColumn: 3,
                contentColumn: 6
            })
        }
    }
    render() {
        return (

            <WhereBg>
                <Container fluid={true}>
                    <Parallax y={[0, 10]}>
                        <Star1 src="/img/Where/star1.png" />
                        <Parallax y={[0,15]}>
                            <Star2 src="/img/Where/star2.png" />
                            <Parallax y={[0,-25]}>
                                <Row>
                                    <Col>
                                        <Header color="#ffffff" headerText="WHERE" />
                                        <SubHeader color="#ffffff" subHeaderText="ค่ายจัดที่ไหน ?" />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={this.state.sideColumn} md="1"></Col>
                                    <Col lg={this.state.contentColumn} md="10">
                                        <div className="d-flex justify-content-center">
                                            <WIPMap url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.085040985499!2d100.49142161378397!3d13.652590703265513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2a251a57396f5%3A0x5e0d31f39f400b1e!2sWIP%20Camp!5e0!3m2!1sen!2sth!4v1579260821493!5m2!1sen!2sth" />
                                        </div>
                                        <SIT />
                                    </Col>
                                    <Col lg={this.state.sideColumn} md="1"></Col>
                                </Row>
                                <Row>
                                    <Col className="mt-5">
                                        <Content textAlign="center" color="white" content="คณะเทคโนโลยีสารสนเทศ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี">
                                        </Content>
                                    </Col>
                                </Row>
                            </Parallax>
                        </Parallax>
                    </Parallax>
                </Container>
            </WhereBg>
        )
    }
}
