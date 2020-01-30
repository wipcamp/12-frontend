import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { Row, Col, Button, Container } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Header } from '../Core/Text'
import Link from 'next/link'
import { Parallax } from 'react-scroll-parallax'

const GameContainer = styled.div`
    padding-top: 3em;
    position: relative;
    
    @media (min-width: 768px) {
        padding-top: 5em;
    }

    @media (min-width: 1024px) {
        padding-top: 8em;
    }
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
    margin: 2em 2.25em 0; 

    @media (min-width: 768px) {
        margin: 2em 3em 0;
    }

    @media (min-width: 1024px) {
        margin: 3em 0 0;
    }
`

const StyledButton = styled(Button)`
    font-family: "ChakraPetch-Regular";
    font-size: 18px;
    padding: 0.5em 1.5em;
    background-color: white;
    border-color: white;
    border-radius: 50px;
    text-decoration: none !important;

    @media (min-width: 768px) {
        font-size: 40px;
        padding: 1em 2em;
        border-radius: 100px;
    }

    @media (min-width: 1024px) {
        padding: 0.5em 1.75em;
    }
`

const StyledLink = styled.a`
    color: black !important;
    text-decoration: none !important;
`

const Cloud1 = styled.img`
    position: absolute;
    top: -20vh;
    left: -8vw;
    width: 30vw;
    display: none;

    @media (min-width: 1024px) {
        display: block;
    }
`

export default class Game extends Component {
    render() {
        return (
            <GameContainer>
                <Parallax y={[0, 15]} x={[-5,5]}>
                    <Cloud1 src="/img/Game/cloud1.png" />
                    <Parallax y={[0, -15]} x={[5,-5]}>
                        <Container className="text-center">
                            <Header color="#ffffff" headerText="GAME" />
                            <Content>
                                <Wrap>
                                    <VerticalAlign>
                                        <StyledButton><Link href="/"><StyledLink href="/">Go To Game</StyledLink></Link></StyledButton>
                                    </VerticalAlign>
                                </Wrap>
                            </Content>
                        </Container>
                    </Parallax>
                </Parallax>
            </GameContainer>
        )
    }
}
