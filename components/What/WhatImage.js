import React, { Component } from 'react'
import styled from 'styled-components'


const Image = styled.img`
    width: 528.51px;
    height: 397px;
    margin: 0px 10px 0px 10px;
    visibility: ${props => props.visible};
`

export const WhatImage = (props) => {

    return (
        <Image src={props.src} className="slide" visible={props.visible} />
    )
}
Image.defaultProps = {
    visible: "visible"
}