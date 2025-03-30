import React, { useState } from "react";
import booksData from "./data";
import BookList from "./components/BookList";
import AddBookForm from "./components/AddBookForm";

function App() {
  const [books, setBooks] = useState(booksData);

  const addBook = (newBook) => {
    setBooks([...books, { ...newBook, id: Date.now() }]);
  };

  return (
    <div className="App">
      <h1>My Book Collection</h1>
      <AddBookForm addBook={addBook} />
      <BookList books={books} />
    </div>
  );
}

export default App;