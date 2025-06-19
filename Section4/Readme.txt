Section 4 State: How to Change Your App

This section of the tutorial introduced the Event System and State System.

# Basic Project Description
This project takes a random animal and displays the random animal to 
the screen with a mini heart image next to the animal. The user can 
continously click on the animal and watch the heart grow in size.

1) App.js contains the main App component 
   - It defines the 'animals' piece of state, an event handler for 
     generating and adding reandom animals to the animals array, maps
     over the animals array and calls the animal show component to displays
     an image of an animal on the screen.

2) AnimalShow.js contains the AnimalShow component.
   -  Imports images from the svg directory and maps these images to an 
      object.
   - Defines a 'clicks' piece of state (like an integer) and an event handler
     to track the number of times a user clicks on an animal.
   - Returns images of the animals with a small heart to begin. The heart grows
     in size as the # of clicks by a user increases
