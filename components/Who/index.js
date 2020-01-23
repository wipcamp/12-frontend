import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Header, SubHeader } from '../Core/Text'
import { ImageInfo , ImageInfoGlow } from '../Core/ImgInfo'

const WhoContainer = styled.div`
    background: rgb(9,10,15);
    background: linear-gradient(90deg, rgba(9,10,15,1) 0%, rgba(27,39,53,1) 50%, rgba(9,10,15,1) 100%);
padding: 100px 0 100px 0;

`
const Image = styled.img`
left: 430px;
bottom: -250px;
width: 275.44px;
height: 526.98px;
position: absolute;
@media (max-width: 320px) {
position: absolute;
   
}
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
                            <ImageInfo src="/Img/Who/Circle.png" color="white" content="น้อง ๆ ที่มีความสนใจทางด้านไอที หรือต้องการตามหาเส้นทางเดิน ของตัวเอง"/>
                        </Col>
                        <Col sm="4">
                        </Col>
                        <Col sm="4">
                            <ImageInfo src="/Img/Who/Circle.png" color="white" content="น้อง ๆ ที่มีความสนใจทางด้านไอที หรือต้องการตามหาเส้นทางเดิน ของตัวเอง"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col><Image src="/Img/Who/Wippo.png"/></Col>
                    </Row>
                    <Row>
                        <Col sm="4">
                            <ImageInfo src="/Img/Who/Circle.png" color="white" content="น้อง ๆ ที่มีความสนใจทางด้านไอที หรือต้องการตามหาเส้นทางเดิน ของตัวเอง"/>
                        </Col>
                        <Col sm="4">
                        </Col>
                        <Col sm="4">
                            <ImageInfo src="/Img/Who/Circle.png" color="white" content="น้อง ๆ ที่มีความสนใจทางด้านไอที หรือต้องการตามหาเส้นทางเดิน ของตัวเอง"/>
                        </Col>
                    </Row>
                </Container>
            </WhoContainer>
        )
    }
}
