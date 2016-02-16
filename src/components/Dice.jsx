import React from 'react';
import D from 'cappu-dice';

export default class Dice extends React.Component {
  static get propTypes() {
    return {
      dice: React.PropTypes.instanceOf(D).isRequired,
      onClick: React.PropTypes.func,
      selected: React.PropTypes.bool,
    };
  }

  render() {
    let className = 'dice';

    if (this.props.selected) {
      className += ' dice-selected';
    }

    return (
      <div className={className} onClick={this.props.onClick}>
        <h3>D{this.props.dice.sides}</h3>
      </div>
    );
  }
}
