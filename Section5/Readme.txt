# App Overview
Similar to google image search. Has a search bar that makes an api 
request to a third-party server to render images.

4 Components
1) App Component (Parent)
2) Search Bar Component
3) ImageList Component - responsible for showing a list of images
4) ImageShow Component - responsible for showing 1 image

api.js
- Makes an asynchronous api call to unsplash.com to spit back a list
  of images based on a users query to the search bar