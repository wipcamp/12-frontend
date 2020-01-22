import React, { Component } from 'react'
import styled from 'styled-components'
import Flippycardnaja from '../Core/FlippyCard'


const Wrap = styled.div`
  overflow-x: scroll;
  
  -webkit-overflow-scrolling: touch;
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
  
  align-items: center;
  justify-content: center;
  background: black;
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
                { srcFront:"img/backcard.png", srcBack:"img/backcard.png" },
                { srcFront:"img/backcard.png", srcBack:"img/backcard.png" },
                { srcFront:"img/backcard.png", srcBack:"img/backcard.png" },
                { srcFront:"img/backcard.png", srcBack:"img/backcard.png" },
                { srcFront:"img/backcard.png", srcBack:"img/backcard.png" },
                { srcFront:"img/backcard.png", srcBack:"img/backcard.png" },
                { srcFront:"img/backcard.png", srcBack:"img/backcard.png" },
                { srcFront:"img/backcard.png", srcBack:"img/backcard.png" },
                { srcFront:"img/backcard.png", srcBack:"img/backcard.png" },
                { srcFront:"img/backcard.png", srcBack:"img/backcard.png" }

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
        if (this.state.currentIndex === this.state.cards.length - 1) {
            return this.setState({
                currentIndex: 0,
                translateValue: 0
            })
        }
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex + 1,
            translateValue: prevState.translateValue + -(this.slideWidth()+28)
        }));
    }

    slideWidth = () => {
        return document.querySelector('.slide').clientWidth
    }

    render() {

        return (
            <div style={{ position: 'relative', zIndex: '2', marginTop: '36px'}} className="scroll-container">
                <div style={{marginLeft: '-105px'}}>
                <Wrap >

                    <div
                        style={{
                            display: 'flex',
                            transform: `translateX(${this.state.translateValue}px)`,
                            transition: 'transform ease-out 0.45s',
                            padding: '0px',
                            margin: '0px'
                        }} id="item">
                        {this.state.cards.map((data, key) => (
                            <Flippycardnaja 
                                key={key}
                                srcFront={data.srcFront}
                                srcBack={data.srcBack}
                            />
                        ))}
                    </div>
                    
                </Wrap>
                </div>
                <LeftArrow goToPrevSlide={this.goToPrevSlide} />
                <RightArrow goToNextSlide={this.goToNextSlide} />
            </div>
        )
    }
}

// const SideScroll = () => {


//     // $(document).ready(function() {
//     //     var items = $(".item");
//     //     var scrollContainer = $(".scroll-container");

//     //     function fetchItem(container,item, isNext) {
//     //         var i, scrollLeft = container.scrollLeft();
//     //         if (isNext === undefined) {
//     //             isNext = true;
//     //         }
//     //         if (isNext && container[0].scrollWidth - container.scrollLeft() <= container.outerWidth()) {
//     //             return $(item[0]);
//     //         }
//     //         for (i = 0; i < items.length; i++) {
//     //             if (isNext && $(items[i]).position().left > 0) {
//     //                 return $(items[i]);
//     //             } else if (!isNext && $(items[i]).position().left >= 0) {
//     //                 return i == 0 ? $(items[items.length - 1]) : $(items[i-1]);
//     //             }
//     //         }
//     //         return null;
//     //     }

//     //     function moveToItem(event) {
//     //         var isNext = event.data.direction == "next";
//     //         var item = isNext ? fetchItem(scrollContainer, items, true) : fetchItem(scrollContainer, items, false);

//     //         if (item) {
//     //             scrollContainer.animate({"scrollLeft": item.position().left + scrollContainer.scrollLeft()}, 400);
//     //         }
//     //     }

//     //     $(".arrow-left").click({direction: "prev"}, moveToItem);
//     //     $(".arrow-right").click({direction: "next"}, moveToItem);
//     // })
//     const goNext = () => {

//         var container = document.getElementById('scroll-container');
//         sideScroll(container,'right',25,100,10);

//     }

//     const goPrev = () => {
//         var back = document.getElementById('arrow-left');
//         back.onclick = function () {
//         var container = document.getElementById('scroll-container');
//         sideScroll(container,'left',25,100,10);
//         };
//     }

//     function sideScroll(element,direction,speed,distance,step){
//         scrollAmount = 0;
//         var slideTimer = setInterval(function(){
//             if(direction == 'left'){
//                 element.scrollLeft -= step;
//             } else {
//                 element.scrollLeft += step;
//             }
//             scrollAmount += step;
//             if(scrollAmount >= distance){
//                 window.clearInterval(slideTimer);
//             }
//         }, speed);
//     }

//     return (
//         <div style={{ position: 'relative', zIndex: '2' , marginTop: '36px'}} className="scroll-container">

//             <Wrap >

//                 <div style={{ display: 'flex' }} id="item">
//                     <div style={{scrollSnapAlign: 'start'}}>
//                         <App srcFront="/backcard.png" srcBack="/backcard.png" />
//                     </div>
//                     <div style={{scrollSnapAlign: 'end'}}>
//                         <App srcFront="/backcard.png" srcBack="/backcard.png" />
//                     </div>
//                     <div style={{scrollSnapAlign: 'end'}}>
//                         <App srcFront="/backcard.png" srcBack="/backcard.png" />
//                     </div>
//                     <div style={{scrollSnapAlign: 'end'}}>
//                         <App srcFront="/backcard.png" srcBack="/backcard.png" />
//                     </div>
//                     <div style={{scrollSnapAlign: 'end'}}>
//                         <App srcFront="/backcard.png" srcBack="/backcard.png" />
//                     </div>
//                     <div style={{scrollSnapAlign: 'end'}}>
//                         <App srcFront="/backcard.png" srcBack="/backcard.png" />
//                     </div>
//                     <div style={{scrollSnapAlign: 'end'}}>
//                         <App srcFront="/backcard.png" srcBack="/backcard.png" />
//                     </div>
//                     <div style={{scrollSnapAlign: 'end'}}>
//                         <App srcFront="/backcard.png" srcBack="/backcard.png" />
//                     </div>
//                     <div style={{scrollSnapAlign: 'end'}}>
//                         <App srcFront="/backcard.png" srcBack="/backcard.png" />
//                     </div>
//                     <div style={{scrollSnapAlign: 'end'}}>
//                         <App srcFront="/backcard.png" srcBack="/backcard.png" />
//                     </div>
//                     <div style={{scrollSnapAlign: 'end'}}>
//                         <App srcFront="/backcard.png" srcBack="/backcard.png" />
//                     </div>
//                     <div style={{scrollSnapAlign: 'end'}}>
//                         <App srcFront="/backcard.png" srcBack="/backcard.png" />
//                     </div>

//                 </div>

//             </Wrap>
//             <LeftArrow id="arrow-left" onClick={() => {goPrev();}}/>
//             <RightArrow  id="arrow-right" onClick={() => {goNext();}} />
//         </div>
//     )
// }

// export default SideScroll;
