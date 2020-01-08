import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'reactstrap'
import ZodiacRing from './ZodiacRing'

export default class Home extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <Row>
                        <Col>
                        <div style={{display :'flex' ,justifyContent : 'center' }}>
                            <ZodiacRing/>
                        </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>

        )
    }
}
