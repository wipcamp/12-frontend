import React, { Component, Fragment } from 'react'
import styled from 'styled-components'


const TimerContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

const BigContainer = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-around;
    color: white;

`
const SmallContainer = styled.div`
    display: flex;
    justify-content: center;
    color: white;
    flex-wrap: wrap;
    font-family: 'Chakra Petch', sans-serif;
`

const WhenImg = styled.img`
    width:100px;
`
const TimerText = styled.h4`
    text-align:center ;
`

export default class WhenTimer extends Component {
    render() {
        return (
            <TimerContainer>
                <BigContainer>
                    <SmallContainer>
                        <WhenImg src='/img/Who/tempcircle.png' />
                        <TimerText>เปิดรับสมัคร 12 กุมภาพันธ์ 2563</TimerText>
                    </SmallContainer>
                    <SmallContainer>
                        <TimerText>เปิดรับสมัคร 12 กุมภาพันธ์ 2563</TimerText>
                        <WhenImg src='/img/Who/tempcircle.png' />
                    </SmallContainer>
                    <SmallContainer>
                        <WhenImg src='/img/Who/tempcircle.png' />
                        <TimerText>เปิดรับสมัคร 12 กุมภาพันธ์ 2563</TimerText>
                    </SmallContainer>
                    <SmallContainer>
                        <TimerText>เปิดรับสมัคร 12 กุมภาพันธ์ 2563</TimerText>
                        <WhenImg src='/img/Who/tempcircle.png' />
                    </SmallContainer>
                </BigContainer>
            </TimerContainer>
        )
    }
}
