import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux'

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurantId={this.props.restaurant}/>
        <Reviews restaurantId={this.props.restaurant} reviews={this.props.reviews} deleteReview={this.props.deleteReview}/>
      </div>
    )
  }
}

<<<<<<< HEAD
const mapStateToProps = state => ({
  reviews: state.reviews
});

const mapDispatchToProps = dispatch => ({
  addReview: review => dispatch({ type: "ADD_REVIEW", review }),
  deleteReview: id => dispatch({ type: "DELETE_REVIEW", id: id })
=======
const mapStateToProps = ({ reviews }) => ({ reviews })

const mapDispatchToProps = dispatch => ({
  addReview: text => dispatch({ type: "ADD_REVIEW", text })
  deleteReview: id => dispatch({ type: "DELETE_REVIEWS", id })
>>>>>>> fe57a190f21ba148553f5312ea1c66b86ea142b9
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
