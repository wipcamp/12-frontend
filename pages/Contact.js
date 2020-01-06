import React, { Component } from 'react'
import {Container , Col , Row , From} from 'react-bootstrap'
import { Form } from 'reactstrap'
import {Header} from '../components/Text'
export default class Contact extends Component {
    render() {
        return (
            <div>
              <Container>
              <Row className="justify-content-md-center">
    <Col xs lg="2">
      1 of 3
    </Col>
    <Col md="auto">
        <Header>Contact</Header>
    <From.Group controlId="formName">
            <Form.Control type="name" placeholder="Name" />
        </From.Group>
        <From.Group controlId="formEmail">
            <Form.Control type="email" placeholder="Email" />
        </From.Group>
        
    </Col>
    <Col xs lg="2">
      3 of 3
    </Col>
  </Row>    
              </Container>  
            </div>
        )
    }
}
