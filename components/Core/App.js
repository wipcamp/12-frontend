import React, { Component, Fragment } from 'react'
import Wrapper from './index'
import Countdown, { zeroPad } from 'react-countdown';
import ComingSoon from './ComingSoon';

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  return (
    <Fragment>
      {
        completed ?
          <Wrapper /> 
          : <ComingSoon day={zeroPad(days)} hr={zeroPad(hours)} min={zeroPad(minutes)} sec={zeroPad(seconds)} />
      }
    </Fragment>
  )
};

export default class App extends Component {
  render() {
    return (
      <Fragment>
        {/* <Countdown date='2020-02-19T18:00:00' renderer={renderer} /> */}
        {/* <Countdown date={Date.now()+5000} renderer={renderer} /> */}
        <ComingSoon />
      </Fragment>
    )
  }
}
