## Section 6

## App Overview
This app displays a reading list of books for a user. Each book in the
reading list contains a title and image associated with it, along with 
icon options for editing and deleting a book

## Component Hiearchy
            
            App
             |
   ---------- ---------------
   |                         |
BookCreate                BookList
                             |
                    ---------------------
                    |                   |
                BookShow             BookShow
                    |                   |
                BookEdit             BookEdit

## Component Responsibilities
1) App - main component of the app
2) BookCreate - responsible for creating a new book and adding it 
                to the 'books' array/list piece of state
3) BookList - responsible for maintaing the 'books' array/list piece of state
4) BookShow - responsible for displaying the 'books' array/list 
5) BookEdit - responsible for allowing a user to edit the title of a book