import React , { Component } from 'react'
import styled from 'styled-components'
import { Content } from '../Core/Text'
import { keyFrameGlow } from '../When/Glow'

const Image = styled.img`
`

const Glowing = styled.div`
animation: ${ keyFrameGlow } 2s ease infinite ;
`
class ImageInfo extends Component {
 render() {
    return(
        <div className="media mt-3 ">
            <Image src={this.props.src} />
       <div className="mt-1 ml-4">  <Content 
            content={this.props.content || "Unknow"}
            color={this.props.color}
            />
        </div> 
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