import React, { Component } from 'react'
import styled from 'styled-components'
const Text = styled.p`
font-size:auto;


`
const Image = styled.img`
margin-right: 50px;
margin-top: 50px;
width: 30%;


`
export default class ImgInfo extends Component {
    render() {
        return (
        
               <div class="d-flex" style={{margin:"0 0 20% 0"}}>
               <Image src={this.props.src} />
    <Text>{this.props.info || "Unknow"}</Text>               
  </div> 
        
        )
    }
}
