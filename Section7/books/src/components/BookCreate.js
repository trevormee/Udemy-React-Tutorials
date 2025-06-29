import { useState } from 'react';

function BookCreate(props) {

    const { onCreate } = props;

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