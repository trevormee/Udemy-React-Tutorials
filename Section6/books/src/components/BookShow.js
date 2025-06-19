import { useState } from 'react';
import BookEdit from './BookEdit';

// BookShow component that takes in the parameters of BookList
// as props (are actually the same props from App).
// Returns and shows the books with an image, title, and the 
// edit/delete icons.
function BookShow(props) {

    // Extract all props passed from BookList component
    const {book, onDelete, onEdit} = props;

    // Event handler for deleting a book (call onDelete)
    const handleDeleteClick = () => {
        onDelete(book.id);
    };

    // Define a piece state for editing a book (boolean)
    const [showEdit, setShowEdit] = useState(false);

    // Event handler for editing a book
    const handleEditClick = () => {
        setShowEdit(!showEdit);
    };

    // Event handler for when a user finishes editing a book
    const handleSubmit = (id, newTitle) => {
        setShowEdit(false);     // no longer show edit 'page'
        onEdit(id, newTitle);   // save the updated title
    };

    let content = <h3>{book.title}</h3>;
    // If a user clicks on the edit icon, call BookEdit to handle a user
    // editing the title of a book
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