import React, { Component } from 'react'
import logo from './logo.svg';

export default class Logo extends Component {
  constructor(props){
    super(props);
    this.state = {
      showing: false,
    }
  }

  render() {
    return (
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        
      </div>
    )
  }
}
