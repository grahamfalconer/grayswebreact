import React, { Component } from 'react'
import CVcomponent from './CVcomponent'
import Projects from './Projects'
import Contact from './Contact'
import LandingPage from './LandingPage'
import graham from './graham.png'
import software from './software.png'

export default class Graysweb extends Component {
  constructor(props){
    super(props);
    this.state = {
      showing: 'landingPage',
      logoImage: [graham, true]
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
  swapName = () => {
    this.state.logoImage[1] ? this.setState({ logoImage: [software, false] }) : this.setState({ logoImage: [graham, true] })
  }
  componentDidMount = () => {
    setInterval(() => {
      this.swapName();
    }, 2500);
  }

  render() { 
    let navbar = <div className="navbar">
                    <div class="logo-holder">
                      <img id="navbar-image" src={this.state.logoImage[0]} onClick={this.goToHome} className="logo"></img>
                    </div>
                    <div class="container">
                      <a onClick={this.goToProjects}> Projects </a>  <a onClick={this.goToCV} > CV </a>  <a onClick={this.goToContact} id="contact"> Contact </a>   
                    </div>
                </div>

// component 'routes'
      if(this.state.showing === 'landingPage') {
    return (
      <div>
        {this.startSayingHello}
        {navbar}
        <div>
          <LandingPage/>
        </div>
        </div>
        )
    }
    
    else if(this.state.showing === 'CV') {
      return (
        <div>
          {navbar}
          <div>
            <CVcomponent/>
          </div>
        </div>
        )
    }

    else if(this.state.showing === 'contact'){
      return (
        <div>
          {navbar}
          <div>
            <Contact/>
          </div>
        </div>
        )
    }

    else if(this.state.showing === 'projects'){
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
