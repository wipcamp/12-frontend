import React, { Component } from 'react'
import styled from 'styled-components'
import { Header, SubHeader, Content } from '../Core/Text'
import Trackpage from './Track'
import { Container,Row,Col } from 'reactstrap'
import Flip from '../Core/FlippyCard'

const TrackBg = styled.div`
background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
padding-top: 100px;
`

const Trackcontainer = styled.div`
        display:block;

`

export default class Track extends Component {
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
            <Row className='no-gutters'>
                <Col className='justify-contents-center' xl ='3' lg='3'><Trackpage /></Col>
                <Col className='justify-contents-center' xl ='3' lg='3'><Trackpage /></Col>
                <Col className='justify-contents-center' xl ='3' lg='3'><Trackpage /></Col>
                <Col className='justify-contents-center' xl ='3' lg='3'><Trackpage /></Col>
            </Row>        
            </Container>
            </TrackBg>
        )
    }
}
