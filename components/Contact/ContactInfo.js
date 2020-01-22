import React, { Component } from 'react'
import styled from 'styled-components'
import { Container, Col, Row, } from 'reactstrap'
import Link from 'next/link'

const Container2 =styled.div`
display:block;
margin-top: 16px;
`
const ContactImg = styled.img`
width:83px;
height:83px;
margin-right:7%;
`
const TextBox = styled.div`
color: white;
margin: 20px 35px 20px 0px;
flex-wrap: wrap;
font-family: 'Chakra Petch', sans-serif;
width: auto;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 31px;

`
const StyledLink = styled.a`
color: black !important;
text-decoration: none;
`
const HeaderStyled = styled.div`
font-family: 'Prompt-light', sans-serif;
color:white;
display:block;
font-style: normal;
font-weight: normal;
font-size: 72px;
line-height: 109px;

`

class Contact extends Component {
    render() {
        return (
            <Container>
                <Container2>
                <Row>
                    <Col>
                    <HeaderStyled>
                        Contact
                    </HeaderStyled>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <TextBox>
                        <Link href="/"><StyledLink href="/"><ContactImg src="img/Contact/Messenger.png" /></StyledLink></Link>
                            MESSENGER
                        </TextBox>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <TextBox>
                            <ContactImg src="img/Contact/telephone_1.png" />
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

class FollowUs extends Component {
    render() {
        return (
            <Container>
                <Container2>
                <Row>
                <Col>
                    <HeaderStyled>
                        Follow Us
                    </HeaderStyled>
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


export {Contact,FollowUs,}; 

