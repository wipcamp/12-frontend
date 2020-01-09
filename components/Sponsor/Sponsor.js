import React, { Component } from 'react'
import { Header, SubHeader } from '../Core/Text'
import SponsorImage from './SponsorImage'
import { Container, Row, Col } from 'reactstrap'
export default class Sponsor extends Component {
    render() {
        return (
            <div style={{ marginTop: '75px' , marginBottom: '108px'}}>
                <Header stroke="black" headerText="SPONSOR" />
                <SubHeader color="black" subHeaderText="ผู้สนับสนุน" />
                <Container className="text-center" style={{ marginTop: '61px' }}>
                    <Row>
                        <Col xs="4">
                            <SponsorImage src="/Sponsor/Lactasoy.png" width="73px" height="42px" />
                        </Col>
                        <Col xs="4">
                            <SponsorImage src="/Sponsor/yip.png" width="53px" height="42px" />
                        </Col>
                        <Col xs="4">
                            <SponsorImage src="/Sponsor/thaibev.png" width="77px" height="42px" />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col xs="6">
                            <SponsorImage src="/Sponsor/CPALL.png" width="61px" height="40px" />
                        </Col>
                        <Col xs="6">
                            <SponsorImage src="/Sponsor/kohkae.png" width="103px" height="40px" />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col xs="4">
                            <SponsorImage src="/Sponsor/Lnw.png" width="80px" height="17px" />
                        </Col>
                        <Col xs="4">
                            <SponsorImage src="/Sponsor/pandt.png" width="72px" height="17px" />
                        </Col>
                        <Col xs="4">
                            <SponsorImage src="/Sponsor/bangmod.png" width="89px" height="17px" />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col xs="4">
                            <SponsorImage src="/Sponsor/stream.png" width="56px" height="23px" />
                        </Col>
                        <Col xs="4">
                            <SponsorImage src="/Sponsor/pantip.png" width="43px" height="21px" />
                        </Col>
                        <Col xs="4">
                            <SponsorImage src="/Sponsor/dekd.png" width="64px" height="18px" />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col xs="4">
                            <SponsorImage src="/Sponsor/kfc.png" width="55px" height="25px" />
                        </Col>
                        <Col xs="4">
                            <SponsorImage src="/Sponsor/alibaba.png" width="57px" height="21px" />
                        </Col>
                        <Col xs="4">
                            <SponsorImage src="/Sponsor/central.png" width="38px" height="38px" />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
