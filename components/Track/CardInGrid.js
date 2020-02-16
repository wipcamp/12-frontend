import React, { Component } from 'react'
import {Container,Row,Col} from 'reactstrap'
import Flippycardnaja from '../Core/FlippyCard'

export default class Trackpage extends Component {
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
                header: "UX&UI" 
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
            return (<Col xl='3' lg='3' xs='6' key={key}> 
                        <div className=" d-flex justify-content-lg-center justify-content-md-end">
                            <Flippycardnaja 
                                srcFront={data.srcFront} 
                                content={data.content}
                                bg={data.bg} 
                                header={data.header}
                            /> 
                        </div>
                    </Col>);
        })
        return (
            <Container>
                <Row>
                    {elements}
                </Row>
            </Container>        
        )
    }
}
