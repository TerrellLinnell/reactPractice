### React Challenge: Car Enthusiasts

In this challenge you will work in React to build out a UI close to the following:

![Solution](http://i61.photobucket.com/albums/h79/bigskycodeacademy/unspecified-2_zpsfwld29dm.png "Logo Title Text 1")

----

Make sure you understand the data inside `/src/data/cars` and what is actually being exported.


----

The main component being rendered is App. App will render two Car Lists. One list will render all cars, the next section will render a filtered list of cars.

To meet the requirements, the filter (brand), can be hard coded in.

__Bonus__ points if you can get the list to filter dynamically based on car brands.

----
You will start with a blank slate.

The way you architect the application is up to you, but here is a recommended layout

- App
  - Header
  - CarsList (unfiltered data)
    - CarPanel (styled div container for each car)
  - CarList (filtered data)
    - CarPanel

----

The UI implementation does not have to be the same. The demo completion uses flex box to layout the cars. You can lay out the cars any way you desire.
