import React, { Component, Fragment } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import styled from 'styled-components'
import { Header, SubHeader, Content } from '../Core/Text'
import WhatCarousel from './WhatCarousel'
import WhatSideScroll from './WhatSideScroll'

const WhatBg = styled.div`
background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
padding-top: 65px;

`

const Row = styled.div`
    margin-top: 81px;
    ::after {
        content: "";
        display: table;
        clear: both;
    }
`

const Column = styled.div`
    float: left;
    width: 50%;
`

const WrapContent = styled.div`
    padding-left: 133px;
    padding-right: 18px;
`

export default class What extends Component {
    render() {
        return (
            <WhatBg>


                <div>
                    <Header color="white" headerText="WHAT" />
                    <SubHeader color="white" subHeaderText="ค่ายนี้คืออะไร" />
                </div>
                <Row>
                    <Column>
                    <WrapContent>
                        <Content
                            textIndent="50px"
                            color="white"
                            content="ค่ายเส้นทางสู่ฝันนักไอที (WIP Camp) คือ ค่ายสำหรับ น้อง ๆ ผู้ที่มีความสนใจทางด้าน ไอที โดยน้อง ๆ จะได้รับ บทบาทเป็นนินจาที่กำลังค้นหาเส้นทางชีวิตของ ตนเอง ณ คณะเทคโนโลยีสารสนเทศ มหาวิทยาลัยเทคโนโลยี พระจอมเกล้าธนบุรี เป็นระยะเวลา 5 วัน 4 คืน"
                        />
                        </WrapContent>
                    </Column>
                    <Column>
                        <WhatSideScroll />
                    </Column>
                </Row>
                {/* <Row>
                    <Col>
                    <Content color="black" textAlign="center" content="ค่ายเส้นทางสู่ฝันนักไอที (WIP Camp) คือ ค่ายสำหรับน้อง ๆ ผู้ที่มีความสนใจทางด้าน 
                                โดยน้องๆ จะได้รับบทบาทเป็นนินจาที่กำลังค้นหาเส้นทางชีวิตของตนเอง ณ คณะเทคโนโลยีสารสนเทศ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี เป็นระยะเวลา 5 วัน 4 คืน
                                เหล่านินจาที่เข้ามาในสำนักแห่งนี้ จะได้เรียนรู้ และฝึกฝนวิชาทางด้านวิชาการ รวมไปถึงได้รับความสนุกสนานจากกิจกรรมของเหล่าศิษย์พี่ในสำนัก !!
                                สำนัก WIP Camp นี้ก่อตั้งมาแล้วจนถึงปีที่ 11 เพื่อรอนินจาผู้เหมาะสมสำหรับคัมภีร์ลับในตำนาน ที่สามารถดลบันดาลสิ่งที่หวัง แล้วน้อง ๆ ล่ะ คือคนที่เหมาะสม
                                    คนนั้นหรือเปล่า" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <WhatCarousel/>
                    </Col>
                </Row> */}

            </WhatBg >
        )
    }
}
