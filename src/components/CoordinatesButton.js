import React from 'react'

export default class CoordinatesButton extends React.Component {
  onDelayedClick = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY]);
    // console.log([event.clientX, event.clientY]);
  }

  render(){
    return(
      <button onClick={this.onDelayedClick} >coordinates button</button>
    );
  };

}
