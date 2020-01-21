import React, { Component } from 'react'
import styled from 'styled-components'


const Image = styled.img`
    width: 168px;
    height: 116px;
    scroll-snap-align: center;
    margin: 0px 10px 0px 10px;
    
    @media (min-width: 768px) {
        width: 393px;
        height: 284px;
    }

    @media (min-width: 1024px) {
        width: 566px;
        height: 328px;
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