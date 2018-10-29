import React, { Component } from 'react';
import Restaurant from './Restaurant'
<<<<<<< HEAD
import { connect } from 'react-redux'
=======
>>>>>>> fe57a190f21ba148553f5312ea1c66b86ea142b9

class Restaurants extends Component {

  renderRestaurant = () => this.props.restaurants.map((restaurant, id) => <Restaurant deleteRestaurant={this.props.deleteRestaurant} key={restaurant.id} restaurant={restaurant} />)

  render() {
    return(
      <ul>
        {this.renderRestaurant()}
      </ul>
    );
  }
};

const mapStateToProps = ({ restaurants }) => ({ restaurants })
const mapDispatchToProps = dispatch => ({
<<<<<<< HEAD
  deleteRestaurant: id => dispatch({ type: "DELETE_RESTAURANT", id: id })
=======
  deleteRestaurant: id => dispatch({ type: "DELETE_RESTAURANT", id })
>>>>>>> fe57a190f21ba148553f5312ea1c66b86ea142b9
})

export default connect(mapStateToProps, mapDispatchToProps)(Restaurants)
