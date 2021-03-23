import React, { Component } from "react";
import Profile from './Component/profile/Profile';
import './App.css';
class App extends Component {
  state = {
    show: false,
  }
  handleClick = () =>{
    this.setState({show: !this.state.show})
    }
  render(){
    return (
      <div className="App">
        {this.state.show? <Profile /> : null}
        { <button className="btn" onClick={this.handleClick}>{this.state.show ? "Hide Profile" : "Show Profile"}</button> }
      </div>
    );
  }
}

export default App;
