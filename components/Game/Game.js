import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import {Container,Row,Col} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Header , SubHeader} from '../Core/Text'

export default class Game extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                        <Header stroke="#1E1E1E" headerText="GAME"/>
                        </Col>
                    </Row>
                    <Row>
                    <Col>
                    <div style={{display:'flex',justifyContent:'Center'}}>
                    <img src="temp.jpg" />
                    </div>
                    </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
