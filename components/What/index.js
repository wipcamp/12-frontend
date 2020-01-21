import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Col} from 'reactstrap'
import styled from 'styled-components'
import { Header, SubHeader, Content } from '../Core/Text'
import WhatSideScroll from './WhatSideScroll'

const WhatBg = styled.div`
background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
padding-top: 65px;
`

const WrapGrid = styled.div`
    margin-top: 24.72px;
    

    @media (min-width: 768px) {
        margin-top: 55.79px
    }

    @media (min-width: 1024px) {
        margin-top: 96px;
    }
`

const WrapContent = styled.div`
    margin-left: 10px;
    margin-right: 10px;

    @media (min-width: 768px) {
        margin-left: 116px;
        margin-right: 116px;
    }

    @media (min-width: 1024px) {
        margin-left: 0px;
        margin-right: 0px;
    }
`

const WrapSideScroll = styled.div`
    margin-top: 31px;

    @media (min-width: 768px) {
        margin-top: 62px;
    }

    @media (min-width: 1024px) {
        margin-top: 0px;
    }
`
export default class What extends Component {
    render() {
        return (
            <WhatBg>
                <div className="text-center">
                    <Header color="white" headerText="WHAT" />
                </div>
                    <SubHeader color="white" subHeaderText="ค่ายนี้คืออะไร" />  
                    <WrapGrid>
                    <Row>
                        <Col xl="1" xs="12"></Col>
                        <Col xl="5" xs="12">
                        <WrapContent>
                            <Content
                                textIndent="50px"
                                color="white"
                                content="น้อง ๆ พร้อมแล้วหรือยังกับการผจญภัย ครั้งใหม่ที่กำลังจะเริ่มต้นขึ้น 
                                    เมื่อแสงสว่างของกลุ่ม ดาวราศีต่าง ๆ หายไปอย่างลึกลับ เหล่าผู้พิทักษ์จึง 
                                    ปรากฎกายขึ้น เพื่อตามหาเหล่านักดูดาวที่มีความ สนใจทางด้านไอที 
                                    หรือกำลังตามหาเส้นทางของ ตัวเองมาค้นหาและแก้ไขปริศนาของแสงดาวที่ 
                                    หายไปร่วมกัน ภารกิจในครั้งนี้มีเวลาเพียงแค่ 5 วัน 4 คืนเท่านั้น 
                                    ซึ่งหนึ่งในภารกิจที่เหล่านักดูดาวต้องทำ คือการเลือกสายอาชีพที่ตนเองสนใจ 
                                    โดยแบ่งออก เป็น 4 สาย ได้แก่ Programming, Web Developer, UX/UI 
                                    และ Network รวม ไปถึง Workshop ของ IT Management อีกด้วย 
                                    นอกจากนั้นเหล่านักดูดาว ทั้งหลายยังต้องร่วมกิจกรรมต่าง ๆ อีกมากมายที่ 
                                    เต็มไปด้วยความสนุกสนาน และการผจญภัย มาร่วมเป็นส่วนหนึ่งของการพิทักษ์
                                    แสงดาวไปพร้อมกัน ในค่ายเส้นทางสู่ฝันนักไอที ครั้งที่ 12"
                            />
                            </WrapContent>
                        </Col>
                    <Col xl="6" xs="12">
                        <WrapSideScroll>
                            <WhatSideScroll />
                        </WrapSideScroll>
                    </Col>
                    </Row>
                    </WrapGrid>  
            </WhatBg >
        )
    }
}
