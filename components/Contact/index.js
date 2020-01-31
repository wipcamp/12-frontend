import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Col, Row, } from 'reactstrap'
import styled from 'styled-components'
import Link from 'next/link'
import { Parallax } from 'react-scroll-parallax'

const ContactBg = styled.div`
    display: table;
    height: 80vh;
    padding-top: 8rem;
    padding-bottom: 15em;
    position: relative;
    width: 100%;
    background-size: cover;
    @media (min-width:768px){ 
      padding-bottom: 20em;
}
@media (min-width:1100px){ 
      padding-bottom: 30em;
}
`
const ContactImg = styled.img`
width:2.5em;
height:2.5em;
margin-right:1.063em;
text-align:left;
border-radius: 0em;

@media (min-width:768px){ 
margin-right:17px;
}

@media (min-width: 992px) {
width:3.75em;
height:3.75em; 
margin-right:14px;
}
`
const TextBox = styled.div`
color: white;
margin: 25px 0px 25px 72px;
flex-wrap: wrap;
font-family: 'Chakra Petch', sans-serif;
width: 100%;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 18px;
display:block;
text-align:left;
text-indent: 0.625em;

@media (min-width: 768px) {
  font-size: 20px;
  margin: 24px 0px 24px 0px;
  line-height: 28px;
  text-indent: 10px;
  
}

@media (min-width: 992px) {
  font-size: 20px;
  line-height: 28px;
  margin: 25px 0px 25px 0px;
}
`
const StyledLink = styled.a`
color: white !important;
text-decoration: none !important;
font-family: 'Sarabun-Regular', sans-serif;
font-size: 20px;
`
const HeaderStyled = styled.div`
font-family: 'NotoSans-Regular', sans-serif;
color:white;
display:block;
font-style: normal;
text-align:center;
font-weight: 500;
font-size: 36px;
line-height: 49px;

@media (min-width: 768px) {
  font-size: 64px;
  line-height: 109px;
  text-align:left;
  line-height: 65px;
}

@media (min-width: 992px) {
  font-weight: normal;
  font-size: 64px;
  line-height: 65px;
}
`


const ImgObject = styled.img`
  display:none;

  @media (min-width: 768px) {
    width:17.313em;
    height:16.375em;
    display:inherit;
  }

  @media (min-width: 992px) {
    width: 28.125em;
    height: 26.602em;
    display:inherit;
  }
 
`

const Mountain = styled.img`
  position: absolute;
  bottom: 0;
  width: 100vw;
`
const Tower = styled.img`
  position: absolute;
  bottom: 0;
  left: 3em;
  width: 18vw;
`

const Cloud = styled.img`
  position: absolute;
  top: -25vh;
  left: -8vw;
  width: 30vw;
  display: none;

  @media (min-width: 1024px) {
    display: block;
  }
`



export default class contact extends Component {
  render() {
    return (
      <ContactBg>
        <Parallax y={[0, 10]} x={[-5, 5]}>
          <Cloud src="/img/Contact/cloud.png" />
          <Parallax y={[0, -10]} x={[5, -5]}>
            <Container>
              <Row>

                <Col xl="6" lg={{ size: 6, offset: 1 }} md={{ size: 6, offset: 1 }} sm="12">
                  <HeaderStyled>Contact</HeaderStyled>
                  <TextBox>
                    <StyledLink href="https://www.facebook.com/messages/t/wipcamp" target="_blank">
                      <ContactImg src="img/Contact/messenger.png" />
                      MESSENGER
                    </StyledLink>
                  </TextBox>
                  <TextBox>
                    <StyledLink href="tel://0955812385">
                      <ContactImg src="img/Contact/phone.png" />
                      095-581-2385 (พี่ทีเจ)
                    </StyledLink>
                  </TextBox>
                  <TextBox>
                    <StyledLink href="mailto:wippo@wipcamp.com" target="_blank">
                      <ContactImg src="img/Contact/email.png" />
                      wippo@wipcamp.com
                    </StyledLink>
                  </TextBox>
                </Col>
                <Col xl="5" lg="5" md="5" sm="auto">
                  <Parallax y={[-20, 10]}>
                    <ImgObject src="img/Contact/obcontact1.png" />
                  </Parallax>
                </Col>

              </Row>


              <Row>
                <Col xl="6" lg="6" md="6" sm="auto">
                </Col>
                <Col xl="6" lg={{ size: 6, offset: 7 }} md={{ size: 6, offset: 7 }} sm="12">
                  <HeaderStyled>Follow Us</HeaderStyled>
                  <TextBox>
                    <StyledLink href="https://www.facebook.com/wipcamp/" target="_blank">
                      <ContactImg src="img/Contact/facebook.png" />
                      WIP Camp
                    </StyledLink>
                  </TextBox>
                  <TextBox>
                    <StyledLink href="https://www.youtube.com/channel/UC_Lhso9PxSlxNuw2wG9zYIA" target="_blank">
                      <ContactImg src="img/Contact/youtube.png" />
                      WIP camp
                    </StyledLink>
                  </TextBox>
                  <TextBox>
                    <StyledLink href="https://www.instagram.com/wipcamp/" target="_blank">
                      <ContactImg src="img/Contact/instragram.png" />
                      wipcamp
                    </StyledLink>
                  </TextBox>
                </Col>
              </Row>
              <Row>

              </Row>
            </Container>
          </Parallax>
        </Parallax>
        <Tower src="/img/Contact/tower.png" />
        <Mountain src="/img/Contact/mountain.png" />
      </ContactBg >

    )
  }
}
