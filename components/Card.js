import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const TrackCardContainer = styled.div`
    position: relative;
    z-index: 1;
    width: 290px;
    perspective: 1000px;
    margin: 0 1%;
`

const FaqsCardContainer = styled(TrackCardContainer)`
    width: 294px;
`

const CardBody = styled.div`
    width: 290px;
    height: 100%;
    transform-style: preserve-3d;
    transition: all .7s linear;
    flex-shrink: 0;
    :hover {
        transform: rotateY(180deg);
    }
`

const CardFront = styled.div`
    position: relative;
    z-index: 2;
    
    :hover {
        opacity: 0;
        visibility: hidden;
        transition: opacity .5s ease-in, visibility .7s linear;
    }
`

const CardBack = styled.div`
    position: absolute;
    z-index: 1;
    top: 0;
    transform: rotateY(180deg);
`

const CardSide = styled.div`
    
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
        <TrackCardContainer>
            <CardBody>
                <CardSide>
                    <CardFront>
                        <TrackCardStyled src={props.srcFront} />
                    </CardFront>
                </CardSide>
                <CardSide>
                    <CardBack>
                        <TrackCardStyled src={props.srcBack} />
                    </CardBack>
                </CardSide>
            </CardBody>
        </TrackCardContainer>
    )

}

export const FaqsCard = (props) => {

    return (
        <FaqsCardContainer>
            <CardBody>
                <CardSide>
                    <CardFront>
                        <FaqsCardStyled src={props.srcFront} />
                    </CardFront>
                </CardSide>
                <CardSide>
                    <CardBack>
                        <FaqsCardStyled src={props.srcBack} />
                    </CardBack>
                </CardSide>
            </CardBody>
        </FaqsCardContainer>
    )

}

TrackCardStyled.propsTypes = {
    srcFront: PropTypes.string.isRequired,
    srcBack: PropTypes.string.isRequired
};

FaqsCardStyled.propsTypes = {
    srcFront: PropTypes.string.isRequired,
	srcBack: PropTypes.string.isRequired
};