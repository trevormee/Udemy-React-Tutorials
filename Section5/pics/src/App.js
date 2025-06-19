import searchImages from './api.js';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import { useState } from 'react';

function App() {

    // Define a piece of state 'images' and init. as an empty array
    const [images, setImages] = useState([]);

    // Async event handler to make an API request to unsplash.com to
    // return an array of images based on a user query
    const handleSubmit = async (term) => {
        // the result variable is our list of images
        // we need to get this result down to our <ImageList /> component
        const result = await searchImages(term);

        setImages(result);
    };

    return (
        <div>
            <SearchBar onSubmit={handleSubmit} />
            <ImageList images={images} />
        </div>
    );
}

export default App;