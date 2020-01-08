import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'reactstrap'
import ZodiacRing from './ZodiacRing'
import styled from 'styled-components'

const HomeContainer = styled.div`
    width : 100%;
    background-color : #1E1E1E;
    padding : 0 0 100px 0;
`
const ZodiacContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 200px;
`

export default class Home extends Component {
    render() {
        return (
            <HomeContainer>
                <Container>
                    <Row>
                        <Col>
                        <ZodiacContainer>
                            <ZodiacRing/>
                        </ZodiacContainer>
                        </Col>
                    </Row>
                </Container>
            </HomeContainer>

        )
    }
}
