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
  
render(){
    return(
        <div>
            <input id="name" placeholder="Type your name here"></input>
            <br/>
            <input id='chirp'placeholder="Type your chirp here"></input>
            <br/>
            <button onClick={this.buttonClick}>Post your chirp</button>

        </div>
    )
}

    
}

export default User; 