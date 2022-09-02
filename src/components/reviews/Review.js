import React, { Component } from 'react';
import {connect} from 'react-redux'
import {deleteReview} from '../../actions/reviews'

class Review extends Component {

  render() {
    const { review } = this.props;
    return (
      <div>
        <li key={this.props.review.id}>
          {review.text}
        </li>
        <button id={this.props.review.id} onClick={this.props.deleteReview}> X </button>
      </div>
    );
  }

};

export default connect(null, {deleteReview})(Review);
