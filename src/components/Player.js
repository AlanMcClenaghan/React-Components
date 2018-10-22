import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';
import Icon from './Icon';

// Optimize Performance with PureComponent
class Player extends PureComponent {

  static PropTypes = {
    changeScore: PropTypes.func,
    removePlayer: PropTypes.func,
    name: PropTypes.string,
    score: PropTypes.number,
    id: PropTypes.number,
    index: PropTypes.number,
    isHighScore: PropTypes.bool
  }

  render() {

    /* To destructure from this.props, 
    use a variable assignment in the render method */

    const {
      name,
      id,
      score,
      index,
      removePlayer,
      changeScore
    } = this.props;

    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
          <Icon isHighScore={this.props.isHighScore} />
          {name}
        </span>

        <Counter
          score={score}
          index={index}
          changeScore={changeScore}
        />
      </div>
    );
  }
}

export default Player;