
import BookShow from './BookShow'

function BookList(props) {

    const { books, onDelete, onEdit } = props;

    // Map over the list of books
    const renderedBooks = books.map((book) => {
        return <BookShow className="book-show" onEdit={onEdit} onDelete={onDelete} key={book.id} book={book} />;
    });

    return (
        <div className="book-list">{renderedBooks}</div>
    );
}

export default BookList;