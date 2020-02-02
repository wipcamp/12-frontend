import React, { Component } from 'react'
import styled from 'styled-components'
import { WhatImage } from './WhatImage'

const Wrap = styled.div`
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    width: 100%;
    position: relative;
    z-index: 1;
    ::-webkit-scrollbar {
         width: 0px;
    }
`

const LeftArrowButton = styled.div`
    height: 62.68px;
    width: 63.5px;
    align-items: center;
    text-align: center;
    justify-content: center;
    background: rgba(134, 134, 134, 0.68);
    border-radius: 50%;
    cursor: pointer;
    color: white;
    display: none;
    visibility: hidden;
    position: absolute;
    fill: white;
    left: 25px;
    z-index: 3;
    transform: rotate(180deg);

    @media (min-width: 1280px) {
        display: flex;
    }
`

const RightArrowButton = styled.div`
    height: 62.68px;
    width: 63.5px;
    align-items: center;
    text-align: center;
    justify-content: center;
    background: rgba(134, 134, 134, 0.68);
    border-radius: 50%;
    cursor: pointer;
    color: white;
    position: absolute;
    fill: white;
    right: 17.95px;
    z-index: 3;
    visibility: visible;
    display: none;

    @media (min-width: 1280px) {
        top: 40%;
        display: flex;
    }

    @media (min-width: 1440px) {
        top: 45%;
    }

    @media (min-width: 1920px) {
        top: 48%;
    }
`

const prev = {
    position: 'absolute',
    fill: 'white',
    top: '133px',
    left: '25px',
    zIndex: '3',
    transform: 'rotate(180deg)'
}

const next = {
    position: 'absolute',
    fill: 'white',
    top: '133px',
    right: '17.95px',
    zIndex: '3'
}

const LeftArrow = (props) => {
    return (
        <LeftArrowButton onClick={props.goToPrevSlide} id="prevButton">
            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="24.93" viewBox="0 0 24 24"><path d="M21 12l-18 12v-24z" /></svg>
        </LeftArrowButton>
    );
}

const RightArrow = (props) => {
    return (
        <RightArrowButton onClick={props.goToNextSlide}  >
            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="24.93" viewBox="0 0 24 24"><path d="M21 12l-18 12v-24z" /></svg>
        </RightArrowButton>
    );
}

const showPrevButton = () => {
    document.getElementById("prevButton").style.visibility = 'visible';
}

const hidePrevButton = () => {
    document.getElementById("prevButton").style.visibility = 'hidden';
}

export default class SideScroll extends Component {
    state = {
        images: [
            { src: "/img/What/1.png" },
            { src: "/img/What/2.png" },
            { src: "/img/What/3.png" },
            { src: "/img/What/4.png" },
            { src: "/img/What/5.png" },
            { src: "/img/What/8.jpg" },
            { src: "/img/What/7.png" }
        ],
        currentIndex: 0,
        translateValue: 0
    };

    goToPrevSlide = () => {
        if (this.state.currentIndex === 0) {
            return;
        }

        if (this.state.currentIndex === 1) {
            hidePrevButton();
        }
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex - 1,
            translateValue: prevState.translateValue + (this.slideWidth())
        }))
    }

    goToNextSlide = () => {
        if (this.state.currentIndex === this.state.images.length - 1) {
            hidePrevButton();
            return this.setState({
                currentIndex: 0,
                translateValue: 0
            })
        }
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex + 1,
            translateValue: prevState.translateValue + -(this.slideWidth())
        }));
        showPrevButton();
    }

    slideWidth = () => {
        return (document.querySelector('.slide').clientWidth)
    }

    render() {

        return (
            <div style={{ position: 'relative', zIndex: '2' }} id="container" >
                <Wrap >
                    <div
                        style={{
                            display: 'flex',
                            transform: `translateX(${this.state.translateValue}px)`,
                            transition: 'transform ease-out 0.45s',
                            padding: '0px',
                            margin: '0px'

                        }} >
                        {this.state.images.map((data, key) => (
                            <WhatImage
                                key={key}
                                src={data.src}
                            />
                        ))}
                    </div>
                </Wrap>
                <LeftArrow goToPrevSlide={this.goToPrevSlide} />
                <RightArrow goToNextSlide={this.goToNextSlide} />
            </div>
        )
    }
}

