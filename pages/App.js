import React, { Component } from 'react';
import Flippy, { FrontSide, BackSide } from './../lib';
import styled from 'styled-components'
import './App.css';

const Card = styled.div`
  scroll-snap-align: center;

  @media (min-width: 1024px) {
    scroll-snap-align: start;
  }
`

const FlippyStyle = {
  width: '290px',
  height: '540px',
  textAlign: 'center',
  color: '#FFF',
  fontFamily: 'sans-serif',
  fontSize: '30px',
  justifyContent: 'center',
  padding: '0px',
  margin: '0px 14px'
}


const DefaultCardContents = ({ children , srcFront = props.srcFront , srcBack = props.srcBack }) => (
  <React.Fragment>
    <FrontSide
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '0px'
      }}
    >
      <img
        src={srcFront}
        style={{ maxWidth: '100%', maxHeight: '100%' }}
      />
      
    </FrontSide>
    <BackSide
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: '0px'
      }}> 
      <img
        src={srcFront}
        style={{ maxWidth: '100%', maxHeight: '100%' }}
      />
    </BackSide>
  </React.Fragment>);

const FlippyOnHover = ({ flipDirection = 'vertical' }) => (
  <Flippy
    flipOnHover={true}
    flipDirection={flipDirection}
    style={FlippyStyle}
  >
    <DefaultCardContents >
    I flip {flipDirection}ly kb on hover
    </DefaultCardContents>
  </Flippy>
);

const FlippyOnClick = ({ flipDirection = 'vertical', srcFront = props.srcFront , srcBack = props.srcBack}) => (
  <Flippy
    flipOnClick={true}
    flipDirection={flipDirection}
    style={FlippyStyle}
  >
    <DefaultCardContents srcFront={srcFront} srcBack={srcBack}>
    I flip {flipDirection}ly on click {srcFront}
    </DefaultCardContents>
  </Flippy>
);

const ControlledFlippy = ({ isFlipped })  => (
  <Flippy
    flipDirection="vertical"
    isFlipped={isFlipped}
    style={FlippyStyle}
  >
    <DefaultCardContents>
      I flip vertically for every 3sec. I am controlling by a upper scope.
    </DefaultCardContents>
  </Flippy>
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false,
    };

    setInterval(() => {
      this.setState({
        isFlipped: !this.state.isFlipped
      });
    }, 3000);
  }
  render() {
    return (
      <Card className="App slide">
          <FlippyOnClick flipDirection="horizontal" srcFront={this.props.srcFront} srcBack={this.props.srcBack}/>
      
        </Card>
    );
  }
}

export default App;
