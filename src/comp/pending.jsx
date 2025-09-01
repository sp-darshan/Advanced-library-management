import React from "react";
import { borrowedBooks } from "./BooksData";
import "./Library.css";

const Pending = () => {
  const pendingBooks = borrowedBooks.filter((book) => !book.returned);

  return (
    <div className="library-section">
      <h2 className="section-title">Pending Books</h2>
      {pendingBooks.length > 0 ? (
        pendingBooks.map((book) => (
          <div key={book.id} className="book-item">
            <h3>{book.title}</h3>
            <p>Borrower: {book.borrower}</p>
            <p>Borrow Date: {book.borrowDate}</p>
            <p>Due Date: {book.dueDate}</p>
          </div>
        ))
      ) : (
        <p className="no-books">No pending books.</p>
      )}
    </div>
  );
};

export default Pending;
