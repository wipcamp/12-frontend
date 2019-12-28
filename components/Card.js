import React from 'react'
import styled from 'styled-components'

const TrackCardStyled = styled.img`
    width: 290px;
    height: 521px;
`

const FaqsCardStyled = styled.img`
    width: 294px;
    height: 521px;
`

export const TrackCard = (props) => {
    
        return (
            <TrackCardStyled src={props.src}/>
        )
    
}

export const FaqsCard = (props) => {
    
    return (
        <FaqsCardStyled src={props.src}/>
    )

}