import React, { Component } from 'react'
import styled from 'styled-components'
import { WhatImage } from './WhatImage'



const Wrap = styled.div`
  overflow-x: scroll;
  
  
    width: 100%;
    position: relative;
    z-index: 1;
    
    ::-webkit-scrollbar {
         width: 0px;
    }
`

const ArrowButton = styled.div`
    height: 63px;
  width: 63.82px;
  
  align-items: center;
  justify-content: center;
  background: rgba(134, 134, 134, 0.68);
  border-radius: 50%;
  cursor: pointer;
  color: white;
  display: none;

  @media (min-width: 1024px) {
      display: flex;
  }

  
`
const prev = {
    position: 'absolute',
    top: '50%',
    left: '25px',
    zIndex: '3',
    visibility: 'hidden'
}

const next = {
    position: 'absolute',
    fill: 'white',
    top: '181px',
    
    right: '17.95px',
    zIndex: '3',
}




const LeftArrow = (props) => {
    return (
        <ArrowButton onClick={props.goToPrevSlide} style={prev}>
            &lt;
      </ArrowButton>
    );
}


const RightArrow = (props) => {
    return (
        <ArrowButton onClick={props.goToNextSlide} style={next}>

            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="24.93" viewBox="0 0 24 24"><path d="M21 12l-18 12v-24z" /></svg>

        </ArrowButton>
    );
}



export default class SideScroll extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                { src: "img/temp.jpg" ,visible: 'hidden'},
                { src: "img/temp.jpg" },
                { src: "img/temp.jpg" },
                { src: "img/temp.jpg" },
                { src: "img/temp.jpg" },
                { src: "img/temp.jpg" },
                { src: "img/temp.jpg" },
                { src: "img/temp.jpg" }
            ],
            currentIndex: 0,
            translateValue: 0
        };
    }

    goToPrevSlide = () => {
        if (this.state.currentIndex === 0)
            return;

        this.setState(prevState => ({
            currentIndex: prevState.currentIndex - 1,
            translateValue: prevState.translateValue + (this.slideWidth())
        }))
    }

    goToNextSlide = () => {
        if (this.state.currentIndex === this.state.images.length - 2) {
            return this.setState({
                currentIndex: 0,
                translateValue: 0
            })
        }
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex + 1,
            translateValue: prevState.translateValue + -(this.slideWidth())
        }));
    }

    slideWidth = () => {
        return (document.querySelector('.slide').clientWidth +20)
    }

    render() {

        return (
            <div style={{ position: 'relative', zIndex: '2'}} className="scroll-container">
                
                <Wrap >
<div style={{marginLeft: '-400px'}}>
                    <div
                        style={{
                            display: 'flex',
                            transform: `translateX(${this.state.translateValue}px)`,
                            transition: 'transform ease-out 0.45s',
                            padding: '0px',
                            margin: '0px',

                        }} id="item">
                        {this.state.images.map((data, key) => (
                            <WhatImage
                                key={key}
                                src={data.src}
                                visible={data.visible}
                            />
                        ))}
                    </div>
</div>
                </Wrap>

                <LeftArrow goToPrevSlide={this.goToPrevSlide} />
                <RightArrow goToNextSlide={this.goToNextSlide} />
            </div>
        )
    }
}

