import React from 'react';

var App = React.createClass({
  render: function(){
    return(
      <div>
        <div className="jumbotron">
          <h2>Car Enthusiasts Club</h2>
        </div>
        <div className="jumbotron">
          <h3>All My Cars</h3>
        </div>
        <div className="jumbotron">
          <h3>Cars Filtered</h3>
        </div>
      </div>
    )
  }
});

export default App;
