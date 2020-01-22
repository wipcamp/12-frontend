import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  Container,
  Col,
  Row,
} from 'reactstrap'
import { Header, SubHeader } from '../Core/Text'
import styled from 'styled-components'
import ContactImage from './ContactImage'
import Contact from './ContactInfo'


const ContactContainer = styled.div`
    background: #121933;
    display: table;
    height: 80vh;
    position: relative;
    width: 100%;
    background-size: cover;
`
const ImgObject = styled.img`
  width: 580px;
  height: 356px;
  margin: 20px 20px 20px 20px;
`
export default class contact extends Component {
  render() {
    return (
      <ContactContainer>
        <Row>
          <Col sm={{ size: 'auto', offset: 1 }}>
            <Contact />
          </Col>
          <Col sm={{ size: 'auto', offset: 2 }}>
            <ImgObject src="img/Rectangle_7.png" />
          </Col>
        </Row>

        <Row>
          <Col sm={{ size: 'auto', offset: 5}}>
            <ContactImage />
          </Col>
        </Row>
      </ContactContainer>
    )
  }
}
