import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Header, SubHeader } from '../Core/Text'
import ImgInfo from '../Core/ImgInfo'

const WhoContainer = styled.div`
background-color : #1E1E1E;
padding: 100px 0 100px 0;
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
                        <Col sm="6">
                            <ImgInfo src="Who/tempcircle.png" info="น้อง ๆที่มีความสนใจด้านไอที หรือต้องการตามหาเส้นทาง เดินของตัวเอง" color="#ffffff" />
                        </Col>
                        <Col sm="6">
                            <ImgInfo src="Who/tempcircle.png" info="น้อง ๆที่มีความสนใจด้านไอที หรือต้องการตามหาเส้นทาง เดินของตัวเอง" color="#ffffff" />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="6">
                            <ImgInfo src="Who/tempcircle.png" info="น้อง ๆที่มีความสนใจด้านไอที หรือต้องการตามหาเส้นทาง เดินของตัวเอง" color="#ffffff" />
                        </Col>
                        <Col sm="6">
                            <ImgInfo src="Who/tempcircle.png" info="น้อง ๆที่มีความสนใจด้านไอที หรือต้องการตามหาเส้นทาง เดินของตัวเอง" color="#ffffff" />
                        </Col>
                    </Row>
                </Container>
            </WhoContainer>
        )
    }
}
