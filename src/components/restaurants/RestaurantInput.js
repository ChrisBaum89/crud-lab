import React, { Component } from 'react';

class RestaurantInput extends Component {
  state = {
    id: "",
    text: ""
  }


  render() {
    return (
      <div>
        <hr></hr>
        <h1>New Restaurant</h1>
        <hr></hr>
        <form onSubmit={this.handleOnSubmit}>
          <label>Restaurant Name:  </label>
          <input
            type='text'
            name='text'
            value={this.state.text}
            onChange={this.handleOnChange}
          />
          <input
            type='submit'
          />
        </form>
        <hr></hr>
      </div>
    );
  }

handleOnChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

handleOnSubmit = (event) => {
    event.preventDefault()
    this.props.addRestaurant(this.state)
    this.setState({
      id: "",
      text: "",
    })
  }

  
};

export default RestaurantInput;
