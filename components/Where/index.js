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
const Map = styled.div`
background-color: black;
height: 200px;
width: 300px;
margin-top: 10%;
`
const LineHeight = styled.div`
line-height: ${props => props.LineHeight};
`

export default class Where extends Component {
    render() {
        return (
            <React.Fragment>
                <Container>
                    <Row>
                        <Col sm="2" />
                        <Col sm="8" className="text-center mt-5">
                            <Header stroke="black" headerText="WHERE" />
                            <SubHeader color="black" subHeaderText="ค่ายจัดที่ไหน" />
                            {/* Map = google map ชั่วคราว */}
                            <div style={{display:'flex',justifyContent:'center'}}>
                            <Map />
                            </div>
                            <LineHeight LineHeight="10%" >
                                <Content color="black" padding="20px 0px 0px 0px" textAlign="center" content="คณะเทคโนโลยีสารสนเทศ" />
                                <Content color="black" textAlign="center" content="มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี" />
                            </LineHeight>
                        </Col>
                        <Col sm="2" />

                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}
