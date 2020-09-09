import React, { Component } from 'react';
import bankTechTest from './bank_tech_test.png';
import gapagBook from './gapagbook.png';
import missionCtrl from './mission-ctrl.png';
import honda from './hondaotherside.png'
import piano from './grahmpiano.png'



export default class Projects extends Component {
  constructor(){
    super()
    
  }
  render() {
    return (
      <div>
        <div class="mission-holder">
            <h2> Mission-ctrl  (MongoDB, Express, React.js, Node.js) </h2>
            <img className="project-image" src={missionCtrl}></img>
            <p> A game built to help developers learn VScode shortcuts </p>
            <p>  Enter the shortcuts on your keyboard as they come up on the screen to earn points  </p>
            <p>  Submit your score at the end to our leaderboard  </p>
            <div class="blank-line"> </div>
            <p> Github repo available <a href="https://github.com/grahamfalconer/mission-ctrl">here</a> </p>
            <p> Live version hosted <a href="http://mission-ctrl.surge.sh/">here</a> </p>
        </div>
        <div class="blank-line"></div>
        <div class="mission-holder">
            <h2> Bank Tech Test (Ruby) </h2>
            <img className="project-image" src={bankTechTest}></img>
            <p>  A recreation of a Bank Account with features such as withdraw, deposit and balance.</p>
            <p>  Instructions on how to use it can be found at the projects README on github </p>
            <div class="blank-line"> </div>
            <p> Github repo available <a href="https://github.com/grahamfalconer/Bank_tech_task"> here </a> </p>
        </div>
        <div class="mission-holder">
            <h2> Gapagbook (Ruby on Rails, PostgreSQL, Bulma) </h2>
            <img className="project-image" src={gapagBook}></img>
            <p> A recreation of facebook completed with user signups, logins, posts, comments etc ...  </p>
            <div class="blank-line"> </div>
            <p> Github repo available <a href="https://github.com/grahamfalconer/acebook-rails-template"> here </a> </p>
            <p> Live version hosted <a href="https://gapag1.herokuapp.com/">here</a> </p>
        </div>
        <div class="blank-line"></div>
        <div class="mission-holder">
            <h2> Honda The Other Side Remake (Javascript, HTML, CSS) </h2>
            <img className="project-image" src={honda}></img>
            <p> In this project I recreated the custom video player from the 2015 Honda Civic R 'other side' commercial </p>
            <p> You can test the video player by pressing play and clicking the button in the bottom right (or tapping r on your keyboard) </p>
            <div class="blank-line"> </div>
            <p> Github repo available <a href="https://github.com/grahamfalconer/hondaR-otherside"> Here </a> </p>
            <p> Live version hosted <a href="http://honda-theotherside.surge.sh/">here</a> </p>
        </div>
        <div class="mission-holder">
            <h2> Graham's Haunted Piano (Javascript, HTML, CSS) </h2>
            <img className="project-image" src={piano}></img>
            <p>  A Piano that you can play on your keyboard  </p>
            <p>  use keys -> asdfghjkl;'\enter   </p>
            <p> Don't feel like playing? let the piano do the work for you by pressing on one of the greatest hits</p>
            <div class="blank-line"> </div>
            <p> Github repo available <a href="https://github.com/grahamfalconer/Haunted-Piano"> here </a></p>
            <p> Live version hosted <a href="https://grahamshauntedpiano.surge.sh/">here</a> </p>
        </div>
        <div class="blank-line"></div>
        <div class="mission-holder">
          <h2> My Portfolio (React.js, CSS) </h2>
          <iframe className="ctt-frame" src="http://grahamfalconer.surge.sh/"></iframe>
          <p>   Weird seeing this project live loaded on itself, right ? It gave me Interstellar vibes </p>
          <p>   This project allows you to download and view a PDF of my CV, view my side projects as well as gives you the option to contact me  </p>
          <div class="blank-line"> </div>
          <p> Github repo available <a href="https://github.com/grahamfalconer/grayswebreact"> here </a></p>
          <p> You are currently on the live version </p>
        </div>

      </div>
    )
  }
}
