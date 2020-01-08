import React, { Component, Fragment } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Col, Row } from 'reactstrap'
import styled from 'styled-components'
import { Header, SubHeader, Content } from '../components/Core/Text'
import WhatCarousel from '../components/Core/WhatCarousel'

export default class What extends Component {
    render() {
        return (
            <React.Fragment>
                <Container>
                    <Row>
                        <Col sm="2"/>
                        <Col sm="8" className="text-center mt-2">
                                <Header stroke="black" headerText="WHAT" />
                                <SubHeader color="black" subHeaderText="ค่ายนี้คืออะไร" />
                                <Content color="black" textAlign="center" content="ค่ายเส้นทางสู่ฝันนักไอที (WIP Camp) คือ ค่ายสำหรับน้อง ๆ ผู้ที่มีความสนใจทางด้าน 
                                โดยน้องๆ จะได้รับบทบาทเป็นนินจาที่กำลังค้นหาเส้นทางชีวิตของตนเอง ณ คณะเทคโนโลยีสารสนเทศ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี เป็นระยะเวลา 5 วัน 4 คืน
                                เหล่านินจาที่เข้ามาในสำนักแห่งนี้ จะได้เรียนรู้ และฝึกฝนวิชาทางด้านวิชาการ รวมไปถึงได้รับความสนุกสนานจากกิจกรรมของเหล่าศิษย์พี่ในสำนัก !!
                                สำนัก WIP Camp นี้ก่อตั้งมาแล้วจนถึงปีที่ 11 เพื่อรอนินจาผู้เหมาะสมสำหรับคัมภีร์ลับในตำนาน ที่สามารถดลบันดาลสิ่งที่หวัง แล้วน้อง ๆ ล่ะ คือคนที่เหมาะสม
                                    คนนั้นหรือเปล่า  wxsdfghjklkhgfdsasdfghjkl " />
                                    <WhatCarousel />
                            </Col>
                            <Col sm="2" />
                        
                    </Row>
                </Container>
            </React.Fragment>
                )
            }
        }
