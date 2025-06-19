## Section 8

This is a continuation from Section 6 and 7 for the reading list app.

## Steps to run
1) Open two terminals
2) Run: npm run server in one terminal
3) Run: npm start in the other

## App Overview
This app displays a reading list of books for a user. Each book in the
reading list contains a title and image associated with it, along with 
icon options for editing and deleting a book. Now has a local database
for persisting a users list of books on their reading list. Makes API 
calls to the DB to get this persistent list of books. Introduces an alternative
to the props system by utilizing the context system. The context system allows
us to no longer have to pass props down from the App Component to every single 
other component like we did in section 6.

## Component Hiearchy
        BooksContext
             |
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