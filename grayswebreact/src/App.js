import React, { Component } from 'react';
import './App.css';
import Graysweb from './components/Graysweb'


export default class App extends Component {

  constructor(){
    super()
    this.state = {
      overlayShowing: true,
    }
  }

  removeOverlay = () => {
    this.state.overlayShowing ? this.setState({ overlayShowing: false }) : this.setState({ overlayShowing: false })
  }

  render() {
    if(this.state.overlayShowing){
      return (
        <div className="App">
          <Graysweb/>
          <div className="bottom-bar">
            <p> View my <a href="https://github.com/grahamfalconer">Github</a> <button onClick={this.removeOverlay} className="close">X</button> </p>

          </div>
          
        </div>
      )
    } else {
      return (
        <div className="App">
          <Graysweb/>
        </div>
      )
    }

  }
}
