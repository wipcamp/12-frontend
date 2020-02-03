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
`

export default class CommingSoon extends Component {
    render() {
        return (
            <CountdownContainer>
                <Header color="white" headerText="Comming Soon" />
                <SubHeader color="white" subHeaderText={this.props.sec}></SubHeader>
            </CountdownContainer>
        )
    }
}
