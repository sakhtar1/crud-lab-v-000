import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
<<<<<<< HEAD
    const renderReviews = this.props.reviews.filter(review => (
       review.restaurantId === this.props.restaurantId
     )).map(review => (
       <Review
         key={review.id}
         review={review}
         deleteReview={this.props.deleteReview}
       />
   ));
=======
    const { reviews, restaurantId, deleteReview } = this.props
    	const filterReview = reviews.filter(review => review.restaurantId === restaurantId)
    	const renderReviews = filterReview.map(review => {
    		return <Review key={review.id} review={review} deleteReview={deleteReview} />
    	})
>>>>>>> fe57a190f21ba148553f5312ea1c66b86ea142b9
    return (
      <ul>
        {renderReviews}
      </ul>
    );
  }
};

export default Reviews;
