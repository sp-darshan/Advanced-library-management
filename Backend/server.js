import express from "express";
import mysql from "mysql2";
import dotenv from "dotenv";
import cors from "cors"; // Import CORS

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json()); // for parsing application/json

// Enable CORS for all domains (for development purposes)
app.use(cors()); // Add this line to allow cross-origin requests

// MySQL Database connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "vasanth123+++",
  database: "lib",
});

db.connect((err) => {
  if (err) {
    console.error("Could not connect to the database:", err);
  } else {
    console.log("Connected to the MySQL database.");
  }
});

// Register route
app.post("/api/register", async (req, res) => {
  console.log("Received data:", req.body); // Log the incoming data

  const { first_name, last_name, address, phone_number, email, password, membership_date, member_type, department, student_id_number } = req.body;

  // Check if email already exists
  db.query("SELECT * FROM Members WHERE email = ?", [email], async (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Database error" });
    }

    if (results.length > 0) {
      return res.status(400).json({ error: "Email already exists" });
    }

    // Hash password
    const hashedPassword = password;

    // Insert new user into the database
    const sql = `INSERT INTO members (first_name, last_name, address, phone_number, email, password, membership_date, member_type, department, student_id_number) 
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    db.query(
      sql,
      [first_name, last_name, address, phone_number, email, hashedPassword, membership_date, member_type, department, student_id_number],
      (err, result) => {
        if (err) {
          console.error("Database insertion error:", err); // Log any error
          return res.status(500).json({ error: "Database error" });
        }
        res.status(201).json({ message: "User registered successfully" });
      }
    );
  });
});
// Login route
// Login route (without bcrypt)
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  // Find the user in the database
  db.query("SELECT * FROM Members WHERE email = ?", [email], (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Database error" });
    }

    if (results.length === 0) {
      return res.status(400).json({ error: "Email not found" });
    }

    const user = results[0];

    // Check if password matches directly (no hashing required)
    if (user.password !== password) {
      return res.status(400).json({ error: "Incorrect password" });
    }
    res.json({
      user: {
        firstName: user.first_name,
        lastName: user.last_name,
        email: user.email,
        profilePicture: user.profile_picture || "/default-avatar.png",  // Optional: default picture
      },
    });
    // Login successful, no JWT, just success message
  });
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
