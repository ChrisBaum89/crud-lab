import React, { Component } from 'react';
import { deleteRestaurant } from '../../actions/restaurants';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {
    const renderRestaurants = this.props.restaurants.map(
      restaurant => <Restaurant key ={restaurant.id} restaurant={restaurant} deleteRestaurant={this.props.deleteRestaurant}/>)
    
    return(
      <ul>
        {renderRestaurants}
      </ul>
    );
  }
};

export default Restaurants;