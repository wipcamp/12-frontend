import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Header, SubHeader } from '../Core/Text'
import { ImageInfo , ImageInfoGlow } from '../Core/ImgInfo'

const WhoContainer = styled.div`
background-color : #1E1E1E;
padding: 100px 0 100px 0;
`
const Image = styled.img`
margin-left: 17.5%;
margin-top: 30%;
width: 65%;
height: 65%;
`

export default class Who extends Component {
    render() {
        return (
            <WhoContainer>
                <Container>
                    <Row>
                        <Col>
                            <Header stroke="#ffffff" headerText="WHO" />
                            <SubHeader color="#ffffff" subHeaderText="ค่ายนี้เหมาะกับใคร" />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="4">
                        <ImageInfo className="" src="img/Who/circle.png" content="Lorem qui velit do labore voluptate ea consequat. Ullamco dolore duis enim sunt proident ut ea. Exercitation ullamco ullamco velit nisi laboris deserunt." color="#fff" />2
                        <ImageInfo src="img/Who/circle.png" content="Nostrud nulla ipsum ullamco quis sunt ea magna nisi aliqua anim proident sit et proident. Qui ad ex mollit dolore. Ut commodo officia esse cillum." color="#fff" />2
                        
                        </Col>
                        <Col sm="">
                       <Image src="/img/who/Wippo.png" />
                        </Col>
                        <Col sm="4">
                        <ImageInfo src="img/Who/circle.png" content="Culpa occaecat esse culpa enim. Lorem ut et amet ea excepteur occaecat id esse. Sunt Lorem veniam dolore labore laboris laborum culpa dolor." color="#fff" />2
                        <ImageInfo src="img/Who/circle.png" content="Anim id amet ullamco reprehenderit exercitation non veniam adipisicing deserunt exercitation. Fugiat occaecat consequat aliqua mollit. Excepteur magna laboris ullamco sit aliqua. Elit ad quis reprehenderit aute." color="#fff" />2
                        
                        </Col>
                
                    </Row>
                </Container>
            </WhoContainer>
        )
    }
}
