import {useState} from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList'

function App() {
   
    const [books, setBooks] = useState([]);

    // Event Handler for adding a new book
    const createBook = (title) => {
        const updatedBooks = [
            ...books, 
            {id: Math.round(Math.random() * 9999), 
            title: title}
    ]
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
                return { ...book, title: newTitle};
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