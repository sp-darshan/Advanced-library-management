-- Inserting into tables --

/* Execute only at first time of use 
use DBMS_project;
*/

-- AUTHORS --
INSERT INTO Authors (author_id, first_name, last_name, biography, specialization)
VALUES
(1, 'John', 'Smith', 'Expert in data science and analytics', 'Data Science'),
(2, 'Emily', 'Johnson', 'Python programmer and trainer', 'Programming'),
(3, 'Michael', 'Brown', 'Researcher in AI and machine learning', 'Machine Learning'),
(4, 'Sarah', 'Wilson', 'AI specialist and educator', 'Artificial Intelligence'),
(5, 'David', 'Martinez', 'Renowned author in modern literature', 'Literature'),
(6, 'Laura', 'Garcia', 'Quantum computing researcher', 'Quantum Computing'),
(7, 'James', 'Lee', 'Specialist in electronics and circuits', 'Digital Electronics'),
(8, 'Linda', 'Harris', 'Developer and author on algorithms', 'Algorithms'),
(9, 'Robert', 'Clark', 'Database systems expert', 'Database Management'),
(10, 'Karen', 'Lewis', 'Published poet and anthology editor', 'Poetry'),
(11, 'Jessica', 'Lopez', 'Specialist in neural networks', 'Neural Networks'),
(12, 'Christopher', 'Wright', 'Expert in literature and criticism', 'Literary Criticism'),
(13, 'Steven', 'Allen', 'Robotics engineer and researcher', 'Robotics Engineering'),
(14, 'Maria', 'Hall', 'Physics professor and researcher', 'Physics'),
(15, 'Paul', 'Adams', 'Chemistry professor', 'Chemistry'),
(16, 'Barbara', 'Young', 'Philosopher and classical thinker', 'Philosophy'),
(17, 'Susan', 'King', 'Cybersecurity analyst', 'Cybersecurity'),
(18, 'Mark', 'Scott', 'Art historian and curator', 'History of Art'),
(19, 'Linda', 'Watson', 'Expert in biochemistry', 'Biochemistry'),
(20, 'Daniel', 'Walker', 'Sociologist and textbook author', 'Sociology');

select * from authors;

INSERT INTO Publishers (publisher_id, name, address, contact_number, email, university_affiliated)
VALUES
(1,'TechPress', '123 Tech Lane, NY', '123-456-7890', 'info@techpress.com', TRUE),
(2, 'CodeBooks', '456 Coding St, CA', '234-567-8901', 'contact@codebooks.com', FALSE),
(3, 'AI Insights', '789 AI Blvd, TX', '345-678-9012', 'ai@aiinsights.com', TRUE),
(4, 'LitWorld', '321 Literature Ave, MA', '456-789-0123', 'support@litworld.com', FALSE),
(5, 'Engineering Matters', '654 Engineer Dr, FL', '567-890-1234', 'help@engmatters.com', TRUE),
(6, 'Poetry House', '987 Poet St, PA', '678-901-2345', 'info@poetryhouse.com', FALSE),
(7, 'ScienceStream', '111 Science Rd, IL', '789-012-3456', 'support@sciencestream.com', TRUE),
(8, 'PhilosophyWorks', '222 Thinker Ln, NJ', '890-123-4567', 'contact@philosophyworks.com', FALSE),
(9, 'BioTech Books', '333 Biology St, NC', '901-234-5678', 'info@biotechbooks.com', TRUE),
(10, 'History Haven', '444 History Blvd, VA', '012-345-6789', 'support@historyhaven.com', FALSE),
(11, 'Quantum Publishers', '555 Quantum Ave, WA', '123-567-8901', 'info@quantumpublishers.com', TRUE),
(12, 'FictionWorld', '666 Fiction Rd, OR', '234-678-9012', 'contact@fictionworld.com', FALSE),
(13, 'MedText', '777 Medicine Ln, TX', '345-789-0123', 'help@medtext.com', TRUE),
(14, 'CyberReads', '888 Cyber St, NY', '456-890-1234', 'support@cyberreads.com', FALSE),
(15, 'MathMastery', '999 Math Blvd, CA', '567-901-2345', 'info@mathmastery.com', TRUE),
(16, 'EcoThinkers', '101 Eco Ln, CO', '678-012-3456', 'contact@ecothinkers.com', TRUE),
(17, 'Novelists Choice', '202 Novel Ave, NV', '789-123-4567', 'info@novelistschoice.com', FALSE),
(18, 'Astronomy Publishers', '303 Starry St, AZ', '890-234-5678', 'help@astronomypublishers.com', TRUE),
(19, 'Legal Texts Inc.', '404 Law Rd, DC', '901-345-6789', 'info@legaltexts.com', FALSE),
(20, 'Sociology Central', '505 Society Ln, IL', '012-456-7890', 'support@sociologycentral.com', TRUE);

select * from publishers;

-- COURSES --
INSERT INTO Courses (course_id, course_name, department, academic_level)
VALUES
(1, 'Data Science Basics', 'Computer Science', 'Undergraduate'),
(2, 'Advanced Algorithms', 'Engineering', 'Postgraduate'),
(3, 'Machine Learning', 'Computer Science', 'Research'),
(4, 'Circuits and Systems', 'Electronics', 'Undergraduate'),
(5, 'Quantum Computing Basics', 'Physics', 'Research'),
(6, 'Literature Studies', 'Humanities', 'Undergraduate'),
(7, 'Modern Physics', 'Physics', 'Postgraduate'),
(8, 'Robotics Fundamentals', 'Engineering', 'Undergraduate'),
(9, 'Sociology 101', 'Social Sciences', 'Undergraduate'),
(10, 'Advanced AI', 'Computer Science', 'Research'),
(11, 'Organic Chemistry', 'Chemistry', 'Postgraduate'),
(12, 'Philosophy and Ethics', 'Philosophy', 'Undergraduate'),
(13, 'Database Management', 'Computer Science', 'Undergraduate'),
(14, 'Advanced Data Structures', 'Computer Science', 'Postgraduate'),
(15, 'Thermodynamics', 'Mechanical Engineering', 'Undergraduate'),
(16, 'Cybersecurity Basics', 'Information Technology', 'Postgraduate'),
(17, 'Biochemistry', 'Life Sciences', 'Undergraduate'),
(18, 'History of Renaissance', 'History', 'Undergraduate'),
(19, 'Environmental Engineering', 'Civil Engineering', 'Postgraduate'),
(20, 'Neural Networks', 'Computer Science', 'Research');

