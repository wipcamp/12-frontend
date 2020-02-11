import React, { Component, Fragment } from 'react'
import { Container, Col, Row, } from 'reactstrap'
import styled from 'styled-components'
import AOS from 'aos';
import 'aos/dist/aos.css';

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
margin: 25px 0px 25px 0px;
flex-wrap: wrap;
width: 100%;
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
    display:inherit;
  }

  @media (min-width: 992px) {
    width: 25em;
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
  bottom: 20vw;
  left: 3em;
  width: 13vw;
`

const Star = styled.img`
  position: absolute;
  top: 35vh;
  left: 75vw;
  width: 10vw;
`

const Star2 = styled(Star)`
  top: 15vh;
  left: 68vw;
  width: 5vw;
`

const Star3 = styled(Star2)`
  top: 25vh;
  left: 45vw;
  width: 8vw;
`

const Star4 = styled(Star3)`
  top: 55vh;
  left: 38vw;
`

const Star5 = styled(Star4)`
  top: 70vh;
  left: 30vw;
`

const GroupOfStar = () => {
  return (
    <Fragment>
      <Star src="/img/Contact/star1.png" />
      <Star2 src="/img/Contact/star2.png" />
      <Star3 src="/img/Contact/star3.png" />
      <Star4 src="/img/Contact/star4.png" />
      <Star5 src="/img/Contact/star5.png" />
    </Fragment>
  )
}

export default class contact extends Component {
  state = {
    isMobile: true,
  };

  componentDidMount = () => {
    window.addEventListener('resize', this.updateDimensions)
    this.updateDimensions()
    AOS.init({
      duration: 1500
    })
  }

  updateDimensions = () => {
    if (window.innerWidth < 1080) {
      this.setState({
        isMobile: true
      })
    } else {
      this.setState({
        isMobile: false
      })
    }
  };

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  getType = () => {
    return this.state.isMobile
  }

  render() {
    return (
      <ContactBg>
        {
          (this.getType()) ?
            <Fragment></Fragment>
            : <GroupOfStar />
        }
        <Container>
          <Row>
            <Col xl="6" lg="6" md="6" sm="12" xs="12">
              <HeaderStyled>Contact</HeaderStyled>
              <TextBox>
                <StyledLink href="https://m.me/wipcamp" target="_blank" rel="noopener">
                  <ContactImg src="img/Contact/messenger.png" alt="messenger icon" />
                  MESSENGER
                    </StyledLink>
              </TextBox>
              <TextBox>
                <StyledLink href="tel://0922687835" rel="noopener">
                  <ContactImg src="img/Contact/tel.png" alt="phone icon" />
                  092-268-7835 (พี่ปลาย)
                    </StyledLink>
              </TextBox>
              <TextBox>
                <StyledLink href="mailto:wippo@wipcamp.com" target="_blank" rel="noopener">
                  <ContactImg src="img/Contact/email.png" alt="email icon" />
                  wippo@wipcamp.com
                    </StyledLink>
              </TextBox>
              <TextBox>
                <StyledLink href="https://line.me/R/ti/p/%40wipcamp" target="_blank" rel="noopener">
                  <ContactImg src="img/Contact/line.png" alt="line icon" />
                  @wipcamp
                    </StyledLink>
              </TextBox>
            </Col>
            <Col xl="6" lg="6" md="6" sm="12" xs="12"></Col>
          </Row>
          <Row>
            <Col xl="6" lg="6" md="6" sm="12" xs="12"></Col>
            <Col xl="6" lg="6" md="6" sm="12" xs="12">
              <HeaderStyled>Follow Us</HeaderStyled>
              <TextBox>
                <StyledLink href="https://www.facebook.com/wipcamp/" target="_blank" rel="noopener">
                  <ContactImg src="img/Contact/facebook.png" alt="facebook icon" />
                  WIP Camp
                    </StyledLink>
              </TextBox>
              <TextBox>
                <StyledLink href="https://www.youtube.com/channel/UC_Lhso9PxSlxNuw2wG9zYIA" target="_blank" rel="noopener">
                  <ContactImg src="img/Contact/youtube.png" alt="youtube icon" />
                  WIP camp
                    </StyledLink>
              </TextBox>
              <TextBox>
                <StyledLink href="https://www.instagram.com/wipcamp/" target="_blank" rel="noopener">
                  <ContactImg src="img/Contact/instagram.png" alt="instagram icon" />
                  wipcamp
                    </StyledLink>
              </TextBox>
            </Col>
          </Row>
        </Container>
        <Mountain src="/img/Contact/mountain.png" alt="mountain artwork at footer" />
      </ContactBg >
    )
  }
}
