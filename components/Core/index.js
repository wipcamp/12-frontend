import React, { Component, Fragment } from 'react'
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


export default class App extends Component {

    render() {
        return (
            <Fragment>
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
            </Fragment>
        )
    }
}
