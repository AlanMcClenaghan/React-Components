import React from 'react';
import PropTypes from 'prop-types';

/* Destructuring assignment used to unpack values from arrays
or properties from objects into distinct variables.
Developers often use destructuring in React to make components 
cleaner, more concise, and easier to understand. 
Used in components that accept props */

/* We can also specify the properties we want to pull out of the props object in the function's parameters. */
const Counter = ({ index, score, changeScore }) => {

  // Removed as it is now handled by the destructuring assignment
  // let index = props.index;

  return (
    <div className="counter">
      <button className="counter-action decrement"
        onClick={() => changeScore(index, -1)}> - </button>
      <span className="counter-score">{score}</span>
      <button className="counter-action increment"
        onClick={() => changeScore(index, 1)}> + </button>
    </div>
  );

}

Counter.protoTypes = {
  index: PropTypes.number,
  score: PropTypes.number,
  changeScore: PropTypes.func
}

export default Counter;