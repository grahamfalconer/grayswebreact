import React, { Component } from 'react'

export default class CVcomponent extends Component {
  constructor(){
    super();
    this.state = {
      showingPDF: false,
    }
  }
  toggleShowCv = () => {
    this.state.showingPDF ? this.setState({ showingPDF: false }) : this.setState({ showingPDF: true })
  }

  
  render() {
    let downloadCvButton = <a href={process.env.PUBLIC_URL + '/CV.pdf'} download id="downloadCvButton"> Download CV </a>

    if(!this.state.showingPDF){
      return (
        <div>
          <a onClick={this.toggleShowCv} id="cv-button"> Show CV </a> {downloadCvButton}
        </div>
      )
    }
    else {
      return (
        <div>
          <div>
          <a onClick={this.toggleShowCv} id="cv-button"> Hide CV </a>  {downloadCvButton}
          </div>
          <div>
            <iframe className="cv-frame" src={process.env.PUBLIC_URL + '/CV.pdf'}></iframe>
          </div>
        </div>
      )
    }
  }
}
