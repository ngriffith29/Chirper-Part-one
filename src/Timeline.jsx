import React, { Component } from 'react';


class Timeline extends Component {
        constructor(props){
            super(props)
        }
    render() {
        console.log(this.props.newChirp)
        return (
            <div>
                <div className="card">
                    <div className="card-header">
                        <h3 className="text-center">Username</h3>
                    </div>
                    <div className="card-body">
                        <p className="card-text text-center">With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Timeline;