import {useState} from "react";

// BookkEdit component that takes in params from BookShow.
// Returns the "Edit book" view form
function BookEdit({ book, onSubmit }) {

    // Declare a new piece of state called title and init. it 
    // with the current title of the book
    const [title, setTitle] = useState(book.title);

    // Event handler used as a user starts typing in the new title
    // Sets the edit book text book to the current title of the book
    const handleChange =  (event) => {
        setTitle(event.target.value);
    };

    // Event handler to submnit the updated title of the book
    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(book.id, title);
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