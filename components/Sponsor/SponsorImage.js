import React,{Component} from 'react'
import styled from 'styled-components'


const StyledSponsorImg = styled.img`
    height: 1.75em;
    margin: 0.5em;

    @media (min-width: 360px) {
        height: 2em;
    }

    @media (min-width: 375px) {
        height: 2.25em;
    }

    @media (min-width: 411px) {
        height: 2.5em;
    }

    @media (min-width: 414px) {
        margin: 0.75em;
    }

    @media (min-width: 768px) {
        height: 3.5em;
        margin: 1em;
    }

    @media (min-width: 1024px) {
        height: 4em;
    }

`

    export default class SponsorIamge extends Component {
        
        render() {
            return (
                    <StyledSponsorImg src={this.props.src} />
            )
        }
    }