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
import Contact from '../Contact'
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor'
import SideBar from "./SideBar"
import './sidebar.css'
import { ParallaxProvider } from 'react-scroll-parallax';

const Wrap = styled.div`
    overflow: hidden;
`
export default class App extends Component {
    componentDidMount(){
        configureAnchors({offset: -60, scrollDuration: 600}) 
    }

    render() {
        return (
            <ParallaxProvider>
            <Wrap id="App">
                <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
                <div id="page-wrap" style={{overflow:'hidden'}}>
                <MainNav />
                <ScrollableAnchor id="home"><Home/></ScrollableAnchor>
                <ScrollableAnchor id="what"><What /></ScrollableAnchor>
                <ScrollableAnchor id="who"><Who /></ScrollableAnchor>
                <ScrollableAnchor id="track"><Track /></ScrollableAnchor>
                <Where />
                <ScrollableAnchor id="when"><When /></ScrollableAnchor>
                <ScrollableAnchor id="faqs"><Faqs /></ScrollableAnchor>
                <Game />
                <Sponsor />    
                <Contact />
                </div>       
            </Wrap>
            </ParallaxProvider>
        )
    }
}
