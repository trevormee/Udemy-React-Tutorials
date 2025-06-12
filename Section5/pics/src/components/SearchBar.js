
import { useState } from 'react';

function SearchBar({ onSubmit }) {
    
    const [term, setTerm] = useState('');

    // Event Handler
    const handleFormSubmit = (event) => {
        event.preventDefault();  // Prevents the browser from exucuting the default action of an event
        onSubmit(term);
    };

    // Event Handler for text input
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