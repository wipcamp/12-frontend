import React from 'react'
import styled from 'styled-components'

const HeadLine = styled.h1`
    font-family: 'Prompt-medium', sans-serif;
    font-size: 40px;
    letter-spacing: 0.2em;
    color: ${props => props.color};

    @media (min-width: 1024px) {
        font-size: 120px;
    }

    @media (min-width: 1440px) {
        font-size: 140px;
    }
`

const SubHead = styled.h2`
    font-family: 'Prompt-light', sans-serif;
    font-size: 14px;
    text-align: center;
    color: ${props => props.color};

    @media (min-width: 1024px) {
        font-size: 35px;
    }
`

const ContentText = styled.p`
    font-family: 'Prompt-regular', sans-serif;
    font-size: 12px;
    color: ${props => props.color};
    text-align: ${props => props.textAlign};
    text-indent: ${props => props.textIndent};
    padding: ${props => props.padding};
    line-height: ${props => props.lineHeight};

    @media (min-width: 1024px) {
        font-size: 20px;
    }

    @media (min-width: 1440px) {
        font-size: 24px;
    }
`

export const Header = (props) => {
    return (
    <HeadLine color = {props.color}>
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
        <ContentText color = {props.color}
         textAlign = {props.textAlign}
          textIndent = {props.textIndent}
           padding = {props.padding}
           >
               
            {props.content}
        </ContentText>
    )
}




