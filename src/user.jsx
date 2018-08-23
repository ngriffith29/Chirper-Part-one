import React, { Component } from 'react';
import Timeline from "./Timeline"
let chirps = [{User: 'John', Chirp: 'Hello world'}]

class User extends Component {
    constructor(props) {
        super(props)
        this.state = {
            User: '',
            Chirp: ''
        }
    }
    renderTimeline = () => {
        return (<Timeline newChirp={chirps[0]} />)
    }
    buttonClick = () => {
        chirps.push(this.state)

    }

    handleUserChange = (event) => {
        this.setState({ User: event.target.value })
    }
    handleChirpChange = (event) => {
        this.setState({Chirp: event.target.value})
    }

    render() {
       console.log(chirps)
        return (
            <div>
                <input className="justify-content-center" id="name" placeholder="Type your name here" value={this.state.User} onChange={(event) => this.handleUserChange(event)} />

                <div class="form-group">
                    <textarea placeholder="Type Your Chirp Here" class="form-control" id="exampleFormControlTextarea1" rows="2" value={this.state.Chirp} onChange={(event) => this.handleChirpChange(event)} />
                </div>

                <button onClick={this.buttonClick}>Push your chirp to the world</button>
             {this.renderTimeline()}
            

            </div>
        )
    }


}

export default User; 