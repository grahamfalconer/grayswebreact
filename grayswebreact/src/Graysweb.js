import React, { Component } from 'react'
import Navbar from './Navbar'
import CVcomponent from './CVcomponent'
import Projects from './Projects'
import { Document, Page } from 'react-pdf';



export default class Graysweb extends Component {
  constructor(props){
    super(props);
    this.defaultState = {
      showingCV: false,
      showingContact: false,
      showingProjects: false,
    }
    this.state = {
      showingCV: false,
      showingContact: false,
      showingProjects: false,
    }
  }
  goToCV = () => {
    this.setState(this.defaultState)
    this.setState({
      showingCV: true,
    })
    console.log(this.state)
  }
  goToContact = () => {
    this.setState(this.defaultState)
    this.setState({
      showingContact: true,
    })
    console.log(this.state)
  }
  goToProjects = () => {
    this.setState(this.defaultState)
    this.setState({
      showingProjects: true,
    })
    console.log(this.state)
  }

  render() { // nothing showing
      if(!this.state.showingCV && !this.state.showingContact && !this.state.showingProjects){
    return (
      <div>
          <div className="navbar">
              <div class="logo-holder">
                <h1> Graham Falconer </h1>
              </div>
              <div class="container">
                <a onClick={this.goToCV} > CV </a>  <a onClick={this.goToContact} id="contact"> Contact </a>   <a onClick={this.goToProjects}> Projects </a>
              </div>
          </div>

          <div>
            <h1> Landing Page </h1>
          </div>
        
      </div>
        )
    }
    //       CV showing
    else if(this.state.showingCV && !this.state.showingContact && !this.state.showingProjects){
      return (
        <div>
          <div className="navbar">
              <div class="logo-holder">
                <h1> Graham Falconer </h1>
              </div>
              <div class="container">
                <a onClick={this.goToCV} > CV </a>  <a onClick={this.goToContact} id="contact"> Contact </a>   <a onClick={this.goToProjects}> Projects </a>
              </div>
          </div>

          <div>
            
          <CVcomponent/>

          </div>
        
        </div>
        )
    }
      //                             contact details showing
    else if(!this.state.showingCV && this.state.showingContact && !this.state.showingProjects){
      return (
        <div>
          <div className="navbar">
              <div class="logo-holder">
                <h1> Graham Falconer </h1>
              </div>
              <div class="container">
                <a onClick={this.goToCV} > CV </a>  <a onClick={this.goToContact} id="contact"> Contact </a>   <a onClick={this.goToProjects}> Projects </a>
              </div>
          </div>
                    
          <div>
            <h1> Showing Contact info </h1>
          </div>
        
        </div>
        )
    }
    //                                                              projects showing
    else if(!this.state.showingCV && !this.state.showingContact && this.state.showingProjects){
      return (
        <div>
          <div className="navbar">
              <div class="logo-holder">
                <h1> Graham Falconer </h1>
              </div>
              <div class="container">
                <a onClick={this.goToCV} > CV </a>  <a onClick={this.goToContact} id="contact"> Contact </a>   <a onClick={this.goToProjects}> Projects </a>
              </div>
          </div>

          <div>
            <Projects/>
          </div>

        </div>
        )
    }
  }
}
