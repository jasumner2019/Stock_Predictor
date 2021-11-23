import Header from "./components/Header"
import Form from "./components/Form"
import Disclaimer from "./components/Disclaimer"
import Ad from "./components/Ad"
import Graph from "./components/Graph"
import React, { Component, useState } from 'react'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      imgsrc: "",
      imgalt: "",
      timewindow: "test"
    }
  }

  handleFormSubmit = (event) => {
    console.log("parent form submit ", event.target.timewindow.value)
    this.setState({timewindow: event.target.timewindow.value})
    event.preventDefault()
  }

  render() {
    return (
      <div>
        <div>
          <div>
            <Ad />
          </div>
          <div className="container">
            <Header/>
            <Form handleFormSubmit={this.handleFormSubmit}/>
            <Disclaimer />
          </div>
          <div>
            <Ad />
          </div>
          <div>
            <Graph timewindow={this.state.timewindow}/>
          </div>
        </div>  
      </div>    
    );
  }
}

export default App;


//Things I need help with:
//Having Ads appear on the right and left of the screen, and making them disappear when viewed on smaller screens
//Making the correct Graph appear when the "Submit" button has been pressed. Also, should refresh the ads.