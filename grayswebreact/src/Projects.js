import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
        <h2> Graham's Haunted Piano (Javascript, HTML, CSS) </h2>
        <iframe className="piano" src="https://grahamshauntedpiano.surge.sh/"></iframe>
        <h2> Mission-ctrl  (MongoDB, Express, React.js, Node.js) </h2>
        <iframe className="mission-ctrl" src="https://mission-ctrl.surge.sh/"></iframe>
        <h2> Honda The Other Side Remake (Javascript, HTML, CSS) </h2>
        <iframe className="honda" src="http://honda-theotherside.surge.sh/" scrolling="no"></iframe>
        <h2> Cant Touch This  (Javascript, HTML, CSS) </h2>
        <iframe className="ctt-frame" src="http://canttouchthis.surge.sh/" ></iframe>
        
      </div>
    )
  }
}
