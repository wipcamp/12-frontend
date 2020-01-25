import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  Container,
  Col,
  Row,
} from 'reactstrap'
import styled from 'styled-components'
import Link from 'next/link'

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
width: 100%;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 18px;


@media (min-width: 768px) {
  font-size: 20px;
  line-height: 31px;
}

@media (min-width: 992px) {
  font-size: 24px;
  line-height: 31px;
}
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
font-weight: 500;
font-size: 36px;
line-height: 49px;
text-align:center;

@media (min-width: 768px) {
  font-size: 72px;
  line-height: 109px;
  text-align:left;
}
`

const ContactBg = styled.div`
        background: rgb(9,10,15);
    background: linear-gradient(90deg, rgba(9,10,15,1) 0%, rgba(27,39,53,1) 50%, rgba(9,10,15,1) 100%); 
    display: table;
    height: 80vh;
    padding-top: 3rem;
    padding-bottom: 3rem;
    position: relative;
    width: 100%;
    background-size: cover;
`
const ImgObject = styled.img`
  width: auto;
  height: 356px;
  margin: 20px 20px 20px 20px;
`
export default class contact extends Component {
  render() {
    return (
      <ContactBg>
        <Container>
          <Row>
            <Col xl="6" lg="6" md="6" sm="12">
              <HeaderStyled>Contact</HeaderStyled>
              <TextBox>
                <Link href="/"><StyledLink href="/"><ContactImg src="img/Contact/Messenger.png" /></StyledLink></Link>
                MESSENGER
                </TextBox>
              <TextBox>
                <ContactImg src="img/Contact/telephone_1.png" />
                095-581-2385 (พี่ทีเจ)
                </TextBox>
              <TextBox>
                <ContactImg src="img/Contact/mail_1.png" />
                wippo@wipcamp.com
                </TextBox>
            </Col>
            <Col xl="6" lg="6" md="6" sm="auto">
            </Col>
          </Row>

          <Row>
          <Col xl="6" lg="6" md="6" sm="auto">
            </Col>
            <Col xl="6" lg="6" md="6" sm="12">
              <HeaderStyled>Follow Us</HeaderStyled>
              <TextBox>
                <ContactImg src="img/Contact/f_logo.png" />
                WIP Camp
              </TextBox>
              <TextBox>
                <ContactImg src="img/Contact/youtube.png" />
                wip camp
              </TextBox>
              <TextBox>
                <ContactImg src="img/Contact/ig.png" />
                wip camp
            </TextBox>
            </Col>
          </Row>
        </Container>
      </ContactBg >

    )
  }
}
