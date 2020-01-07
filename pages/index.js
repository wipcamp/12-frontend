import React, { Component } from 'react'
import MainNav from '../components/Core/MainNav'
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
