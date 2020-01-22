import React, { Component } from 'react'
import styled from 'styled-components'
import { Container, Col, Row, } from 'reactstrap'
import { Header, SubHeader } from '../Core/Text'

const Container2 =styled.div`
display:block;
`

const ContactImg = styled.img`
    width:83px;
    height:83px;
    margin-right:10%;
    
`
const TextBox = styled.div`
color: white;
margin: 20px;
flex-wrap: wrap;
font-family: 'Chakra Petch', sans-serif;
width: 100%;

`


export default class ContactImage extends Component {
    render() {
        return (
            <Container>
                <Container2>
                <Row>
                <Col sm="6">
                    <SubHeader color="#ffffff" subHeaderText="Follow Us" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <TextBox>
                            <ContactImg src="img/Contact/f_logo.png" />
                            WIP Camp
                        </TextBox>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <TextBox>
                            <ContactImg src="img/Contact/youtube.png" />
                            wip camp
                        </TextBox></Col>
                </Row>
                <Row>
                    <Col>
                        <TextBox>
                            <ContactImg src="img/Contact/ig.png" />
                            wip camp
                        </TextBox>
                    </Col>
                </Row>
                </Container2>
            </Container>

        )
    }
}

