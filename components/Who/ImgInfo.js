import React, { Component } from 'react'
import { Content } from '../Core/Text'
import styled, { keyframes } from 'styled-components'

const Image = styled.img`
    width: 64px;
    height: auto;
    align-self: center;

    @media (min-width: 768px) {
        width: 94px;
    }

    @media (min-width: 1080px){
        width: 25%;
        height: auto;
       
}
`

const TextBox = styled.div`
    width: 13rem;
    text-align: left;
    align-self: center;
    margin-left: 1rem;
    margin-top:0.5rem;
@media (min-width: 1024px){
    width: 13rem;
    
}
@media (min-width: 1280px){
    width: 14em;
    
}
@media (min-width: 1440px){
text-align: center;
width:20em;
margin:0 0 0 1rem;
}
`

const Fieldset = styled.fieldset`
    border: 2px solid whitesmoke;
    color: white;
    -moz-border-radius:8px;
    -webkit-border-radius:8px;	
    border-radius:8px;
    margin-bottom: 30px;
    text-align: center;
    @media (min-width: 1080px){
        width: 80%;
        height: auto;
        }
        @media (min-width: 1440px){
        width: 80%;
        height: 250px;
        }
        @media (min-width: 1920px){
        width: 80%;
        height: 230px;
        }
`
const Legend = styled.legend`
    width: 5em;
    
`

const WhoDesktop = styled.div`
        display: none !important;
        @media (min-width: 1080px){
        width: 100%;
        display:flex !important;
}
`
const ImageInfo = (props) => {
    return (
        <WhoDesktop className="d-flex justify-content-center">
            <Fieldset>
                <Legend>
                    <Image src={props.src} />
                </Legend>
                <TextBox>
                    <Content
                        content={props.content || "Unknow"}
                        color={props.color}
                        textAlign = {props.textAlign || "Unknow"}
                        textAlignResponsive = {props.textAlignResponsive || "Unknow"}
                        textAlignDeskTop = {props.textAlignDeskTop || "Unknow"}
                    />
                </TextBox>
            </Fieldset>
        </WhoDesktop>
    )
}

const WhoMobileContainer = styled.div`
        display: flex;
        justify-content: center;
        margin-top: 1.5em;

        @media (min-width: 1080px){
        }	
        @media (min-width: 1080px){
        
}	
`
const WhoContentText = styled.p`
    font-family: 'Sarabun-Regular', sans-serif;
    font-size: 12px;
    color: ${props => props.color};
    text-align: ${props => props.textAlign};
    line-height: 20px;
@media (min-width: 768px) {
    font-size: 16px;
    } 
@media (min-width: 1080px) {
    vertical-align: center;
    text-align: center;
    line-height: unset;
    white-space: normal;

}
@media (min-width: 1080px){
    font-size: 18px; 
}
  `


const WhoMobile = props => {
    return (
        <WhoMobileContainer justify={props.justify}>
            <Image src={props.src} alt={props.alt} />
            <TextBox>
                <WhoContentText 
                    color={props.color}
                    textAlign = {props.textAlign || "Unknow"} > 
                 {props.children}</WhoContentText>
            </TextBox>
        </WhoMobileContainer>
    )
}



export {
    ImageInfo,
    WhoMobile
};