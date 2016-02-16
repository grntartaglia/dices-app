import React from 'react';
import D from 'cappu-dice';
import Dice from './Dice.jsx';
import DiceViewer from './DiceViewer.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentDice: null,
      dices: [
        new D(6),
        new D(8),
        new D(10),
        new D(12),
        new D(20),
      ],
    };

    this._selectDice = this._selectDice.bind(this);
  }

  _selectDice(dice) {
    return () => {
      this.setState({ currentDice: dice });
    };
  }

  render() {
    let diceViewer = '';

    if (this.state.currentDice) {
      diceViewer = <DiceViewer dice={this.state.currentDice} />;
    }

    return (
      <div>
        <h1>Dices</h1>
        <div>
          {this.state.dices.map((d, i) => {
            const selected = this.state.currentDice === d;
            return <Dice dice={d} key={i} onClick={this._selectDice(d)} selected={selected} />;
          })}
        </div>
        {diceViewer}
      </div>
    );
  }
}
