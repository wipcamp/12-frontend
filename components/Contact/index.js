import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  Container,
  Col,
  Row,
} from 'reactstrap'
import styled from 'styled-components'
import { Contact, FollowUs } from './ContactInfo'


const ContactContainer = styled.div`
    background: #121933;
    display: table;
    height: 80vh;
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
      <ContactContainer>
        <Container>
          <Row>
            <Col xl="6" lg="6" md="6" sm="6" >
              {/* <Col sm={{ size: 'auto', offset: 1 }}> */}
              <Contact />
            </Col>

            <Col xl="6" lg="6" md="6" sm="6">
              <ImgObject src="img/Rectangle_7.png" />
            </Col>
          </Row>

          <Row>
            <Col xl="6" lg="6" md="6" sm="6" >
            </Col>

            <Col xl="6" lg="6" md="6" sm="6" >
              {/* <Col sm={{ size: 'auto', offset: 5}}> */}
              <FollowUs />
            </Col>
          </Row>
        </Container>
      </ContactContainer>

    )
  }
}
