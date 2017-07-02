import React from 'react'

export default class DelayedButton extends React.Component {
  delayedClick = (event) => {
    event.persist();
    setTimeout(() => {this.props.onDelayedClick(event)}, this.props.delay);
    // console.log(this.props.delay);
  }
  render(){
    return(
      <button onClick={this.delayedClick} >delayed click button</button>
    );
  };

  // handleClick (e){
  //   console.log('The event currentTarget is', e.currentTarget); // DOM element
  //   debugger;
  //   setTimeout(() => {
  //     console.log('event.currentTarget was', e.currentTarget); // null
  //     }, 1000)
  //   }
  //   debugger;
  //
  //   render () {
  //     return <button onClick={this.handleClick}>Fire event!</button>
  //   }
}
