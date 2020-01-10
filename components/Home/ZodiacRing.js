import React, { Component, Fragment } from 'react'
import styled, { keyframes } from 'styled-components'

const spin = keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
`

const Zodiacglow = keyframes`
    from { filter:drop-shadow(0px 0px 5px rgba(255,255,255,0.7));}
    to {filter:drop-shadow(0px 0px 10px rgba(255,255,255,1));}
`

const ZodiacRingImage = styled.img`
    width: 276px;
    height: 274px;

    @media (min-width: 1024px) {
        width: 666px;
        height: 664px;
        animation: ${spin} 60s linear infinite,${Zodiacglow} 2s ease-in-out alternate infinite;
    }
`

export default class ZodiacRing extends Component {
    render() {
        return (
            <Fragment>
            <ZodiacRingImage src="/zodiacRing.png" />
            </Fragment>
        )
    }
}




