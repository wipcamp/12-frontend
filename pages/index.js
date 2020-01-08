import React, { Component, Fragment } from 'react'
import GlobalStyles from '../components/Core/GlobalStyle'
import Home from '../components/Home/Home'
import MainNav from '../components/Core/MainNav'
import When from '../components/When/When'
import Who from '../components/Who/Who'
import Game from '../components/Game/Game'
import Where from '../components/Where/Where'
import Faqs from '../components/Faqs/Faqs'
import Sponsor from '../components/Sponsor/Sponsor'
import What from './What'


export default class index extends Component {

    render() {
        return (
            <Fragment>
                <style jsx global>
                    {GlobalStyles}
                </style>
                <MainNav />
                <Home />
                <What />
                <Who />
                <Where />
                <When />
                <Faqs />
                <Game />
                <Sponsor />
                
            </Fragment>
        )
    }
}
