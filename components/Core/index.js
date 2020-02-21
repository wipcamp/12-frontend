import React, { Component, Fragment } from 'react'
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
import Track from '../Track'
import Contact from '../Contact'
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor'
import SideBar from "./SideBar"
import './sidebar.css'
import StarParticle from './Particle'

const Wrap = styled.div`
    overflow: hidden;
    height: 100%;
    width: 100%;
`
export default class Wrapper extends Component {
    
    componentDidMount(){
        this.configScroll();
        document.oncontextmenu = function() {
            return false;
        }
        document.onkeydown = function (e) {
            if (event.keyCode === 123) {
              return false;
            }
            if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
              return false;
            }
            if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
              return false;
            }
            if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
              return false;
            }
            if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
              return false;
            }
            if (e.metaKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
              return false;
            }
        }
    }

    configScroll = () => {
        (window.innerWidth >= 768)?
        configureAnchors({offset: -80, scrollDuration: 600}) 
        :  configureAnchors({offset: 0, scrollDuration: 600}) 
    }

    disabledRightClick = () => {
        if (e.metaKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
            return false;
        }
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
            return false;
        }
        
    }

    render() {
        return (
            <Fragment>
            <Wrap id="App">
                <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
                <div id="page-wrap" style={{overflow:'hidden'}}>
                <StarParticle>
                <MainNav />
                <ScrollableAnchor id="home"><Home/></ScrollableAnchor>
                <ScrollableAnchor id="what"><What /></ScrollableAnchor>
                <ScrollableAnchor id="Who"><Who /></ScrollableAnchor>
                <ScrollableAnchor id="track"><Track /></ScrollableAnchor>
                <ScrollableAnchor id="where"><Where /></ScrollableAnchor>
                <ScrollableAnchor id="when"><When /></ScrollableAnchor>
                <ScrollableAnchor id="faqs"><Faqs /></ScrollableAnchor>
                {/*<ScrollableAnchor id="game"><Game /></ScrollableAnchor>
                 <ScrollableAnchor id="sponsor"><Sponsor /></ScrollableAnchor> */}
                <ScrollableAnchor id="contact"><Contact /></ScrollableAnchor>
                </StarParticle>
                </div>       
            </Wrap>
            </Fragment>
        )
    }
}
