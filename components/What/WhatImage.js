import React, { Component } from 'react'
import styled from 'styled-components'


const Image = styled.img`
    width: auto;
    height: 116px;
    scroll-snap-align: center;
    padding: 0px 10px 0px 10px;
    
    @media (min-width: 768px) {
        height: 217px;
    }

    @media (min-width: 1024px) {
        height: 20vh;
    }

    @media (min-width: 1080px) {
        height: 30vh;
    }

    @media (min-width: 1280px) {
        height: 35vh;
    }

    @media (min-width: 1440px) {
        height: 40vh;
    }
`

export const WhatImage = (props) => {

    return (
        <Image src={props.src} alt={props.alt} className="slide"/>
    )
}
Image.defaultProps = {
    visible: "visible"
}