import React, { Component } from 'react'
import MainNav from '../components/MainNav'
import ImageInfo from '../components/ImgInfo'
import {TrackCard , FaqsCard} from '../components/Card'
import SideScroll from '../components/SideScroll'
import GlobalStyles from '../components/GlobalStyle'
export default class index extends Component {
    render() {
        return (
            <div>
                <style jsx global>
                    {GlobalStyles}
                </style>
                <MainNav />
                <TrackCard srcFront="temp.jpg" srcBack="temp.jpg" />
                <TrackCard srcFront="temp.jpg" srcBack="temp.jpg" />
                <TrackCard srcFront="temp.jpg" srcBack="temp.jpg" />
                <TrackCard srcFront="temp.jpg" srcBack="temp.jpg" />
                <TrackCard srcFront="temp.jpg" srcBack="temp.jpg" />
                <TrackCard srcFront="temp.jpg" srcBack="temp.jpg" />
               
            </div>
        )
    }
}
