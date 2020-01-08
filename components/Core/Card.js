import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const TrackCardContainer = styled.div`
    position: relative;
    z-index: 1;
    width: 190px;
    perspective: 1000px;
    margin: 0 14.12px;
`

const FaqsCardContainer = styled(TrackCardContainer)`
    width: 170px;
    visibility: ${props => props.visible};
`

const TrackCardBody = styled.div`
    width: 190px;
    height: 100%;
    transform-style: preserve-3d;
    transition: all .7s linear;
    flex-shrink: 0;
    :hover {
        transform: rotateY(180deg);
    }
`

const FaqsCardBody = styled(TrackCardBody)`
    
    width: 170px;
    margin-left: -80%;
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
    width: 190px;
    height: 323px;
`

const FaqsCardStyled = styled.img`
    width: 170px;
    height: 293px;
`

export const TrackCard = (props) => {

    return (
        <TrackCardContainer>
            <TrackCardBody>
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
            </TrackCardBody>
        </TrackCardContainer>
    )

}

export const FaqsCard = (props) => {

    return (
        <FaqsCardContainer visible={props.visible} className="slide" >
            <FaqsCardBody >
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
            </FaqsCardBody>
        </FaqsCardContainer>
    )

}

FaqsCard.defaultProps = {
    visible: "visible"
}

TrackCardStyled.propsTypes = {
    srcFront: PropTypes.string.isRequired,
    srcBack: PropTypes.string.isRequired
};

FaqsCardStyled.propsTypes = {
    srcFront: PropTypes.string.isRequired,
	srcBack: PropTypes.string.isRequired
};