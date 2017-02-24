import React from 'react';
import CarPanel from './CarPanel';

var CarsList = React.createClass({
  render: function(){
    var carsList = this.props.cars.map(function(c){
      return <CarPanel car={c}/>
    })
    return (
      <div className="car-list-container">
        { carsList }
      </div>
    )
  }
});

export default CarsList;
