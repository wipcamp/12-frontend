import React, { Component, Fragment } from 'react'
import Wrapper from './index'
import Countdown,{zeroPad} from 'react-countdown';
import ComingSoon from './ComingSoon';

const renderer = ({days ,hours, minutes, seconds, completed }) => {
    if (completed) {
      return <Wrapper />;
    } else {
      return (
            <ComingSoon day={zeroPad(days)} hr={zeroPad(hours)} min={zeroPad(minutes)} sec={zeroPad(seconds)} >
            </ComingSoon>
      );
    }
  };

export default class App extends Component {
    render() {
        return (
            <Fragment>
                {/* <Countdown date='2020-02-12T00:00:00' renderer={renderer} /> */}
                <Countdown date={Date.now()+5000} renderer={renderer} />
            </Fragment>
        )
    }
}
