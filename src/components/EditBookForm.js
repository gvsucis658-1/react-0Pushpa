// src/components/EditBookForm.js
import React, { useState } from "react";

const EditBookForm = ({ book, onUpdate }) => {
  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);
  const [yearPublished, setYearPublished] = useState(book.yearPublished);
  const [genre, setGenre] = useState(book.genre);

  const handleSubmit = (e) => {
    // e.preventDefault();
    console.log("Submit button clicked");
    e.preventDefault();
    onUpdate({ ...book, title, author, yearPublished, genre });
  };

  return (
    <form onSubmit={handleSubmit} className="edit-book-form">
      <h3>Edit Book</h3>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Year Published"
        value={yearPublished}
        onChange={(e) => setYearPublished(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Genre"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        required
      />
      <button type="submit">Update Book</button>
    </form>
  );
};

export default EditBookForm;