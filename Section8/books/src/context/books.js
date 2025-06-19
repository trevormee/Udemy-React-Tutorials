import { createContext, useState } from 'react';
import axios from 'axios';

// Create a context of books so that we do not have to pass down
// each books prop from App --> every other component like we did
// in section 6-7. Returns all of the pieces of state and functions
// so that they are usuable elsewhere in our project.
const BooksContext = createContext();

function Provider({ children })
{
    // Create a piece of state 'books' and init. as an empty array
    const [books, setBooks] = useState([]);

     // Async function to fetch books on startup
    const fetchBooks = async () => {
        const response = await axios.get('/books');

        setBooks(response.data);
    };

    // Event Handler for adding a new book
    const createBook = async (title) => {
        // make an api call to our database to get the current list of books 
        const response = await axios.post('/books', {
            title
        });

        const updatedBooks = [
            ...books,       // take all of our books, add them to the updatedBooks array
            response.data   // at the end, add the new book that the user added
        ];

        // update the books array piece of state with the newly created book
        setBooks(updatedBooks);
    };

    // Async Event Handler to delete a book by its ID in our DB
    const deleteBookById = async (idToRemove) => {
        
        await axios.delete(`/books/${idToRemove}`);
        
        const updatedBooks = books.filter((book) => {
            return book.id !== idToRemove;
        });

        setBooks(updatedBooks);

    };

    // Async Event handler to edit a book
    const editBookById = async (id, newTitle) => {
        const response = await axios.put(`/books/${id}`, {
            title: newTitle,
        });
        
        const updatedBooks = books.map((book) => {
            if(book.id === id) {
                return { ...book, ...response.data};
            }

            return book;
        });

        setBooks(updatedBooks);
    }

    // valuetoshare object
    // shares all of the functions and the books array
    const valueToShare = {
        books,
        deleteBookById,
        editBookById,
        createBook,
        fetchBooks
    };

    return (
        <BooksContext.Provider value={valueToShare}>
            {children}
        </BooksContext.Provider>
    );
}

export { Provider };
export default BooksContext;
