import React, { useState } from "react";
import "./search.css";

const booksData = [
  { id: 1, title: "Data Structures", author: "Mark Allen", year: 2018, course: "B.Tech", branch: "CSE", subject: "Programming" },
  { id: 2, title: "Database Systems", author: "Elmasri Navathe", year: 2015, course: "B.Tech", branch: "IT", subject: "Database" },
  { id: 3, title: "Engineering Mathematics", author: "H.K. Dass", year: 2020, course: "B.Tech", branch: "ME", subject: "Mathematics" },
  { id: 4, title: "Digital Electronics", author: "Morris Mano", year: 2013, course: "Diploma", branch: "ECE", subject: "Electronics" },
  { id: 5, title: "Introduction to Algorithms", author: "Cormen", year: 2009, course: "B.Tech", branch: "CSE", subject: "Algorithms" },
];

const SearchBook = () => {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("title");
  const [filterCourse, setFilterCourse] = useState("All");
  const [filterBranch, setFilterBranch] = useState("All");
  const [filterSubject, setFilterSubject] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  // Filter and sort books
  const filteredBooks = booksData
    .filter(
      (book) =>
        book.title.toLowerCase().includes(search.toLowerCase()) ||
        book.author.toLowerCase().includes(search.toLowerCase())
    )
    .filter((book) => (filterCourse === "All" ? true : book.course === filterCourse))
    .filter((book) => (filterBranch === "All" ? true : book.branch === filterBranch))
    .filter((book) => (filterSubject === "All" ? true : book.subject === filterSubject))
    .sort((a, b) => {
      if (sortBy === "title") return a.title.localeCompare(b.title);
      if (sortBy === "author") return a.author.localeCompare(b.author);
      if (sortBy === "year") return a.year - b.year;
      return 0;
    });

  // Pagination logic
  const totalPages = Math.ceil(filteredBooks.length / itemsPerPage);
  const paginatedBooks = filteredBooks.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handlers
  const handleSearchChange = (e) => setSearch(e.target.value);
  const handleSortChange = (e) => setSortBy(e.target.value);
  const handleCourseChange = (e) => setFilterCourse(e.target.value);
  const handleBranchChange = (e) => setFilterBranch(e.target.value);
  const handleSubjectChange = (e) => setFilterSubject(e.target.value);
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="library-container">
      <h1>Library System</h1>

      {/* Search Bar */}
      <div className="controls">
        <input
          type="text"
          placeholder="Search by title or author"
          value={search}
          onChange={handleSearchChange}
          className="search-input"
        />

        {/* Sorting Options */}
        <select value={sortBy} onChange={handleSortChange} className="sort-select">
          <option value="title">Sort by Title</option>
          <option value="author">Sort by Author</option>
          <option value="year">Sort by Year</option>
        </select>

        {/* Course Filter */}
        <select value={filterCourse} onChange={handleCourseChange} className="filter-select">
          <option value="All">All Courses</option>
          <option value="B.Tech">B.Tech</option>
          <option value="Diploma">Diploma</option>
        </select>

        {/* Branch Filter */}
        <select value={filterBranch} onChange={handleBranchChange} className="filter-select">
          <option value="All">All Branches</option>
          <option value="CSE">CSE</option>
          <option value="IT">IT</option>
          <option value="ME">ME</option>
          <option value="ECE">ECE</option>
        </select>

        {/* Subject Filter */}
        <select value={filterSubject} onChange={handleSubjectChange} className="filter-select">
          <option value="All">All Subjects</option>
          <option value="Programming">Programming</option>
          <option value="Database">Database</option>
          <option value="Mathematics">Mathematics</option>
          <option value="Electronics">Electronics</option>
          <option value="Algorithms">Algorithms</option>
        </select>
      </div>

      {/* Books List */}
      <div className="books-list">
        {paginatedBooks.length > 0 ? (
          paginatedBooks.map((book) => (
            <div key={book.id} className="book-item">
              <h3>{book.title}</h3>
              <p>Author: {book.author}</p>
              <p>Year: {book.year}</p>
              <p>Course: {book.course}</p>
              <p>Branch: {book.branch}</p>
              <p>Subject: {book.subject}</p>
            </div>
          ))
        ) : (
          <p>No books found</p>
        )}
      </div>

      {/* Pagination */}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`page-button ${currentPage === page ? "active" : ""}`}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchBook;
