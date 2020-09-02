import React, { Component } from 'react'
import Navbar from './Navbar'

export default class Graysweb extends Component {
  constructor(props){
    super(props);
    this.state = {
      showingCV: false,
      showingContact: false,
      showingProjects: false,
    }
  }

  render() { // nothing showing
      if(!this.state.showingCV && !this.state.showingContact && !this.state.showingProjects){
    return (
      <div>
        <Navbar/>
        
      </div>
        )
    }
    //       CV showing
    else if(this.state.showingCV && !this.state.showingContact && !this.state.showingProjects){
      return (
        <div>
          <Navbar/>
          
        </div>
        )
    }
      //                             contact details showing
    else if(!this.state.showingCV && this.state.showingContact && !this.state.showingProjects){
      return (
        <div>
          <Navbar/>
          
        </div>
        )
    }
    //                                                              projects showing
    else if(!this.state.showingCV && !this.state.showingContact && this.state.showingProjects){
      return (
        <div>
          <Navbar/>
          
        </div>
        )
    }

  }
}
