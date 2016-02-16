import React from 'react';
import D from 'cappu-dice';

export default class DiceViewer extends React.Component {
  static get propTypes() {
    return {
      dice: React.PropTypes.instanceOf(D).isRequired,
    };
  }

  constructor(props) {
    super(props);

    this.state = {
      times: 5,
      results: [],
      tmpMods: '',
      mods: props.dice.mods,
    };

    this._go = this._go.bind(this);
    this._handleMods = this._handleMods.bind(this);
    this._handleTmpMods = this._handleTmpMods.bind(this);
    this._handleTimes = this._handleTimes.bind(this);
    this._eraseTimes = this._eraseTimes.bind(this);
  }

  componentWillReceiveProps(props) {
    this.state.tmpMods = props.dice.tmpMods.map(v => v.val);
    this.state.mods = props.dice.mods;
    this.setState({ results: [] });
  }

  _getResults() {
    if (!this.state.results.length) {
      return false;
    }

    return (
      <div>
        <h4>Resultados:</h4>
        <ol className="dice-viewer-results">
          {this.state.results.map((res, i) => <li key={i}>{res}</li>)}
        </ol>
      </div>
    );
  }

  _go() {
    let results = this.props.dice.roll(this.state.times);

    if (this.state.times === 1) {
      results = [results];
    }

    this.setState({ results, tmpMods: '' });
  }

  _handleMods(e) {
    this.props.dice.resetMods();

    const values = e.target.value.split(',').map(v => v.trim());
    values.forEach(v => {
      if (!!v.trim()) {
        this.props.dice.addMod(parseInt(v, 10));
      }
    });

    this.setState({ mods: values });
  }

  _handleTmpMods(e) {
    const values = e.target.value.split(',').map(v => v.trim());
    values.forEach(v => {
      if (!!v.trim()) {
        this.props.dice.addTmpMod(parseInt(v, 10), parseInt(this.state.times, 10));
      }
    });

    this.setState({ tmpMods: values });
  }

  _handleTimes(e) {
    let value = e.target.value;

    if (isNaN(value)) {
      value = 1;
    }

    this.setState({ times: value });
  }

  _eraseTimes() {
    this.setState({ times: '' });
  }

  render() {
    const dice = this.props.dice;

    return (
      <div className="dice-viewer">
        <div className="dice-viewer-side">
          <h2 className="dice-viwer-name">D{dice.sides}</h2>
          {this._getResults()}
        </div>

        <div className="dice-viewer-main">
          <div>
            <label>
              Modificadores:
              <input
                type="text"
                name="dice-mods"
                value={this.state.mods}
                placeholder="Nenhum"
                onChange={this._handleMods}
              />
            </label>
          </div>

          <div>
            <label>
              Modificadores temporários:
              <input
                type="text"
                name="dice-tmp-mods"
                value={this.state.tmpMods}
                placeholder="Nenhum"
                onChange={this._handleTmpMods}
              />
            </label>
          </div>

          <hr />

          <div>
            <label>
              Rolar
              <input
                type="text"
                name="dice-times"
                value={this.state.times}
                onChange={this._handleTimes}
                onClick={this._eraseTimes}
              />
            </label>

            <input type="button" id="dice-go" onClick={this._go} value="Go!" />
          </div>
        </div>
      </div>
    );
  }
}
