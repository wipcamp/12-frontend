import React, { Component } from 'react'
import Flippy from './Track'
import styled from 'styled-components'
import { WhatImage } from '../What/WhatImage'

const Wrap = styled.div`
    overflow-x: scroll;
    width: 100%;
    display: flex;
    
`
export default class Carousel extends Component {
    render() {
        return (
            <Wrap>
                    <Flippy />
                    <Flippy />
                    <Flippy />
                    <Flippy />
                    <Flippy />
                    <Flippy />
                    <Flippy />
                    <Flippy />
                    <Flippy />
                    <Flippy />
                    {/* <WhatImage src="/img/temp.jpg" />
                    <WhatImage src="/img/temp.jpg" />
                    <WhatImage src="/img/temp.jpg" />
                    <WhatImage src="/img/temp.jpg" />
                    <WhatImage src="/img/temp.jpg" /> */}
            </Wrap>
        )
    }
}
