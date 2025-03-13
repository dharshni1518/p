import { Link } from "react-router-dom";
import BookCard from "./components/BookCard"; // Ensure the correct path
import booksData from "./booksData"; // Assuming you have booksData.js
import "./Home.css"; // Import CSS for styling

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Library Books</h1>
      <Link to="/add-book">
        <button className="add-book-button">Add Book</button>
      </Link>
      <div className="book-list">
        {booksData.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Home;