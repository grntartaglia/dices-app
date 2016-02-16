import React from 'react';
import D from 'cappu-dice';
import Dice from './Dice.jsx';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, World!</h1>
        <Dice dice={new D(4)} />
      </div>
    );
  }
}
