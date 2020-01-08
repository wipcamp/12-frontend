import React, { Component } from 'react'
import SideScroll from '../components/Faqs/SideScroll'
import GlobalStyles from '../components/Core/GlobalStyle'




export default class index extends Component {

    render() {
        return (
            <div>
                <style jsx global>
                    {GlobalStyles}
                </style>
                {/* <MainNav />
                <br />
                <br />
                <br />
                <br />
                <br />
                <ZodiacRing /> */}

                <SideScroll />
                
            </div>
        )
    }
}
