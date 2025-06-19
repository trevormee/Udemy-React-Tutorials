import { useState } from 'react';

// BookCreate component responsible for adding a new book to a user's
// reading list. Takes in the createBook() function from App component
// as a prop
function BookCreate(props) {

    // Extract the createBook() function as a prop
    const { onCreate } = props;

    // Create a new piece of state 'title' (like a string) & init.
    // with an empty string
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
        onCreate(title);    
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