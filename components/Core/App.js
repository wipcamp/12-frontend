import React, { Component, Fragment } from 'react'
import Wrapper from './index'
import Countdown,{zeroPad} from 'react-countdown';
import CommingSoon from './CommingSoon';


const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a complete state
      return <Wrapper />;
    } else {
      // Render a countdown
      return (
            <CommingSoon>
                {zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}
            </CommingSoon>
      );
    }
  };
  

export default class App extends Component {
    render() {
        return (
            <Fragment>
                <Countdown date={Date.now()+100000} renderer={renderer} />
            </Fragment>
        )
    }
}
