import BookCreate from './components/BookCreate';
import BookList from './components/BookList'
import { useEffect } from 'react';

import {useContext} from 'react';
import BooksContext from './context/books'

// Main App component of our project
function App() {
    
    // Use the BooksContext from ./context/books.js
    const {fetchBooks} = useContext(BooksContext);

    // Fetch our current list of books from the database only on first render
    useEffect(() => {
        fetchBooks();
    }, []);
    

    return (
        <div className="app">
            <h1>Reading List</h1>
            <BookList />
            <BookCreate/>
        </div>
    );
}

export default App;