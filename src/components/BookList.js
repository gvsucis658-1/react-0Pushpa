// src/components/BookList.js
import React, { useState } from "react";
import EditBookForm from "./EditBookForm";

const BookList = ({ books, onDelete, onUpdate }) => {
  const [editingBook, setEditingBook] = useState(null);

  const handleEditClick = (book) => {
    setEditingBook(book); // Set the book to edit
  };

  const handleCancelEdit = () => {
    setEditingBook(null); // Cancel editing
  };

  return (
    <div className="book-list">
      <h2>Book List</h2>
      {editingBook ? (
        <EditBookForm
          book={editingBook}
          onUpdate={(updatedBook) => {
            onUpdate(updatedBook); // Pass the updated book to App.js
            setEditingBook(null); // Return to the book list
          }}
          onCancel={handleCancelEdit}
        />
      ) : (
        <ul>
          {books.map((book) => (
            <li key={book.id} className="book-item">
              <strong>{book.title}</strong> by {book.author} ({book.yearPublished}) - {book.genre}
              <button onClick={() => onDelete(book.id)}>Delete</button>
              <button onClick={() => handleEditClick(book)}>Edit</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookList;