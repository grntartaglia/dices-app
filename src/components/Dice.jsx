import React from 'react';
import D from 'cappu-dice';

export default class Dice extends React.Component {
  static get propTypes() {
    return {
      dice: React.PropTypes.instanceOf(D).isRequired,
      onClick: React.PropTypes.func,
    };
  }

  render() {
    const dice = this.props.dice;
    let mod = '';

    if (dice.getModsSum()) {
      let sum = dice.getModsSum();

      if (sum > 0) {
        sum = `+${sum}`;
      }

      mod = <small>{sum}</small>;
    }

    return (
      <div className="dice" onClick={this.props.onClick}>
        <h3>D{dice.sides}{mod}</h3>
      </div>
    );
  }
}
