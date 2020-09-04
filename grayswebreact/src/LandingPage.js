import React, { Component } from 'react'
import './LandingPage.css';
import Logo from './logo'


export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <p class="tagline"> If this massive spinning translucent grey React logo hasn't impressed you... feel free to move on. </p>
        <Logo/>
        
      </div>
    )
  }
}
