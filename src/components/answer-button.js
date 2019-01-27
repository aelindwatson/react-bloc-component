import React, { Component } from 'react';

class AnswerButton extends Component {
  handleClick = () => console.log('button clicked');
  render() {
    return <div>{this.props.name}
    <button onClick={this.handleClick.bind(this)}></button>
    </div>;
  }
}

export default AnswerButton;
