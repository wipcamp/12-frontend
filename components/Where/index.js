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

const WhereBg = styled.div`
background-color : #D2D2D2;
`

const SIT = styled.div`
background-color: black;
height: 956px;
width: 956px;
margin-top: 20%;
margin-left:50%;
border-radius: 50%;
`
const LineHeight = styled.div`
line-height: ${props => props.LineHeight};
`

export default class Where extends Component {
    render() {
        return (
            <WhereBg>
                <Container>
                    <Row>
                        <Col>
                            <Header stroke="black" headerText="WHERE" />
                            <SubHeader color="black" subHeaderText="ค่ายจัดที่ไหน" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div style={{ float: 'left' }}>
                                <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.085040985499!2d100.49142161378397!3d13.652590703265513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2a251a57396f5%3A0x5e0d31f39f400b1e!2sWIP%20Camp!5e0!3m2!1sen!2sth!4v1579260821493!5m2!1sen!2sth"
                                    width= "580px"
                                    height= "397px"
                                    className="mt-5" />

                            </div>
                            <SIT />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                   
                        </Col>
                    </Row>
                </Container>
            </WhereBg>
        )
    }
}
