import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer';

class Restaurant extends Component {


  render() {
    const { restaurant } = this.props;
    return (
      <div>
        <li key={this.props.key}>
          {restaurant.text}
          <button restaurantid={restaurant.id} onClick={() => this.props.deleteRestaurant(restaurant.id)}> X </button>
          <ReviewsContainer restaurant={restaurant}/>
        </li>
      </div>
    );
  }
};

export default Restaurant;
