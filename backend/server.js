// server.js
const express = require("express");
const cors = require("cors"); // Import the cors package
const bodyParser = require("body-parser");

const app = express();

// Enable CORS for all routes
app.use(cors());

// Middleware to parse JSON
app.use(bodyParser.json());

let books = [
  { id: 1, title: "1984", author: "George Orwell", yearPublished: 1949, genre: "Dystopian" },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", yearPublished: 1960, genre: "Fiction" },
];

// GET all books
app.get("/books", (req, res) => res.json(books));

// POST a new book
app.post("/books", (req, res) => {
  const newBook = { id: Date.now(), ...req.body };
  books.push(newBook);
  res.status(201).json(newBook);
});

// PUT update a book
app.put("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = books.findIndex((book) => book.id === id);
  if (index === -1) return res.status(404).send("Book not found");
  books[index] = { ...books[index], ...req.body };
  res.json(books[index]);
});

// DELETE a book
app.delete("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  books = books.filter((book) => book.id !== id);
  res.status(204).send();
});

const PORT = 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));