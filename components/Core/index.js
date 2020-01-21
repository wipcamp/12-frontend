import React, { Component } from 'react'
import styled from 'styled-components'
import Home from '../Home'
import MainNav from '../Core/MainNav'
import What from '../What'
import Who from '../Who'
import Where from '../Where'
import When from '../When'
import Faqs from '../Faqs'
import Game from '../Game'
import Sponsor from '../Sponsor'
import Star from './Star'
import Track from '../Track'

const Wrap = styled.div`
    overflow: hidden;
`
export default class App extends Component {

    render() {
        return (
            <Wrap>
                <MainNav />
                <Home/>
                <What />
                <Who />
                <Track />
                <Where />
                <When />
                <Faqs />
                <Game />
                <Sponsor />                
            </Wrap>
        )
    }
}
