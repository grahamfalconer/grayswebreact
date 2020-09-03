import React, { Component } from 'react'

export default class CVcomponent extends Component {
  constructor(){
    super();
    this.state = {

    }
  }

  
  render() {
    let showCvButton = <a id="cv-button"> Show CV </a>
    let downloadCvButton = <a id="downloadCvButton"> Download CV </a>

    return (
      <div>
        <iframe className="cv-frame" src={process.env.PUBLIC_URL + '/CV.pdf'}></iframe>
      </div>
    )
  }
}
