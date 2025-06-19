import { useState, useContext } from 'react';
import BooksContext from '../context/books';

// BookCreate component responsible for adding a new book to a user's
// reading list. Uses the books context as an alternative to the props system
function BookCreate() {

    const { createBook } = useContext(BooksContext);

    // Create a new piece of state 'title' (like a string)
    // and init. as empty string
    const [title, setTitle] = useState('');

    // Event Handler to keep track of anytime the user
    // changes the title text
    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    // Event handler to handle user clicking the create button
    // or pressing the Enter key
    const handleSubmit = (event) => {
        event.preventDefault(); 
        createBook(title);    // Call createBook from BooksContext
        setTitle('');   // Clears title after user creates a new book
    };

    return (
       <div className="book-create">
        <h3>Add a book</h3>
       <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input className="input" value={title} onChange={handleChange}/>
            <button className="button">Create!</button>
       </form>
       </div>
    );
}

export default BookCreate;