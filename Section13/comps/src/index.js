// 1) Import the React and ReactDOM libs
import './index.css';       // Import tailwind from index.css
import React from 'react';;
import ReactDOM from 'react-dom/client';
import App from './App';
import { NavigationProvider } from './context/navigation';

// 2) Get a reference to the div with ID root
const el = document.getElementById('root');

// 3) Tell React to take control of that elemnt
const root = ReactDOM.createRoot(el);

// 4) Show the component on the screen
root.render(
    <NavigationProvider>
        <App />
    </NavigationProvider>
);