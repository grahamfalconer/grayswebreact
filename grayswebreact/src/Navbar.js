import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <div>
          <div class="logo-holder">
            <h1> Graham Falconer </h1>
          </div>

          <div class="container">
            <a> CV </a>  <a id="contact"> Contact </a>   <a> Projects </a>
          </div>
      </div>
    )
  }
}
