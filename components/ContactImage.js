import React,{Component} from 'react'
import styled from 'styled-components'


const StyledContactImg = styled.img`
width: ${props => props.width || "200px"} ;
height : ${props => props.height || "auto"} ;
`


    export default class ContactImage extends Component {
        
        render() {
            return (
                    <StyledContactImg src={this.props.src} width={this.props.width} height={this.props.height}/>
            )
        }
    }