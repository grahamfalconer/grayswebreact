import React, { Component } from 'react'

export default class CVcomponent extends Component {

  
  render() {

    return (
      <div>
        <iframe className="cv-frame" src={process.env.PUBLIC_URL + '/CV.pdf'}></iframe>


      </div>
    )
  }
}
