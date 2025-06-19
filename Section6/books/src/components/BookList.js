
import BookShow from './BookShow'

// BookList component that returns a rendered list of books including an image
// the title, and edit/delete options
function BookList(props) {

    // Extract all props from App.js
    const { books, onDelete, onEdit } = props;

    // Map over the list of books one by one, show the books on screen
    // along with the edit and delete capabilities for each book
    const renderedBooks = books.map((book) => {
        return <BookShow 
                className="book-show" 
                onEdit={onEdit} 
                onDelete={onDelete} 
                key={book.id} 
                book={book} />;
    });

    return (
        <div className="book-list">{renderedBooks}</div>
    );
}

export default BookList;