import React, { Component } from 'react'
import styled from 'styled-components'
import { Content } from '../Core/Text'
import { keyFrameGlow } from '../When/Glow'

const Image = styled.img`
/* margin-right: 5%;
width: 30%; */
`
const Glowing = styled.div`

border-radius: 10%;

animation: ${ keyFrameGlow } 2s ease infinite ;
`
export default class ImgInfo extends Component {
    render() {
        return (
            
            <div className="media mb-3 ml-5">
                <Glowing><Image src={this.props.src} /></Glowing>
                <div className="media-body mt-5">
                    <Content 
                        content={this.props.info || "Unknow"}
                        color={this.props.color}
                        />  
                </div>
            </div>
           
        )
    }
}
