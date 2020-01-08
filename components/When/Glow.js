import React, { Component } from 'react'
import styled from 'styled-components'

const Glow = styled.img`
-moz-box-shadow: 0 0 30px #fe0;
-webkit-box-shadow: 0 0 30px #fe0;
box-shadow: 0px 0px 30px #fe0;
border-radius: 50%;
width: 119px;
height: 119px;

`




export const Glowing = (props) => {
    return (
     <Glow src="/zodiacRing.png" />
    )
}