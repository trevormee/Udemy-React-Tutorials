import { useState } from 'react';
import BookEdit from './BookEdit';

function BookShow(props) {

    const {book, onDelete, onEdit} = props;

    // Event handler for deleting a book (call onDelete)
    const handleDeleteClick = () => {
        onDelete(book.id);
    };

    // Define a state for editing a book
    const [showEdit, setShowEdit] = useState(false);

    // Event handler for editing a book
    const handleEditClick = () => {
        setShowEdit(!showEdit);
    };

    const handleSubmit = (id, newTitle) => {
        setShowEdit(false);
        onEdit(id, newTitle);
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