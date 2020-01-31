import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import { FlippyOnClickInCarousel } from '../Core/FlippyCard'
import styled from 'styled-components'
import { WhatImage } from '../What/WhatImage'

const Wrap = styled.div`
    overflow-x: scroll;
    width: 100%;
    display: flex;
    scroll-snap-type: x mandatory;
    ::-webkit-scrollbar {
         width: 0px;
    }
`

const Card = styled.div`
    padding: 8vh 10px;
    scroll-snap-align: center;
`
export default class Carousel extends Component {
    state = {
        cards: [
            { srcFront: "/img/FrontCard.png", srcBack: "/img/BackCard.png" },
            { srcFront: "/img/FrontCard.png", srcBack: "/img/BackCard.png" },
            { srcFront: "/img/FrontCard.png", srcBack: "/img/BackCard.png" },
            { srcFront: "/img/FrontCard.png", srcBack: "/img/BackCard.png" }
        ]
    }
    render() {
        const elements = this.state.cards.map((data, key) => {
            return (<Card key={key}> <FlippyOnClickInCarousel flipDirection="horizontal" srcFront={data.srcFront} srcBack={data.srcBack} /> </Card>);
        })
        return (
            <Row>
                <Col>
                    <Wrap>
                        {elements}
                    </Wrap>
                </Col>
            </Row>
        )
    }
}
