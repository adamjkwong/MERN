import React, { Component } from 'react';

class PersonCard extends Component{
    constructor(props) {
        super(props);

        this.state = {
            agePlus: this.props.age,
        };
    }
    render(){
        return(
            <div class="center-it">
                <h1>{this.props.lastName}, {this.props.firstName}</h1>
                <p>
                    Age: {this.state.agePlus}
                </p>
                <p>
                    Hair Color: {this.props.hairColor}
                </p>
                <button onClick={()=> this.setState({ agePlus: this.state.agePlus +1 })}>
                    Birthday Button for {this.props.firstName} {this.props.lastName}
                </button>
            </div>
        )
    }
}


export default PersonCard