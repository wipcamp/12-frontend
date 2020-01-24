import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Col} from 'reactstrap'
import styled from 'styled-components'
import { Header, SubHeader, Content } from '../Core/Text'
import WhatSideScroll from './WhatSideScroll'

const WhatBg = styled.div`
    background: rgb(9,10,15);
    background: linear-gradient(90deg, rgba(9,10,15,1) 0%, rgba(27,39,53,1) 50%, rgba(9,10,15,1) 100%);
`

const WrapGrid = styled.div`
    margin-top: 1em;
    

    @media (min-width: 768px) {
        margin-top: 1.5em;
    }

    @media (min-width: 1024px) {
        margin-top: 2em;
    }
`

const WrapContent = styled.div`
    margin-left: 36px;
    margin-right: 36px;

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
    margin-top: 1em;

    @media (min-width: 768px) {
        margin-top: 1.5em;
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
                    <SubHeader color="white" subHeaderText="ค่ายนี้คืออะไร ?" />  
                    <WrapGrid>
                    <Row>
                        <Col xl="1" lg="1" md="12" sm="12" xs="12"></Col>
                        <Col xl="5" lg="5" md="12" sm="12" xs="12">
                        <WrapContent>
                            <Content
                                textIndent="50px"
                                color="white"
                                content="กลับมาอีกครั้งพร้อมกับภารกิจอันยิ่งใหญ่ ซึ่งเปิดโอกาสให้น้อง ๆ 
                                ที่มีความสนใจทางด้านไอที หรือกำลังตามหาเส้นทางของตัวเอง 
                                มาร่วมกันเดินทางไปพร้อมกัน โดยน้อง ๆ เปรียบเสมือนนักดูดาว 
                                ผู้ถูกเลือกเพื่อออกตามหาแสงสว่างที่หายไปจากดาวราศีต่าง ๆ ที่มีเวลาเพียงแค่ 
                                5 วัน 4 คืนเท่านั้น ในการเดินทางครั้งนี้เหล่านักดูดาว ทั้งหลาย จะมีผู้พิทักษ์ดวงดาวเป็นผู้ชี้นำทาง 
                                หนึ่งในภารกิจสำคัญ คือ การตัดสินใจเลือกเส้นทางเดินของตัวเองจากทั้งหมด 4 เส้นทาง ได้แก่ 
                                Programming, Web Developer, UX/UI และ Network นอกจากนั้น ยังมีกิจกรรมต่าง ๆ รวมไปถึง 
                                IT Management ซึ่งเป็น Workshop พิเศษสำหรับเหล่านักดูดาวทั้งหลาย สุดท้ายแล้ว เรื่องราวครั้งนี้ 
                                จะเป็นอย่างไร พวกเขาจะทำภารกิจสำเร็จหรือไม่ ติดตามได้ใน ค่ายเส้นทางสู่ฝันนักไอที ครั้งที่ 12 (WIP Camp #12)"
                            />
                            </WrapContent>
                        </Col>
                    <Col xl="6" lg="6" md="12" sm="12" xs="12" className="my-auto">
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
