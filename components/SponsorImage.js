import React,{Component} from 'react'
import styled from 'styled-components'


const StyledSponsorImg = styled.img`
width: ${props => props.width || "200px"} ;
height : ${props => props.height || "auto"} ;
`


    export default class SponsorIamge extends Component {
        
        render() {
            return (
                    <StyledSponsorImg src={this.props.src} width={this.props.width} height={this.props.height}/>
            )
        }
    }