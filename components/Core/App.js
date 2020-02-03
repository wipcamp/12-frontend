import React, { Component, Fragment } from 'react'
import Wrapper from './index'
import Countdown,{zeroPad} from 'react-countdown';
import CommingSoon from './CommingSoon';

const renderer = ({days ,hours, minutes, seconds, completed }) => {
    if (completed) {
      return <Wrapper />;
    } else {
      return (
            <CommingSoon day={zeroPad(days)} hr={zeroPad(hours)} min={zeroPad(minutes)} sec={zeroPad(seconds)} >
            </CommingSoon>
      );
    }
  };

export default class App extends Component {
    render() {
        return (
            <Fragment>
                <Countdown date='2020-02-05T00:00:00' renderer={renderer} />
                {/* <Countdown date={Date.now()+10000} renderer={renderer} /> */}
            </Fragment>
        )
    }
}
