import React, { Component } from 'react'
import Countdown from 'react-countdown'
import styled from 'styled-components'
import { Header, SubHeader } from './Text'

const CountdownContainer = styled.div`
    font-family: 'NotoSansThai-Regular', sans-serif;
    width: 100%;
    height: 100vh;
    background: rgb(9,10,15);
    background: linear-gradient(90deg, rgba(9,10,15,1) 0%, rgba(27,39,53,1) 50%, rgba(9,10,15,1) 100%);
    background-color: black;
    position: relative;
    display: table;
`

const Wrap = styled.div`
    display: table-cell;
    vertical-align: middle;
    text-align: center;
`

const WipLogoImg = styled.img`
    width: 16em;
    
    @media (min-width: 768px) {
        width: 30em;
    }

    @media (min-width: 1024px) {
        width: 38.5em;
    }
`

const ComingSoon = styled.h1`
    font-family: 'ChakraPetch-Regular';
    font-size: 48px;
    color: #6F7F8D;
`

const StayTune = styled(ComingSoon)`
    font-family: 'ChakraPetch-Regular';
    font-size: 36px;
`

const CountDownText = styled(SubHeader)`
    font-family: 'ChakraPetch-Regular';
`

export default class CommingSoon extends Component {
    render() {
        return (
            
            <CountdownContainer>
                <Wrap>
                    <WipLogoImg src='/img/Home/logo.png' />
                    <br />
                    <br />
                    <ComingSoon>C O M I N G &nbsp;&nbsp;S O O N</ComingSoon>
                    
                        <CountDownText color="#6F7F8D" subHeaderText={this.props.day+" "+this.props.min+" "+this.props.sec} />
                    
                    <br />
                    <br />
                    <StayTune>ติดตามได้ที่เพจ WIP Camp</StayTune>
                </Wrap>
            </CountdownContainer>

        )
    }
}
