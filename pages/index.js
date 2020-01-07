import React, { Component } from 'react'
import MainNav from '../components/Core/MainNav'
import { Header, SubHeader } from '../components/Core/Text'
import {TrackCard , FaqsCard} from '../components/Core/Card'

import GlobalStyles from '../components/Core/GlobalStyle'


export default class index extends Component {

    render() {
        return (
            <div>
                <style jsx global>
                    {GlobalStyles}
                </style>
                <MainNav />
                {/* <TrackCard srcFront="temp.jpg" srcBack="temp.jpg" />
                <TrackCard srcFront="temp.jpg" srcBack="temp.jpg" />
                <TrackCard srcFront="temp.jpg" srcBack="temp.jpg" />
                <TrackCard srcFront="temp.jpg" srcBack="temp.jpg" />
                <TrackCard srcFront="temp.jpg" srcBack="temp.jpg" />
                <TrackCard srcFront="temp.jpg" srcBack="temp.jpg" /> */}
               
                
            </div>
        )
    }
}
