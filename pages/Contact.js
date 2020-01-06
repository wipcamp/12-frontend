import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { 
  Container,
  Col,
  Row,
  FormGroup,
  Input,
  Button
} from 'reactstrap'
import ImgInfo from '../components/ImgInfo'
import { Header , SubHeader  } from '../components/Text'
import ContactImage from '../components/ContactImage'
export default class contact extends Component {
    render() {
        return (
            <div>
              <Container>
                <Row>
                <Col sm="4" />
                  <Col sm="4" className="text-center"><Header stroke="black" headerText="Contact" /></Col>
                  <Col sm="4" />
                </Row>
            <Row>
        <Col sm="4"/>
        <Col sm="4" className="text-center" >
        <FormGroup>
        <Input type="email" name="email" id="formEmail" placeholder="Email" />
      </FormGroup>
      <FormGroup>
        <Input type="text" name="name" id="formName" placeholder="Name" />
      </FormGroup>
      <FormGroup>
        <Input type="textarea" name="Message" id="formMessage" placeholder="your Message" />
      </FormGroup>
      <div className="text-right">
      <Button color="secondary" size="sm">Send</Button>
      </div>
      <ImgInfo src="temp.jpg" content="095-581-2385 ( พี่ทีเจ )" />
      <ImgInfo src="temp.jpg" content="wippo@wipcamp.com" />

      <SubHeader color="black" subHeaderText="FOLLOW US" />
      <ContactImage src="temp.jpg" width="88px" height="88px" />
      <ContactImage src="temp.jpg" width="88px" height="88px" />
      <ContactImage src="temp.jpg" width="88px" height="88px" />
      <ContactImage src="temp.jpg" width="88px" height="88px" />
        </Col>
        <Col sm="4" />
              </Row>
              </Container>
            </div>
        )
    }
}
