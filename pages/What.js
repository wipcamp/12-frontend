import React, { Component, Fragment } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Col, Row } from 'reactstrap'
import styled from 'styled-components'
import { Header, SubHeader, Content } from '../components/Core/Text'
// import WhatCarousel from '../components/Core/WhatCarousel'

const LineHeight = styled.div`
line-height: ${props => props.LineHeight};
`

export default class What extends Component {
    render() {
        return (
            <React.Fragment>
                <Container>
                    <Row>
                        <Col sm="2"/>
                        <Col sm="8" className="text-center mt-2">
                                <Header stroke="black" headerText="WHAT" />
                                <SubHeader color="black" subHeaderText="ค่ายนี้คืออะไร" />
                                <Content color="black" textAlign="center" content="wowza" />
                                <LineHeight LineHeight="70%" >
                                    {/* <WhatCarousel /> */}
                                </LineHeight>
                            </Col>
                            <Col sm="2" />
                        
                    </Row>
                </Container>
            </React.Fragment>
                )
            }
        }
