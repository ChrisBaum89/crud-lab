import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
      const renderReviews = this.props.reviews.map(review => <Review review={review}/>)
      return (
      <ul>
        {renderReviews}
      </ul>
    );
  }
};

export default Reviews;