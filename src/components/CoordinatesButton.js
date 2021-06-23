// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export class CoordinatesButton extends Component {
  handleClick = (event) => {
   // console.log(event.clientX, event.clientY);
    let newArray = [event.clientX, event.clientY];
    this.props.onReceiveCoordinates(newArray);
      
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
         coord
        </button>
      </div>
    );
  }
}

export default CoordinatesButton
