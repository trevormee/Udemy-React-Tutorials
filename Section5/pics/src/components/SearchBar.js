import { useState } from 'react';

// SearchBar component that takes in the handleSubmit event handler
// defined in App.js
function SearchBar({ onSubmit }) {
    
    // Create a piece of state 'term' and init. as an empty string
    const [term, setTerm] = useState('');

    // Event Handler
    const handleFormSubmit = (event) => {
        // Prevents the browser from exucuting the default action of an event
        event.preventDefault();  
        // Call the onSubmit prop to call handleSubmit in App.js
        onSubmit(term);
    };

    // Event Handler for live text input
    const handleChange = (event) => {
        setTerm(event.target.value);
    };

    return (
        <div>
            {/* Wrapping an input element inside a form is how 
                we will allow a user to search by pressent 'Enter' key */}
            <form onSubmit={handleFormSubmit}>
                <input value={term} onChange={handleChange} />
            </form>
        </div>
    );
}

export default SearchBar;