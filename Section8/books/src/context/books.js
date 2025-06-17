import { createContext, useState } from 'react';
import axios from 'axios';

const BooksContext = createContext();

function Provider({ children })
{

    const [books, setBooks] = useState([]);

     // Section 7: fetchBooks on startup
    const fetchBooks = async () => {
        const response = await axios.get('/books');

        setBooks(response.data);
    };

    // Event Handler for adding a new book
    const createBook = async (title) => {
        const response = await axios.post('/books', {
            title
        });

        const updatedBooks = [
            ...books,       // take all of our books, add them to the updatedBooks array
            response.data   // at the end, add the new book that the user added
        ];

        setBooks(updatedBooks);
    };


    // Section 7
    // Event Handler to delete a book by its ID
    const deleteBookById = async (idToRemove) => {
        
        await axios.delete(`/books/${idToRemove}`);
        
        const updatedBooks = books.filter((book) => {
            return book.id !== idToRemove;
        });

        setBooks(updatedBooks);

    };

    // Section 7
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
