import { useState, useContext } from 'react';
import BookEdit from './BookEdit';
import BooksContext from '../context/books';


function BookShow(props) {

    // Get the book props passed down from BookList
    const {book} = props;

    // Use the deleteBookById() function from BooksContext
    const {deleteBookById} = useContext(BooksContext);

    // Event handle when a user clicks the icon to delete a book
    const handleDeleteClick = () => {
        deleteBookById(book.id);
    };

    // Define a state for editing a book (like a boolean)
    const [showEdit, setShowEdit] = useState(false);

    // Event handler for editing a book
    const handleEditClick = () => {
        setShowEdit(!showEdit);
    };

    const handleSubmit = () => {
        setShowEdit(false);     // no longer display the edit form after a user submits
    };

    let content = <h3>{book.title}</h3>;
    if(showEdit){
        content = <BookEdit book={book} onSubmit={handleSubmit}/>;
    }

    return (
        <div className="book-show">
            <img 
                alt="books"
                src={`https://picsum.photos/seed/${book.id}/300/200`}
            />
            <div>{content}</div>
            <div className="actions">
                <button className="edit" onClick={handleEditClick}>
                    Edit
                </button>
                <button className="delete" onClick={handleDeleteClick}>
                    Delete
                </button>
            </div>
        </div>
    );
}

export default BookShow;