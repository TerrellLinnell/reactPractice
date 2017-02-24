function Car(brand, model, price, img){
  this.brand = brand;
  this.model = model;
  this.price = price;
  this.img = img;
}

var c1 = new Car("honda", "civic", "$14,999", "http://o.aolcdn.com/commerce/autodata/images/CAC70HOC021B121001.jpg");
var c2 = new Car("porsche", "911", "$33,000", "http://media.caranddriver.com/images/media/51/04-porsche-911-r-843-photo-667954-s-original.jpg");
var c3 = new Car("porsche", "panamera", "$43,400", "http://media.caranddriver.com/images/media/331369/2018-porsche-panamera-executive-hire-the-chauffeur-photo-672543-s-450x274.jpg");
var c4 = new Car("honda", "accord", "$19,500", "http://o.aolcdn.com/commerce/autodata/images/USC50TOC021B021001.jpg");
var c5 = new Car("honda", "crv", "$45,000", "http://static.usnews.rankingsandreviews.com/images/Auto/izmo/i313627/2016_honda_cr_v_angularfront.jpg")
var c6 = new Car("porsche", "cayenne", "$89,000", "http://blog.caranddriver.com/wp-content/uploads/2013/12/2014-Porsche-Cayenne-Platinum-Edition-placement-626x382.jpg");
var c7 = new Car("ford", "mustang", "$44,534", "http://o.aolcdn.com/commerce/autodata/images/USC50FOC051B021001.jpg");
var c8 = new Car("ford", "raptor", "$64,500", "http://www.ford.com/resources/ford/general/microsites/f150raptor/img/wells/raptor_cm_roadrage_2.jpg");
var c9 = new Car("ford", "focus", "$27,490", "http://st.motortrend.com/uploads/sites/10/2016/12/2017-Ford-Focus-Titanium-front-three-quarter.jpg");
var c10 = new Car("ford", "fiesta", "43", "https://upload.wikimedia.org/wikipedia/commons/9/9a/Fordfiesta.jpg");


export default { cars: [c1, c2, c3, c4, c5, c6, c7], categories: ["honda", "porsche", "ford"]}
