import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { Row, Col, Button } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Header } from '../Core/Text'

const GameContainer = styled.div`
background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
/* max-height: 80vh; */

`

const Wrap = styled.div`
    background: url(/img/temp.jpg) center no-repeat;
    position: relative;
    display: table;
    width: 100%;
    height: 584px;
    background-size: cover;
    margin-top: 138px;
`

const StyledButton = styled(Button)`
    font-family: Chakra Petch;
    font-size: 48px;
    color: black;
    padding: 28px 44px;
    background-color: white;
    border-color: white;
    border-radius: 50px;
`

export default class Game extends Component {
    render() {
        return (
            <GameContainer>

                <Header stroke="#ffffff" headerText="GAME" />
                <Row>
                    <Col xl="1"></Col>
                    <Col xl="10">
                        <Wrap>
                            <div style={{ display: 'table-cell', textAlign: 'center', verticalAlign: 'middle' }}>
                                <StyledButton>Go To Game</StyledButton>
                            </div>
                        </Wrap>
                    </Col>
                    <Col xl="1"></Col>
                </Row>
            </GameContainer>
        )
    }
}
