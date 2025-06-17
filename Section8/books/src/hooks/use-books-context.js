import { useContext } from 'react';
import BooksContext from '../context/books';

// lil custom hook
function useBooksContext() {
    return useContext(BooksContext);
}

export default useBooksContext;