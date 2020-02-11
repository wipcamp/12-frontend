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
    padding: 10px 10px 10px;
    scroll-snap-align: center;
`
export default class Carousel extends Component {
    state = {
        cards: [
            { 
                srcFront: "/img/Track/programming.png", 
                bg: "/img/Track/programmingb.png", 
                content: "เส้นทางที่จะพาไปทำความเข้าใจ Concept ของการเขียนโปรแกรม ผ่านการเรียนภาษาจาวา (Java Programming)", 
                header: "PROGRAMMER"
            },
            { 
                srcFront: "/img/Track/website.png", 
                bg: "/img/Track/websiteb.png", 
                content: "เส้นทางที่จะพาไปรู้จักสายอาชีพด้านเว็บไซต์ เข้าใจเกี่ยวกับเว็บไซต์ด้วยการเขียน HTML และ CSS", 
                header: "WEBSITE" 
            },
            {   
                srcFront: "/img/Track/uxui.png", 
                bg: "/img/Track/uxuib.png", 
                content: "เส้นทางที่จะพาไปเรียนรู้ Concept ของ UX & UI และการออกแบบแอปพลิเคชันหรือเว็บไซต์ของเราให้ตอบโจทย์กับผู้ใช้งาน", 
                header: "UX/UI" 
            },
            { 
                srcFront: "/img/Track/network.png", 
                bg: "/img/Track/networkb.png", 
                content: " เส้นทางที่จะพาไปสัมผัสอุปกรณ์เครือข่ายของจริง รู้จักสายอาชีพด้าน Network และตามติด Internet Trends ในปัจจุบัน", 
                header: "NETWORK" 
            }
        ]
    }
    render() {
        const elements = this.state.cards.map((data, key) => {
            return (<Card key={key}> <FlippyOnClickInCarousel flipDirection="horizontal" srcFront={data.srcFront} content={data.content} bg={data.bg} header={data.header}/> </Card>);
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
