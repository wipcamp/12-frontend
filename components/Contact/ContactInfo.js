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
display:block;
width: 100%;
`

export default class Contact extends Component {
    render() {
        return (
            <Container>
                <Container2>
                <Row>
                    <Col sm="6">
                    <SubHeader color="#ffffff" subHeaderText="Contact" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <TextBox>
                            <ContactImg src="img/Contact/Messenger.png" />
                            MESSENGER
                        </TextBox>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <TextBox>
                            <ContactImg src="img/Contact/whatsapp_1.png" />
                            095-581-2385 (พี่ทีเจ)
                        </TextBox></Col>
                </Row>
                <Row>
                    <Col>
                        <TextBox>
                            <ContactImg src="img/Contact/mail_1.png" />
                            wippo@wipcamp.com
                        </TextBox>
                    </Col>
                </Row>
                </Container2>
            </Container>
        )
    }
}

