import React, { Component } from 'react'

export default class Wippo extends Component {
    constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
      console.log('Click happened');
    }
    render() {
      return <button onClick={this.handleClick}>Click Me</button>;
    }
  }
  