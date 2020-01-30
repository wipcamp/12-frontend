import React, { Component } from 'react'
import styled from 'styled-components'


const Image = styled.img`
    width: auto;
    height: 116px;
    scroll-snap-align: center;
    margin: 0px 10px 0px 10px;
    
    @media (min-width: 768px) {
        height: 217px;
    }

    @media (min-width: 1024px) {
        height: 40vh;
    }
`

export const WhatImage = (props) => {

    return (
        <Image src={props.src} className="slide"/>
    )
}
Image.defaultProps = {
    visible: "visible"
}