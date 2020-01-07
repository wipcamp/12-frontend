import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'

const spin = keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
`

const ZodiacRingImage = styled.img`
    width: 276px;
    height: 274px;

    @media (min-width: 1024px) {
        width: 666px;
        height: 664px;
        animation: ${spin} 20s linear infinite;
    }
`

export default class ZodiacRing extends Component {
    render() {
        return (
            <ZodiacRingImage src="/zodiacRing.png" />
        )
    }
}




