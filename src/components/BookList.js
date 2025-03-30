import React from "react";

const BookList = ({ books }) => {
  return (
    <div className="book-list">
      <h2>Book List</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id} className="book-item">
            <strong>{book.title}</strong> by {book.author} ({book.yearPublished}) - {book.genre}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;