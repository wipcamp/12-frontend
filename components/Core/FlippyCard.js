import React, { Component } from 'react';
import Flippy, { FrontSide, BackSide } from '../../lib';
import styled from 'styled-components'
import './FlippyCSS.css';

const Card = styled.div`
  scroll-snap-align: start;

`



const FlippyStyle = {
  width: '170px',
  height: '293px',
  padding: '0px',
  margin: '0px 14px 0px 0px',
  
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
        style={{ maxWidth: '100%', maxHeight: '100%' ,padding: '0px'}}
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
        style={{ maxWidth: '100%', maxHeight: '100%' ,padding: '0px'}}
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
