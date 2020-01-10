import React, { Component, Fragment } from 'react'
import { FaqsCard } from '../Core/Card'
import styled from 'styled-components'
import App from '../../pages/App'

const Wrap = styled.div`
  overflow-x: scroll;
    width: 100%;
    position: relative;
    z-index: 1;
    scroll-snap-type: x mandatory;
    ::-webkit-scrollbar {
         width: 0px;
    }
`

const ArrowButton = styled.div`
    height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: black;
  border-radius: 50%;
  cursor: pointer;
  color: white;
  

  
`
const prev = {
    position: 'absolute',
    top: '50%',
    left: '25px',
    zIndex: '3'
}

const next = {
    position: 'absolute',
    top: '50%',
    right: '25px',
    zIndex: '3'
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
            &gt;
      </ArrowButton>
    );
}



export default class SideScroll extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [
                { srcFront: "", srcBack: "", visible: "hidden" },
                { srcFront: "/temp.jpg", srcBack: "/temp2.jpg" },
                { srcFront: "/temp.jpg", srcBack: "/temp2.jpg" },
                { srcFront: "/temp.jpg", srcBack: "/temp2.jpg" },
                { srcFront: "/temp.jpg", srcBack: "/temp2.jpg" },
                { srcFront: "/temp.jpg", srcBack: "/temp2.jpg" },
                { srcFront: "/temp.jpg", srcBack: "/temp2.jpg" },
                { srcFront: "/temp.jpg", srcBack: "/temp2.jpg" },
                { srcFront: "/temp.jpg", srcBack: "/temp2.jpg" }

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
        if (this.state.currentIndex === this.state.cards.length - 4) {
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
        return document.querySelector('.slide').clientWidth
    }

    render() {

        return (
            <div style={{position: 'relative', zIndex: '2'}}>

                <Wrap >

                    <div style={{
                        transform: `translateX(${this.state.translateValue}px)`,
                        transition: 'transform ease-out 0.45s',
                        display: 'flex',
                        
                        
                        scrollSnapAlign: 'center;'
                    }}>
                        {/* {this.state.cards.map((data, key) => (
                            <FaqsCard
                                key={key}
                                srcFront={data.srcFront}
                                srcBack={data.srcBack}
                                visible={data.visible}

                            />
                        ))} */}
                        <App srcFront ="/backcard.png" srcBack ="/backcard.png" />
                        <App srcFront ="/backcard.png" srcBack ="/backcard.png" />
                        <App srcFront ="/backcard.png" srcBack ="/backcard.png" />
                        <App srcFront ="/backcard.png" srcBack ="/backcard.png" />
                        <App srcFront ="/backcard.png" srcBack ="/backcard.png" />
                        <App srcFront ="/backcard.png" srcBack ="/backcard.png" />
                        <App srcFront ="/backcard.png" srcBack ="/backcard.png" />
                        <App srcFront ="/backcard.png" srcBack ="/backcard.png" />
                        <App srcFront ="/backcard.png" srcBack ="/backcard.png" />
                        <App srcFront ="/backcard.png" srcBack ="/backcard.png" />
                        <App srcFront ="/backcard.png" srcBack ="/backcard.png" />>
                    </div>
                    
                </Wrap>
                <LeftArrow goToPrevSlide={this.goToPrevSlide} />
                <RightArrow goToNextSlide={this.goToNextSlide} />
            </div>
        )
    }
}

