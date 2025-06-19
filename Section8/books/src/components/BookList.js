import BookShow from './BookShow';
import useBooksContext from '../hooks/use-books-context';

// BookList component that returns a rendered list of books including an image
// the title, and edit/delete options
function BookList() {
    // Use/grab the books piece of state from BooksContext
    const {books} = useBooksContext();

    // Map over the list of books and show the rendered list of books
    const renderedBooks = books.map((book) => {
        return <BookShow key={book.id} book={book} />;
    });

    return (
        <div className="book-list"> 
            {renderedBooks}
        </div>
    );
}

export default BookList;