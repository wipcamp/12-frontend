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
                srcFront: "/img/Track/uxui.png", 
                bg: "/img/Track/uxui.png", 
                content: "หากเราจะสร้างแอปพลิเคชัน หรือเว็บไซต์ขึ้นมา สิ่งสำคัญที่เราควรจะคำนึงถึงคือ สิ่งที่ผู้ใช้ของเราต้องการ (UX) และเมื่อนำมาเพิ่มความสวยงาม (UI)ก็จะช่วยเสริมให้แอปพลิเคชันหรือเว็บไซต์ของเราตอบโจทย์ผู้ใช้มากขึ้น น้อง ๆ คงสงสัยล่ะสิ ว่าเราทำงานเกี่ยวกับอะไร ? เส้นทางนี้จะทำให้รู้จัก UX & UI มากขึ้นแน่นอน", 
                header: "UX/UI" 
            },
            { 
                srcFront: "/img/Track/website.png", 
                bg: "/img/Track/website.png", 
                content: "เคยสงสัยกันไหมว่า ทำไมแอปพลิเคชันที่เราใช้ถึง โต้ตอบกับเราได้ และมันทำงานอย่างไร ? เส้นทางที่จะพาไปทำความเข้าใจ เกี่ยวกับ Concept ของการเขียนโปรแกรม ผ่านการเรียนภาษาจาวา (Java Programming) ถ้าอยากรู้จักสายอาชีพนี้มากกว่านี้ล่ะก็ ต้องเส้นทางนี้เลย !", 
                header: "DEVELOPER" 
            },
            { 
                srcFront: "/img/Track/programming.png", 
                bg: "/img/Track/programming.png", 
                content: "ถ้าพูดถึงไอทีหนึ่งในสิ่งที่หลายคน นึกถึงคงจะมีเว็บไซต์อยู่แน่นอน เส้นทางนี้จะพาไปทำความรู้จักสายอาชีพด้านเว็บไซต์ ทำความเข้าใจเกี่ยวกับเว็บไซต์ ด้วยการเขียน HTML และ CSS ถ้าอยากรู้จักสายอาชีพนี้มากขึ้นล่ะก็… เส้นทางนี้แหละ ใช่เลย !", 
                header: "PROGRAMMING" },
            { 
                srcFront: "/img/Track/network.png", 
                bg: "/img/Track/network.png", 
                content: "ในยุคที่โลกทั้งใบเชื่อมต่อกันผ่าน สิ่งที่เรียกว่าอินเทอร์เน็ต แล้วมันทำได้ยังไง ? เส้นทางนี้จะพาไปเรียนรู้เกี่ยวกับ สายอาชีพ Networkและตามติด Internet Trends ในปัจจุบัน รวมถึงสัมผัสอุปกรณ์ของจริง กันไปเลยถ้าอยากรู้จักสายอาชีพนี้อย่างใกล้ชิด เส้นทางนี้ให้คำตอบได้แน่นอน", 
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
