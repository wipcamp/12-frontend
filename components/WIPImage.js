import React,{Component} from 'react'
import styled from 'styled-components'


const StyledWIPImg = styled.img`
width: ${props => props.width || "200px"} ;
height : ${props => props.height || "auto"} ;
`


    export default class WIPImage extends Component {
        
        render() {
            return (
                    <StyledWIPImg src={this.props.src} width={this.props.width} height={this.props.height}/>
            )
        }
    }