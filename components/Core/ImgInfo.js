import React , { Component } from 'react'
import styled from 'styled-components'
import { Content } from '../Core/Text'
import { keyFrameGlow } from '../When/Glow'

const Image = styled.img`
margin-left: 32.5%;
margin-bottom: -17.5%;

`
const TextBox = styled.div`
border: 3px solid white;
border-radius: 10px;
padding: 20% 10% 10% 10%;
margin-bottom: 20%;
`
const Glowing = styled.div`
animation: ${ keyFrameGlow } 2s ease-in-out infinite alternate ;
`
class ImageInfo extends Component {
 render() {
    return(
    
        <div>
            <Image src={this.props.src}/>
            <TextBox>
                <Content 
               content={this.props.content || "Unknow"}
               color={this.props.color}
               />
            </TextBox>

        </div>

        )
}}
class ImageInfoGlow extends Component {
    render() {
       return(
           <div className="media mt-3">
              <Glowing><Image src={this.props.src} /></Glowing> 
               <div className="mt-1 ml-4"><Content 
               content={this.props.content || "Unknow"}
               color={this.props.color}
               />
               </div>
   </div>
   
           )
   }}
   export {ImageInfo,
    ImageInfoGlow,};