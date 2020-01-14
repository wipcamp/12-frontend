import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'reactstrap'
import ZodiacRing from './ZodiacRing'
import styled from 'styled-components'
import Star from '../Core/Star'

const HomeContainer = styled.div`
    width : 100%;
    height: 1000px;
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
            <Star>
                <Container>
                    <Row>
                        <Col>
                        <ZodiacContainer>
                            <ZodiacRing/>
                        </ZodiacContainer>
                        </Col>
                    </Row>
                </Container>
            </Star>
        </HomeContainer>

        )
    }
}
