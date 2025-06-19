import { useContext } from 'react';
import BooksContext from '../context/books';

// lil custom hook that allows us to remove like three lines of code
// from our files --> more readability
function useBooksContext() {
    return useContext(BooksContext);
}

export default useBooksContext;