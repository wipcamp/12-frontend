import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import Flippycardnaja from '../Core/FlippyCard'
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
    padding: 0 10px;
    scroll-snap-align: center;
`
export default class Carousel extends Component {
    state = {
        cards: [
            { srcFront: "/img/Card_BG.png", srcBack: "/img/Card_BG.png" },
            { srcFront: "/img/Card_BG.png", srcBack: "/img/Card_BG.png" },
            { srcFront: "/img/Card_BG.png", srcBack: "/img/Card_BG.png" },
            { srcFront: "/img/Card_BG.png", srcBack: "/img/Card_BG.png" }
        ]
    }
    render() {
        const elements = this.state.cards.map(c => {
            return (<Card> <Flippycardnaja key={c.id} srcFront={c.srcFront} srcBack={c.srcBack} /> </Card>);
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
