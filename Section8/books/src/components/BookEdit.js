import { useState, useContext } from 'react';
import BooksContext from '../context/books';

// BookEdit component responsible for allowing a user to edit the title
// of a book
function BookEdit({ book, onSubmit }) {

    // Declare a new piece of state called title
    // and set its default value as the current title
    const [title, setTitle] = useState(book.title);

    // Grab/"use" the editBookById() function from BookContext
    const { editBookById } = useContext(BooksContext);

    const handleChange =  (event) => {
        setTitle(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit();
        editBookById(book.id, title);
    };

    return (
        <form className="book-edit" onSubmit={handleSubmit}>
            <label>Title</label>
            <input className="input" value={title} onChange={handleChange} />
            <button className="button is-primary">Save</button>
        </form>
    );
}

export default BookEdit;