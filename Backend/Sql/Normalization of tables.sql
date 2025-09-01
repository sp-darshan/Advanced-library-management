-- Normalization of the tables --
/* Execute only at first time of use 
use DBMS_project;
*/

-- drop table authors,book_categories,book_category_assignment,publishers,courses,books,librarians,members,purchase_history,transactions;

-- Table AUTHORS --
CREATE TABLE Authors (
    author_id VARCHAR(20) PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    specialization VARCHAR(255)
);


-- Table PUBLISHERS --
CREATE TABLE Publishers (
    publisher_id VARCHAR(20) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address TEXT NOT NULL,
    contact_number VARCHAR(15),
    email VARCHAR(255),
    university_affiliated BOOLEAN
);

-- Table COURSES --
CREATE TABLE Courses (
    course_id VARCHAR(20) PRIMARY KEY,
    course_name VARCHAR(255) NOT NULL,
    department VARCHAR(255) NOT NULL,
    academic_level ENUM('Undergraduate', 'Postgraduate','Research')
);

show tables;

-- Table BOOKS --
CREATE TABLE Books (
    book_id VARCHAR(20) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author_id VARCHAR(20) NOT NULL,
    publisher_id VARCHAR(20) NOT NULL,
    publication_year YEAR NOT NULL,
    genre VARCHAR(100),
    isbn VARCHAR(20) NOT NULL,
    copies_available INT NOT NULL,
    book_status ENUM('Available', 'Reserved', 'On Loan', 'In Maintenance'),
    academic_level ENUM('Undergraduate', 'Postgraduate', 'Research'),
    course_association VARCHAR(20), -- Optional, references course_id
    FOREIGN KEY (author_id) REFERENCES Authors(author_id),
    FOREIGN KEY (publisher_id) REFERENCES Publishers(publisher_id),
    FOREIGN KEY (course_association) REFERENCES Courses(course_id)
);

-- Table MEMEBERS --
CREATE TABLE Members (
    member_id VARCHAR(20) PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    address TEXT,
    phone_number VARCHAR(15),
    email VARCHAR(255),
    membership_date DATE NOT NULL,
    member_type ENUM('Student', 'Faculty', 'Staff'),
    department_id INT, -- Optional, for Faculty/Staff members
    student_id_number VARCHAR(50), -- Optional, for student members
    faculty_id_number VARCHAR(50) -- Optional, for faculty members
    -- FOREIGN KEY (department_id) REFERENCES Departments(department_id)
);

CREATE TABLE Librarians (
    librarian_id VARCHAR(20) PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    contact_number VARCHAR(15),
    email VARCHAR(255),
    login_username VARCHAR(100) NOT NULL,
    login_password VARCHAR(100) NOT NULL,
    designation VARCHAR(100),
    department_id INT -- Optional, for Librarians
    -- FOREIGN KEY (department_id) REFERENCES Departments(department_id)
);

-- Table TRANSACTIONS --
CREATE TABLE Transactions (
    transaction_id VARCHAR(20) PRIMARY KEY,
    member_id VARCHAR(20) NOT NULL,
    book_id VARCHAR(20) NOT NULL,
    issue_date DATE NOT NULL,
    due_date DATE NOT NULL,
    return_date DATE,
    transaction_type ENUM('Issue', 'Return') NOT NULL,
    fine_amount DECIMAL(10, 2) DEFAULT 0.00,
    status ENUM('Returned', 'Pending') NOT NULL,
    librarian_id VARCHAR(20) NOT NULL,
    FOREIGN KEY (member_id) REFERENCES Members(member_id),
    FOREIGN KEY (book_id) REFERENCES Books(book_id),
    FOREIGN KEY (librarian_id) REFERENCES Librarians(librarian_id)
);

-- Table BOOK CATEGORY --
CREATE TABLE Book_Categories (
    category_id VARCHAR(20) PRIMARY KEY,
    category_name VARCHAR(255) NOT NULL,
    academic_subject VARCHAR(255) NOT NULL
);

-- Table BOOK CATEGORY ASSIGNMENT --
CREATE TABLE Book_Category_Assignment (
    book_id VARCHAR(20) NOT NULL,
    category_id VARCHAR(20) NOT NULL,
    PRIMARY KEY (book_id, category_id),
    FOREIGN KEY (book_id) REFERENCES Books(book_id),
    FOREIGN KEY (category_id) REFERENCES Book_Categories(category_id)
);

-- Table PURCHASE HISTORY --
CREATE TABLE Purchase_History (
    purchase_id VARCHAR(20) PRIMARY KEY,
    member_id VARCHAR(20) NOT NULL,
    book_id VARCHAR(20) NOT NULL,
    purchase_date DATE NOT NULL,
    quantity INT NOT NULL,
    purchased_for_course VARCHAR(20), -- Optional reference to course_id
    FOREIGN KEY (member_id) REFERENCES Members(member_id),
    FOREIGN KEY (book_id) REFERENCES Books(book_id),
    FOREIGN KEY (purchased_for_course) REFERENCES Courses(course_id)
);

show tables;
describe authors;
describe book_categories;
describe book_category_assignment;
describe books;
describe courses;
describe librarians;
describe members;

-- Above is after Normalization --