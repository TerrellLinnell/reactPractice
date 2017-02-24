import React from 'react';

var CarPanel = React.createClass({
  render: function(){
    return (
      <div className="car-panel">
        <h3> {this.props.car.brand} </h3>
        <p> {this.props.car.model} </p>
        <p> {this.props.car.price} </p>
        <img src={this.props.car.img} className="car-img"/>
      </div>
    )
  }
});

export default CarPanel;
