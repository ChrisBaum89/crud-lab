import React, { Component } from 'react';

class ReviewInput extends Component {
  state = {
    text: "",
    id: "",
    restaurantId: ""
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input 
          type="textbox" 
          name="text" 
          onChange={this.handleOnChange}
          value={this.state.text}></input>
          <input type="submit"></input>
        </form>
      </div>
    );
  }

  handleOnChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleOnSubmit = (event) => {
    event.preventDefault()
    this.state.restaurantId = this.props.restaurantId
    this.props.addReview(this.state)
    this.setState({
      text: "",
      restaurantId: ""
    })

  }
};

export default ReviewInput;
