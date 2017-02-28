import React from 'react';
import DATA from './data/cars';






var CarPanel = function (props) {
  return (
    <div className='car-container'>
       <h4> {props.brand} </h4>
       <p> {props.model} </p>
       <p> {props.price} </p>
       <img className='car-img' src={props.img} />
    </div>
  )
}


var CarList = React.createClass({
  render: function () {

    var list = this.props.carData.map(function (item) {
      return (
        <CarPanel brand={item.brand} model={item.model}
         price={item.price} img={item.img} />
      )
    })
  return (
    <div className='car-flex-container'>
      { list }
    </div>
  )
}
})

var fords = DATA.cars.filter(function (item) {
  return item.brand === 'ford'
});

var App = React.createClass({
  getInitialState: function () {
    return (
      {
      brand: 'ford'
      }
    )
  },
  showCategoryButtons: function () {
    var self = this;
    return DATA.categories.map(function (item) {
      return <button onClick={function () { self.setState({ brand: item }) } } className='btn btn-warning my-btn'> { item } </button>
    })
  },
  filterCars: function () {
    var self = this;
    return DATA.cars.filter(function (item) {
      return item.brand === self.state.brand
    });
  },
  render: function(){
    console.log(DATA);
    var car = DATA.cars[0];
    return(
      <div>
        <div className="jumbotron">
          <h2>Car Enthusiasts Club</h2>
        </div>
        <div className="jumbotron">
          <h3>All My Cars</h3>
          <CarList carData={DATA.cars}/>
        </div>
        <div className="jumbotron">
          <h3>Cars Filtered</h3>
          <div className='btn-flex-container'>
            { this.showCategoryButtons() }
          </div>
          <CarList carData={ this.filterCars() }/>
        </div>
      </div>
    )
  }
});

export default App;
