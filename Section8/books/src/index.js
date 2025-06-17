// 1) Import the React and ReactDOM libs
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// import our bookscontext
import {Provider} from './context/books'

// 2) Get a reference to the div with ID root
const el = document.getElementById('root');

// 3) Tell React to take control of that elemnt
const root = ReactDOM.createRoot(el);

// 4) Show the component on the screen
// Wrap the BooksContext Provider around our App with 
root.render(    
    <Provider>
        <App />
    </Provider>
);