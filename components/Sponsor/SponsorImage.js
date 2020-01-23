import React,{Component} from 'react'
import styled from 'styled-components'


const StyledSponsorImg = styled.img`
    height: 30px;
    margin: 10px;


`


    export default class SponsorIamge extends Component {
        
        render() {
            return (
                    <StyledSponsorImg src={this.props.src} />
            )
        }
    }