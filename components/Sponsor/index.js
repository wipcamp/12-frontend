import React, { Component } from 'react'
import { Header, SubHeader } from '../Core/Text'
import SponsorImage from './SponsorImage'
import { Container, Row, Col } from 'reactstrap'
import styled from 'styled-components'

const SponsorBg = styled.div`
background-color : #D2D2D2;
padding: 100px 0 100px 0;
`

export default class Sponsor extends Component {
    render() {
        return (
            <SponsorBg>
            <div style={{ marginTop: '75px' , marginBottom: '108px'}}>
                <Header stroke="black" headerText="SPONSOR" />
                <SubHeader color="black" subHeaderText="ผู้สนับสนุน" />
                <Container className="text-center" style={{ marginTop: '61px' }}>
                    <Row>
                        <Col xs="4">
                            <SponsorImage src="img/Sponsor/Lactasoy.png" width="73px" height="42px" />
                        </Col>
                        <Col xs="4">
                            <SponsorImage src="img/Sponsor/yip.png" width="53px" height="42px" />
                        </Col>
                        <Col xs="4">
                            <SponsorImage src="img/Sponsor/thaibev.png" width="77px" height="42px" />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col xs="6">
                            <SponsorImage src="img/Sponsor/CPALL.png" width="61px" height="40px" />
                        </Col>
                        <Col xs="6">
                            <SponsorImage src="img/Sponsor/kohkae.png" width="103px" height="40px" />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col xs="4">
                            <SponsorImage src="img/Sponsor/Lnw.png" width="80px" height="17px" />
                        </Col>
                        <Col xs="4">
                            <SponsorImage src="img/Sponsor/pandt.png" width="72px" height="17px" />
                        </Col>
                        <Col xs="4">
                            <SponsorImage src="img/Sponsor/bangmod.png" width="89px" height="17px" />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col xs="4">
                            <SponsorImage src="img/Sponsor/stream.png" width="56px" height="23px" />
                        </Col>
                        <Col xs="4">
                            <SponsorImage src="img/Sponsor/pantip.png" width="43px" height="21px" />
                        </Col>
                        <Col xs="4">
                            <SponsorImage src="img/Sponsor/dekd.png" width="64px" height="18px" />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col xs="4">
                            <SponsorImage src="img/Sponsor/kfc.png" width="55px" height="25px" />
                        </Col>
                        <Col xs="4">
                            <SponsorImage src="img/Sponsor/alibaba.png" width="57px" height="21px" />
                        </Col>
                        <Col xs="4">
                            <SponsorImage src="img/Sponsor/central.png" width="38px" height="38px" />
                        </Col>
                    </Row>
                </Container>
            </div>
            </SponsorBg>
        )
    }
}
