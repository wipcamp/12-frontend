import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { Row, Col, Button, Container } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Header } from '../Core/Text'
import Link from 'next/link'

const GameContainer = styled.div`
background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
position: relative;
/* max-height: 80vh; */

`

const WrapHeader = styled.div`
    position: absolute;
    width: 100%;
`

const Wrap = styled.div`
    background: url(/img/temp.jpg) center no-repeat;
    position: relative;
    display: table;
    width: 100%;
    height: 500px;
    background-size: cover;
`

const Content = styled.div`
    padding-top: 192px;
`

const StyledButton = styled(Button)`
    font-family: Chakra Petch;
    font-size: 18px;
    padding: 28px 44px;
    background-color: white;
    border-color: white;
    border-radius: 50px;
    text-decoration: none !important;

    @media (min-width: 320px) {
        font-size: 48px;
    }
`

const StyledLink = styled.a`
    color: black !important;
    text-decoration: none;
`

export default class Game extends Component {
    render() {
        return (
            <GameContainer>
                <WrapHeader>
                    <Container>
                    
                            <Header color="#ffffff" headerText="GAME" />
                        
                    </Container>
                </WrapHeader>
                <Content>
                <Container>
                        <Wrap>
                            <div style={{ display: 'table-cell', textAlign: 'center', verticalAlign: 'middle' }}>
                                <StyledButton><Link href="/"><StyledLink href="/">Go To Game</StyledLink></Link></StyledButton>
                            </div>
                        </Wrap>
                        </Container>  
                </Content>
                
            </GameContainer>
        )
    }
}
