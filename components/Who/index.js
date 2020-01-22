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
margin-left: 10%;
margin-top: 30%;
width: 275.44px;
height: 526.98px;
`

export default class Who extends Component {
    render() {
        return (
            <WhoContainer>
                <Container>
                    <Row>
                        <Col>
                            <Header stroke="#ffffff" headerText="WHO" />
                            <SubHeader color="#ffffff" subHeaderText="ค่ายนี้เหมาะกับใคร" />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="4">Lorem
                        <ImageInfo className="" src="img/Who/circle.png" content=" น้อง ๆ ที่มีความสนใจทางด้านไอที หรือต้องการตามหาเส้นทางเดิน ของตัวเอง " color="#fff" />2
                        <ImageInfo src="img/Who/circle.png" content="น้อง ๆ ที่สามารถอยู่ร่วมค่าย ค้างคืนได้ตลอดระยะเวลา 5 วัน 4 คืน" color="#fff" />2
                        
                        </Col>
                        <Col sm="">
                       <Image src="/img/who/Wippo.png" />
                        </Col>
                        <Col sm="4">
                        <ImageInfo src="img/Who/circle.png" content="น้องระดับชั้นมัธยมศึกษาตอนปลาย “ทุกแผนการเรียน" color="#fff" />2
                        <ImageInfo src="img/Who/circle.png" content="น้อง ๆ ที่ได้รับการอนุญาต จากผู้ปกครอง โดยมีเอกสารเป็น ลายลักษณ์อักษรที่ถูกต้อง" color="#fff" />2
                        
                        </Col>
                
                    </Row>
                </Container>
            </WhoContainer>
        )
    }
}
