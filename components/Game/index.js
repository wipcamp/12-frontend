import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { Row, Col, Button, Container } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Header } from '../Core/Text'
import Link from 'next/link'

const GameContainer = styled.div`
    background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
`

const Wrap = styled.div`
    background: url(/img/temp.jpg) center no-repeat;
    position: relative;
    display: table;
    width: 100%;
    height: 354px;
    background-size: cover;

    @media (min-width: 768px) {
        height: 771px;
    }

    @media (min-width: 1024px) {
        height: 500px;
    }
`

const VerticalAlign = styled.div`
    display: table-cell;
    text-align: center;
    vertical-align: middle;
`

const Content = styled.div`
    margin-top: 41px;

    @media (min-width: 768px) {
        margin-top: 69px;
    }

    @media (min-width: 1024px) {
        margin-top: 124px;
    }
`

const StyledButton = styled(Button)`
    font-family: "ChakraPetch-Regular";
    font-size: 18px;
    padding: 15px 27px;
    background-color: white;
    border-color: white;
    border-radius: 50px;
    text-decoration: none !important;

    @media (min-width: 768px) {
        font-size: 48px;
        padding: 30px 47px;
    }

    @media (min-width: 1024px) {
        padding: 38px 46px;
    }
`

const StyledLink = styled.a`
    color: black !important;
    text-decoration: none !important;
`

export default class Game extends Component {
    render() {
        return (
            <GameContainer>
                <Container className="text-center">
                    <Header color="#ffffff" headerText="GAME" />
                </Container>
                <Content>
                    <Row>
                        <Col xl="1" lg="1" md="1" sm="1" xs="1"></Col>
                        <Col xl="10" lg="10" md="10" sm="10" xs="10">
                            <Wrap>
                                <VerticalAlign>
                                    <StyledButton><Link href="/"><StyledLink href="/">Go To Game</StyledLink></Link></StyledButton>
                                </VerticalAlign>
                            </Wrap>
                        </Col>
                        <Col xl="1" lg="1" md="1" sm="1" xs="1"></Col>
                    </Row>


                </Content>

            </GameContainer>
        )
    }
}
