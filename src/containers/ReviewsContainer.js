import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';
import {addReview} from '../actions/reviews'
import {connect} from "react-redux"

class ReviewsContainer extends Component {


  render() {
    const filterReviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurant.id)

    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurantId={this.props.restaurant.id}/>
        <Reviews reviews={filterReviews}/>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, {addReview})(ReviewsContainer);
