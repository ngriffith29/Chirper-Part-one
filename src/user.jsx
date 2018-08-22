import React, { Component } from 'react';
let users = []

class User extends Component {
    state = {
        users: [

        ]
    };
    buttonClick = () => {

        document.getElementById('name').value
    }

    render() {
        return (
            <div>
                <input className="justify-content-center" id="name" placeholder="Type your name here"></input>

                <div class="form-group">
                    <textarea placeholder="Type Your Chirp Here" class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
                </div>

                <button onClick={this.buttonClick}>Post your chirp</button>


            </div>
        )
    }


}

export default User; 