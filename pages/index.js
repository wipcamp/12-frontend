import React, { Component, Fragment } from 'react'
import GlobalStyles from '../components/Core/GlobalStyle'
import App from '../components/Core/'


export default class index extends Component {

    render() {
        return (
            <Fragment>
                <style jsx global>
                    {GlobalStyles}
                </style>
                <App />
            </Fragment>
        )
    }
}
