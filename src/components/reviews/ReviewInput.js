import React, { Component } from 'react';


class ReviewInput extends Component {
<<<<<<< HEAD
  state = {
  		text: ''
  	}
   	handleChange = (event) => {
  		this.setState({
  			text: event.target.value
  		});
  	};
   	handleSubmit = (event) => {
  		event.preventDefault();
  		this.props.addReview({ text: this.state.text, restaurantId: this.props.restaurantId });
  		this.setState({
  			text: ''
  		});
  	};
  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <label>Review</label>
        <input type="text" onChange={this.handleChange} value={this.state.text}/>
=======
  state= { text: ''};

  handleSubmit(event) {
    event.preventDefault();
    this.props.addReview({ text: this.state.text, restaurantId: this.props.restaurantId });
    this.setState({
      text:'',
    })
  }

  handleChange(event) {
    this.setState({
      text: event.target.value,
    })
  }
  render() {
    return (
      <div>
      <form onSubmit={(event) => this.handleSubmit(event)}>
        <label>Review</label>
        <input type="text" onChange={(event) => this.handleChange(event)} value={this.state.text}/>
>>>>>>> fe57a190f21ba148553f5312ea1c66b86ea142b9
        <input type="submit" />
     </form>
      </div>
    );
  }
};
export default ReviewInput;
