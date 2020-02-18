import React, { Component, Fragment } from 'react'
import { Container, Col, Row, } from 'reactstrap'
import { Header, SubHeader } from '../Core/Text'
import styled from 'styled-components'
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactBg = styled.div`
    display: table;
    height: 80vh;
    padding-top: 4rem;
    position: relative;
    width: 100%;
    background-size: cover;
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
text-align:left;
text-indent: 0.625em;
display: flex;
justify-content: start;


@media (min-width: 768px) {
  display: flex;
  justify-content: ${props => props.justify || 'unset'};
  font-size: 20px;
  width: ${props => props.width || '16em'};
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
  /* position: absolute; */
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
  top: 15vh;
  left: 10vw;
  width: 10vw;
`

const Star2 = styled.img`
  position: absolute;
  top: 70vh;
  right: 8vw;
  width: 10vw;
`

const Star3 = styled(Star)`
  top: 65vh;
  left: 5vw;
  width: 8vw;
`

const Star4 = styled(Star2)`
  top: 15vh;
  right: 8vw;
  width: 10vw;
`

const Star5 = styled(Star)`
  top: 45vh;
  left: 8vw;
  width: 3vw;
`

const Star6 = styled(Star)`
  top: 85vh;
  left: 5vw;
  width: 4vw;
`

const Star7 = styled(Star2)`
  top: 83vh;
  right: 10vw;
  width: 4vw;
`

const GroupOfStar = () => {
  return (
    <Fragment>
      <Star src="/img/Contact/pisces.png" alt="pisces" data-aos="fade-down-right" />
      <Star2 src="/img/Contact/taurus.png" alt="taurus" data-aos="fade-down-left" />
      <Star3 src="/img/Contact/capricorn.png" alt="capricorn" data-aos="fade-down-right" />
      <Star4 src="/img/Contact/cancer.png" alt="cancer" data-aos="fade-down-left" />
      <Star5 src="/img/Contact/moon.png" alt="moon" data-aos="fade-down-right" />
      <Star6 src="/img/Core/zodiac3.png" alt="zodiac sign" data-aos="fade-down-right" />
      <Star7 src="/img/Contact/zodiacSign.png" alt="zodiac sign" data-aos="fade-down-left" />
    </Fragment>
  )
}

export default class contact extends Component {
  state = {
    isMobile: true
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
          <Header headerText="CONTACT" color="white" />
          <SubHeader subHeaderText="ช่องทางการติดต่อ" color="white" />
          <br />
          <Row>
            {/* <Col xl="1" lg="1" md="1" sm="12" xs="12"></Col> */}
            <Col className="d-flex justify-content-end" xl="6" lg="6" md="6" sm="12" xs="12">
              <TextBox>
                <StyledLink href="https://line.me/R/ti/p/%40wipcamp" target="_blank" rel="noopener">
                  <ContactImg src="img/Contact/line.png" alt="line icon" />
                  @wipcamp (มี @)
                    </StyledLink>
              </TextBox>
            </Col>
            {/* <Col xl="1" lg="1" md="1" sm="12" xs="12"></Col> */}
            <Col className="d-flex justify-content-start" xl="6" lg="6" md="6" sm="12" xs="12">
              <TextBox>
                <StyledLink href="mailto:wippo@wipcamp.com" target="_blank" rel="noopener">
                  <ContactImg src="img/Contact/email.png" alt="email icon" />
                  wippo@wipcamp.com
                    </StyledLink>
              </TextBox>
            </Col>
            
          </Row>
          <Row>
            {/* <Col xl="2" lg="2" md="1" sm="12" xs="12"></Col> */}
            <Col className="d-flex justify-content-end" xl="6" lg="6" md="6" sm="12" xs="12">
              <TextBox>
                <StyledLink href="https://m.me/wipcamp" target="_blank" rel="noopener">
                  <ContactImg src="img/Contact/messenger.png" alt="messenger icon" />
                  MESSENGER
                    </StyledLink>
              </TextBox>
            </Col>
            {/* <Col xl="1" lg="1" md="1" sm="12" xs="12"></Col> */}
            <Col className="d-flex justify-content-start" xl="6" lg="6" md="6" sm="12" xs="12">
              <TextBox>
                <StyledLink href="tel://0922687835" rel="noopener">
                  <ContactImg src="img/Contact/tel.png" alt="phone icon" />
                  092-268-7835 (พี่ปลาย)
                    </StyledLink>
              </TextBox>
            </Col>
            
          </Row>
          <br />
          <br />
          <Header headerText="FOLLOW US" color="white" />
          <SubHeader subHeaderText="ช่องทางการติดตาม" color="white" />
          <br />
          <Row>
            {/* <Col xl="2" lg="2" md="12" sm="12" xs="12"></Col> */}
              <Col xl="4" lg="4" md="4" sm="12" xs="12">
                <TextBox width="100%" justify="center">
                  <StyledLink href="https://www.facebook.com/wipcamp/" target="_blank" rel="noopener">
                    <ContactImg src="img/Contact/facebook.png" alt="facebook icon" />
                    WIP Camp
                    </StyledLink>
                </TextBox>
              </Col>
              <Col xl="4" lg="4" md="4" sm="12" xs="12">
                <TextBox justify="center" width="100%">
                  <StyledLink href="https://www.youtube.com/channel/UC_Lhso9PxSlxNuw2wG9zYIA" target="_blank" rel="noopener">
                    <ContactImg src="img/Contact/youtube.png" alt="youtube icon" />
                    WIP camp
                    </StyledLink>
                </TextBox>
              </Col>
              <Col xl="4" lg="4" md="4" sm="12" xs="12">
                <TextBox justify="center" width="100%">
                  <StyledLink href="https://www.instagram.com/wipcamp/" target="_blank" rel="noopener">
                    <ContactImg src="img/Contact/instagram.png" alt="instagram icon" />
                    wipcamp
                    </StyledLink>
                </TextBox>
              </Col>
              {/* <Col xl="1" lg="1" md="12" sm="12" xs="12"></Col> */}
          </Row>
          </Container>
          <Mountain src="/img/Contact/mountain.png" alt="mountain artwork at footer" />
      </ContactBg >
        )
      }
    }
