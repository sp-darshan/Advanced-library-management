/* Execute the below before using
create database DBMS_project;
use DBMS_project;
*/

-- drop table authors,book_categories,book_category_assignment,publishers,courses,books,librarians,members,purchase_history,transactions;

-- Table AUTHORS --
CREATE TABLE Authors (
    author_id INT AUTO_INCREMENT PRIMARY KEY, -- Unique identifier for each author
    first_name VARCHAR(100) NOT NULL, -- First name of the author
    last_name VARCHAR(100) NOT NULL, -- Last name of the author
    biography TEXT, -- Brief biography of the author
    specialization VARCHAR(255) -- Subject area of expertise (e.g., Computer Science, Literature)
);

-- Table PUBLISHERS --
CREATE TABLE Publishers (
    publisher_id INT AUTO_INCREMENT PRIMARY KEY, -- Unique identifier for each publisher
    name VARCHAR(255) NOT NULL, -- Name of the publisher
    address VARCHAR(255), -- Address of the publisher
    contact_number VARCHAR(20), -- Contact number of the publisher
    email VARCHAR(255) UNIQUE, -- Email address of the publisher
    university_affiliated BOOLEAN DEFAULT FALSE -- Whether the publisher is affiliated with the university
);

-- Table COURSES --
CREATE TABLE Courses (
    course_id INT AUTO_INCREMENT PRIMARY KEY, -- Unique identifier for each course
    course_name VARCHAR(255) NOT NULL, -- Name of the course
    department VARCHAR(255) NOT NULL, -- Department offering the course
    academic_level ENUM('Undergraduate', 'Postgraduate') NOT NULL -- Academic level of the course
);

-- Table BOOKS --
CREATE TABLE Books (
    book_id INT AUTO_INCREMENT PRIMARY KEY, -- Unique identifier for each book
    title VARCHAR(255) NOT NULL, -- Title of the book
    author_id INT NOT NULL, -- Reference to the author_id in the Authors table
    publisher_id INT NOT NULL, -- Reference to the publisher_id in the Publishers table
    publication_year YEAR NOT NULL, -- Year the book was published
    genre VARCHAR(100), -- Genre of the book
    isbn VARCHAR(20) UNIQUE, -- ISBN number of the book
    copies_available INT DEFAULT 0, -- Number of available copies of the book
    book_status ENUM('Available', 'Reserved', 'On Loan', 'In Maintenance') DEFAULT 'Available', -- Status of the book
    academic_level ENUM('Undergraduate', 'Postgraduate', 'Research') NOT NULL, -- Academic level
    course_association INT, -- Optional reference to the course_id in the Courses table
    CONSTRAINT fk_author FOREIGN KEY (author_id) REFERENCES Authors(author_id) ON DELETE CASCADE, -- Foreign key to Authors
    CONSTRAINT fk_publisher FOREIGN KEY (publisher_id) REFERENCES Publishers(publisher_id) ON DELETE CASCADE, -- Foreign key to Publishers
    CONSTRAINT fk_course FOREIGN KEY (course_association) REFERENCES Courses(course_id) ON DELETE SET NULL -- Optional foreign key to Courses
);

-- Table MEMEBERS --
CREATE TABLE Members (
    member_id INT AUTO_INCREMENT PRIMARY KEY, -- Unique identifier for each member
    first_name VARCHAR(100) NOT NULL, -- First name of the member
    last_name VARCHAR(100) NOT NULL, -- Last name of the member
    address VARCHAR(255), -- Address of the member
    phone_number VARCHAR(20), -- Contact number of the member
    email VARCHAR(255) UNIQUE, -- Email address of the member
    membership_date DATE NOT NULL, -- Date when the member joined
    membership_status ENUM('Active', 'Suspended') NOT NULL DEFAULT 'Active', -- Membership status
    member_type ENUM('Student', 'Faculty', 'Staff') NOT NULL, -- Type of member
    department VARCHAR(255), -- Department associated with the member
    student_id_number VARCHAR(50), -- Optional, for student members
    faculty_id_number VARCHAR(50) -- Optional, for faculty members
);

