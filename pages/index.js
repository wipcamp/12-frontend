import React, { Component, Fragment } from 'react'
import SideScroll from '../components/Faqs/SideScroll'
import GlobalStyles from '../components/Core/GlobalStyle'
import When from '../components/When/When'
import Who from '../components/Who/Who'
import Game from '../components/Game/Game'
import Home from '../components/Home/Home'
import ZodiacRing from '../components/Home/ZodiacRing'
import Where from './Where'
import Faqs from '../components/Faqs/Faqs'
import Sponsor from '../components/Sponsor/Sponsor'
import MainNav from '../components/Core/MainNav'


export default class index extends Component {

    render() {
        return (
            <Fragment>
                <style jsx global>
                    {GlobalStyles}
                </style>
                <MainNav />
                <Home/>
                <Who/>
                <Where/>
                <When/>
                <Faqs/>
                <Game />
                <Sponsor />
                
            </Fragment>
        )
    }
}
