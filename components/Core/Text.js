import React from 'react'
import styled from 'styled-components'

const HeadLine = styled.h1`
    font-family: 'Prompt', sans-serif;
    font-size: 40px;
    letter-spacing: 10%;
    font-weight: 500;
    text-align: center;
    -webkit-text-stroke-width: 3px;
    -webkit-text-stroke-color: ${props => props.strokeColor};
    color: transparent;
`

const SubHead = styled.h2`
    font-family: 'Prompt', sans-serif;
    font-size: 16px;
    font-weight: normal;
    text-align: center;
    color: ${props => props.color};
`

const ContentText = styled.p`
    font-family: 'Prompt', sans-serif;
    font-size: 12px;
    font-weight: lighter;
    color: ${props => props.color};
`

export const Header = (props) => {
    return (
    <HeadLine strokeColor = {props.stroke}>
        {props.headerText}
    </HeadLine>
    )
}

export const SubHeader = (props) => {
    return (
        <SubHead color = {props.color}>
            {props.subHeaderText}
        </SubHead>
    )
}

export const Content = (props) => {
    return (
        <ContentText color = {props.color}>
            {props.content}
        </ContentText>
    )
}




