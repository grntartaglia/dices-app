import React from 'react';
import D from 'cappu-dice';
import Dice from './Dice.jsx';
import DiceViewer from './DiceViewer.jsx';

export default class App extends React.Component {
  render() {
    const D4 = new D(4);

    return (
      <div>
        <h1>Hello, World!</h1>
        <Dice dice={D4} />
        <DiceViewer dice={D4} />
      </div>
    );
  }
}
