import React, { Component } from 'react';
import Flippy, { FrontSide, BackSide } from '../Track/CardTrackCom';
import styled from 'styled-components'
import './FlippyCSS.css';

const BackCard = styled.div`
  background-image: url(${props => props.bg});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  position: relative;
`

const StyledCardHeader = styled.h4`
  font-size: 1.5em;
  font-family: 'ChakraPetch-Regular';
  color: white;

`

const Content = styled.div`
  font-family: 'ChakraPetch-Regular';
  font-size: 11px;
  color: white;
  padding: 10%;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 20px;
  }

  @media (min-width: 1024px) {
    font-size: 14px;
  }

  @media (min-width: 1280px) {
    font-size: 16px;
  }
`

const FlippyStyle = {
  width: '170px',
  height: 'auto',
  padding: '0px',
  margin: '0px 0px 0px 0px',
  
}

const FlippyStyle3 = {
  width: '361.55px',
  height: 'auto',
  padding: '0px',
  margin: '0px 0px 3vh 0px',
  
}

const Header = (props) => {
  return(
    <StyledCardHeader>
      {props.header}
    </StyledCardHeader>
  )
}


const DefaultCardContents = ({ srcFront = props.srcFront , content = props.content, bg = props.bg, header = props.header}) => (
  <React.Fragment>
    <FrontSide
      style={{
        // display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
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
        // display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: '0px'
      }}>
        <BackCard bg={bg}>
          <Content>
            <Header header={header} />
            
            {content}
          </Content>
      </BackCard>
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

const FlippyOnClick = ({ flipDirection = 'vertical', srcFront = props.srcFront , bg = props.bg, content = props.content, header = props.header}) => (
  <Flippy
    flipOnClick={true}
    flipDirection={flipDirection}
    style={FlippyStyle3}
  >
    <DefaultCardContents srcFront={srcFront} bg={bg} content={content} header={header}>
    I flip {flipDirection}ly on click {srcFront}
    </DefaultCardContents>
  </Flippy>
);

export const FlippyOnClickInCarousel = ({ flipDirection = 'vertical', srcFront = props.srcFront , bg = props.bg, content = props.content, header = props.header}) => (
  <Flippy
    flipOnClick={true}
    flipDirection={flipDirection}
    style={FlippyStyle}
  >
    <DefaultCardContents srcFront={srcFront} bg={bg} content={content} header={header}>
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

class Flippycardnaja extends Component {
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
      
          <FlippyOnClick flipDirection="horizontal" 
            srcFront={this.props.srcFront} 
            content={this.props.content} 
            bg={this.props.bg} 
            header = {this.props.header}
          />
          
    );
  }
}

export default Flippycardnaja;
