import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Header, SubHeader } from '../Core/Text'
import { ImageInfo , ImageInfoGlow } from '../Core/ImgInfo'

const WhoContainer = styled.div`
background-color : #1E1E1E;
padding: 100px 0 100px 0;

`
const Image = styled.img`
left: 430px;
bottom: -250px;
width: 275.44px;
height: 526.98px;
position: absolute;
@media (max-width: 320px) {
display: none;
}
`
const Image2 = styled.img`
@media (max-width: 320px) {
    display: flex;
}
display:none;
position: absolute;
margin-top: -180px;
left: 30%;
width: 135px;
height: 255px;   
`

export default class Who extends Component {
    render() {
        return (
            <WhoContainer>
                <Container>
                    <Row>
                    <Col sm="4">
                        </Col>
                        <Col sm="4">
                        <Header color="white" headerText="WHO" />
                        </Col>
                        <Col sm="4">
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="4">
                            <ImageInfo src="/img/Who/Circle.png" color="white" content="น้อง ๆ ที่มีความสนใจทางด้านไอที หรือต้องการตามหาเส้นทางเดิน ของตัวเอง"/>
                        </Col>
                        <Col sm="4">
                        </Col>
                        <Col sm="4">
                            <ImageInfo src="/img/Who/Circle.png" color="white" content="น้อง ๆ ที่มีความสนใจทางด้านไอที หรือต้องการตามหาเส้นทางเดิน ของตัวเอง"/>
                        </Col>
                    </Row>
                    
                        <Col><Image src="/img/Who/Wippo.png"/></Col>
                    <Row>
                        <Col sm="4">
                            <ImageInfo src="/img/Who/Circle.png" color="white" content="น้อง ๆ ที่มีความสนใจทางด้านไอที หรือต้องการตามหาเส้นทางเดิน ของตัวเอง"/>
                        </Col>
                        <Col sm="4">
                        </Col>
                        <Col sm="4">
                            <ImageInfo src="/img/Who/Circle.png" color="white" content="น้อง ๆ ที่มีความสนใจทางด้านไอที หรือต้องการตามหาเส้นทางเดิน ของตัวเอง"/>
                        </Col>
                    </Row>
                    <Row>
                        <Image2 src="/img/Who/Wippo.png" />
                    </Row>
                </Container>
            </WhoContainer>
        )
    }
}
