import React, { Component } from 'react'
import './LandingPage.css';
import Logo from './logo'


export default class LandingPage extends Component {
  constructor(){
    super();
    this.state = {
      overlayShowing: true,
    }
  }

  render() {

    return (
      <div>
        <p class="tagline"> Welcome to my portfolio... I am currently jobseeking and any assistance is appreciated! </p>
        <Logo/>
        
      </div>
    )
  }
}