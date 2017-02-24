import React from 'react';
import DATA from './data/cars';
import CarsList from './CarsList';

var App = React.createClass({
  getInitialState: function(){
    return {
      cars: DATA.cars,
      categories: DATA.categories
    }
  },
  render: function(){
    var filteredCars = this.state.cars.filter(function(c){
      return c.brand === "porsche";
    });
    return(
      <div>
        <div className="jumbotron">
          <h2>Car Enthusiasts Club</h2>
        </div>
        <div className="jumbotron">
          <h3>All My Cars</h3>
          <CarsList cars={this.state.cars} />
        </div>
        <div className="jumbotron">
          <h3>Cars Filtered</h3>
          <CarsList cars={filteredCars} />
        </div>
      </div>
    )
  }
});

export default App;
