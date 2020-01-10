import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import SideScroll from './SideScroll'
import { Header, SubHeader } from '../Core/Text'


const FaqsContainer = styled.div`
background-color : #1E1E1E;
padding: 100px 0 100px 0;
`


export default class Faqs extends Component {
    render() {
        return (
            <FaqsContainer>
                <Container>
                    <Row>
                        <Col style={{ marginTop: '50px' }}>
                            <Header stroke="#ffffff" headerText="FAQS" />
                            <SubHeader subHeaderText="คำถามที่พบบ่อย" color="#ffffff" />
                        </Col>
                    </Row>
                </Container>
                <Row>
                    <Col style={{ marginTop: '36px' }}>
                        <SideScroll />
                    </Col>
                </Row>
            </FaqsContainer>
        )
    }
}