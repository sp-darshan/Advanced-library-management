import React from "react";

const Home = () => {
  // Sample user statistics and content
  const userStats = {
    totalBooks: 124,
    favoriteGenres: ["Science Fiction", "Mystery", "Fantasy"],
    borrowedBooks: 10,
    overdueBooks: 2,
    wishlistCount: 15,
    recentBooks: ["Dune", "The Silent Patient", "The Hobbit"],
    readingProgress: 60, // Percentage
    recommendations: ["1984", "To Kill a Mockingbird", "Brave New World"],
  };

  return (
    <div style={styles.container}>
      <main style={styles.main}>
        {/* Cards for statistics */}
        <div style={styles.card}>
          <h3>Total Books Bought</h3>
          <p style={styles.number}>{userStats.totalBooks}</p>
        </div>
        <div style={styles.card}>
          <h3>Favorite Genres</h3>
          <ul style={styles.list}>
            {userStats.favoriteGenres.map((genre, index) => (
              <li key={index} style={styles.listItem}>
                {genre}
              </li>
            ))}
          </ul>
        </div>
        <div style={styles.card}>
          <h3>Borrowed Books</h3>
          <p style={styles.number}>{userStats.borrowedBooks}</p>
        </div>
        <div style={styles.card}>
          <h3>Overdue Books</h3>
          <p style={{ ...styles.number, color: "red" }}>{userStats.overdueBooks}</p>
        </div>
        <div style={styles.card}>
          <h3>Books in Wishlist</h3>
          <p style={styles.number}>{userStats.wishlistCount}</p>
        </div>

        {/* Recently Added Books */}
        <div style={styles.card}>
          <h3>Recently Added Books</h3>
          <ul style={styles.list}>
            {userStats.recentBooks.map((book, index) => (
              <li key={index} style={styles.listItem}>
                {book}
              </li>
            ))}
          </ul>
        </div>

        {/* Reading Progress */}
        <div style={styles.card}>
          <h3>Reading Progress</h3>
          <div style={styles.progressBarContainer}>
            <div
              style={{
                ...styles.progressBar,
                width: `${userStats.readingProgress}%`,
              }}
            ></div>
          </div>
          <p>{userStats.readingProgress}% Completed</p>
        </div>

        {/* Book Recommendations */}
        <div style={styles.card}>
          <h3>Recommended for You</h3>
          <ul style={styles.list}>
            {userStats.recommendations.map((book, index) => (
              <li key={index} style={styles.listItem}>
                {book}
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

// Enhanced CSS-in-JS styles
const styles = {
  container: {
    fontFamily: "'Roboto', Arial, sans-serif",
    backgroundColor: "#f4f6f9",
    color: "#2c3e50",
    minHeight: "100vh",
    padding: "20px",
  },
  header: {
    textAlign: "center",
    backgroundColor: "#34495e",
    color: "white",
    padding: "20px 0",
    borderRadius: "10px",
    marginBottom: "30px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
  },
  main: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
  },
  card: {
    backgroundColor: "white",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    textAlign: "center",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  },
  cardHover: {
    transform: "scale(1.05)",
    boxShadow: "0 6px 15px rgba(0, 0, 0, 0.2)",
  },
  number: {
    fontSize: "2rem",
    fontWeight: "bold",
    margin: "10px 0",
  },
  list: {
    listStyleType: "none",
    padding: 0,
    margin: 0,
  },
  listItem: {
    margin: "5px 0",
    fontSize: "16px",
    color: "#34495e",
  },
  progressBarContainer: {
    width: "100%",
    height: "10px",
    backgroundColor: "#ecf0f1",
    borderRadius: "5px",
    overflow: "hidden",
    margin: "10px 0",
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#1abc9c",
    transition: "width 0.3s ease",
  },
};

export default Home;
