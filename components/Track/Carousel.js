import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import { FlippyOnClickInCarousel } from '../Core/FlippyCard'
import { FlippyOnClickInCarousel2 } from '../Core/FlippyCard2'
import styled from 'styled-components'

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
        card: [
            { 
                srcFront: "/img/Track/programming.png", 
                bg: "/img/Track/programmingb.png", 
                content: "เส้นทางที่จะพาไปทำความเข้าใจ Concept ของการเขียนโปรแกรม ผ่านการเรียนภาษาจาวา (Java Programming)", 
                header: "PROGRAMMER",
                alt: "programmer card"
            }
        ],
        cards: [
            { 
                srcFront: "/img/Track/website.png", 
                bg: "/img/Track/websiteb.png", 
                content: "เส้นทางที่จะพาไปรู้จักสายอาชีพด้านเว็บไซต์ เข้าใจเกี่ยวกับเว็บไซต์ด้วยการเขียน HTML และ CSS", 
                header: "WEBSITE", 
                alt: "website card"
            },
            {   
                srcFront: "/img/Track/uxui.png", 
                bg: "/img/Track/uxuib.png", 
                content: "เส้นทางที่จะพาไปเรียนรู้ Concept ของ UX & UI และการออกแบบแอปพลิเคชันหรือเว็บไซต์ของเราให้ตอบโจทย์กับผู้ใช้งาน", 
                header: "UX&UI",
                alt: "uxui card" 
            },
            { 
                srcFront: "/img/Track/network.png", 
                bg: "/img/Track/networkb.png", 
                content: " เส้นทางที่จะพาไปสัมผัสอุปกรณ์เครือข่ายของจริง รู้จักสายอาชีพด้าน Network และตามติด Internet Trends ในปัจจุบัน", 
                header: "NETWORK",
                alt: "network card" 
            }
        ]
    }
    render() {
        const element = this.state.card.map((data, key) => {
            return (<Card key={key}> <FlippyOnClickInCarousel2 flipDirection="horizontal" srcFront={data.srcFront} content={data.content} bg={data.bg} header={data.header} alt={data.alt} /> </Card>);
        })
        const elements = this.state.cards.map((data, key) => {
            return (<Card key={key}> <FlippyOnClickInCarousel flipDirection="horizontal" srcFront={data.srcFront} content={data.content} bg={data.bg} header={data.header} alt={data.alt} /> </Card>);
        })
        return (
            <Row>
                <Col>
                    <Wrap>
                    {element}
                        {elements}
                    </Wrap>
                </Col>
            </Row>
        )
    }
}
