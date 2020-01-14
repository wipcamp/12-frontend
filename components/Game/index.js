import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import {Container,Row,Col} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Header , SubHeader} from '../Core/Text'

const GameContainer = styled.div`
background-color : #1E1E1E;
padding: 100px 0 100px 0;
`
export default class Game extends Component {
    render() {
        return (
            <GameContainer>
                <Container>
                    <Row>
                        <Col>
                        <Header stroke="#ffffff" headerText="GAME"/>
                        </Col>
                    </Row>
                    <Row>
                    <Col>
                    <div style={{display:'flex',justifyContent:'Center'}}>
                    <img src="img/temp.jpg" style={{width:'100%',height:'400px'}}  />
                    </div>
                    </Col>
                    </Row>
                </Container>
            </GameContainer>
        )
    }
}
