import React, { Component } from 'react';

class AddPlayerForm extends Component {

  state = {
    value: ''
  }

  handleValueChange = (e) => {
    this.setState({ value: e.target.value });
  }

  // Add player form component accept a callback function via a prop.
  // This function will be called inside an event handler, and
  // will pass a new player name up to the app component when the form submits.

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addPlayer(this.state.value);
    this.setState({ value: '' })
  }

  render() {
    console.log(this.state.value)
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleValueChange}
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