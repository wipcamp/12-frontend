import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import {Container,Row,Col} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import SideScroll from './SideScroll'
import {Header , SubHeader} from '../Core/Text'



export default class Faqs extends Component {
    render() {
        return (
        <Fragment>
            <Container>
                <Row>
                    <Col style={{marginTop:'50px'}}>
                        <Header stroke="#1E1E1E" headerText="FAQS"/>
                        <SubHeader  subHeaderText="คำถามที่พบบ่อย" color="#1E1E1E"/>                      
                    </Col>
                </Row>
                <Row>
                    <Col style={{marginTop:'36px'}}>
                        <SideScroll/>
                    </Col>
                </Row>
            </Container>
        </Fragment>
        )
    }
}