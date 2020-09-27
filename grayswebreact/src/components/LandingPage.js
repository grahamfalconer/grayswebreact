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
        <p class="tagline"> I am passionate and motivated Junior Developer and graduate of <a href="https://makers.tech/"> Makers Academy </a> coding bootcamp. I am up to date with all modern coding practices including T.D.D, B.D.D and Object Oriented Programming. Furthermore I also am used to working in an Agile environment and have training in empathy, mindfulness and following Extreme Programming principles. I am currently looking for a team of like-minded and enthusiastic developers so that I may further consolidate these skills in a professional environment. Currently based in London, UK. </p>
        <Logo/>
        
      </div>
    )
  }
}
