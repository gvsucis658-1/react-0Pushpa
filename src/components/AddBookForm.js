import React, { useState } from "react";

const AddBookForm = ({ addBook }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [yearPublished, setYearPublished] = useState("");
  const [genre, setGenre] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook({ title, author, yearPublished, genre });
    setTitle("");
    setAuthor("");
    setYearPublished("");
    setGenre("");
  };

  return (
    <form onSubmit={handleSubmit} className="add-book-form">
      <h3>Add a New Book</h3>
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
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBookForm;