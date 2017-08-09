import React, { Component } from 'react';
import { TileStyle } from '../styles/Game';

class Question extends Component {
  render() {
    return (
      <TileStyle question={true}>
        {this.props.question.value}
      </TileStyle>
    );
  }
}

export default Question;