import React, { Component } from 'react'
import MainNav from '../components/Core/MainNav'
import ImageInfo from '../components/Core/ImgInfo'
import {TrackCard , FaqsCard} from '../components/Core/Card'
import SideScroll from '../components/Faqs/SideScroll'
import GlobalStyles from '../components/Core/GlobalStyle'
export default class index extends Component {
    render() {
        return (
            <div>
                <style jsx global>
                    {GlobalStyles}
                </style>
                <MainNav />
                
               
            </div>
        )
    }
}
