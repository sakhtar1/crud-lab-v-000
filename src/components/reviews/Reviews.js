import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const renderReviews = this.props.reviews.filter(review => (
       review.restaurantId === this.props.restaurantId
     )).map(review => (
       <Review
         key={review.id}
         review={review}
         deleteReview={this.props.deleteReview}
       />
   ));
    return (
      <ul>
        {renderReviews}
      </ul>
    );
  }
};

export default Reviews;
