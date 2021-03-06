import React, { Component } from 'react'

export default class Contact extends Component {
  render() {

    return (
      <div>
        <div className="contact-holder">
          <img alt="" className="link" src={process.env.PUBLIC_URL + '/images/githublogo.png'}></img><a href="https://github.com/grahamfalconer"><h1>Github</h1></a>
        </div>
        <div className="blank-line"></div>
        <div className="contact-holder">
          <img alt="" className="link" src={process.env.PUBLIC_URL + '/images/linkedin.png'}></img><a href="https://www.linkedin.com/in/graham-falconer-696b0716b/"><h1>LinkedIn</h1></a>
        </div>
        <div className="blank-line"></div>
        <div className="contact-holder">
          <address><img alt="" className="link" src={process.env.PUBLIC_URL + '/images/email.png'}></img> <a href="mailto:grahamfalconer@icloud.com"> <h1 >Email</h1> </a> </address>
        </div>
        <div className="blank-line"></div>
        <div className="contact-holder">
        <a href="tel:+44796477988"><img alt="" className="link" src={process.env.PUBLIC_URL + '/images/phone.png'}></img><h1>07796477988</h1></a>
        </div>
        <div className="blank-line"></div>
        
      </div>
    )
  }
}
