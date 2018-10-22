import React, { Component } from 'react';

class AddPlayerForm extends Component {

  // state = {
  //   value: ''
  // }

  // Refs and the DOM
  playerInput = React.createRef();

  // handleValueChange = (e) => {
  //   this.setState({ value: e.target.value });
  // }

  // Add player form component accept a callback function via a prop.
  // This function will be called inside an event handler, and
  // will pass a new player name up to the app component when the form submits.

  handleSubmit = (e) => {
    const {
      addPlayer
    } = this.props;

    e.preventDefault();
    addPlayer(this.playerInput.current.value);
    // this.setState({ value: '' })
    e.currentTarget.reset();
  }

  render() {
    // console.log(this.state.value)
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          ref={this.playerInput}
          // value={this.state.value}
          // onChange={this.handleValueChange}
          placeholder="Enter a player's name"
        />
        <input
          type="submit"
          value="Add Player"
        />
      </form>
    );
  }
}

export default AddPlayerForm;