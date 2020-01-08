import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Header, SubHeader } from '../Core/Text'
import ImgInfo from '../Core/ImgInfo'

export default class Who extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <Row>
                        <Col>
                            <Header stroke="#1E1E1E" headerText="WHO" />
                            <SubHeader color="#1E1E1E" subHeaderText="ค่ายนี้เหมาะกับใคร" />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="6">
                            <ImgInfo src="Who/tempcircle.png" info="น้อง ๆที่มีความสนใจด้านไอที หรือต้องการตามหาเส้นทาง เดินของตัวเอง" />
                        </Col>
                        <Col sm="6">
                            <ImgInfo src="Who/tempcircle.png" info="น้อง ๆที่มีความสนใจด้านไอที หรือต้องการตามหาเส้นทาง เดินของตัวเอง" />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="6">
                            <ImgInfo src="Who/tempcircle.png" info="น้อง ๆที่มีความสนใจด้านไอที หรือต้องการตามหาเส้นทาง เดินของตัวเอง" />
                        </Col>
                        <Col sm="6">
                            <ImgInfo src="Who/tempcircle.png" info="น้อง ๆที่มีความสนใจด้านไอที หรือต้องการตามหาเส้นทาง เดินของตัวเอง" />
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}
