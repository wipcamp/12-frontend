import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import {Container,Row,Col} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Header , SubHeader} from '../Core/Text'
import ImgInfo from '../Core/ImgInfo'

const WhenContainer = styled.div`
background-color : #1E1E1E;
padding: 100px 0 100px 0;
`

export default class When extends Component {
    render () {
        return(
            <WhenContainer>
                <Container>
                    <Row>
                        <Col>
                        <Header stroke="#ffffff" headerText="WHEN" />
                        <SubHeader color="#ffffff" subHeaderText="ค่ายจัดเมื่อไหร่" />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="6">
                            <ImgInfo src="Who/tempcircle.png" info="น้อง ๆที่มีความสนใจด้านไอที หรือต้องการตามหาเส้นทาง เดินของตัวเอง" color='#ffffff' />
                        </Col>
                        <Col sm="6">
                            <ImgInfo src="Who/tempcircle.png" info="น้อง ๆที่มีความสนใจด้านไอที หรือต้องการตามหาเส้นทาง เดินของตัวเอง" color='#ffffff' />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="6">
                            <ImgInfo src="Who/tempcircle.png" info="น้อง ๆที่มีความสนใจด้านไอที หรือต้องการตามหาเส้นทาง เดินของตัวเอง" color='#ffffff' />
                        </Col>
                        <Col sm="6">
                            <ImgInfo src="Who/tempcircle.png" info="น้อง ๆที่มีความสนใจด้านไอที หรือต้องการตามหาเส้นทาง เดินของตัวเอง" color='#ffffff' />
                        </Col>
                    </Row>
                </Container>
            </WhenContainer>
        )
    }
}
