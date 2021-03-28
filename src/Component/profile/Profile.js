import React, { Component } from "react";
import './profile.css'

class Profile extends Component {
    constructor() {
        super()
        this.state = {
            fullName: "Mohame Ali Amor",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
            profession: "Full Stack Developer",
            imgSrc: "images/profilePic.jpg",
            show: false,
            // counter: 0,
            date : new Date(0),
        }
        // this.handleClick = () =>{
        // this.setState({show: !this.state.show})
        // }


    }
    // tick() {
    //     this.setState({
    //       date: new Date()
    //     });
    //   }
    // componentDidMount() {
    //     this.timerID = setInterval(
    //         () => this.setState({ counter: this.state.counter + 1 }), 1000)
    // }

    componentDidMount() {
        this.timerID = setInterval(
          () => this.setState({
            date: new Date(0)
          }),
          1000
        );
      }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }


    render() {
        return (
            <div className="outer-container">
                {/* {this.state.show? */}
                <div className="container">
                    <div className="profil-pic">
                        <img src={this.state.imgSrc} alt="" />
                    </div>
                    <div className="name">
                        <h1>{this.state.fullName} </h1>
                        <h3>{this.state.profession}</h3>
                        <p>{this.state.bio}</p>
                    </div>
                </div>
                {/* : null
            } */}
                {/* <button className="btn" onClick={this.handleClick}>{this.state.show ? "Hide Profile" : "Show Profile"}</button> */}
                <h2>{this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}

export default Profile