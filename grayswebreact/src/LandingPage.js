import React, { Component } from 'react'
import './LandingPage.css';
import Logo from './logo'


export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <p class="tagline"> Welcome to my portfolio... I am currently jobseeking and any assistance is appreciated! </p>
        <Logo/>
        <div class="bottom-bar">
          <p> View my <a href="https://github.com/grahamfalconer">Github</a></p>
        </div>
        
      </div>
    )
  }
}
