import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'

import { connect } from 'react-redux'

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant}/>
        <Restaurants />
      </div>
    )
  }
}

const mapStateToProps = ({ restaurants }) => ({ restaurants })

const mapDispatchToProps = dispatch => ({
<<<<<<< HEAD
  addRestaurant: text => dispatch({ type: "ADD_RESTAURANT", text: text })
=======
  addRestaurant: text => dispatch({ type: "ADD_RESTAURANT", text })
>>>>>>> fe57a190f21ba148553f5312ea1c66b86ea142b9
})

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer)
