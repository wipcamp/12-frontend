import React, { Component } from 'react'
import { Content } from '../Core/Text'
import styled, { keyframes } from 'styled-components'
const glow = keyframes`
    from { filter:drop-shadow(0px 0px 5px rgba(255,255,255,0.7));}
    to {filter:drop-shadow(0px 0px 10px rgba(255,255,255,1));}
`
const Image = styled.img`
    width: 64px;
    height: auto;
    align-self: center;

    @media (min-width: 768px) {
        width: 94px;
    }

    @media (min-width: 1080px){
        width: 90%;
}
`
const ImageWho = styled.img`
animation: ${glow} 2s ease-in-out alternate infinite;
display: ${ props => props.display};

`

const TextBox = styled.div`
    width: 13rem;
    text-align: left;
    align-self: center;
    margin-left: 1rem;
    margin-top:0.5rem;
@media (min-width: 1024px){
    width: auto;
    text-align: center;
    
}
@media (min-width: 1080px){
margin:0.5em 3em 2em 2em;
width: unset;
}
`

const Fieldset = styled.fieldset`
    border: 2px solid whitesmoke;
    color: white;
    -moz-border-radius:8px;
    -webkit-border-radius:8px;	
    border-radius:8px;
    /* border-image: linear-gradient(#FF66ED,#64A4FF )1; */
    margin-bottom: 30px;
    text-align: center;
    @media (min-width: 1080px){
        width: 80%;
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
            display: none;
}	
`


const WhoMobile = props => {
    return (
        <WhoMobileContainer justify={props.justify}>
            <Image src={props.src} />
            <TextBox>
                <Content
                    content={props.content || "Unknow"}
                    color={props.color}
                    textAlign = {props.textAlign || "Unknow"}
                />
            </TextBox>
        </WhoMobileContainer>
    )
}


class ImageInfoGlow extends Component {
    render() {
        return (
            <div className="media mt-3">
                <ImageWho src={this.props.src} display={this.props.display} />
                <div className="mt-1 ml-4"><Content
                    content={this.props.content || "Unknow"}
                    color={this.props.color}
                   
                />
                </div>
            </div>

        )
    }
}
export {
    ImageInfo,
    ImageInfoGlow,
    WhoMobile
};