-- Table LIBRARIANS --
CREATE TABLE Librarians (
    librarian_id INT AUTO_INCREMENT PRIMARY KEY, -- Unique identifier for each librarian
    first_name VARCHAR(100) NOT NULL, -- First name of the librarian
    last_name VARCHAR(100) NOT NULL, -- Last name of the librarian
    contact_number VARCHAR(20), -- Contact number of the librarian
    email VARCHAR(255) UNIQUE, -- Email address of the librarian
    login_username VARCHAR(50) NOT NULL UNIQUE, -- Login username for the librarian
    login_password VARCHAR(255) NOT NULL, -- Login password for the librarian
    designation VARCHAR(100), -- Designation (Assistant Librarian, Chief Librarian)
    department VARCHAR(255) -- Department associated with the librarian
);

-- Table TRANSACTIONS --
CREATE TABLE Transactions (
    transaction_id INT AUTO_INCREMENT PRIMARY KEY, -- Unique identifier for each transaction
    member_id INT NOT NULL, -- Reference to the member_id in the Members table
    book_id INT NOT NULL, -- Reference to the book_id in the Books table
    issue_date DATE NOT NULL, -- Date when the book was issued
    due_date DATE NOT NULL, -- Date when the book is due to be returned
    return_date DATE, -- Date when the book was returned
    transaction_type ENUM('Issue', 'Return') NOT NULL, -- Type of transaction (Issue/Return)
    fine_amount DECIMAL(10, 2) DEFAULT 0.00, -- Fine amount for late returns, defaults to 0
    status ENUM('Returned', 'Pending') NOT NULL, -- Status of the transaction (Returned/Pending)
    librarian_id INT NOT NULL, -- Reference to the librarian who handled the transaction
    FOREIGN KEY (member_id) REFERENCES Members(member_id), -- Foreign key reference to Members table
    FOREIGN KEY (book_id) REFERENCES Books(book_id), -- Foreign key reference to Books table
    FOREIGN KEY (librarian_id) REFERENCES Librarians(librarian_id) -- Foreign key reference to Librarians table
);

-- Table BOOK CATEGORY --
CREATE TABLE Book_Categories (
    category_id INT AUTO_INCREMENT PRIMARY KEY, -- Unique identifier for each book category
    category_name VARCHAR(255) NOT NULL, -- Name of the category (e.g., Fiction, Research)
    academic_subject VARCHAR(255) NOT NULL -- Academic subject of the category (e.g., Engineering, Medicine)
);

-- Table BOOK CATEGORY ASSIGNMENT --
CREATE TABLE Book_Category_Assignment (
    book_id INT NOT NULL, -- Reference to the book_id in the Books table
    category_id INT NOT NULL, -- Reference to the category_id in the Book_Categories table
    PRIMARY KEY (book_id, category_id), -- Composite Primary Key (combination of book_id and category_id)
    FOREIGN KEY (book_id) REFERENCES Books(book_id), -- Foreign key reference to Books table
    FOREIGN KEY (category_id) REFERENCES Book_Categories(category_id) -- Foreign key reference to Book_Categories table
);

-- Table PURCHASE HISTORY --
CREATE TABLE Purchase_History (
    purchase_id INT AUTO_INCREMENT PRIMARY KEY, -- Unique identifier for each purchase
    member_id INT NOT NULL, -- Reference to the member_id in the Members table
    book_id INT NOT NULL, -- Reference to the book_id in the Books table
    purchase_date DATE NOT NULL, -- Date when the book was purchased
    quantity INT NOT NULL, -- Number of books purchased
    purchased_for_course INT, -- Optional reference to course_id in the Courses table
    FOREIGN KEY (member_id) REFERENCES Members(member_id), -- Foreign key reference to Members table
    FOREIGN KEY (book_id) REFERENCES Books(book_id), -- Foreign key reference to Books table
    FOREIGN KEY (purchased_for_course) REFERENCES Courses(course_id) -- Foreign key reference to Courses table (optional)
);

show tables;
describe authors;
describe book_categories;
describe book_category_assignment;
describe books;
describe courses;
describe librarians;
describe members;
describe publishers;
describe purchase_history;
describe transactions;

-- ABOVE IS BEFORE NORMALIZATION --




