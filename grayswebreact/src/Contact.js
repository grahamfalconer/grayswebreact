import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <div>
        <h1> Where to find me? </h1>
        <div className="contact-holder">
          <img className="link" src={process.env.PUBLIC_URL + '/images/githublogo.png'}></img><h1>Github</h1>
        </div>
        <div className="blank-line"></div>
        <div className="contact-holder">
          <img className="link" src={process.env.PUBLIC_URL + '/images/linkedin.png'}></img><h1>LinkedIn</h1>
        </div>
        <div className="blank-line"></div>
        <div className="contact-holder">
          <img className="link" src={process.env.PUBLIC_URL + '/images/email.png'}></img><h1>Email</h1>
        </div>
        <div className="blank-line"></div>
        <div className="contact-holder">
          <img className="link" src={process.env.PUBLIC_URL + '/images/phone.png'}></img><h1>Phone</h1>
        </div>
        <div className="blank-line"></div>
        
      </div>
    )
  }
}

