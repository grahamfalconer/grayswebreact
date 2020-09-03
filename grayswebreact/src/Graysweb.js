import React, { Component } from 'react'
import Navbar from './Navbar'
import CVcomponent from './CVcomponent'
import Projects from './Projects'
import Contact from './Contact'
import { Document, Page } from 'react-pdf';
import LandingPage from './LandingPage'



export default class Graysweb extends Component {
  constructor(props){
    super(props);
    this.state = {
      showing: 'landingPage'
    }
  }

  goToCV = () => {
    this.setState({ showing: 'CV' })
  }

  goToContact = () => {
    this.setState({ showing: 'contact' })
  }

  goToProjects = () => {
    this.setState({ showing: 'projects' })
  }

  goToHome = () => {
    this.setState({ showing: 'landingPage' })
  }

  render() { 
    let navbar = <div className="navbar">
                    <div class="logo-holder">
                      <h1 onClick={this.goToHome} className="logo"> Software Developer </h1>
                    </div>
                    <div class="container">
                      <a onClick={this.goToCV} > CV </a>  <a onClick={this.goToContact} id="contact"> Contact </a>   <a onClick={this.goToProjects}> Projects </a>
                    </div>
                </div>

// component 'routes'
      if(this.state.showing == 'landingPage') {
    return (
      <div>
        {navbar}
        <div>
          <LandingPage/>
        </div>
        </div>
        )
    }
    else if(this.state.showing == 'CV') {
      return (
        <div>
          {navbar}
          <div>
            <CVcomponent/>
          </div>
        </div>
        )
    }
    else if(this.state.showing == 'contact'){
      return (
        <div>
          {navbar}
          <div>
            <Contact/>
          </div>
        </div>
        )
    }
    else if(this.state.showing == 'projects'){
      return (
        <div>
          {navbar}
          <div>
            <Projects/>
          </div>
        </div>
        )
    } 
  }
}
