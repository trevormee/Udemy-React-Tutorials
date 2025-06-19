## Section 3: Building with Reusable Components

This is a simple React project that displays profile cards 
for personal data assistants (Alexa, Cortana, Siri).
Each card contains an image (note that the images do not line up
with the PDAs) and content about each PDA: title, handle, and desc.
This project uses bulma.io for its CSS styling.

# Application Structure
1) App.js contains the main App Component for the app. It uses the
   ProfileCard component three times (Alexa, Cortana, Siri)

2) ProfileCard.js contains the reusable profile card component. It 
   defines the structure of each profile card. First, there is an 
   image for each PDA. Second, there is a content section that contains
   the title, handle and description of each PDA.