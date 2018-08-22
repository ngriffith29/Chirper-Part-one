import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap'

class Banner extends Component {
    render() {
        return (

            <div class="jumbotron bg-danger">
                <h1 class="text-center">Welcome To chirper</h1>
                <p class="text-center text-white">(It's like twitter but without Politicians)</p>
            </div>
        )
    }


}

export default Banner; 