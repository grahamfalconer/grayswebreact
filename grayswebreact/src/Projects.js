import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
        <div class="mission-holder">
            <h2> Mission-ctrl  (MongoDB, Express, React.js, Node.js) </h2>
            <iframe className="mission-ctrl" src="https://mission-ctrl.surge.sh/"></iframe>
            <p> • A game built with JS event listeners to help developers learn VScode shortcuts </p>
            <p> • Enter the shortcuts as they come up on the screen to earn points  </p>
            <p> • Submit your score at the end to our leaderboard  </p>
            <div class="blank-line"> </div>
            <p> Github repo available <a>here</a> </p>
        </div>
        <div class="project-holder">
            <h2> Cant Touch This  (Javascript, HTML, CSS) </h2>
            <iframe className="ctt-frame" src="http://canttouchthis.surge.sh/" ></iframe>
            <p> • McHammer was right when he said "you can't touch this"</p>
            <p> • Just press play and see how many times you can tap on McHammer in one minute! </p>
            <div class="blank-line"> </div>
            <p> Github repo available <a> here </a> </p>
        </div>
        <div class="project-holder">
            <h2> Honda The Other Side Remake (Javascript, HTML, CSS) </h2>
            <iframe className="honda" src="http://honda-theotherside.surge.sh/" scrolling="no"></iframe>
            <p> • In this project I recreated the custom video player from the 2015 Honda Civic R 'other side' commercial </p>
            <p> • You can test the video player by pressing play and clicking the button in the bottom right (or tapping r on your keyboard) </p>
            <div class="blank-line"> </div>
            <p> Github repo available <a> Here </a> </p>
        </div>
        <div class="project-holder">
            <h2> Graham's Haunted Piano (Javascript, HTML, CSS) </h2>
            <iframe className="piano" src="https://grahamshauntedpiano.surge.sh/"></iframe>
            <p> • A Piano that you can play on your keyboard using keys -> asdfghjkl;'\enter </p>
            <p> • Don't feel like playing? let the piano do the work for you by pressing on one of the greatest hits</p>
            <div class="blank-line"> </div>
            <p> Github repo available <a> here </a></p>
        </div>
        <div class="project-holder">
          <h2> My Portfolio (React.js, CSS) </h2>
          <iframe className="ctt-frame" src="http://grahamfalconer.surge.sh/"></iframe>
          <p> • Weird that you are reading a description for this seeing as you are on it, but oh well... </p>
          <p> • This project allows you to download and view a PDF of my CV, view my side projects as well as gives you the option to contact me  </p>
          <div class="blank-line"> </div>
          <p> Github repo available <a> here </a></p>
        </div>

      </div>
    )
  }
}
