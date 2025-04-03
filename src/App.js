// src/App.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import BookList from "./components/BookList";
import AddBookForm from "./components/AddBookForm";

function App() {
  const [books, setBooks] = useState([]);

  // Fetch books from the API on component mount
  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get("http://localhost:8080/books");
      setBooks(response.data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  const addBook = async (newBook) => {
    try {
      const response = await axios.post("http://localhost:8080/books", newBook);
      setBooks([...books, response.data]);
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };

  const deleteBook = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/books/${id}`);
      setBooks(books.filter((book) => book.id !== id));
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

// src/App.js
const updateBook = async (updatedBook) => {
  try {
    const response = await axios.put(`http://localhost:8080/books/${updatedBook.id}`, updatedBook);
    const updatedBookFromBackend = response.data;

    // Update the state with the new book data
    setBooks((prevBooks) =>
      prevBooks.map((book) => (book.id === updatedBook.id ? updatedBookFromBackend : book))
    );
  } catch (error) {
    console.error("Error updating book:", error);
  }
};

  return (
    <div className="App">
      <h1>My Book Collection</h1>
      <AddBookForm addBook={addBook} />
      <BookList books={books} onDelete={deleteBook} onUpdate={updateBook} />
    </div>
  );
}

export default App;