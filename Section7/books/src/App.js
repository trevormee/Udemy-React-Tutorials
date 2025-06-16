import {useState} from 'react';
import axios from 'axios';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList'
import { useEffect } from 'react';

function App() {
   
    const [books, setBooks] = useState([]);

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

        // Section 6 createBook contents
        // const updatedBooks = [
        //     ...books, 
        //     {
        //         id: Math.round(Math.random() * 9999), 
        //         title: title
        //     }
        // ]
        // setBooks(updatedBooks);
    };

    // Section 7: fetchBooks on startup
    const fetchBooks = async () => {
        const response = await axios.get('/books');

        setBooks(response.data);
    };

    useEffect(() => {
        fetchBooks();
    }, []);

    // // Event Handler to delete a book by its ID
    // const deleteBookById = (idToRemove) => {
    //     const updatedBooks = books.filter((book) => {
    //         return book.id !== idToRemove;
    //     });

    //     setBooks(updatedBooks);

    // };

    // Section 7
    // Event Handler to delete a book by its ID
    const deleteBookById = async (idToRemove) => {
        
        await axios.delete(`/books/${idToRemove}`);
        
        const updatedBooks = books.filter((book) => {
            return book.id !== idToRemove;
        });

        setBooks(updatedBooks);

    };


    // Event handler to edit a book
    // const editBookById = (idToEdit, newTitle) => {
    //     const updatedBooks = books.map((book) => {
    //         if(book.id === idToEdit) {
    //             return { ...book, title: newTitle};
    //         }

    //         return book;
    //     });

    //     setBooks(updatedBooks);
    // }

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
    

    return (
        <div className="app">
            <h1>Reading List</h1>
            <BookList books={books} onEdit={editBookById} onDelete={deleteBookById}/>
            <BookCreate onCreate={createBook} />
        </div>
    );
}

export default App;