import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
    position: relative;
    z-index: 1;
    width: ${props => props.w};
    perspective: 1000px;
    
`

const CardBody = styled.div`
    width: 290px;
    height: 100%;
    transform-style: preserve-3d;
    transition: all .7s linear;
    :hover {
        transform: rotateY(180deg);
    }
`

const CardFront = styled.div`
    :hover {
        opacity: 0;
        visibility: hidden;
        transition: opacity .25s ease-in, visibility .75s linear;
    }
`

const CardBack = styled.div`
    z-index: 2;
    transform: rotateY(180deg);
`

const CardSide = styled.div`
    position: absolute;
    top: 0;
    backface-visibility: hidden;
`

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
        <CardContainer w="290px">
            <CardBody>
                <CardSide>
                    <CardBack>
                        <TrackCardStyled src={props.srcBack} />
                    </CardBack>
                </CardSide>
                <CardSide>
                    <CardFront>
                        <TrackCardStyled src={props.srcFront} />
                    </CardFront>
                </CardSide>
            </CardBody>
        </CardContainer>
    )

}

export const FaqsCard = (props) => {

    return (
        <CardContainer w="294px">
            <CardBody>
                <CardSide>
                    <CardBack>
                        <FaqsCardStyled src={props.srcBack} />
                    </CardBack>
                </CardSide>
                <CardSide>
                    <CardFront>
                        <FaqsCardStyled src={props.srcFront} />
                    </CardFront>
                </CardSide>
            </CardBody>
        </CardContainer>
    )

}