import React,{Component} from 'react'
import styled from 'styled-components'


const StyledContactImg = styled.img`
    width : 200px;
    margin : 0;
    padding : 0;
`

    export default class ContactImage extends Component {
        render() {
            return (
                <StyledContactImg src={this.props.src}/>
            )
        }
    }