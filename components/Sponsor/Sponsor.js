import React, { Component, Fragment } from 'react'
import { Header, SubHeader } from '../Core/Text'

export default class Sponsor extends Component {
    render() {
        return (
            <Fragment>
                <Header strokeColor="black" headerText="SPONSOR" />
                <SubHeader color="black" subHeaderText="ผู้สนับสนุน" />
            </Fragment>
        )
    }
}
