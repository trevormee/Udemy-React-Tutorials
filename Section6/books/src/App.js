import {useState} from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList'

function App() {
    
    // Create a piece of state 'books' and init. as an empty array
    const [books, setBooks] = useState([]);

    // Event Handler for adding a new book
    const createBook = (title) => {
        const updatedBooks = [
            ...books,       // take in the current array of books
            {id: Math.round(Math.random() * 9999), // generate a random id for each book
            title: title}   // add the new books title to the 'books' array
    ]
        // update the books array piece of state with the newly created book
        setBooks(updatedBooks);
    };

    // Event Handler to delete a book by its ID
    const deleteBookById = (idToRemove) => {
        const updatedBooks = books.filter((book) => {
            return book.id !== idToRemove;
        });

        setBooks(updatedBooks);

    };

    // Event handler to edit a book
    const editBookById = (idToEdit, newTitle) => {
        const updatedBooks = books.map((book) => {
            if(book.id === idToEdit) {
                // take in curr. 'books' and append the title of the edited book
                return { ...book, title: newTitle}; 
            }
            // If no edit is made, simply return 
            return book;
        });

        setBooks(updatedBooks);
    }
    

    return (
        <div className="app">
            <h1>Reading List</h1>
            <BookList books={books} onEdit={editBookById} onDelete={deleteBookById}/>
            <BookCreate onCreate={createBook} />
        </div>
    );
}

export default App;