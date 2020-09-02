import React, { Component } from 'react'

export default class Navbar extends Component {
  constructor(props){
    super(props);
    this.state = {
      nothingSelected: true,
      CVselected: false,
      contactSelected: false,
      projectsSelected: false,
    }

  }
  render() {
    return (
      <div>
          <div class="logo-holder">
            <h1> Graham Falconer </h1>
          </div>

          <div class="container">
            <a onClick> CV </a>  <a id="contact"> Contact </a>   <a> Projects </a>
          </div>
      </div>
    )
  }
}
