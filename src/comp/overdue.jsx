import React from "react";
import { borrowedBooks } from "./BooksData";
import "./Library.css";

const Overdue = () => {
  const today = new Date();
  const overdueBooks = borrowedBooks.filter(
    (book) => !book.returned && today > new Date(book.dueDate)
  );

  return (
    <div className="library-section">
      <h2 className="section-title">Overdue Books</h2>
      {overdueBooks.length > 0 ? (
        overdueBooks.map((book) => (
          <div key={book.id} className="book-item">
            <h3>{book.title}</h3>
            <p>Borrower: {book.borrower}</p>
            <p>Borrow Date: {book.borrowDate}</p>
            <p>Due Date: {book.dueDate}</p>
          </div>
        ))
      ) : (
        <p className="no-books">No overdue books.</p>
      )}
    </div>
  );
};

export default Overdue;
